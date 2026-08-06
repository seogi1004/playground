import fs from 'node:fs';
import path from 'node:path';

const projectRoot = path.resolve(import.meta.dirname, '..');
const buildRoot = path.join(projectRoot, 'build');
const siteUrl = 'https://alvin.ing';
const defaultSiteKeywords =
    '부동산, 아파트, 아파트 통계, 아파트 실거래가, 부동산 데이터, 아파트 시세, 아파트 가격 전망, 교통 호재, 주택담보대출, 보유세 계산기, 전세, 금리, 공급, 세금, 데이터 시각화, 웹 성능, React, D3.js, Docusaurus';

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
        && pathname !== '/404'
        && pathname !== '/404.html';
}

const records = collectHtml(buildRoot)
    .map((filePath) => {
        const html = read(filePath);
        const title = html.match(/<title[^>]*>([^<]+)<\/title>/i)?.[1] ?? '';
        const canonical = getCanonical(html);
        const keywords = decodeHtml(getMeta(html, 'keywords'));
        return {
            filePath,
            html,
            title: decodeHtml(title),
            description: decodeHtml(getMeta(html, 'description')),
            keywords: keywords === defaultSiteKeywords ? '' : keywords,
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
    '## 주제별 입구',
    `- 부동산·아파트 통계 입문: ${siteUrl}/blog/real-estate-apartment-statistics-reading-order`,
    `- 8.3 부동산 세제개편안 계산기: ${siteUrl}/blog/83-real-estate-tax-reform-calculator`,
    `- 아파트 가격의 현재·과거·미래 구분: ${siteUrl}/blog/apartment-price-current-history-forecast`,
    `- 아파트 가격 전망을 범위로 읽기: ${siteUrl}/blog/apartment-price-range-not-single-number`,
    `- 주택담보대출 금리와 아파트 가격: ${siteUrl}/blog/mortgage-rate-apartment-price`,
    `- 교통 호재의 사업 단계 읽기: ${siteUrl}/blog/transport-benefit-stages-apartment-price`,
    '',
    '## Public pages',
    '',
    ...records.map((record) => {
        const details = [record.description, record.keywords ? `키워드: ${record.keywords}` : '']
            .filter(Boolean)
            .join(' · ');
        return `- [${record.title || record.pathname}](${record.canonical})${details ? ` — ${details}` : ''}`;
    }),
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
        record.keywords ? `- 키워드: ${record.keywords}` : '',
        '',
    ]),
];
write(path.join(buildRoot, 'llms-full.txt'), fullLines.join('\n'));

console.log(`Public SEO assets generated: ${records.length} pages, llms.txt, llms-full.txt`);
