# Apartment Insights SEO Content Hub Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the apartment content cluster easier to discover, understand, and navigate toward the 아파트 인사이트 service.

**Architecture:** Keep Docusaurus as the content system and strengthen the existing graph instead of adding a new SEO subsystem. The homepage and one foundational article become hubs; supporting articles receive distinct search intent, contextual internal links, and a relevant service CTA.

**Tech Stack:** Docusaurus, React/TypeScript, Markdown/MDX, Node.js build checks, Cloudflare Pages.

**Spec:** `docs/superpowers/specs/2026-09-01-apartment-insights-seo.md`

## Global Constraints

- Keep public copy in Korean and useful before promotional.
- Do not expose internal model, evaluation, or operations identifiers.
- Do not promise price accuracy, returns, or investment outcomes.
- Use crawlable descriptive links and keep the existing deployment architecture.

---

### Task 1: Protect the SEO hub with regression checks

**Files:** Modify `scripts/check-build.mjs`.

- [ ] Add assertions that the generated homepage contains the five forecast article URLs and the public forecast URL.
- [ ] Add assertions that the statistics pillar source contains links to all five articles and the public service.
- [ ] Add an assertion that generated `build/llms.txt` contains the no-signup article slug.
- [ ] Run `npm run check:seo` before implementation and confirm the new assertions fail.
- [ ] Re-run after implementation with `npm run build && npm run check:seo` and confirm it passes.

### Task 2: Turn the homepage into an apartment forecast hub

**Files:** Modify `src/pages/index.tsx`; modify `src/pages/index.module.css` only if needed.

- [ ] Add a typed five-card data block for no-signup forecast, forecast periods, forecast range, single-trade limitation, and forecast metadata.
- [ ] Render a section titled `아파트 가격 예측을 처음 이용한다면` near the real-estate topic section.
- [ ] Link each card with Docusaurus `Link` and add one contextual external link to `https://apt-insights.com/#free-forecast-experience`.
- [ ] Keep the markup accessible and crawlable with normal anchor output and descriptive Korean text.
- [ ] Run `npm run build && npm run check:seo`.

### Task 3: Expand the foundational statistics article

**Files:** Modify `blog/2026-08-06-real-estate-apartment-statistics/index.md`.

- [ ] Expand the workflow around question definition, complex/size matching, latest transaction sample, historical context, forecast period/range, reference date, and source limitations.
- [ ] Add descriptive links to all five supporting articles and one public service link to `https://apt-insights.com/#free-forecast-experience`.
- [ ] Keep the primary search intent as `부동산과 아파트 통계를 처음 읽는 순서` rather than turning it into another forecast-range article.
- [ ] Run `npm run check:public && npm run build && npm run check:seo`.

### Task 4: Separate overlapping forecast-range intents and dates

**Files:** Modify `blog/2026-08-06_apartment_price_range/index.mdx`, `blog/2026-09-02_apartment-forecast-periods/index.md`, `blog/2026-09-03_apartment-forecast-range-reading/index.md`, `blog/2026-09-04_apartment-single-trade-limit/index.md`, and `blog/2026-09-05_apartment-forecast-metadata/index.md`.

- [ ] Make the older range article the conceptual explanation of why a future price needs a range.
- [ ] Make the new range article the practical guide to lower, middle, and upper values shown in the result screen.
- [ ] Add a clear pillar link back to the statistics guide where relevant.
- [ ] Normalize the five article dates to the actual deployment date, 2026-09-01, unless the release is intentionally scheduled.
- [ ] Run `npm run check:public && npm run build && npm run check:seo`.

### Task 5: Synchronize public discovery assets

**Files:** Modify `static/llms.txt`; modify `scripts/generate-public-assets.mjs` only if necessary.

- [ ] Add all five forecast article entries to the static file using canonical `https://alvin.ing/blog/...` URLs.
- [ ] Build and verify all five slugs appear in both `static/llms.txt` and `build/llms.txt`.
- [ ] Run `git diff --check`.

### Task 6: Add a product-to-blog backlink

**Files:** Modify `/Users/alvin/Documents/github/apt-insights/apps/www/public/index.html`; modify its guides index only if there is a suitable discovery section.

- [ ] Add one contextual link near the official guide section with anchor text such as `아파트 가격 예측 사용법과 읽을거리` pointing to `https://alvin.ing/blog/tags/real-estate`.
- [ ] Avoid repeating promotional links throughout product copy.
- [ ] Run the apt-insights project’s existing build/type/check command and verify the rendered HTML contains the backlink.
- [ ] Commit and push the separate repository only after its checks pass.

### Task 7: Verify, push, and deploy

**Files:** Verify all files changed by Tasks 1–6.

- [ ] Run `npm run typecheck && npm run check:public && npm run build && npm run check:seo && git diff --check`.
- [ ] Confirm homepage, pillar, five articles, both llms files, and product backlink contain the required links and no future dates.
- [ ] Push the blog repository with `git push origin main`.
- [ ] Deploy the blog to Cloudflare Pages using the existing Wrangler configuration.
- [ ] Verify HTTP 200 for homepage, blog index, pillar, and all five forecast article URLs.
- [ ] Commit and push the plan/spec files if they are not already included in the final commit.
