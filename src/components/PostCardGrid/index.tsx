import React, { type JSX } from 'react';
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
const SPECIFIC_TOPICS = new Map([
    ['3d-map', '3D 지도'],
    ['presale', '분양 아파트'],
]);

function tagSlug(permalink: string): string {
    return permalink.replace(/\/+$/, '').split('/').pop() ?? '';
}

export default function PostCardGrid({ items }: Props): JSX.Element {
    return (
        <ul className={styles.grid}>
            {items.map(({ content }) => {
                const { metadata } = content;
                const tagsBySlug = new Map(metadata.tags.map((tag) => [tagSlug(tag.permalink), tag]));
                const topic = Array.from(SPECIFIC_TOPICS).find(([slug]) => tagsBySlug.has(slug));
                const specificTags = Array.from(SPECIFIC_TOPICS.keys()).flatMap((slug) => {
                    const tag = tagsBySlug.get(slug);
                    return tag ? [tag] : [];
                });
                const otherTags = Array.from(tagsBySlug)
                    .filter(([slug]) => !SPECIFIC_TOPICS.has(slug))
                    .map(([, tag]) => tag);
                const tags = [...specificTags, ...otherTags].slice(0, 3);
                const isRealEstate = Array.from(tagsBySlug.keys()).some((slug) => REAL_ESTATE_TAGS.has(slug));
                const kind = topic?.[0] ?? (isRealEstate ? 'real-estate' : 'engineering');
                const kindLabel = topic?.[1] ?? (isRealEstate ? '부동산' : '개발');
                return (
                    <li key={metadata.permalink}>
                        <article className={styles.card} data-kind={kind}>
                            <div className={styles.meta}>
                                <span className={styles.kind}>{kindLabel}</span>
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
