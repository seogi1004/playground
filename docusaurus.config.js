// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: '부동산·아파트 데이터와 기술 아카이브',
    tagline:
        '부동산·아파트 통계를 읽는 법과 데이터 시각화·웹 성능을 만드는 기술을 기록합니다',
    url: 'https://alvin.ing',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    markdown: {
        hooks: {
            onBrokenMarkdownLinks: 'throw',
        },
    },
    favicon: 'img/favicon.ico',
    headTags: [
        {
            tagName: 'meta',
            attributes: {
                name: 'naver-site-verification',
                content: '3d1bc54b1d81e9f5614d7e87f11760d0',
            },
        },
    ],

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'seogi1004', // Usually your GitHub org/user name.
    projectName: 'playground', // Usually your repo name.

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'ko',
        locales: ['ko'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                    blogSidebarTitle: '최근 글',
                    blogSidebarCount: 'ALL',
                    showLastUpdateTime: true,
                    showLastUpdateAuthor: true,
                    onUntruncatedBlogPosts: 'ignore',
                    tags: 'tags.yml',
                    feedOptions: {
                        type: 'all',
                        title: '부동산·아파트 데이터와 기술 아카이브',
                        description:
                            '부동산·아파트 통계, 데이터 시각화, 웹 성능과 개발 기록을 모은 기술 블로그입니다.',
                        copyright: `Copyright © ${new Date().getFullYear()} Alvin's Playground`,
                        language: 'ko-KR',
                        limit: false,
                    },
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
                sitemap: {
                    lastmod: 'date',
                    changefreq: 'weekly',
                    priority: 0.5,
                    ignorePatterns: [
                        '/blog/tags',
                        '/blog/tags/**',
                        '/blog/archive',
                        '/blog/authors',
                        '/blog/page',
                        '/blog/page/**',
                    ],
                    filename: 'sitemap.xml',
                    createSitemapItems: async ({ routes, siteConfig, defaultCreateSitemapItems }) => {
                        const items = await defaultCreateSitemapItems({ routes, siteConfig });
                        return items.map((item) => {
                            const pathname = new URL(item.url).pathname;
                            if (pathname === '/') {
                                return { ...item, changefreq: 'weekly', priority: 1.0 };
                            }
                            if (pathname === '/blog' || pathname === '/blog/') {
                                return { ...item, changefreq: 'weekly', priority: 0.9 };
                            }
                            if (pathname.startsWith('/blog/')) {
                                return { ...item, changefreq: 'monthly', priority: 0.7 };
                            }
                            if (pathname.startsWith('/docs/')) {
                                return { ...item, changefreq: 'monthly', priority: 0.6 };
                            }
                            return item;
                        });
                    },
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            image: 'img/logo.png',
            metadata: [
                { name: 'naver-site-verification', content: '3d1bc54b1d81e9f5614d7e87f11760d0' },
                { name: 'keywords', content: '부동산, 아파트, 아파트 통계, 아파트 실거래가, 부동산 데이터, 아파트 시세, 전세, 금리, 공급, 세금, 데이터 시각화, 웹 성능, React, D3.js, Docusaurus' },
                { name: 'author', content: 'Alvin' },
                { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
                { name: 'twitter:card', content: 'summary_large_image' },
                { name: 'og:site_name', content: '부동산·아파트 데이터와 기술 아카이브' },
                { name: 'og:type', content: 'website' },
                { name: 'og:locale', content: 'ko_KR' },
            ],
            navbar: {
                title: '부동산·아파트 데이터',
                logo: {
                    alt: 'My Site Logo',
                    src: 'img/logo.png',
                },
                items: [
                    {
                        type: 'doc',
                        docId: 'intro',
                        position: 'left',
                        label: 'Research',
                    },
                    { to: '/blog', label: 'Blog', position: 'left' },
                    {
                        to: '/blog/tags/real-estate',
                        label: 'Real Estate',
                        position: 'left',
                    },
                    {
                        href: 'https://github.com/seogi1004/playground',
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Docs',
                        items: [
                            {
                                label: 'Research',
                                to: '/docs/intro',
                            },
                        ],
                    },
                    {
                        title: 'More',
                        items: [
                            {
                                label: 'Facebook',
                                to: 'https://www.facebook.com/seogi1004',
                            },
                            {
                                label: 'GitHub',
                                href: 'https://github.com/seogi1004',
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
