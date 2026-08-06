import fs from 'node:fs';
import path from 'node:path';

const projectRoot = path.resolve(import.meta.dirname, '..');
const buildRoot = path.join(projectRoot, 'build');
const siteUrl = 'https://alvin.ing';

const read = (filePath) => fs.readFileSync(filePath, 'utf8');
const write = (filePath, content) => {
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, content);
};

function collectHtml(directory) {
    if (!fs.existsSync(directory)) return [];
    const files = [];
    const visit = (currentDirectory) => {
        for (const entry of fs.readdirSync(currentDirectory, { withFileTypes: true })) {
            const currentPath = path.join(currentDirectory, entry.name);
            if (entry.isDirectory()) visit(currentPath);
            if (entry.isFile() && entry.name.endsWith('.html')) files.push(currentPath);
        }
    };
    visit(directory);
    return files.sort();
}

function getAttribute(tag, name) {
    return tag.match(new RegExp(`\\b${name}\\s*=\\s*["']([^"']+)["']`, 'i'))?.[1] ?? '';
}

function getMeta(html, key) {
    for (const match of html.matchAll(/<meta\b[^>]*>/gi)) {
        const tag = match[0];
        if (getAttribute(tag, 'name').toLowerCase() === key.toLowerCase()) {
            return getAttribute(tag, 'content');
        }
        if (getAttribute(tag, 'property').toLowerCase() === key.toLowerCase()) {
            return getAttribute(tag, 'content');
        }
    }
    return '';
}

function getCanonical(html) {
    for (const match of html.matchAll(/<link\b[^>]*>/gi)) {
        const tag = match[0];
        if (getAttribute(tag, 'rel').toLowerCase() === 'canonical') {
            return getAttribute(tag, 'href');
        }
    }
    return '';
}

function decodeHtml(value) {
    return value
        .replaceAll('&amp;', '&')
        .replaceAll('&quot;', '"')
        .replaceAll('&#39;', "'")
        .replaceAll('&#x27;', "'")
        .replaceAll('&lt;', '<')
        .replaceAll('&gt;', '>')
        .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCodePoint(parseInt(code, 16)))
        .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)));
}

function isIndexableRecord(record) {
    if (!record.canonical.startsWith(siteUrl)) return false;
    const pathname = new URL(record.canonical).pathname;
    return !/\bnoindex\b/i.test(getMeta(record.html, 'robots'))
        && !pathname.startsWith('/blog/tags')
        && !pathname.startsWith('/blog/archive')
        && !pathname.startsWith('/blog/authors')
        && !pathname.startsWith('/blog/page')
        && pathname !== '/404';
}

const records = collectHtml(buildRoot)
    .map((filePath) => {
        const html = read(filePath);
        const title = html.match(/<title[^>]*>([^<]+)<\/title>/i)?.[1] ?? '';
        const canonical = getCanonical(html);
        return {
            filePath,
            html,
            title: decodeHtml(title),
            description: decodeHtml(getMeta(html, 'description')),
            canonical,
            pathname: canonical ? new URL(canonical).pathname : '',
        };
    })
    .filter(isIndexableRecord)
    .sort((left, right) => left.pathname.localeCompare(right.pathname));

const lines = [
    '# 부동산·아파트 데이터와 기술 아카이브',
    '',
    '> 이 파일은 Docusaurus 빌드가 끝난 뒤 공개 HTML의 canonical·title·description을 읽어 자동 생성합니다.',
    '> 부동산·아파트 통계, 데이터 시각화, 웹 성능과 개발 기록을 탐색할 때 사용하세요.',
    '',
    '## Feeds and discovery',
    '',
    `- Sitemap: ${siteUrl}/sitemap.xml`,
    `- RSS: ${siteUrl}/blog/rss.xml`,
    `- Atom: ${siteUrl}/blog/atom.xml`,
    `- JSON Feed: ${siteUrl}/blog/feed.json`,
    '',
    '## Public pages',
    '',
    ...records.map((record) => `- [${record.title || record.pathname}](${record.canonical})${record.description ? ` — ${record.description}` : ''}`),
    '',
];
write(path.join(buildRoot, 'llms.txt'), lines.join('\n'));

const fullLines = [
    '# 공개 페이지 카탈로그',
    '',
    '> Cloudflare Pages 또는 GitHub Pages 배포 빌드에서 자동 생성되는 공개 페이지 목록입니다.',
    '> 글의 상세 본문은 각 canonical URL에서 확인하며, 비공개 운영 정보는 포함하지 않습니다.',
    '',
    ...records.flatMap((record) => [
        `## ${record.title || record.pathname}`,
        `- URL: ${record.canonical}`,
        record.description ? `- 요약: ${record.description}` : '',
        '',
    ]),
];
write(path.join(buildRoot, 'llms-full.txt'), fullLines.join('\n'));

console.log(`Public SEO assets generated: ${records.length} pages, llms.txt, llms-full.txt`);
