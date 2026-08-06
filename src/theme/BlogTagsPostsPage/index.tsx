import type { ReactNode } from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import { useBlogTagsPostsPageTitle } from '@docusaurus/theme-common/internal';
import Link from '@docusaurus/Link';
import BlogLayout from '@theme/BlogLayout';
import BlogListPaginator from '@theme/BlogListPaginator';
import SearchMetadata from '@theme/SearchMetadata';
import BlogPostItems from '@theme/BlogPostItems';
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

function BlogTagsPostsPageMetadata({ tag }: Pick<Props, 'tag'>): ReactNode {
  const title = useBlogTagsPostsPageTitle(tag);

  return (
    <>
      <PageMetadata title={title} description={tag.description} />
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
  const title = useBlogTagsPostsPageTitle(tag);
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
        <header className="margin-bottom--xl">
          <Heading as="h1">{title}</Heading>
          {tag.description && <p>{tag.description}</p>}
          <Link href={tag.allTagsPath}>
            <Translate
              id="theme.tags.tagsPageLink"
              description="The label of the link targeting the tag list page"
            >
              View All Tags
            </Translate>
          </Link>
        </header>
        <BlogPostItems items={items} />
        <BlogListPaginator metadata={listMetadata} />
      </BlogLayout>
    </HtmlClassNameProvider>
  );
}
