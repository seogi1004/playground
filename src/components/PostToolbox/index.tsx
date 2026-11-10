import React, { type JSX } from 'react';
import Link from '@docusaurus/Link';
import {
    FREE_FORECAST_URL,
    MAP_INDEX_URL,
    PRESALE_INDEX_URL,
    REGION_INDEX_URL,
    calculators,
    guideGroups,
    type Guide,
} from '@site/src/data/realEstate';
import styles from './styles.module.css';

type Props = {
    permalink: string;
    tagKeys: string[];
};

type Tool = {
    title: string;
    description: string;
    href: string;
    external?: boolean;
};

const REAL_ESTATE_TAGS = new Set(['real-estate', 'apartments', 'real-estate-data', 'finance', '3d-map', 'presale']);

const mapTool: Tool = {
    title: '공개 3D 지도 목록',
    description: '공유된 지도로 동 배치와 주변 건물·생활시설을 살펴봅니다.',
    href: MAP_INDEX_URL,
    external: true,
};

const presaleTool: Tool = {
    title: '분양 아파트와 청약 일정',
    description: '공개된 분양 단지와 청약 달력에서 관심 공고를 확인합니다.',
    href: PRESALE_INDEX_URL,
    external: true,
};

const regionTool: Tool = {
    title: '지역별 아파트 실거래가',
    description: '시군구와 단지를 골라 최근 거래와 대표 시세를 확인합니다.',
    href: REGION_INDEX_URL,
    external: true,
};

const forecastTool: Tool = {
    title: '1년 뒤 예상 가격 범위',
    description: '가입 없이 단지를 검색해 대표 시세와 예상 범위를 봅니다.',
    href: FREE_FORECAST_URL,
    external: true,
};

function pickTools(permalink: string, tagKeys: string[]): Tool[] {
    const otherCalculators: Tool[] = calculators
        .filter((calculator) => calculator.href !== permalink)
        .map((calculator) => ({ title: calculator.title, description: calculator.summary, href: calculator.href }));
    const isFinanceOnly = tagKeys.includes('finance') && !tagKeys.includes('apartments');
    let candidates: (Tool | undefined)[];

    if (tagKeys.includes('presale')) {
        candidates = tagKeys.includes('finance')
            ? [
                presaleTool,
                otherCalculators.find((calculator) => calculator.href === '/blog/mortgage-rate-apartment-price'),
                otherCalculators.find((calculator) => calculator.href === '/blog/apartment-transaction-cost-calculator'),
            ]
            : [
                presaleTool,
                mapTool,
                guideGroups.flatMap((group) => group.guides)
                    .find((guide) => guide.href === '/blog/apartment-presale-payment-plan'),
            ];
    } else if (tagKeys.includes('3d-map')) {
        candidates = [mapTool, regionTool, forecastTool];
    } else {
        // 기존 세금·대출 글과 시세·전망 글의 도구 순서는 유지한다.
        candidates = isFinanceOnly
            ? [otherCalculators[0], otherCalculators[1], regionTool]
            : [regionTool, forecastTool, otherCalculators[0]];
    }

    const seen = new Set<string>([permalink]);
    return candidates.filter((tool): tool is Tool => {
        if (!tool || seen.has(tool.href)) return false;
        seen.add(tool.href);
        return true;
    });
}

function pickRelated(permalink: string): Guide[] {
    const group = guideGroups.find((candidate) => candidate.guides.some((guide) => guide.href === permalink));
    const pool = group
        ? [...group.guides, ...guideGroups.flatMap((candidate) => candidate.guides)]
        : guideGroups.flatMap((candidate) => candidate.guides);
    const seen = new Set<string>([permalink]);
    return pool.filter((guide) => !seen.has(guide.href) && seen.add(guide.href)).slice(0, 3);
}

export default function PostToolbox({ permalink, tagKeys }: Props): JSX.Element | null {
    if (!tagKeys.some((tag) => REAL_ESTATE_TAGS.has(tag))) return null;
    const tools = pickTools(permalink, tagKeys);
    const related = pickRelated(permalink);

    return (
        <section className={styles.box} aria-label="함께 보면 좋은 자료">
            <div className={styles.column}>
                <p className={styles.label}>직접 확인해 보기</p>
                <ul className={styles.tools}>
                    {tools.map((tool) => (
                        <li key={tool.href}>
                            {tool.external ? (
                                <a
                                    href={tool.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`${tool.title} (새 창): ${tool.description}`}
                                >
                                    <strong>
                                        {tool.title} <span aria-hidden="true">↗</span>
                                    </strong>
                                    <span>{tool.description}</span>
                                </a>
                            ) : (
                                <Link to={tool.href}>
                                    <strong>
                                        {tool.title} <span aria-hidden="true">→</span>
                                    </strong>
                                    <span>{tool.description}</span>
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.column}>
                <p className={styles.label}>이어서 읽기</p>
                <ul className={styles.related}>
                    {related.map((guide) => (
                        <li key={guide.href}>
                            <Link to={guide.href}>{guide.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
