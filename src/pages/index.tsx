import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './index.module.css';

type Topic = {
    eyebrow: string;
    title: string;
    description: string;
    href: string;
    icon: string;
};

const topics: Topic[] = [
    {
        eyebrow: 'REAL ESTATE / APARTMENT',
        title: '부동산과 아파트',
        description: '실거래가, 공급, 전세와 같은 숫자를 같은 기준으로 읽는 방법을 정리합니다.',
        href: '/blog/tags/real-estate',
        icon: '↗',
    },
    {
        eyebrow: 'FINANCE / CONTEXT',
        title: '금융 읽기',
        description: '금리·대출·세금이 주거 시장의 선택에 어떤 맥락을 만드는지 차분히 살펴봅니다.',
        href: '/blog',
        icon: '◒',
    },
    {
        eyebrow: 'ENGINEERING / BUILD',
        title: '개발과 데이터',
        description: '데이터를 수집하고, 화면으로 만들고, 오래 운영하는 기술을 기록합니다.',
        href: '/docs/intro',
        icon: '</>',
    },
];

function SignalChart(): JSX.Element {
    return (
        <svg
            className={styles.chart}
            viewBox="0 0 560 220"
            role="img"
            aria-label="시간에 따른 공개 지표 흐름을 보여주는 예시 차트"
        >
            <defs>
                <linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#b9f36c" stopOpacity="0.34" />
                    <stop offset="100%" stopColor="#b9f36c" stopOpacity="0" />
                </linearGradient>
            </defs>
            <g className={styles.chartGrid}>
                <line x1="0" x2="560" y1="36" y2="36" />
                <line x1="0" x2="560" y1="92" y2="92" />
                <line x1="0" x2="560" y1="148" y2="148" />
                <line x1="0" x2="560" y1="204" y2="204" />
            </g>
            <path
                className={styles.chartArea}
                d="M0 168 C46 160 64 122 112 134 S172 104 218 118 S276 174 326 142 S384 72 432 94 S490 84 560 44 L560 220 L0 220 Z"
            />
            <path
                className={styles.chartLine}
                d="M0 168 C46 160 64 122 112 134 S172 104 218 118 S276 174 326 142 S384 72 432 94 S490 84 560 44"
            />
            <circle className={styles.chartPoint} cx="432" cy="94" r="5" />
            <circle className={styles.chartPoint} cx="560" cy="44" r="5" />
        </svg>
    );
}

function TopicCard({ topic }: { topic: Topic }): JSX.Element {
    return (
        <Link className={styles.topicCard} to={topic.href}>
            <div className={styles.topicIcon} aria-hidden="true">
                {topic.icon}
            </div>
            <p className={styles.cardEyebrow}>{topic.eyebrow}</p>
            <h3>{topic.title}</h3>
            <p className={styles.cardDescription}>{topic.description}</p>
            <span className={styles.cardArrow} aria-hidden="true">
                읽어보기 <span>↗</span>
            </span>
        </Link>
    );
}

export default function Home(): JSX.Element {
    return (
        <Layout
            title="개발과 데이터의 기록"
            description="부동산과 아파트 통계를 읽는 법부터 데이터 시각화와 웹 성능까지, 개발자가 만드는 데이터 읽기와 제품 설계의 기록입니다."
        >
            <main className={styles.homepage}>
                <section className={styles.hero}>
                    <div className="container">
                        <div className={styles.heroGrid}>
                            <div className={styles.heroCopy}>
                                <p className={styles.eyebrow}>
                                    <span className={styles.eyebrowMark} aria-hidden="true" />
                                    ALVIN / BUILD &amp; INSIGHT
                                </p>
                                <h1>
                                    복잡한 데이터를
                                    <br />
                                    <span>읽을 수 있는 화면</span>으로.
                                </h1>
                                <p className={styles.heroDescription}>
                                    개발자의 시선으로 데이터와 제품을 만듭니다. 부동산·아파트 통계부터
                                    데이터 시각화, 웹 성능과 운영 기록까지 한 곳에 쌓습니다.
                                </p>
                                <div className={styles.heroActions}>
                                    <Link className={styles.primaryButton} to="/blog/tags/real-estate">
                                        부동산 글 읽기 <span aria-hidden="true">↗</span>
                                    </Link>
                                    <Link className={styles.secondaryButton} to="/blog">
                                        전체 아카이브
                                    </Link>
                                </div>
                                <div className={styles.heroMeta}>
                                    <span>01</span>
                                    <span>공개 데이터</span>
                                    <span className={styles.metaDivider} />
                                    <span>02</span>
                                    <span>제품 엔지니어링</span>
                                </div>
                            </div>

                            <div className={styles.signalCard}>
                                <div className={styles.signalHeader}>
                                    <div>
                                        <p className={styles.cardEyebrow}>PUBLIC DATA DESK</p>
                                        <p className={styles.signalTitle}>시장 흐름을 읽는 작은 화면</p>
                                    </div>
                                    <span className={styles.liveMark}>
                                        <span aria-hidden="true" /> SAMPLE
                                    </span>
                                </div>
                                <div className={styles.signalLegend}>
                                    <span><i className={styles.legendLine} /> 공개 지표 흐름</span>
                                    <span>최근 12개월</span>
                                </div>
                                <SignalChart />
                                <div className={styles.signalFooter}>
                                    <div>
                                        <span>거래 흐름</span>
                                        <strong>읽는 순서부터</strong>
                                    </div>
                                    <div>
                                        <span>데이터 출처</span>
                                        <strong>함께 확인하기</strong>
                                    </div>
                                    <span className={styles.signalFootnote}>예시 화면</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles.topicSection}>
                    <div className="container">
                        <div className={styles.sectionIntro}>
                            <div>
                                <p className={styles.sectionKicker}>EXPLORE THE NOTEBOOK</p>
                                <h2>관심 있는 주제부터 시작하세요.</h2>
                            </div>
                            <p>
                                숫자를 해석하는 관점과 그것을 구현하는 기술을 함께 기록합니다.
                            </p>
                        </div>
                        <div className={styles.topicGrid}>
                            {topics.map((topic) => (
                                <TopicCard key={topic.title} topic={topic} />
                            ))}
                        </div>
                    </div>
                </section>

                <section className={styles.notesSection}>
                    <div className="container">
                        <div className={styles.notesHeader}>
                            <div>
                                <p className={styles.sectionKicker}>START HERE</p>
                                <h2>지금 읽기 좋은 기록</h2>
                            </div>
                            <Link className={styles.textLink} to="/blog">
                                모든 글 보기 <span aria-hidden="true">↗</span>
                            </Link>
                        </div>
                        <div className={styles.notesGrid}>
                            <Link className={`${styles.noteCard} ${styles.noteCardFeature}`} to="/blog/real-estate-apartment-statistics-reading-order">
                                <span className={styles.noteNumber}>01</span>
                                <div>
                                    <p className={styles.cardEyebrow}>REAL ESTATE / GUIDE</p>
                                    <h3>부동산과 아파트 통계를 처음 읽는 순서</h3>
                                    <p>실거래가와 시장 지표를 볼 때 먼저 확인할 기준을 정리한 입문 글입니다.</p>
                                </div>
                                <span className={styles.noteArrow} aria-hidden="true">↗</span>
                            </Link>
                            <Link className={styles.noteCard} to="/docs/intro">
                                <span className={styles.noteNumber}>02</span>
                                <div>
                                    <p className={styles.cardEyebrow}>RESEARCH</p>
                                    <h3>데이터를 화면으로 옮기는 연구 노트</h3>
                                    <p>시각화, 알고리즘, 브라우저 성능을 직접 실험하며 남긴 문서입니다.</p>
                                </div>
                                <span className={styles.noteArrow} aria-hidden="true">↗</span>
                            </Link>
                        </div>
                    </div>
                </section>

                <section className={styles.manifestoSection}>
                    <div className="container">
                        <div className={styles.manifesto}>
                            <p className={styles.sectionKicker}>WHY THIS PLACE EXISTS</p>
                            <h2>좋은 제품은 좋은 질문에서 시작됩니다.</h2>
                            <p>
                                어떤 숫자를 볼지, 어디까지 믿을지, 사용자가 다음 행동을 할 수 있는 화면은
                                무엇인지. 만들면서 생긴 질문과 답을 개발자의 언어로 남깁니다.
                            </p>
                            <Link className={styles.outlineButton} to="/docs/intro">
                                Research 둘러보기 <span aria-hidden="true">↗</span>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
}
