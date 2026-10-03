import React, { type JSX } from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import { APT_ORIGIN } from '@site/src/data/realEstate';
import styles from './about.module.css';

const career: { period: string; company: string; team: string; description?: string }[] = [
    {
        period: '2013.02 ~ 현재',
        company: '제니퍼소프트',
        team: 'R&D팀 · 프론트엔드 리드',
        description: 'JENNIFER5의 Vue 3 기반 프론트엔드를 이끌고, Jetty·Spring 기반 뷰 서버와 제니퍼 서버의 인증 영역을 개발합니다. 제품 기획과 문서화까지 제품 전반을 맡고 있습니다.',
    },
    {
        period: '2010.07',
        company: '네오위즈게임즈',
        team: '서비스개발팀',
    },
    {
        period: '2009.10',
        company: '큐브리드',
        team: 'NHN DBMS 개발랩',
        description: '테크니컬 라이터 인턴십',
    },
];

// 수치는 아파트 인사이트 내부 1인 개발 통계(2026-10-03 기준)에서 공개 가능한 값만 옮긴다.
const projectStats = [
    { label: '개발 시작', value: '2026.04' },
    { label: '커밋', value: '7,968회' },
    { label: '작업한 날', value: '173 / 183일' },
    { label: '테스트 파일', value: '935개' },
];

const projectParts = ['웹 서비스', 'iOS·Android 앱', '가격 예측 모델', '실거래 데이터 수집', '공개 단지 페이지'];

const stackGroups = [
    {
        label: 'JENNIFER5',
        items: ['TypeScript', 'Vue 3', 'Vite', 'Webpack', 'Java 17', 'Kotlin', 'Spring', 'Jetty'],
    },
    {
        label: '아파트 인사이트',
        items: ['TypeScript', 'React', 'Next.js', 'Vite', 'Hono', 'Cloudflare Workers', 'Prisma', 'PostgreSQL', 'Capacitor'],
    },
    { label: '시각화·블로그', items: ['D3', 'Canvas', 'Docusaurus'] },
];

export default function About(): JSX.Element {
    return (
        <Layout
            title="소개"
            description="제니퍼소프트에서 JENNIFER5 프론트엔드 리드로 일하고, 아파트 인사이트를 혼자 설계·개발·운영하는 Alvin Hong의 소개입니다."
        >
            <main className={styles.page}>
                <section className={styles.hero}>
                    <div className="container">
                        <p className={styles.kicker}>소개</p>
                        <h1>
                            제품을 처음부터 끝까지
                            <br />
                            만드는 개발자, Alvin Hong
                        </h1>
                        <p className={styles.lead}>
                            제니퍼소프트에서 JENNIFER5의 프론트엔드 리드로 일하며, 뷰 서버와 인증 같은 서버 영역, 기획과
                            문서화까지 제품 전반을 맡고 있습니다. 개인 프로젝트로는 부동산 데이터 서비스 아파트 인사이트를 혼자 설계하고 만들고
                            운영합니다.
                        </p>
                        <div className={styles.actions}>
                            <a className={styles.primary} href={APT_ORIGIN} target="_blank" rel="noopener">
                                아파트 인사이트 보기
                            </a>
                            <a className={styles.secondary} href="https://github.com/seogi1004" target="_blank" rel="noopener">
                                GitHub
                            </a>
                        </div>
                    </div>
                </section>

                <section className={styles.section} aria-labelledby="career-title">
                    <div className="container">
                        <h2 id="career-title">경력</h2>
                        <ol className={styles.timeline}>
                            {career.map((item) => (
                                <li key={item.company}>
                                    <span className={styles.period}>{item.period}</span>
                                    <div>
                                        <h3>
                                            {item.company} <span>{item.team}</span>
                                        </h3>
                                        {item.description && <p>{item.description}</p>}
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>
                </section>

                <section className={styles.section} aria-labelledby="project-title">
                    <div className="container">
                        <h2 id="project-title">아파트 인사이트 1인 개발</h2>
                        <p className={styles.sectionLead}>
                            기획, 예측 모델, 백엔드, 프론트엔드, 인프라, 디자인, 운영까지 혼자 AI 에이전트와 함께 진행하고
                            있습니다.
                        </p>
                        <dl className={styles.stats}>
                            {projectStats.map((stat) => (
                                <div key={stat.label}>
                                    <dt>{stat.label}</dt>
                                    <dd>{stat.value}</dd>
                                </div>
                            ))}
                        </dl>
                        <p className={styles.note}>2026년 10월 3일 기준 · 커밋은 자동화 계정을 뺀 수치입니다.</p>
                        <ul className={styles.tags} aria-label="아파트 인사이트 구성">
                            {projectParts.map((part) => (
                                <li key={part}>{part}</li>
                            ))}
                        </ul>
                        <p className={styles.links}>
                            <a href={APT_ORIGIN} target="_blank" rel="noopener">
                                서비스 둘러보기
                            </a>
                            <a href={`${APT_ORIGIN}/model`} target="_blank" rel="noopener">
                                예측 모델 기술 백서
                            </a>
                        </p>
                    </div>
                </section>

                <section className={styles.section} aria-labelledby="stack-title">
                    <div className="container">
                        <h2 id="stack-title">주로 쓰는 기술</h2>
                        <dl className={styles.stackGroups}>
                            {stackGroups.map((group) => (
                                <div key={group.label}>
                                    <dt>{group.label}</dt>
                                    <dd>
                                        <ul className={styles.tags}>
                                            {group.items.map((name) => (
                                                <li key={name} className={styles.mono}>
                                                    {name}
                                                </li>
                                            ))}
                                        </ul>
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </section>

                <section className={styles.section} aria-labelledby="blog-title">
                    <div className="container">
                        <h2 id="blog-title">이 블로그에서 쓰는 글</h2>
                        <div className={styles.tracks}>
                            <Link to="/blog/tags/real-estate" className={styles.track}>
                                <strong>아파트 데이터 읽기</strong>
                                <span>실거래가·예상 범위·세금·금리를 숫자보다 기준부터 읽는 방법</span>
                            </Link>
                            <Link to="/blog/tags/engineering" className={styles.track}>
                                <strong>개발 기록</strong>
                                <span>프론트엔드, 시각화, 레거시 개선과 서비스를 만들며 배운 것</span>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
}
