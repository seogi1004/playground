import type { ReactNode } from 'react';
import clsx from 'clsx';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {
  HtmlClassNameProvider,
  PageMetadata,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import BlogLayout from '@theme/BlogLayout';
import BlogListPageStructuredData from '@theme/BlogListPage/StructuredData';
import BlogListPaginator from '@theme/BlogListPaginator';
import Link from '@docusaurus/Link';
import PostCardGrid from '@site/src/components/PostCardGrid';
import SearchMetadata from '@theme/SearchMetadata';
import type { Props } from '@theme/BlogListPage';

function BlogListPageMetadata({ metadata }: Pick<Props, 'metadata'>): ReactNode {
  const {
    siteConfig: { title: siteTitle },
  } = useDocusaurusContext();
  const { blogDescription, blogTitle, page, permalink } = metadata;
  const isBlogOnlyMode = permalink === '/';
  const isPaginatedPage = page > 1;
  const title = isBlogOnlyMode
    ? siteTitle
    : isPaginatedPage
      ? `${blogTitle} — 페이지 ${page}`
      : blogTitle;
  const description = isPaginatedPage
    ? `${blogTitle}의 페이지 ${page}입니다. ${blogDescription}`
    : blogDescription;

  return (
    <>
      <PageMetadata title={title} description={description} />
      {isPaginatedPage && (
        <Head>
          <meta name="robots" content="noindex, follow" />
        </Head>
      )}
      <SearchMetadata tag="blog_posts_list" />
    </>
  );
}

const topicLinks = [
  { label: '아파트 가이드', to: '/blog/tags/real-estate' },
  { label: '아파트 시세', to: '/blog/tags/apartments' },
  { label: '분양 아파트', to: '/blog/tags/presale' },
  { label: '3D 지도', to: '/blog/tags/3d-map' },
  { label: '금융·세금', to: '/blog/tags/finance' },
  { label: '개발', to: '/blog/tags/engineering' },
];

function BlogListPageContent({ metadata, items, sidebar }: Props): ReactNode {
  return (
    <BlogLayout sidebar={sidebar}>
      <header className="blog-list-header">
        <h1>{metadata.blogTitle}</h1>
        <p>
          실거래가를 읽는 기준부터 분양 일정과 모집공고, 3D 지도로 보는 생활환경, 세금·대출 계산법까지.
          데이터를 화면으로 옮기는 개발 기록도 함께 담았습니다.
        </p>
        <nav aria-label="주제별 글">
          {topicLinks.map((topic) => (
            <Link key={topic.to} to={topic.to}>
              {topic.label}
            </Link>
          ))}
        </nav>
      </header>
      <PostCardGrid items={items} />
      <BlogListPaginator metadata={metadata} />
    </BlogLayout>
  );
}

export default function BlogListPage(props: Props): ReactNode {
  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogListPage,
      )}
    >
      <BlogListPageMetadata {...props} />
      <BlogListPageStructuredData {...props} />
      <BlogListPageContent {...props} />
    </HtmlClassNameProvider>
  );
}
