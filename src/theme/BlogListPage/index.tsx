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
import BlogPostItems from '@theme/BlogPostItems';
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

function BlogListPageContent({ metadata, items, sidebar }: Props): ReactNode {
  return (
    <BlogLayout sidebar={sidebar}>
      <BlogPostItems items={items} />
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
