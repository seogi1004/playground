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
            title="부동산·아파트 데이터와 기술 아카이브"
            description="부동산·아파트 통계를 읽는 법, 실거래가와 시장 지표를 해석하는 방법, D3.js 데이터 시각화와 웹 성능 최적화 기술을 기록합니다."
        >
            <Highlight />
            <HomepageHeader />
            <main>
                <HomepageFeatures />
            </main>
        </Layout>
    );
}
