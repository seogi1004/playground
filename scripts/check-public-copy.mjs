import fs from 'node:fs';
import path from 'node:path';

const projectRoot = path.resolve(import.meta.dirname, '..');
const roots = [path.join(projectRoot, 'blog'), path.join(projectRoot, 'static', 'llms.txt')];
const forbidden = [
    { label: 'apartment tier', pattern: /아파트[^\n]{0,80}티어|티어[^\n]{0,80}아파트/gi },
    { label: 'apartment band', pattern: /아파트[^\n]{0,80}밴드|밴드[^\n]{0,80}아파트/gi },
    { label: 'apartment cells', pattern: /아파트[^\n]{0,80}(?:12\s*셀|셀별)|(?:12\s*셀|셀별)[^\n]{0,80}아파트/gi },
    { label: 'internal model marker', pattern: /activeInternalVersion|\bT[1-4]\b|\bVECM\b|\bOOS\b/gi },
];

function collectFiles(entry) {
    if (!fs.existsSync(entry)) return [];
    const stat = fs.statSync(entry);
    if (stat.isFile()) return [entry];
    return fs.readdirSync(entry).flatMap((child) => collectFiles(path.join(entry, child)));
}

const files = roots.flatMap(collectFiles).filter((file) => /\.(md|mdx|txt)$/.test(file));
const violations = [];
for (const file of files) {
    const text = fs.readFileSync(file, 'utf8');
    for (const entry of forbidden) {
        const re = new RegExp(entry.pattern.source, entry.pattern.flags);
        let match;
        while ((match = re.exec(text)) !== null) {
            const line = text.slice(0, match.index).split('\n').length;
            violations.push(`${path.relative(projectRoot, file)}:${line} ${entry.label}`);
        }
    }
}

if (violations.length > 0) {
    console.error('PUBLIC COPY CHECK FAIL');
    violations.forEach((violation) => console.error(`- ${violation}`));
    process.exit(1);
}

console.log(`PUBLIC COPY CHECK PASS: ${files.length} source files scanned.`);
