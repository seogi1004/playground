import React, { type JSX, useState } from 'react';
import clsx from 'clsx';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import {
    FREE_FORECAST_URL,
    REGION_INDEX_URL,
    calculators,
    guideGroups,
    regionGroups,
    regionUrl,
} from '@site/src/data/realEstate';
import styles from './index.module.css';

const siteDescription =
    '아파트 실거래가 추이와 층수·평형별 가격 차이, 아파트 가격 예측 백테스트와 예상 범위, 세금·대출 계산법을 함께 읽는 데이터 아카이브입니다.';

const engineeringNotes = [
    { title: '데이터 시각화를 위한 D3 스케일', href: '/blog/d3-scale' },
    { title: 'D3 Hierarchy로 데이터 다루기', href: '/blog/d3-hierarchy' },
    { title: 'OffscreenCanvas API 살펴보기', href: '/blog/offscreen-canvas-api' },
    { title: 'React Server Components 살펴보기', href: '/blog/react-server-components' },
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
            <div className={styles.segment} role="tablist" aria-label="지역 선택">
                {regionGroups.map((group, index) => (
                    <button
                        key={group.sido}
                        type="button"
                        role="tab"
                        aria-selected={active === index}
                        className={clsx(styles.segmentButton, active === index && styles.segmentActive)}
                        onClick={() => setActive(index)}
                    >
                        {group.sido}
                    </button>
                ))}
            </div>
            {regionGroups.map((group, index) => (
                <ul key={group.sido} className={styles.regionGrid} hidden={active !== index}>
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

export default function Home(): JSX.Element {
    return (
        <Layout title="아파트 실거래가·통계 분석 및 거래비용 계산기" description={siteDescription}>
            <Head>
                <script type="application/ld+json">{JSON.stringify(homeStructuredData)}</script>
            </Head>
            <main className={styles.homepage}>
                <section className={styles.hero}>
                    <div className={clsx('container', styles.heroGrid)}>
                        <div className={styles.heroCopy}>
                            <p className={styles.kicker}>아파트 데이터 노트</p>
                            <h1>
                                아파트 가격,
                                <br />
                                <em>숫자보다 기준</em>부터 읽습니다.
                            </h1>
                            <p className={styles.heroLead}>
                                실거래가 추이를 평형·층수별로 읽고, 1년 뒤 예상 범위와 모델 검증까지 연결합니다.
                                세금과 대출을 계산하기 전에, 숫자의 기준일과 거래 조건부터 확인해 보세요.
                            </p>
                            <div className={styles.heroActions}>
                                <a className={styles.primaryButton} href="#latest-analysis">
                                    최신 분석 읽기 <span aria-hidden="true">↓</span>
                                </a>
                                <a className={styles.ghostButton} href="#calculators">
                                    계산기 바로가기
                                </a>
                            </div>
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
                                    <dt>출처</dt>
                                    <dd>공개 자료</dd>
                                </div>
                            </dl>
                        </div>
                        <RegionFinder />
                    </div>
                </section>

                <section
                    className={clsx(styles.section, styles.latestSection)}
                    id="latest-analysis"
                    aria-labelledby="latest-analysis-title"
                >
                    <div className="container">
                        <header className={styles.sectionHead}>
                            <div>
                                <p className={styles.kicker}>최근 데이터 분석 · 2026년 10월</p>
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
                            {guideGroups.map((group) => (
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
                                차트와 계산기를 만들며 쓴 시각화·브라우저 성능·프론트엔드 기록입니다.
                            </p>
                            <Link className={styles.textLink} to="/blog/tags/engineering">
                                개발 글 전체 <span aria-hidden="true">→</span>
                            </Link>
                        </div>
                        <ul className={styles.engineeringList}>
                            {engineeringNotes.map((note) => (
                                <li key={note.href}>
                                    <Link to={note.href}>
                                        {note.title}
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
