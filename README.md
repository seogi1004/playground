# 부동산·아파트 데이터와 기술 아카이브

이 저장소는 [Docusaurus 3](https://docusaurus.io/) 기반의 정적 블로그입니다. 기존 `Research`·`Blog`·`GitHub` 구조에 `Real Estate` 태그 허브를 추가하고, 부동산·아파트 통계 콘텐츠와 개발자 기술 글을 함께 운영합니다.

## 로컬 실행

```bash
npm install
npm start
```

## 글 발행

`blog/YYYY-MM-DD-slug/index.md` 또는 `index.mdx`를 추가하면 다음 빌드부터 자동으로 블로그 목록, 태그 페이지, RSS, Atom, JSON Feed, canonical 메타데이터, BlogPosting JSON-LD에 반영됩니다.

권장 front matter:

```yaml
---
title: 부동산과 아파트 통계를 처음 읽는 순서
description: 검색 결과와 공유 카드에 사용할 한 문장 요약
authors: [alvin]
tags: [real-estate, apartments, real-estate-data]
keywords: [부동산, 아파트, 아파트 통계]
date: 2026-08-06
---
```

본문에는 `<!-- truncate -->`를 넣어 목록 페이지의 요약 길이를 제어합니다. 부동산 글은 공개 출처, 기준일, 지역 범위, 면적 조건, 해석의 한계를 함께 적습니다. 서비스 이름을 제목·슬러그·첫 문단에 반복해 홍보하기보다 정보 검색 의도에 먼저 답하는 편집 원칙을 적용합니다.

## SEO·자동 생성

```bash
npm run build
```

`build` 스크립트는 Docusaurus를 빌드한 뒤 다음을 검증·생성합니다.

- Docusaurus sitemap 플러그인: `build/sitemap.xml`
- Docusaurus blog feed: `build/blog/rss.xml`, `atom.xml`, `feed.json`
- Docusaurus 자동 구조화 데이터: 블로그의 `BlogPosting`, 문서의 breadcrumb JSON-LD
- 빌드 결과를 읽어 만든 `build/llms.txt`, `build/llms-full.txt`
- canonical·title·description·sitemap·feed·구조화 데이터 검증
- 공개 글의 아파트 내부 분류·검증 식별자 노출 방지 검사

Cloudflare Pages를 연결할 경우 대시보드 설정은 다음과 같습니다.

- Build command: `npm run build`
- Build output directory: `build`
- Root directory: `/`
- Node.js: Docusaurus 3.10.2가 요구하는 Node.js 20 이상

`build/`와 `.docusaurus/`는 생성물이라 커밋하지 않습니다. Git에 글을 커밋·푸시하면 Pages가 빌드 명령을 실행하고 결과물을 배포합니다.

## 공개 콘텐츠 안전 규칙

아파트 내부 분류 체계, 셀 구조, 검증 표본 식별자, 운영용 모델 키·경로는 블로그나 `llms` 파일에 쓰지 않습니다. 기술 글에서 일반적인 라이브러리 용어를 설명하는 경우에도 아파트 내부 체계와 연결해 서술하지 않습니다.
