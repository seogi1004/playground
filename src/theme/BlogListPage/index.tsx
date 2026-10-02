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
  { label: '금융·세금', to: '/blog/tags/finance' },
  { label: '개발', to: '/blog/tags/engineering' },
];

function BlogListPageContent({ metadata, items, sidebar }: Props): ReactNode {
  return (
    <BlogLayout sidebar={sidebar}>
      <header className="blog-list-header">
        <h1>{metadata.blogTitle}</h1>
        <p>실거래가·대표 시세·가격 전망을 읽는 기준과 세금·대출 계산 방법, 그리고 데이터를 화면으로 만드는 개발 기록입니다.</p>
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
