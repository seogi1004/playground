import React from 'react';
import Link from '@docusaurus/Link';
import type { Content } from '@theme/BlogPostPage';
import styles from './styles.module.css';

type Props = {
    readonly items: readonly { readonly content: Content }[];
};

const dateFormatter = new Intl.DateTimeFormat('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'Asia/Seoul',
});

const REAL_ESTATE_TAGS = new Set(['real-estate', 'apartments', 'real-estate-data', 'finance']);

export default function PostCardGrid({ items }: Props): JSX.Element {
    return (
        <ul className={styles.grid}>
            {items.map(({ content }) => {
                const { metadata } = content;
                const tags = metadata.tags.slice(0, 3);
                const isRealEstate = metadata.tags.some((tag) => REAL_ESTATE_TAGS.has(tag.permalink.split('/').pop() ?? ''));
                return (
                    <li key={metadata.permalink}>
                        <article className={styles.card} data-kind={isRealEstate ? 'real-estate' : 'engineering'}>
                            <div className={styles.meta}>
                                <span className={styles.kind}>{isRealEstate ? '부동산' : '개발'}</span>
                                <time dateTime={metadata.date}>{dateFormatter.format(new Date(metadata.date))}</time>
                                {metadata.readingTime ? <span>{Math.max(1, Math.ceil(metadata.readingTime))}분</span> : null}
                            </div>
                            <h2 className={styles.title}>
                                <Link to={metadata.permalink}>{metadata.title}</Link>
                            </h2>
                            {metadata.description ? <p className={styles.description}>{metadata.description}</p> : null}
                            {tags.length > 0 ? (
                                <ul className={styles.tags}>
                                    {tags.map((tag) => (
                                        <li key={tag.permalink}>
                                            <Link to={tag.permalink}>#{tag.label}</Link>
                                        </li>
                                    ))}
                                </ul>
                            ) : null}
                        </article>
                    </li>
                );
            })}
        </ul>
    );
}
