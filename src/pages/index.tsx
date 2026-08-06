import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Highlight from './highlight';
import styles from './index.module.css';

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <h1 className="hero__title">{siteConfig.title}</h1>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                <div className={styles.buttons}>
                    <Link
                        className="button button--secondary button--lg"
                        to="/docs/category/the-coding-train"
                    >
                        The Coding Train
                    </Link>
                    <Link
                        className="button button--secondary button--lg"
                        to="/blog"
                    >
                        Technical Writing
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default function Home(): JSX.Element {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title="아파트 인사이트 & 프론트엔드 연구소"
            description="아파트 인사이트(Apartment Insights) - 아파트 부동산 실거래가 분석 및 예측 서비스, D3.js 데이터 시각화, 웹 성능 최적화 기술 블로그입니다."
        >
            <Highlight />
            <HomepageHeader />
            <main>
                <HomepageFeatures />
            </main>
        </Layout>
    );
}
