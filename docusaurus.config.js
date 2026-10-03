// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;
const googleSiteVerification = process.env.GOOGLE_SITE_VERIFICATION || '';
const siteDescription =
    '아파트 실거래가와 부동산 통계를 제대로 읽는 기준부터 취득세·양도세 거래비용 계산기, 분양권 손피 계산기까지 제공하는 데이터 아카이브입니다.';
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
    favicon: 'img/alvins-lab-logo.svg',
    stylesheets: [
        {
            href: 'https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css',
            type: 'text/css',
            crossorigin: 'anonymous',
        },
    ],
    headTags: [
        {
            tagName: 'meta',
            attributes: {
                name: 'naver-site-verification',
                content: '3d1bc54b1d81e9f5614d7e87f11760d0',
            },
        },
        ...(googleSiteVerification
            ? [
                  {
                      tagName: 'meta',
                      attributes: {
                          name: 'google-site-verification',
                          content: googleSiteVerification,
                      },
                  },
              ]
            : []),
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
                },
                blog: {
                    showReadingTime: true,
                    blogTitle: '아파트 시세·세금·데이터 읽기',
                    blogDescription: siteDescription,
                    postsPerPage: 12,
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
                        '/docs/superpowers/**',
                        '/markdown-page',
                    ],
                    filename: 'sitemap.xml',
                    createSitemapItems: async ({ routes, siteConfig, defaultCreateSitemapItems }) => {
                        const items = await defaultCreateSitemapItems({ routes, siteConfig });
                        return items.map((item) => {
                            const pathname = new URL(item.url).pathname;
                            if (
                                pathname === '/blog/apartment-transaction-cost-calculator' ||
                                pathname === '/blog/sonpi-tax-calculator' ||
                                pathname === '/blog/83-real-estate-tax-reform-calculator' ||
                                pathname === '/blog/apartment-real-transaction-price-by-region'
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
            image: 'img/alvins-lab-logo.svg',
            colorMode: {
                respectPrefersColorScheme: true,
            },
            metadata: [
                { name: 'naver-site-verification', content: '3d1bc54b1d81e9f5614d7e87f11760d0' },
                ...(googleSiteVerification
                    ? [{ name: 'google-site-verification', content: googleSiteVerification }]
                    : []),
                { name: 'keywords', content: siteKeywords },
                { name: 'author', content: 'Alvin' },
                { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
                { name: 'twitter:card', content: 'summary_large_image' },
                { property: 'og:site_name', content: "Alvin's Lab" },
            ],
            navbar: {
                title: "Alvin's Lab",
                hideOnScroll: false,
                logo: {
                    alt: "Alvin's Lab 로고",
                    src: 'img/alvins-lab-logo.svg',
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
                        label: '아파트 가이드',
                        position: 'left',
                    },
                    {
                        type: 'dropdown',
                        position: 'left',
                        label: '계산기',
                        items: [
                            { label: '아파트 거래비용 계산기', to: '/blog/apartment-transaction-cost-calculator' },
                            { label: '분양권 손피 계산기', to: '/blog/sonpi-tax-calculator' },
                            { label: '보유세 계산기', to: '/blog/83-real-estate-tax-reform-calculator' },
                            { label: '주택담보대출 상환 계산기', to: '/blog/mortgage-rate-apartment-price' },
                        ],
                    },
                    {
                        to: '/blog/tags/finance',
                        label: '금융·세금',
                        position: 'left',
                    },
                    {
                        type: 'dropdown',
                        position: 'left',
                        label: '개발',
                        items: [
                            { label: '개발 블로그', to: '/blog/tags/engineering' },
                            { label: 'D3 시각화', to: '/blog/tags/d3' },
                            { label: '샘플 데모', to: '/docs/category/the-coding-train' },
                        ],
                    },
                    {
                        href: 'https://apt-insights.com/apt/',
                        label: '지역별 실거래가',
                        position: 'right',
                        className: 'header-cta',
                    },
                ],
            },
            footer: {
                style: 'light',
                links: [
                    {
                        title: '아파트 가이드',
                        items: [
                            { label: '아파트 통계 읽는 순서', to: '/blog/real-estate-apartment-statistics-reading-order' },
                            { label: '지역별 실거래가 조회법', to: '/blog/apartment-real-transaction-price-by-region' },
                            { label: '가격 전망 읽는 법', to: '/blog/apartment-forecast-range-reading' },
                            { label: '예측 정확도 확인하기', to: '/blog/apartment-price-forecast-accuracy-backtest' },
                        ],
                    },
                    {
                        title: '계산기',
                        items: [
                            { label: '거래비용 계산기', to: '/blog/apartment-transaction-cost-calculator' },
                            { label: '분양권 손피 계산기', to: '/blog/sonpi-tax-calculator' },
                            { label: '보유세 계산기', to: '/blog/83-real-estate-tax-reform-calculator' },
                            { label: '대출 상환 계산기', to: '/blog/mortgage-rate-apartment-price' },
                        ],
                    },
                    {
                        title: '데이터 도구',
                        items: [
                            { label: '지역별 아파트 실거래가', href: 'https://apt-insights.com/apt/' },
                            { label: '1년 뒤 예상 가격 범위', href: 'https://apt-insights.com/#free-forecast-experience' },
                            { label: '예측 검증 방법', href: 'https://apt-insights.com/guides/backtest-validation' },
                        ],
                    },
                    {
                        title: '개발',
                        items: [
                            { label: '개발 블로그', to: '/blog/tags/engineering' },
                            { label: '샘플 데모', to: '/docs/category/the-coding-train' },
                            { label: 'GitHub', href: 'https://github.com/seogi1004' },
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
