import React, { type ReactNode } from 'react';
import Footer from '@theme-original/BlogPostItem/Footer';
import type FooterType from '@theme/BlogPostItem/Footer';
import type { WrapperProps } from '@docusaurus/types';
import { useBlogPost } from '@docusaurus/plugin-content-blog/client';
import PostToolbox from '@site/src/components/PostToolbox';

type Props = WrapperProps<typeof FooterType>;

export default function FooterWrapper(props: Props): ReactNode {
    const { metadata, isBlogPostPage } = useBlogPost();
    const tagKeys = metadata.tags.map((tag) => tag.permalink.split('/').pop() ?? '');
    return (
        <>
            {isBlogPostPage ? <PostToolbox permalink={metadata.permalink} tagKeys={tagKeys} /> : null}
            <Footer {...props} />
        </>
    );
}
