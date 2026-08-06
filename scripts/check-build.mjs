import fs from 'node:fs';
import path from 'node:path';

const projectRoot = path.resolve(import.meta.dirname, '..');
const buildRoot = path.join(projectRoot, 'build');
const failures = [];
const fail = (message) => failures.push(message);
const read = (relativePath) => fs.readFileSync(path.join(buildRoot, relativePath), 'utf8');

for (const relativePath of [
    'sitemap.xml',
    'robots.txt',
    'llms.txt',
    'llms-full.txt',
    'blog/rss.xml',
    'blog/atom.xml',
    'blog/feed.json',
]) {
    if (!fs.existsSync(path.join(buildRoot, relativePath))) fail(`missing build asset: ${relativePath}`);
}

const sitemap = fs.existsSync(path.join(buildRoot, 'sitemap.xml')) ? read('sitemap.xml') : '';
const sitemapUrls = new Set([...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(([, url]) => url));
if (!sitemapUrls.has('https://alvin.ing/')) fail('homepage is missing from sitemap.xml');
if (!sitemapUrls.has('https://alvin.ing/blog')) fail('blog index is missing from sitemap.xml');
for (const url of sitemapUrls) {
    if (/\/blog\/(?:tags|archive|authors)(?:\/|$)/.test(url)) {
        fail(`thin blog route is present in sitemap.xml: ${url}`);
    }
}

const blogPostFiles = [];
const visit = (directory) => {
    if (!fs.existsSync(directory)) return;
    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
        const currentPath = path.join(directory, entry.name);
        if (entry.isDirectory()) visit(currentPath);
        if (entry.isFile() && entry.name === 'index.html') blogPostFiles.push(currentPath);
    }
};
visit(path.join(buildRoot, 'blog'));

for (const filePath of blogPostFiles) {
    const relativePath = path.relative(buildRoot, filePath);
    if (/^blog\/(?:index|archive|authors|page(?:\/|$)|tags(?:\/|$))/.test(relativePath)) continue;
    const html = fs.readFileSync(filePath, 'utf8');
    const canonical = html.match(/<link[^>]+rel="canonical"[^>]+href="([^"]+)"/i)?.[1] ?? '';
    if (!canonical) fail(`${relativePath}: canonical is missing`);
    if (!/<title[^>]*>[^<]+<\/title>/i.test(html)) fail(`${relativePath}: title is missing`);
    if (!/<meta[^>]+name="description"[^>]+content="[^"]+"/i.test(html)) {
        fail(`${relativePath}: description is missing`);
    }
    const jsonLd = [...html.matchAll(/<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)];
    if (jsonLd.length === 0) {
        fail(`${relativePath}: structured data is missing`);
    } else {
        try {
            const schemas = jsonLd.map(([, raw]) => JSON.parse(raw));
            if (!schemas.some((schema) => schema['@type'] === 'BlogPosting')) {
                fail(`${relativePath}: BlogPosting structured data is missing`);
            }
        } catch {
            fail(`${relativePath}: structured data is invalid JSON`);
        }
    }
    if (canonical && !sitemapUrls.has(canonical)) fail(`${relativePath}: canonical is missing from sitemap.xml`);
}

const llms = fs.existsSync(path.join(buildRoot, 'llms.txt')) ? read('llms.txt') : '';
if (!llms.includes('자동 생성')) fail('llms.txt: generated marker is missing');
if (!llms.includes('https://alvin.ing/blog/rss.xml')) fail('llms.txt: RSS link is missing');
if (!llms.includes('https://alvin.ing/sitemap.xml')) fail('llms.txt: sitemap link is missing');

if (failures.length > 0) {
    console.error(failures.map((message) => `SEO CHECK FAIL: ${message}`).join('\n'));
    process.exit(1);
}

console.log(`SEO CHECK PASS: ${sitemapUrls.size} sitemap URLs, feeds, llms, and BlogPosting JSON-LD verified.`);
