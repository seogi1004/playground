import React, { type JSX, useState } from 'react';
import clsx from 'clsx';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import {
    FREE_FORECAST_URL,
    MCP_ENDPOINT,
    MCP_GUIDE_URL,
    MCP_TOOL_COUNT,
    REGION_INDEX_URL,
    calculators,
    featuredGuideGroups,
    guideGroups,
    regionGroups,
    regionUrl,
} from '@site/src/data/realEstate';
import styles from './index.module.css';

const siteDescription =
    '아파트 실거래가부터 분양 일정·모집공고·자금계획, 3D 지도와 도보 생활권·일조까지 살펴보는 데이터 아카이브입니다. Claude·ChatGPT에 MCP로 연결해 단지 이름만으로 묻는 방법과 세금·대출 계산기도 함께 확인하세요.';

// 분양·3D 지도·AI 연동은 홈에서 전용 섹션으로 소개하므로 질문 카드에서는 뺀다.
const otherGuideGroups = guideGroups.filter(
    (group) => group.id !== 'ai' && !featuredGuideGroups.some((featured) => featured.id === group.id),
);

const MCP_GUIDE_POST = '/blog/apartment-ai-assistant-mcp-guide';
const MCP_DESIGN_POST = '/blog/public-mcp-server-design';

const mcpClients = [
    { name: 'ChatGPT', how: '공식 앱을 추가합니다.' },
    { name: 'Claude', how: '설정 → 커넥터 → 사용자 지정 커넥터에 주소를 넣습니다.' },
    { name: 'Claude Code', how: 'claude mcp add 한 줄로 추가합니다.' },
];

const mcpQuestions = [
    '이 단지 84㎡ 최근 매매 10건 보여줘',
    '이번 달 청약 접수하는 민간 분양 찾아줘',
    '주담대 금리가 4.5%라면 1년 뒤 전망은?',
];

const engineeringNotes = [
    { title: '로그인 없는 공개 MCP 서버를 만들며 정한 7가지 경계', href: MCP_DESIGN_POST, isNew: true },
    { title: '데이터 시각화를 위한 D3 스케일', href: '/blog/d3-scale' },
    { title: 'D3 Hierarchy로 데이터 다루기', href: '/blog/d3-hierarchy' },
    { title: 'OffscreenCanvas API 살펴보기', href: '/blog/offscreen-canvas-api' },
];

const forecastChecks = [
    {
        step: '01',
        title: '기준이 되는 거래부터',
        description: '최근 거래 한 건이 아니라 같은 평형의 대표 시세를 기준으로 삼습니다.',
        href: '/blog/apartment-single-trade-limit',
    },
    {
        step: '02',
        title: '한 숫자 대신 범위로',
        description: '예상 범위의 아래·가운데·위 값과 폭을 함께 읽습니다.',
        href: '/blog/apartment-forecast-range-reading',
    },
    {
        step: '03',
        title: '언제 계산했는지 기록',
        description: '기준일과 시장 정보, 표본 신뢰도를 함께 적어 둡니다.',
        href: '/blog/apartment-forecast-metadata',
    },
];

// 고정 편집 큐: 실제 발행한 글만 노출합니다. 새 글을 게시할 때 링크와 날짜를 갱신합니다.
const latestArticles = [
    {
        href: '/blog/apartment-price-forecast-2026-model-validation',
        category: '모델 검증',
        date: '2026-10-13',
        title: '2026 아파트 가격 예측, 실제로 얼마나 맞았을까?',
        description: 'AMFM 검증 결과를 시계열 평가, 가격 오차율, 하락장 재현으로 나눠 읽습니다. 개선과 한계를 함께 확인하세요.',
        action: '백테스트 결과 읽기',
    },
    {
        href: '/blog/apartment-price-forecast-interval-coverage-2026',
        category: '예상 범위',
        date: '2026-10-13',
        title: '예상 가격 범위, 실제 거래를 얼마나 담았을까?',
        description: 'P25·P75가 뜻하는 바와 예측 범위 보정 전후의 실측 포함률을 확인합니다.',
        action: '예측 범위 이해하기',
    },
    {
        href: '/blog/apartment-transaction-trend-by-floor-and-size',
        category: '실거래가 분석',
        date: '2026-10-13',
        title: '같은 평형인데, 층수에 따라 가격이 다른 이유',
        description: '거래금액만 이어 붙이지 않고 층수·면적·거래량을 맞춰 추이를 읽는 방법입니다.',
        action: '실거래가 추이 읽기',
    },
] as const;

const homeStructuredData = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'WebSite',
            '@id': 'https://alvin.ing/#website',
            url: 'https://alvin.ing/',
            name: 'alvin.ing',
            alternateName: ["Alvin's Lab", 'Alvins Lab', '알빈의 랩'],
            description: siteDescription,
            inLanguage: 'ko-KR',
            publisher: {
                '@id': 'https://alvin.ing/#organization',
            },
        },
        {
            '@type': 'Organization',
            '@id': 'https://alvin.ing/#organization',
            name: 'alvin.ing',
            url: 'https://alvin.ing/',
            logo: {
                '@type': 'ImageObject',
                url: 'https://alvin.ing/img/alvins-lab-terminal.svg',
            },
            sameAs: ['https://github.com/seogi1004', 'https://apt-insights.com'],
        },
        {
            '@type': 'ItemList',
            name: '분양 아파트와 3D 지도 가이드',
            itemListElement: featuredGuideGroups.flatMap((group) => group.guides).map((guide, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                name: guide.title,
                url: `https://alvin.ing${guide.href}`,
            })),
        },
        {
            '@type': 'ItemList',
            name: 'AI 어시스턴트 연동(MCP) 가이드',
            itemListElement: [
                { title: 'Claude·ChatGPT에 물어보는 아파트 실거래가와 분양 일정: MCP 연결법', href: MCP_GUIDE_POST },
                { title: '로그인 없는 공개 MCP 서버를 만들며 정한 7가지 경계', href: MCP_DESIGN_POST },
            ].map((item, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                name: item.title,
                url: `https://alvin.ing${item.href}`,
            })),
        },
        {
            '@type': 'ItemList',
            name: '부동산 계산기',
            itemListElement: calculators.map((calculator, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                name: calculator.title,
                url: `https://alvin.ing${calculator.href}`,
            })),
        },
        {
            '@type': 'ItemList',
            name: '최근 아파트 데이터 분석',
            itemListElement: latestArticles.map((article, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                name: article.title,
                url: `https://alvin.ing${article.href}`,
            })),
        },
    ],
};

function RangeIllustration(): JSX.Element {
    return (
        <figure className={styles.rangeCard} aria-label="예상 범위를 읽는 방법을 보여주는 예시 그림">
            <div className={styles.rangeHead}>
                <span>예시 · 전용 84㎡</span>
                <span className={styles.rangeTag}>1년 뒤</span>
            </div>
            <div className={styles.rangeRow}>
                <div>
                    <small>최근 대표 시세</small>
                    <strong>10억</strong>
                </div>
                <div>
                    <small>가운데 값</small>
                    <strong className={styles.rangeAccent}>10억 4,000만</strong>
                </div>
            </div>
            <div className={styles.rangeTrack} aria-hidden="true">
                <span className={styles.rangeBand} />
                <span className={styles.rangeNow} />
                <span className={styles.rangeMid} />
            </div>
            <div className={styles.rangeScale} aria-hidden="true">
                <span>아래 9억 5,000만</span>
                <span>위 11억 2,000만</span>
            </div>
            <figcaption>이해를 돕기 위한 가상 수치입니다. 실제 단지 결과가 아닙니다.</figcaption>
        </figure>
    );
}

function RegionFinder(): JSX.Element {
    const [active, setActive] = useState(0);
    return (
        <aside className={styles.finder} aria-labelledby="region-finder-title">
            <div className={styles.finderHead}>
                <p className={styles.kicker}>실거래가 바로 보기</p>
                <h2 id="region-finder-title">우리 동네 아파트, 최근 얼마에 거래됐을까?</h2>
            </div>
            <div className={styles.segment} role="group" aria-label="지역 선택">
                {regionGroups.map((group, index) => (
                    <button
                        key={group.sido}
                        type="button"
                        aria-pressed={active === index}
                        aria-controls={`region-list-${index}`}
                        className={clsx(styles.segmentButton, active === index && styles.segmentActive)}
                        onClick={() => setActive(index)}
                    >
                        {group.sido}
                    </button>
                ))}
            </div>
            {regionGroups.map((group, index) => (
                <ul
                    key={group.sido}
                    id={`region-list-${index}`}
                    className={styles.regionGrid}
                    aria-label={`${group.sido} 실거래가 조회 지역`}
                    hidden={active !== index}
                >
                    {group.regions.map((region) => (
                        <li key={region.lawdCd}>
                            <a href={regionUrl(region.lawdCd)} target="_blank" rel="noopener">
                                {region.label}
                            </a>
                        </li>
                    ))}
                </ul>
            ))}
            <a className={styles.finderMore} href={REGION_INDEX_URL} target="_blank" rel="noopener">
                전체 지역에서 찾기 <span aria-hidden="true">→</span>
            </a>
            <p className={styles.finderNote}>
                국토교통부 실거래가 공개자료를 단지·평형별로 정리한 아파트 인사이트 페이지로 연결됩니다.
            </p>
        </aside>
    );
}

function ApartmentTopics(): JSX.Element {
    return (
        <section
            className={clsx(styles.section, styles.topicsSection)}
            id="apartment-explore"
            aria-labelledby="apartment-explore-title"
        >
            <div className="container">
                <header className={styles.sectionHead}>
                    <div>
                        <p className={styles.kicker}>분양과 생활환경</p>
                        <h2 id="apartment-explore-title">가격 다음으로, 무엇을 살펴볼까요?</h2>
                        <p className={styles.latestIntro}>
                            분양 아파트와 3D 지도 목록을 열어 보고, 주제별 가이드로 확인할 기준을 정리해 보세요.
                        </p>
                    </div>
                </header>
                <div className={styles.topicsGrid}>
                    {featuredGuideGroups.map((group) => (
                        <article
                            key={group.id}
                            id={`${group.id}-guides`}
                            className={styles.topicCard}
                            data-topic={group.id}
                            aria-labelledby={`${group.id}-title`}
                        >
                            <div className={styles.topicHead}>
                                <div className={styles.topicLabel}>
                                    <svg
                                        width="28"
                                        height="28"
                                        viewBox="0 0 32 32"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.7"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        aria-hidden="true"
                                        focusable="false"
                                    >
                                        {group.id === 'presale' ? (
                                            <>
                                                <path d="M5 28h22M8 28V5h16v23M13 28v-6h6v6M12 10h2m4 0h2M12 15h2m4 0h2" />
                                                <path d="M5 8V4a2 2 0 0 1 2-2h4" />
                                            </>
                                        ) : (
                                            <>
                                                <path d="m16 3 12 7v12l-12 7-12-7V10l12-7Zm0 14v12M4 10l12 7 12-7M10 6.5l12 7v5" />
                                                <path d="m4 16 6 3.5M22 25.5V22" />
                                            </>
                                        )}
                                    </svg>
                                    <span>{group.label}</span>
                                </div>
                                <h3 id={`${group.id}-title`}>{group.question}</h3>
                                <p className={styles.topicIntro}>{group.intro}</p>
                                <a
                                    className={styles.topicBrowse}
                                    href={group.browseUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`${group.browseLabel} (새 창)`}
                                >
                                    {group.browseLabel} <span aria-hidden="true">↗</span>
                                </a>
                            </div>
                            <div className={styles.topicGuides}>
                                <p className={styles.topicGuideLabel}>
                                    먼저 읽을 가이드 <span>{group.guides.length}편</span>
                                </p>
                                <ul>
                                    {group.guides.map((guide) => (
                                        <li key={guide.href}>
                                            <Link to={guide.href}>
                                                <div>
                                                    <h4>{guide.title}</h4>
                                                    <p>{guide.description}</p>
                                                </div>
                                                <span className={styles.topicGuideArrow} aria-hidden="true">
                                                    →
                                                </span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    ))}
                </div>
                <p className={styles.topicsNote}>단지·지도 목록은 아파트 인사이트에서 새 창으로 열립니다.</p>
            </div>
        </section>
    );
}

function McpEndpoint(): JSX.Element {
    const [copied, setCopied] = useState(false);
    const copy = async () => {
        try {
            await navigator.clipboard.writeText(MCP_ENDPOINT);
            setCopied(true);
            window.setTimeout(() => setCopied(false), 1800);
        } catch {
            setCopied(false);
        }
    };
    return (
        <div className={styles.mcpEndpoint}>
            <span className={styles.mcpEndpointLabel}>MCP 서버 주소 · 로그인·API 키 없음</span>
            <div className={styles.mcpEndpointRow}>
                <code>{MCP_ENDPOINT}</code>
                <button type="button" onClick={copy} className={styles.mcpCopy} aria-live="polite">
                    {copied ? '복사됨' : '복사'}
                </button>
            </div>
        </div>
    );
}

function AiAssistantSection(): JSX.Element {
    return (
        <section className={clsx(styles.section, styles.aiSection)} id="ai-assistant" aria-labelledby="ai-assistant-title">
            <div className={clsx('container', styles.aiGrid)}>
                <div className={styles.aiCopy}>
                    <p className={styles.kicker}>
                        AI 어시스턴트 연동 · MCP <span className={styles.newBadge}>NEW</span>
                    </p>
                    <h2 id="ai-assistant-title">Claude·ChatGPT에게 단지 이름으로 물어보세요</h2>
                    <p className={styles.aiLead}>
                        주소 하나를 연결하면 AI가 최근 실거래와 분양 일정·경쟁률, 1~24개월 뒤 가격 전망을
                        직접 조회해 답합니다. 기억이나 웹 검색 대신 같은 면적·기준일로 저장된 공개 자료를 읽습니다.
                    </p>
                    <McpEndpoint />
                    <ul className={styles.mcpClients}>
                        {mcpClients.map((client) => (
                            <li key={client.name}>
                                <strong>{client.name}</strong>
                                <span>{client.how}</span>
                            </li>
                        ))}
                    </ul>
                    <div className={styles.heroActions}>
                        <Link className={styles.primaryButton} to={MCP_GUIDE_POST}>
                            연결 방법과 질문 예시 <span aria-hidden="true">→</span>
                        </Link>
                        <a
                            className={styles.ghostButton}
                            href={MCP_GUIDE_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="전체 도구 목록 보기 (새 창)"
                        >
                            도구 {MCP_TOOL_COUNT}개 보기 <span aria-hidden="true">↗</span>
                        </a>
                    </div>
                </div>
                <figure className={styles.chatCard} aria-label="AI 어시스턴트에 아파트 데이터를 묻는 예시 대화">
                    <div className={styles.chatHead}>
                        <span className={styles.chatDot} aria-hidden="true" />
                        예시 대화
                    </div>
                    <p className={styles.chatUser}>OO구 OO아파트 84㎡ 최근 실거래랑 1년 뒤 전망 알려줘</p>
                    <div className={styles.chatTools} aria-label="AI가 호출한 도구">
                        <code>search_apartments</code>
                        <code>get_recent_transactions</code>
                        <code>get_forecast</code>
                    </div>
                    <div className={styles.chatAnswer}>
                        <p>전용 84㎡ 기준으로 정리했어요.</p>
                        <dl>
                            <div><dt>최근 대표 시세</dt><dd>10억</dd></div>
                            <div><dt>1년 뒤 가운데 값</dt><dd>10억 4,000만</dd></div>
                            <div><dt>예상 범위 (P25~P75)</dt><dd>9억 5,000만 ~ 11억 2,000만</dd></div>
                        </dl>
                        <p className={styles.chatMeta}>마지막 거래일·계산 기준일을 함께 알려 드립니다.</p>
                    </div>
                    <ul className={styles.chatSuggestions} aria-label="다른 질문 예시">
                        {mcpQuestions.map((question) => (
                            <li key={question}>{question}</li>
                        ))}
                    </ul>
                    <figcaption>이해를 돕기 위한 가상 수치입니다. 실제 단지 결과가 아닙니다.</figcaption>
                </figure>
            </div>
        </section>
    );
}

export default function Home(): JSX.Element {
    return (
        <Layout title="아파트 실거래가·분양·3D 지도 가이드와 계산기" description={siteDescription}>
            <Head>
                <script type="application/ld+json">{JSON.stringify(homeStructuredData)}</script>
            </Head>
            <main className={styles.homepage}>
                <section className={styles.hero}>
                    <div className={clsx('container', styles.heroGrid)}>
                        <div className={styles.heroCopy}>
                            <p className={styles.kicker}>아파트 데이터와 생활 가이드</p>
                            <h1>
                                아파트를 고를 때,
                                <br />
                                <em>가격 너머의 생활</em>까지.
                            </h1>
                            <p className={styles.heroLead}>
                                우리 동네 실거래가부터 분양 일정, 3D로 보는 주변 환경까지.
                                궁금한 단지를 찾아보고, 가이드와 계산기로 선택의 기준을 정리해 보세요.
                                이제 Claude·ChatGPT에게 단지 이름으로 바로 물어볼 수도 있습니다.
                            </p>
                            <nav className={styles.heroActions} aria-label="홈 주요 기능 바로가기">
                                <a className={styles.primaryButton} href="#presale-guides">
                                    분양 아파트 <span aria-hidden="true">↓</span>
                                </a>
                                <a className={styles.ghostButton} href="#neighborhood-guides">
                                    3D 지도 <span aria-hidden="true">↓</span>
                                </a>
                                <a className={styles.ghostButton} href="#ai-assistant">
                                    AI로 묻기 <span aria-hidden="true">↓</span>
                                </a>
                                <a className={styles.ghostButton} href="#calculators">
                                    계산기 <span aria-hidden="true">↓</span>
                                </a>
                            </nav>
                            <dl className={styles.heroStats}>
                                <div>
                                    <dt>가이드</dt>
                                    <dd>{guideGroups.reduce((sum, group) => sum + group.guides.length, 0)}편</dd>
                                </div>
                                <div>
                                    <dt>계산기</dt>
                                    <dd>{calculators.length}종</dd>
                                </div>
                                <div>
                                    <dt>AI 도구</dt>
                                    <dd>MCP {MCP_TOOL_COUNT}개</dd>
                                </div>
                                <div>
                                    <dt>출처</dt>
                                    <dd>공개 자료</dd>
                                </div>
                            </dl>
                        </div>
                        <RegionFinder />
                    </div>
                </section>

                <ApartmentTopics />

                <AiAssistantSection />

                <section
                    className={clsx(styles.section, styles.latestSection)}
                    id="latest-analysis"
                    aria-labelledby="latest-analysis-title"
                >
                    <div className="container">
                        <header className={styles.sectionHead}>
                            <div>
                                <p className={styles.kicker}>가격 분석과 모델 검증</p>
                                <h2 id="latest-analysis-title">실거래 흐름부터, 예측 검증까지</h2>
                                <p className={styles.latestIntro}>
                                    최근 거래를 제대로 읽는 법과 아파트 가격 예측의 성적표를 함께 살펴보세요.
                                    공개된 평가 수치에는 표본과 한계도 같이 담았습니다.
                                </p>
                            </div>
                            <Link className={styles.textLink} to="/blog">
                                모든 글 보기 <span aria-hidden="true">→</span>
                            </Link>
                        </header>
                        <div className={styles.latestGrid}>
                            <article className={clsx(styles.latestCard, styles.latestFeatured)}>
                                <Link to={latestArticles[0].href} className={styles.latestCardInner}>
                                    <div className={styles.latestCardMeta}>
                                        <span className={styles.latestTag}>{latestArticles[0].category}</span>
                                        <time dateTime={latestArticles[0].date}>2026.10.13</time>
                                    </div>
                                    <h3>{latestArticles[0].title}</h3>
                                    <p className={styles.latestDescription}>{latestArticles[0].description}</p>
                                    <dl className={styles.latestMetrics}>
                                        <div><dt>시계열 분할 R²</dt><dd>0.647</dd></div>
                                        <div><dt>변동률 RMSE</dt><dd>7.76<small>%p</small></dd></div>
                                        <div><dt>12개월 가격 MAPE</dt><dd>5.86<small>%</small></dd></div>
                                    </dl>
                                    <p className={styles.latestDisclaimer}>
                                        2026.10.13 과거 재현 결과 · 변동률 평가 3,228건 / 가격 오차 평가 120건
                                    </p>
                                    <span className={styles.latestCardAction}>
                                        {latestArticles[0].action} <span aria-hidden="true">→</span>
                                    </span>
                                </Link>
                            </article>
                            <div className={styles.latestSecondary}>
                                {latestArticles.slice(1).map((article) => (
                                    <article key={article.href} className={clsx(styles.latestCard, styles.latestCompact)}>
                                        <Link to={article.href} className={styles.latestCardInner}>
                                            <div className={styles.latestCardMeta}>
                                                <span className={styles.latestTag}>{article.category}</span>
                                                <time dateTime={article.date}>2026.10.13</time>
                                            </div>
                                            <h3>{article.title}</h3>
                                            <p className={styles.latestDescription}>{article.description}</p>
                                            <span className={styles.latestCardAction}>
                                                {article.action} <span aria-hidden="true">→</span>
                                            </span>
                                        </Link>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles.section} aria-labelledby="guides-title">
                    <div className="container">
                        <header className={styles.sectionHead}>
                            <div>
                                <p className={styles.kicker}>질문으로 찾기</p>
                                <h2 id="guides-title">궁금한 질문부터 고르세요</h2>
                            </div>
                            <Link className={styles.textLink} to="/blog/tags/real-estate">
                                부동산 글 전체 <span aria-hidden="true">→</span>
                            </Link>
                        </header>
                        <div className={styles.guideGrid}>
                            {otherGuideGroups.map((group) => (
                                <article key={group.id} className={styles.guideCard} data-group={group.id}>
                                    <p className={styles.guideLabel}>{group.label}</p>
                                    <h3>{group.question}</h3>
                                    <ul>
                                        {group.guides.map((guide) => (
                                            <li key={guide.href}>
                                                <Link to={guide.href}>
                                                    <strong>{guide.title}</strong>
                                                    <span>{guide.description}</span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className={styles.forecastBand} aria-labelledby="forecast-title">
                    <div className={clsx('container', styles.forecastGrid)}>
                        <div>
                            <p className={styles.kicker}>1년 뒤 가격이 궁금하다면</p>
                            <h2 id="forecast-title">전망은 하나의 숫자가 아니라 범위입니다</h2>
                            <p className={styles.forecastLead}>
                                가입 없이 단지를 검색하면 최근 대표 시세와 1년 뒤 예상 범위를 볼 수 있는 도구가 있습니다.
                                결과를 보기 전에 아래 세 가지만 알아 두면 숫자를 훨씬 차분하게 읽을 수 있습니다.
                            </p>
                            <ol className={styles.checkList}>
                                {forecastChecks.map((check) => (
                                    <li key={check.step}>
                                        <Link to={check.href}>
                                            <span className={styles.checkStep}>{check.step}</span>
                                            <span>
                                                <strong>{check.title}</strong>
                                                <small>{check.description}</small>
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </ol>
                            <div className={styles.heroActions}>
                                <a
                                    className={styles.primaryButton}
                                    href={FREE_FORECAST_URL}
                                    target="_blank"
                                    rel="noopener"
                                >
                                    가입 없이 확인해 보기 <span aria-hidden="true">↗</span>
                                </a>
                                <Link className={styles.ghostButton} to="/blog/apartment-price-forecast-without-signup">
                                    이용 순서 읽기
                                </Link>
                            </div>
                        </div>
                        <RangeIllustration />
                    </div>
                </section>

                <section className={styles.section} id="calculators" aria-labelledby="calculators-title">
                    <div className="container">
                        <header className={styles.sectionHead}>
                            <div>
                                <p className={styles.kicker}>계산기</p>
                                <h2 id="calculators-title">계약 전에 직접 계산해 보세요</h2>
                            </div>
                            <p className={styles.sectionNote}>
                                입력값은 브라우저에서만 계산하며 저장하지 않습니다. 세법·요율은 글에 적힌 기준일을 함께
                                확인하세요.
                            </p>
                        </header>
                        <div className={styles.calcGrid}>
                            {calculators.map((calculator) => (
                                <Link key={calculator.href} className={styles.calcCard} to={calculator.href}>
                                    <span className={styles.calcBadge}>{calculator.badge}</span>
                                    <h3>{calculator.title}</h3>
                                    <p>{calculator.summary}</p>
                                    <span className={styles.calcGo}>
                                        계산하기 <span aria-hidden="true">→</span>
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                <section className={clsx(styles.section, styles.sectionMuted)} aria-labelledby="engineering-title">
                    <div className={clsx('container', styles.engineeringGrid)}>
                        <div>
                            <p className={styles.kicker}>만드는 사람의 기록</p>
                            <h2 id="engineering-title">데이터를 화면으로 옮기는 기술</h2>
                            <p className={styles.sectionNote}>
                                AI 연동 서버 설계부터 차트·브라우저 성능까지, 서비스를 만들며 남긴 기술 기록입니다.
                            </p>
                            <Link className={styles.textLink} to="/blog/tags/engineering">
                                개발 글 전체 <span aria-hidden="true">→</span>
                            </Link>
                        </div>
                        <ul className={styles.engineeringList}>
                            {engineeringNotes.map((note) => (
                                <li key={note.href}>
                                    <Link to={note.href}>
                                        <span>
                                            {note.title}
                                            {note.isNew && <span className={styles.newBadge}>NEW</span>}
                                        </span>
                                        <span aria-hidden="true">→</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            </main>
        </Layout>
    );
}
