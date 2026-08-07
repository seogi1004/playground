// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;
const siteDescription =
    '부동산·아파트 통계와 실거래가를 읽는 법부터 데이터 시각화, 웹 성능과 개발 기록까지 정리한 한국어 아카이브입니다.';
const siteKeywords =
    '부동산, 아파트, 아파트 통계, 아파트 실거래가, 부동산 데이터, 아파트 시세, 아파트 가격 전망, 교통 호재, 주택담보대출, 보유세 계산기, 거래비용 계산기, 아파트 거래비용, 취득세 계산, 양도소득세 계산, 부동산 중개보수, 분양권 손피 계산기, 손피 계산, 분양권 양도세, 중도금 이자, 전세, 금리, 공급, 세금, 데이터 시각화, 웹 성능, React, D3.js, Docusaurus';

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "Alvin's Lab",
    tagline: siteDescription,
    url: 'https://alvin.ing',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    markdown: {
        hooks: {
            onBrokenMarkdownLinks: 'throw',
        },
    },
    favicon: 'img/alvins-lab-mark.svg',
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
                    blogTitle: '부동산·아파트와 개발 기록',
                    blogDescription: siteDescription,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                    blogSidebarTitle: '최근 글',
                    // Tag pages narrow the sidebar to the current tag; the blog index keeps all posts.
                    // Article pages hide this sidebar so the article and TOC stay wide.
                    blogSidebarCount: 'ALL',
                    showLastUpdateTime: true,
                    showLastUpdateAuthor: true,
                    onUntruncatedBlogPosts: 'ignore',
                    tags: 'tags.yml',
                    feedOptions: {
                        type: 'all',
                        title: "Alvin's Lab",
                        description: siteDescription,
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
                            if (
                                pathname === '/blog/apartment-transaction-cost-calculator' ||
                                pathname === '/blog/sonpi-tax-calculator'
                            ) {
                                return { ...item, changefreq: 'weekly', priority: 0.9 };
                            }
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
            image: 'img/alvins-lab-mark.svg',
            metadata: [
                { name: 'naver-site-verification', content: '3d1bc54b1d81e9f5614d7e87f11760d0' },
                { name: 'keywords', content: siteKeywords },
                { name: 'author', content: 'Alvin' },
                { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
                { name: 'twitter:card', content: 'summary_large_image' },
                { name: 'og:site_name', content: "Alvin's Lab" },
                { name: 'og:type', content: 'website' },
                { name: 'og:locale', content: 'ko_KR' },
            ],
            navbar: {
                title: "Alvin's Lab",
                logo: {
                    alt: "Alvin's Lab 로고",
                    src: 'img/alvins-lab-mark.svg',
                },
                items: [
                    {
                        to: '/blog',
                        label: '전체 글',
                        activeBaseRegex: '^/blog/?$|^/blog/page(?:/|$)',
                        position: 'left',
                    },
                    {
                        to: '/blog/tags/real-estate',
                        label: '부동산·아파트',
                        position: 'left',
                    },
                    {
                        to: '/blog/tags/finance',
                        label: '금융·세금',
                        position: 'left',
                    },
                    {
                        type: 'dropdown',
                        position: 'left',
                        label: '개발·리서치',
                        items: [
                            {
                                label: '개발 블로그',
                                to: '/blog/tags/engineering',
                            },
                            {
                                label: '샘플 데모',
                                to: '/docs/category/the-coding-train',
                            },
                            {
                                label: 'D3 시각화',
                                to: '/blog/tags/d3',
                            },
                        ],
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Explore',
                        items: [
                            {
                                label: '아파트 인사이트',
                                href: 'https://app.apt-insights.com',
                            },
                            {
                                label: '개발·리서치',
                                to: '/docs/intro',
                            },
                        ],
                    },
                    {
                        title: 'Elsewhere',
                        items: [
                            {
                                label: 'GitHub',
                                href: 'https://github.com/seogi1004',
                            },
                        ],
                    },
                ],
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
