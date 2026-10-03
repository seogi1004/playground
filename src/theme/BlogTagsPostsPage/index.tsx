import type { ReactNode } from 'react';
import clsx from 'clsx';
import Head from '@docusaurus/Head';
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import Link from '@docusaurus/Link';
import BlogLayout from '@theme/BlogLayout';
import BlogListPaginator from '@theme/BlogListPaginator';
import SearchMetadata from '@theme/SearchMetadata';
import PostCardGrid from '@site/src/components/PostCardGrid';
import Unlisted from '@theme/ContentVisibility/Unlisted';
import Heading from '@theme/Heading';
import type {
  BlogPaginatedMetadata,
  BlogSidebar,
} from '@docusaurus/plugin-content-blog';
import type { TagModule } from '@docusaurus/utils';
import type { Content } from '@theme/BlogPostPage';

type Props = {
  readonly sidebar: BlogSidebar;
  readonly tag: TagModule;
  readonly listMetadata: BlogPaginatedMetadata;
  readonly items: readonly { readonly content: Content }[];
};

function filterSidebarByTag(
  sidebar: BlogSidebar,
  items: readonly { readonly content: Content }[],
): BlogSidebar {
  const tagPostPermalinks = new Set(
    items.map(({ content }) => content.metadata.permalink),
  );

  return {
    ...sidebar,
    items: sidebar.items.filter((item) =>
      tagPostPermalinks.has(item.permalink),
    ),
  };
}

// 기본 한국어 번역("…{nPosts}개의 게시물이 있습니다")은 nPosts에 이미 '개 게시물'이 붙어
// "9개 게시물개의 게시물"처럼 중복되므로 제목을 직접 만든다.
const tagPageTitle = (tag: TagModule) => `${tag.label} 글 ${tag.count}개`;

function BlogTagsPostsPageMetadata({ tag }: Pick<Props, 'tag'>): ReactNode {
  const title = tagPageTitle(tag);

  return (
    <>
      <PageMetadata title={title} description={tag.description} />
      <Head>
        <meta name="robots" content="noindex, follow" />
      </Head>
      <SearchMetadata tag="blog_tags_posts" />
    </>
  );
}

export default function BlogTagsPostsPage({
  tag,
  items,
  sidebar,
  listMetadata,
}: Props): ReactNode {
  const tagSidebar = filterSidebarByTag(sidebar, items);

  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogTagPostListPage,
      )}
    >
      <BlogTagsPostsPageMetadata tag={tag} />
      <BlogLayout sidebar={tagSidebar}>
        {tag.unlisted && <Unlisted />}
        <header className="blog-list-header">
          <p className="blog-list-eyebrow">
            태그 · 글 {tag.count}개
          </p>
          <Heading as="h1">{tag.label}</Heading>
          {tag.description && <p>{tag.description}</p>}
          <Link href={tag.allTagsPath}>모든 태그 보기</Link>
        </header>
        <PostCardGrid items={items} />
        <BlogListPaginator metadata={listMetadata} />
      </BlogLayout>
    </HtmlClassNameProvider>
  );
}
