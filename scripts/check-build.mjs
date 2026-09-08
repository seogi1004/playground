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

const forecastArticleSlugs = [
    'apartment-price-forecast-without-signup',
    'apartment-forecast-periods',
    'apartment-forecast-range-reading',
    'apartment-single-trade-limit',
    'apartment-forecast-metadata',
    'apartment-insights-start-guide',
    'apartment-analysis-share-url',
];
const homepage = fs.existsSync(path.join(buildRoot, 'index.html')) ? read('index.html') : '';
for (const slug of forecastArticleSlugs) {
    if (!homepage.includes(`href="/blog/${slug}"`)) {
        fail(`homepage is missing apartment forecast hub link: ${slug}`);
    }
}
if (!homepage.includes('https://apt-insights.com/#free-forecast-experience')) {
    fail('homepage is missing public apartment forecast link');
}

const statisticsPillar = fs.readFileSync(
    path.join(projectRoot, 'blog', '2026-08-06-real-estate-apartment-statistics', 'index.md'),
    'utf8',
);
for (const slug of forecastArticleSlugs) {
    if (!statisticsPillar.includes(`/blog/${slug}`)) {
        fail(`statistics pillar is missing forecast article link: ${slug}`);
    }
}
if (!statisticsPillar.includes('https://apt-insights.com/#free-forecast-experience')) {
    fail('statistics pillar is missing public apartment forecast link');
}

const paginatedBlogPage = fs.existsSync(path.join(buildRoot, 'blog', 'page', '2', 'index.html'))
    ? read('blog/page/2/index.html')
    : '';
if (!paginatedBlogPage) {
    fail('second blog list page is missing');
} else {
    if (!/name="robots" content="noindex, follow"/i.test(paginatedBlogPage)) {
        fail('second blog list page must be noindex, follow');
    }
    if (!/<title[^>]*>[^<]*페이지 2[^<]*<\/title>/i.test(paginatedBlogPage)) {
        fail('second blog list page title must identify page 2');
    }
    if (!/name="description" content="[^"]*페이지 2/i.test(paginatedBlogPage)) {
        fail('second blog list page description must identify page 2');
    }
    if (!/name="twitter:title" content="[^"]*페이지 2/i.test(paginatedBlogPage)) {
        fail('second blog list page must expose a page-specific Twitter title');
    }
    if (!/name="twitter:description" content="[^"]*페이지 2/i.test(paginatedBlogPage)) {
        fail('second blog list page must expose a page-specific Twitter description');
    }
}

for (const relativePath of [
    'blog/tags/index.html',
    'blog/tags/real-estate/index.html',
    'blog/archive/index.html',
    'blog/authors/index.html',
]) {
    const absolutePath = path.join(buildRoot, relativePath);
    if (!fs.existsSync(absolutePath)) continue;
    const html = fs.readFileSync(absolutePath, 'utf8');
    if (!/name="robots" content="noindex, follow"/i.test(html)) {
        fail(`${relativePath}: thin discovery route must be noindex, follow`);
    }
}

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
    if (!/<meta[^>]+name="twitter:title"[^>]+content="[^"]+"/i.test(html)) {
        fail(`${relativePath}: Twitter title is missing`);
    }
    if (!/<meta[^>]+name="twitter:description"[^>]+content="[^"]+"/i.test(html)) {
        fail(`${relativePath}: Twitter description is missing`);
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
