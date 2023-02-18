import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
    title: string;
    Svg: string;
    description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
    {
        title: 'Data Visualization',
        Svg: require('@site/static/img/d3.png').default,
        description: (
            <>
                업무적으로나 개인적으로나 데이터 시각화에 관심이 많습니다.
                관련된 모듈인 <code>D3</code>와 <code>P5</code>를 열심히
                알아가는 중입니다.
            </>
        ),
    },
    {
        title: 'Framework',
        Svg: require('@site/static/img/framework.png').default,
        description: (
            <>
                회사 제품인 JENNIFER5는 <code>Vue</code> 기반으로 개발하고
                있습니다. 최근에는 Docusaurus를 본격적으로 사용하면서{' '}
                <code>React</code>도 같이 공부하고 있습니다.
            </>
        ),
    },
    {
        title: 'Language',
        Svg: require('@site/static/img/rust.png').default,
        description: (
            <>
                업무 특성상 브라우저 성능이 중요하기 때문에 웹어셈블리(
                <code>Rust</code>)에 대해 지속적인 관심을 가지고 있습니다.
            </>
        ),
    },
];

function Feature({ title, Svg, description }: FeatureItem) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <img className={styles.featureSvg} role="img" src={Svg} />
            </div>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures(): JSX.Element {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
