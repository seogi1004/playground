# 아파트 인사이트 콘텐츠 발행 백로그

> 조사 기준일: 2026-08-06
>
> 이 백로그는 카탈로그에서 우선순위를 정한 후보만 모은 실행 목록이다. 모든 항목은 이 파일(`playground/plans/`)을 기준으로 한 `source_markdown`과 `source_section`을 반드시 가진다. 다음 세션에서는 이 두 필드를 먼저 열어 현재성·구현 상태·공개 가능 범위를 재확인한 뒤 초안을 작성한다.

## 상태 정의

| 상태 | 의미 |
|---|---|
| `candidate` | 문서 근거는 있으나 초안 작성 전 |
| `source_review` | 기준일·수치·현재 기능을 다시 확인해야 함 |
| `draft_ready` | 공개용 표현과 CTA까지 정리되어 초안 작성 가능 |
| `blocked_public_safety` | 내부 정보·민감한 수치·법적 검토 때문에 공개 후보에서 보류 |
| `published` | 공개 문구 검수 후 블로그에 발행 완료 |
| `published_later` | 기존 글 또는 릴리즈 이후 갱신용 |

## 1차 발행 큐

| 순번 | 후보 ID | 트랙 | 작업 제목 | source_markdown (exact path) | source_section | 상태 | CTA | 공개 검수 |
|---:|---|---|---|---|---|---|---|---|
| 1 | RE-001 | Real Estate | 아파트 가격을 현재 거래가·과거 이력·예상 범위로 나눠 보는 법 | `../../apt-insights/docs/guide/USER_GUIDE.md` | 단지 상세·시뮬레이션 | published | 아파트 검색·상세 | 공개용 표현 재작성 |
| 2 | RE-003 | Real Estate | 미래 가격을 하나의 숫자보다 범위로 봐야 하는 이유 | `../../apt-insights/docs/business/STORE_LISTING.md` | 확률 분포·가격 범위 | published | 예측 범위 확인 | 면책·범위 정의 |
| 3 | RE-011 | Housing Finance | 주택담보대출 금리와 아파트 가격의 연결을 읽는 법 | `../../apt-insights/docs/ECOS_FACTOR_MAPPING.md` | 금리 출처·정의 | published | 금리 시나리오 | 최신 출처 확인 |
| 4 | RE-021 | Housing Finance | 보유세 계산에서 현행 기준과 정책안 기준을 나눠 보는 이유 | `../../apt-insights/docs/FEATURES.md` | 보유세 계산기 | published | 보유세 계산 | 세무 면책·정책 기준일 |
| 5 | RE-026 | Real Estate | 교통 호재를 발표·검토·착공·개통 단계로 구분하는 법 | `../../apt-insights/docs/FEATURES.md` | 교통·입지 지표 | published | 입지 카드 | 공식 자료 갱신 |
| 6 | RE-031 | Real Estate | 신축 아파트의 거래 표본이 부족할 때 분석 결과를 읽는 법 | `../../apt-insights/docs/architecture/ON_DEMAND_SCALING.md` | 신축 데이터 부족 처리 | draft_ready | 신축 거래·신뢰도 | 내부 처리 방식 추상화 |
| 7 | RE-037 | Real Estate | 기본 경로와 가상 시나리오의 차이 | `../../apt-insights/docs/FEATURES.md` | 가상 시나리오 | draft_ready | 시나리오 선택 | 내부 계산 구조 제외 |
| 8 | RE-043 | Real Estate | 아파트 인사이트 처음 시작하기: 지역·단지·이사 시점 입력 | `../../apt-insights/docs/guide/USER_GUIDE.md` | 온보딩 | draft_ready | 온보딩 시작 | 현재 화면 확인 |
| 9 | RE-046 | Real Estate | A안·B안 시뮬레이션으로 이사 시점을 비교하는 방법 | `../../apt-insights/docs/guide/USER_GUIDE.md` | 타임라인 | draft_ready | A/B 타임라인 | 재무 조언처럼 쓰지 않기 |
| 10 | RE-051 | Real Estate | 평균 절대 오차를 아파트 예측 성적표에서 읽는 법 | `../../apt-insights/docs/reports/v31.1/VALIDATION.md` | 공식 검증 개요·지표 정의 | source_review | 검증 안내 | 최신 모델·기준일 확인 |
| 11 | RE-056 | Real Estate | AI 설명과 가격 시뮬레이션 결과가 다른 역할을 하는 이유 | `../../apt-insights/docs/business/STORE_LISTING.md` | AI 맞춤 진단·면책 | draft_ready | 개인화 분석 | AI 면책·내부 프롬프트 제외 |
| 12 | TECH-006 | Technology | 전국 데이터를 미리 계산하지 않고 사용자가 보는 지역부터 확장하는 온디맨드 구조 | `../../apt-insights/docs/architecture/ON_DEMAND_SCALING.md` | 핵심 원칙·지역 카탈로그 | draft_ready | 앱 검색 데모 | 규모·내부 식별자 추상화 |
| 13 | RE-061 | Real Estate | 보유세·시나리오·신축·재건축 카드를 함께 읽는 순서 | `../../apt-insights/docs/reports/release-notes/RELEASE_NOTE_v5.1.6.md` | 주요 변경·보유세·시뮬레이션 보정 카드 | source_review | 보유세·시뮬레이션 | 현재 UI·정책 기준일 확인 |
| 14 | TECH-041 | Technology | 모델 수치를 바꾸지 않고 UI 일관성과 SEO를 함께 정비한 릴리즈 | `../../apt-insights/docs/reports/release-notes/RELEASE_NOTE_v5.1.6.md` | 2026-08-06 후속 정비 | source_review | 웹 서비스·블로그 | 내부 식별자 제거 |
| 15 | TECH-042 | Technology | 서버리스 아파트 분석 플랫폼의 전체 구조를 공개 가능한 수준으로 설명하는 법 | `../../apt-insights/docs/architecture/ARCHITECTURE.md` | 개요·전체 시스템 구성·안정성 게이트 | source_review | GitHub·앱 데모 | 인프라·모델 세부 추상화 |

## 2026-08-06 발행 결과

아래 글은 각 후보의 `source_markdown`을 바탕으로 공개용 표현으로 재작성한 결과다. 내부 모델 구조·등급·밴드·셀·운영 식별자는 포함하지 않으며, 글 안에는 독자가 직접 확인할 수 있는 공식 자료 링크와 면책 문구를 둔다.

| 후보 ID | blog_markdown (exact path) | 차트·도구 | 공개 자료 링크 |
|---|---|---|---|
| RE-001 | `../blog/2026-08-06_apartment_price_layers/index.mdx` | 현재·과거·미래 가격 층위 SVG 차트 | 국토교통부 실거래가 공개시스템 |
| RE-003 | `../blog/2026-08-06_apartment_price_range/index.mdx` | 가격 범위와 불확실성 SVG 차트 | 공개 미래가격 가이드 |
| RE-011 | `../blog/2026-08-06_mortgage_rate_apartment_price/index.mdx` | 금리→상환 부담→거래 흐름 SVG 차트 | 한국은행 금융·경제 통계 |
| RE-021 | `../blog/2026-08-06-83_real_estate_tax_reform/index.mdx` | 보유세 조건별 계산기 | 재정경제부·국가법령정보센터 |
| RE-026 | `../blog/2026-08-06_transport_benefit_stages/index.mdx` | 교통 사업 단계 타임라인 | 국토교통부·공공데이터포털 |

## 2차 부동산·주거금융 큐

| 후보 ID | 작업 제목 | source_markdown (exact path) | source_section | 상태 | 파생 조건 |
|---|---|---|---|---|---|
| RE-004 | 최근 거래 한 건만으로 우리 아파트 시세를 판단하면 안 되는 이유 | `../../apt-insights/docs/guide/TRADE_SYNC.md` | 실거래 표본·동기화 | candidate | 거래 데이터 최신성 확인 |
| RE-005 | 전세가율을 매매 판단의 단독 기준으로 사용하면 안 되는 이유 | `../../apt-insights/docs/FACTORS.md` | 전세 관련 공개 개념 | source_review | 내부 변수명 제거 |
| RE-007 | 같은 동네 아파트 가격이 다르게 움직이는 이유를 읽는 순서 | `../../apt-insights/docs/FEATURES.md` | 단지·지역 지표 | candidate | 지역 수치 없이 먼저 작성 |
| RE-012 | 금리가 바뀌어도 아파트 가격이 바로 움직이지 않을 수 있는 이유 | `../../apt-insights/docs/history/SERVICE_HISTORY.md` | 시장 신호 문맥 | candidate | 정책·금리 기준일 표시 |
| RE-015 | 가계부채를 주택시장 위험 신호로 읽을 때의 한계 | `../../apt-insights/docs/ECOS_FACTOR_MAPPING.md` | 가계부채 출처 | source_review | 최신 공공 통계 확인 |
| RE-016 | 건설비가 오를 때 신축 아파트 가격을 읽는 방법 | `../../apt-insights/docs/ECOS_FACTOR_MAPPING.md` | 건설비 출처 | candidate | 일반 원리 중심 |
| RE-018 | 정책 발표 직후 아파트 가격이 바로 움직이지 않는 이유 | `../../apt-insights/docs/history/SERVICE_HISTORY.md` | 정책 시나리오 | source_review | 확정 법률과 구분 |
| RE-022 | 공시가격으로 계산한 보유세가 실제 고지액과 다를 수 있는 이유 | `../../apt-insights/docs/superpowers/specs/2026-08-04-holding-tax-public-price-design.md` | 공시가격 보완 설계 | source_review | 세법 전문가 검토 |
| RE-028 | 직주근접·교통·학군·생활 인프라를 따로 읽는 순서 | `../../apt-insights/docs/FEATURES.md` | 입지 지표 | draft_ready | 특정 점수 공개 금지 |
| RE-032 | 일반 매매와 분양권 거래를 같은 가격 데이터로 합치면 안 되는 이유 | `../../apt-insights/docs/guide/TRADE_SYNC.md` | 거래 유형·필터 | draft_ready | 거래 유형 정의 확인 |
| RE-038 | 금리 상승·공급 변화 시나리오를 넣고 결과를 비교하는 순서 | `../../apt-insights/docs/history/SERVICE_HISTORY.md` | 시나리오 적용 경계 | source_review | 현재 UI·정책 확인 |
| RE-047 | 예측 변경 이력과 알림을 함께 사용하는 순서 | `../../apt-insights/docs/guide/PREDICTION_NOTIFICATION_FLOW.md` | 사용자 영향·전체 흐름 | source_review | 알림 정책 확인 |
| RE-048 | 분석 결과 공유 URL을 보낼 때 확인할 개인정보와 만료 조건 | `../../apt-insights/docs/business/STORE_LISTING.md` | 공유 기능·민감 정보 보호 | source_review | 현재 만료 정책 확인 |
| RE-052 | R²와 평균 절대 오차를 함께 봐야 하는 이유 | `../../apt-insights/docs/reports/v31.1/VALIDATION.md` | 지표 정의·해석 한계 | source_review | 최신 수치 확인 |
| RE-058 | 데이터가 부족한 단지에서 확신보다 한계를 먼저 봐야 하는 이유 | `../../apt-insights/docs/architecture/ON_DEMAND_SCALING.md` | 데이터 부족 처리 | draft_ready | 내부 프록시 구현 제외 |

## 2차 기술·개발자 큐

| 후보 ID | 작업 제목 | source_markdown (exact path) | source_section | 상태 | 배포 채널 |
|---|---|---|---|---|---|
| TECH-002 | AI가 코드를 많이 쓰는 것보다 중요한 작업 경계와 검증 기준 | `../../apt-insights/docs/history/AI_DEV_STATISTICS.md` | AI 개발 성과·검증 | source_review | 블로그·긱뉴스 |
| TECH-008 | 사용자가 보는 단지에 실거래 동기화를 우선 배치한 이유 | `../../apt-insights/docs/guide/TRADE_SYNC.md` | 경로 요약·화면 진입 동기화 | draft_ready | 블로그·긱뉴스 |
| TECH-011 | 실거래 수집 작업을 멱등·재시도·부분 실패 복구로 설계한 이유 | `../../apt-insights/docs/reports/release-notes/RELEASE_NOTE_v4.8.3.md` | 부분 실패·복구 | draft_ready | 긱뉴스 |
| TECH-014 | 웹과 엣지의 캐시 역할을 분리해 병목을 줄인 이유 | `../../apt-insights/docs/architecture/ON_DEMAND_SCALING.md` | 캐시 계층 | source_review | 긱뉴스 |
| TECH-016 | 생성형 AI 호출 비용을 캐시·재실행·사용량 정책으로 통제한 방법 | `../../apt-insights/docs/operations/GEMINI_USAGE.md` | 캐시·모니터링·비용 | source_review | 긱뉴스 |
| TECH-019 | 학습·검증·서빙 입력을 맞추지 않으면 생기는 train-serve skew | `../../apt-insights/docs/reports/audits/EDGE_MIGRATION_AUDIT.md` | 계산식 크로스체크·skew | blocked_public_safety | 기술 채널 한정·내부 수식 제외 |
| TECH-024 | 데이터베이스·큐·외부 API 장애를 가정한 1인 개발 서비스 복구 런북 | `../../apt-insights/docs/guide/DR_RUNBOOK.md` | 장애 시나리오·운영 대응 | source_review | 자격증명·경로 제외 |
| TECH-029 | 부동산 분석 서비스를 검색엔진과 AI 검색에 함께 노출시키는 문서 구조 | `../../apt-insights/docs/history/SERVICE_HISTORY.md` | SEO·AI Search Discovery | draft_ready | 현재 사이트 확인 |
| TECH-031 | 웹 서비스를 Android·iOS 앱으로 확장할 때 Capacitor에서 검토할 것들 | `../../apt-insights/docs/android/ANDROID_CAPACITOR_TECH_REVIEW.md` | WebView·오프라인·OAuth | source_review | 긱뉴스 |
| TECH-034 | 공용 버튼·카드·스켈레톤 토큰으로 화면 일관성과 CLS를 줄인 회고 | `../../apt-insights/docs/design/UI_CONSISTENCY_IMPROVEMENT_PRD.md` | 목표·진단 | draft_ready | 블로그·긱뉴스 |

## 다음 세션 실행 순서

1. `source_review` 항목은 표의 `source_markdown` 파일을 먼저 열고 기준일·현재 상태를 확인한다.
2. `blocked_public_safety` 항목은 일반화한 기술 글로 재설계할 수 있을 때만 유지한다.
3. `draft_ready` 항목부터 제목·개요·CTA·면책 초안을 작성한다.
4. 초안 파일명은 공백 없이 `_`를 사용한다.
5. 초안 저장 전 `pnpm run check:public-copy`와 수동 공개 문구 점검을 실행한다.
