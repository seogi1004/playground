# 아파트 인사이트 기술·1인 개발 콘텐츠 카탈로그

> 조사 기준일: 2026-08-06
>
> 이 목록은 긱뉴스·개발자 커뮤니티·B2B 독자를 위한 별도 트랙이다. 각 후보의 `source_markdown`은 이 카탈로그 파일(`playground/plans/`)을 기준으로 다음 세션에서 다시 읽어야 하는 정확한 출처 파일이며, `근거 섹션`은 제목을 뒷받침하는 범위다. 내부 경로·모델 상수·분류 체계·캐시 키·큐 이름·프롬프트·비용 한도는 발행 원문에 복사하지 않고 일반화한다.

| ID | 우선순위 | 콘텐츠 유형 | 작업 제목 | source_markdown (exact path) · 근거 섹션 | 독자·배포 | 제품 연결 | 공개 상태 |
|---|---:|---|---|---|---|---|---|
| TECH-001 | P0 | 1인 개발 회고 | 1인 개발자가 부동산 분석 서비스를 운영하며 먼저 자동화한 일들 | `../../apt-insights/docs/reports/SOLO_DEVELOPMENT_STATISTICS.md` · 왜 이 리포트를 쓰는가·개발 리듬·품질 지표; `../../apt-insights/docs/history/AI_DEV_STATISTICS.md` · 개발 성과 | 1인 개발자·긱뉴스 | 데모·블로그 원문 | 공개 가능, 수치 재확인 |
| TECH-002 | P0 | AI 협업 회고 | AI가 코드를 많이 쓰는 것보다 중요한 작업 경계와 검증 기준 | `../../apt-insights/docs/history/AI_DEV_STATISTICS.md` · AI 개발 성과·검증; `../../apt-insights/docs/guide/WEB_STABILITY_RUNBOOK.md` · 안정성 게이트 | AI 코딩 사용자·긱뉴스 | 공개 저장소·앱 데모 | 공개 가능, 내부 식별자 제거 |
| TECH-003 | P0 | 문서화 | 혼자 개발할수록 작업 지침서와 공개 문구 검수 규칙이 필요한 이유 | `../../apt-insights/AGENTS.md` · 콘텐츠·보안·검증 정책; `../../apt-insights/docs/public-copy-checklist.md` · 발행 전 검사 | 개발자·B2B 블로그 | 공개 문서 원칙 | 공개 가능, 비밀값 제외 |
| TECH-004 | P1 | 운영 회고 | 1인 개발 서비스에서 기능 욕심을 운영 가능한 범위로 줄이는 방법 | `../../apt-insights/docs/reports/SOLO_DEVELOPMENT_STATISTICS.md` · 개발 규모·운영 리듬; `../../apt-insights/docs/history/SERVICE_HISTORY.md` · 릴리즈 경계 | 1인 창업·SaaS 개발자 | 앱 데모 | 공개 가능, 실측 갱신 |
| TECH-005 | P1 | 프로세스 | 계획·설계·구현·검증 문서를 하나의 변경 흐름으로 관리한 방법 | `../../apt-insights/docs/superpowers/plans/2026-08-03-docs-refresh.md` · 문서 정합성; `../../apt-insights/docs/README.md` · 문서 인덱스 | 개발팀·AI 에이전트 사용자 | GitHub·문서 | 계획과 구현 구분 |
| TECH-006 | P0 | 아키텍처 | 전국 데이터를 미리 계산하지 않고 사용자가 보는 지역부터 확장하는 온디맨드 구조 | `../../apt-insights/docs/architecture/ON_DEMAND_SCALING.md` · 핵심 원칙·왜 이렇게 설계했나·지역 카탈로그 | 서버리스·데이터 플랫폼 개발자·긱뉴스 | 앱 검색 데모 | 공개 가능, 규모·내부 한도 추상화 |
| TECH-007 | P0 | 데이터 파이프라인 | 지역을 선택하는 순간 검색 카탈로그를 지연 구축하는 설계 | `../../apt-insights/docs/architecture/ON_DEMAND_SCALING.md` · 지역 검색 카탈로그; `../../apt-insights/docs/history/SERVICE_HISTORY.md` · 지역 검색 최신화 | 검색·데이터 엔지니어 | 아파트 검색 | 공개 가능, 라우트·키 비공개 |
| TECH-008 | P0 | 데이터 파이프라인 | 사용자가 보는 단지에 실거래 동기화를 우선 배치한 이유 | `../../apt-insights/docs/architecture/ON_DEMAND_SCALING.md` · 실거래 동기화; `../../apt-insights/docs/guide/TRADE_SYNC.md` · 경로 요약·화면 진입 동기화 | 데이터·백엔드 개발자·긱뉴스 | 관심 단지 등록 | 공개 가능, 배치 세부값 제거 |
| TECH-009 | P1 | 확장성 | 아파트를 등록하는 행동이 데이터 커버리지를 넓히는 구조 | `../../apt-insights/docs/architecture/ON_DEMAND_SCALING.md` · 아파트 추가·사용자별 이력 | 서버리스·제품 엔지니어 | 온보딩 데모 | 공개 가능, 내부 필드명 제거 |
| TECH-010 | P0 | 메시징 | 무거운 작업을 큐로 분리하고 장애 시 대체 경로를 둔 설계 | `../../apt-insights/docs/architecture/QUEUE_ROUTING.md` · 실제 흐름·재시도; `../../apt-insights/docs/architecture/ON_DEMAND_SCALING.md` · 큐 인프라 | 백엔드·인프라 개발자·긱뉴스 | 앱 처리 안정성 | 공개 가능, 공급자·키 상세 추상화 |
| TECH-011 | P0 | 신뢰성 | 실거래 수집 작업을 멱등·재시도·부분 실패 복구로 설계한 이유 | `../../apt-insights/docs/guide/TRADE_SYNC.md` · 실패 월·재시도·완료 조건; `../../apt-insights/docs/reports/release-notes/RELEASE_NOTE_v4.8.3.md` · 부분 실패 보강 | 백엔드·데이터 파이프라인 개발자 | 거래 데이터 신뢰 | 공개 가능 |
| TECH-012 | P1 | 신뢰성 | 수집이 덜 끝났을 때 성공으로 기록하지 않는 fail-closed 원칙 | `../../apt-insights/docs/guide/TRADE_SYNC.md` · 실패 처리; `../../apt-insights/docs/guide/PREDICTION_INPUT_PARITY.md` · 공통 입력 계약 | 데이터 플랫폼·SRE | 예측 신뢰성 | 공개 가능, 내부 계약명 제거 |
| TECH-013 | P1 | 작업 원장 | 대량 실거래 수집을 실행·대상·작업 원장으로 나눠 복구 가능하게 만든 방법 | `../../apt-insights/docs/reports/release-notes/RELEASE_NOTE_v5.1.4.md` · durable 작업 원장·복구; `../../apt-insights/docs/guide/DR_RUNBOOK.md` · 복구 절차 | 백엔드·SRE·긱뉴스 | 운영 안정성 | 공개 가능, 수치·경로 추상화 |
| TECH-014 | P0 | 캐시 | 웹과 엣지의 캐시 역할을 분리해 병목을 줄인 이유 | `../../apt-insights/docs/architecture/ON_DEMAND_SCALING.md` · 캐시 계층; `../../apt-insights/docs/architecture/COST_OPTIMIZATION.md` · 비용·캐시 원칙 | 서버리스·성능 개발자 | 분석 응답 속도 | 공개 가능, 저장소 키 비공개 |
| TECH-015 | P1 | 비용 최적화 | 서버리스 선택과 데이터 사전 구축 비용을 같은 원칙으로 맞추기 | `../../apt-insights/docs/architecture/ON_DEMAND_SCALING.md` · 서버리스 컴퓨팅·실질적 이점; `../../apt-insights/docs/architecture/COST_OPTIMIZATION.md` · 비용 방어 | 스타트업·B2B 엔지니어 | 서비스 데모 | 공개 가능, 실제 비용은 재검수 |
| TECH-016 | P1 | 비용 최적화 | 생성형 AI 호출 비용을 캐시·재실행·사용량 정책으로 통제한 방법 | `../../apt-insights/docs/operations/GEMINI_USAGE.md` · 역할·캐시·모니터링; `../../apt-insights/docs/operations/COST_CHECKLIST.md` · 비용 방어 | AI 제품 개발자·긱뉴스 | 맞춤 분석 데모 | 공개 가능, 모델·한도·비용 수치 제거 |
| TECH-017 | P1 | AI 시스템 | AI 설명 기능과 계산 결과의 역할을 분리한 부동산 서비스 설계 | `../../apt-insights/docs/business/STORE_LISTING.md` · AI 맞춤 진단·면책; `../../apt-insights/docs/public-copy-terminology.md` · AI 표현 | AI·제품 개발자 | 앱 분석 화면 | 공개 가능, 공급자·프롬프트 비공개 |
| TECH-018 | P1 | AI 시스템 | 최신 뉴스 검색 근거를 시나리오 설명에 연결할 때 생기는 검증 문제 | `../../apt-insights/docs/history/SERVICE_HISTORY.md` · 가상 시나리오 grounding; `../../apt-insights/docs/superpowers/specs/2026-07-24-macro-scenario-variable-global-factors-design.md` · 검색 근거 경계 | LLM·검색 기반 앱 개발자 | 시나리오 데모 | 기술 채널 한정, 내부 설정 제거 |
| TECH-019 | P0 | ML 운영 | 학습·검증·서빙 입력을 맞추지 않으면 생기는 train-serve skew | `../../apt-insights/docs/reports/audits/EDGE_MIGRATION_AUDIT.md` · 계산식 크로스체크·skew; `../../apt-insights/docs/guide/PREDICTION_INPUT_PARITY.md` · 입력 정합성 | ML 엔지니어·데이터 엔지니어·긱뉴스 | 검증 화면 | 기술 채널 한정, 내부 수식 제거 |
| TECH-020 | P0 | ML 운영 | 과거 검증과 실제 서비스 결과를 같은 계약으로 비교하는 방법 | `../../apt-insights/docs/guide/PREDICTION_INPUT_PARITY.md` · 백테스트 정합; `../../apt-insights/docs/reports/v31.1/VALIDATION.md` · 검증 경계 | ML·분석 서비스 개발자 | 공개 검증 안내 | 기술 채널 한정, 표본 구조 비공개 |
| TECH-021 | P1 | ML 운영 | 모델 변경을 바로 배포하지 않고 전체 경로를 다시 확인하는 승격 게이트 | `../../apt-insights/docs/reports/v31.1/V31.1_CALIBRATION_PATH_AUDIT_2026-08-05.md` · 경로 감사·승격 증적; `../../apt-insights/docs/history/MODEL_HISTORY.md` · 변경 이력 | ML 플랫폼·SRE | 투명성 콘텐츠 | 기술 채널 한정, 내부 분류 제거 |
| TECH-022 | P1 | 관측성 | 예측 변경 이력을 저장하고 알림 팬아웃으로 연결한 설계 | `../../apt-insights/docs/architecture/ON_DEMAND_SCALING.md` · 사용자별 이력·알림; `../../apt-insights/docs/guide/PREDICTION_NOTIFICATION_FLOW.md` · 전체 흐름 | 이벤트·알림 시스템 개발자 | 예측 이력·알림 | 공개 가능, 내부 필드명 제거 |
| TECH-023 | P1 | 알림 | 푸시 알림에서 접수·발송·재시도를 분리해야 하는 이유 | `../../apt-insights/docs/guide/PUSH_NOTIFICATIONS.md` · 푸시 흐름; `../../apt-insights/docs/reports/release-notes/RELEASE_NOTE_v4.9.0.md` · 오류 정책 | 모바일·백엔드 개발자 | 알림 기능 | 공개 가능, 토큰·사용자 정보 비공개 |
| TECH-024 | P0 | 장애 대응 | 데이터베이스·큐·외부 API 장애를 가정한 1인 개발 서비스 복구 런북 | `../../apt-insights/docs/guide/DR_RUNBOOK.md` · 장애 시나리오·운영 대응; `../../apt-insights/docs/guide/WEB_STABILITY_RUNBOOK.md` · 안정성 게이트 | SRE·1인 개발자·긱뉴스 | 서비스 신뢰 | 기술 채널 한정, 자격증명·경로 제거 |
| TECH-025 | P1 | 배치 운영 | 일간 데이터 작업과 주간·월간 검증을 분리한 이유 | `../../apt-insights/docs/guide/BATCH_SCHEDULE.md` · 배치 역할·검증 주기; `../../apt-insights/docs/history/SERVICE_HISTORY.md` · 배치 변경 이력 | 백엔드·데이터 운영자 | 앱 데이터 신선도 | 공개 가능, 내부 스케줄·표본 제거 |
| TECH-026 | P1 | 장애 회고 | 배치 타임아웃을 스케줄 소유권과 커서 연속성으로 줄인 방법 | `../../apt-insights/docs/reports/release-notes/RELEASE_NOTE_v5.1.4.md` · 커서·스케줄 ownership; `../../apt-insights/docs/superpowers/specs/2026-08-01-batch-timeout-github-schedule-design.md` · 설계 결정 | 서버리스 배치 개발자·긱뉴스 | 운영 안정성 | 기술 채널 한정, 워크플로 식별자 제거 |
| TECH-027 | P1 | 공개 웹 | 공유 페이지에서 분석 결과와 개인정보를 분리하는 설계 | `../../apt-insights/docs/business/STORE_LISTING.md` · 공유 기능·민감 정보 보호; `../../apt-insights/docs/guide/USER_GUIDE.md` · 공유 | 웹·보안·제품 개발자 | 공유 URL | 공개 가능, whitelist·내부 경로 추상화 |
| TECH-028 | P2 | 웹 플랫폼 | 차트가 포함된 공유 페이지를 서버 OG 이미지와 웹 화면으로 나누는 이유 | `../../apt-insights/docs/business/STORE_LISTING.md` · 공유·미리보기; `../../apt-insights/docs/history/SERVICE_HISTORY.md` · 공유 URL 정합 | Next.js·웹 성능 개발자 | 공유 결과 | 공개 가능, URL 구조 일반화 |
| TECH-029 | P0 | SEO | 부동산 분석 서비스를 검색엔진과 AI 검색에 함께 노출시키는 문서 구조 | `../../apt-insights/docs/history/SERVICE_HISTORY.md` · 정적 가이드·SEO·AI Search Discovery; `../../apt-insights/docs/reports/release-notes/RELEASE_NOTE_v4.8.7.md` · 랜딩 정비 | SEO·콘텐츠·웹 개발자 | 블로그·앱 유입 | 공개 가능, 현재 사이트 상태 재확인 |
| TECH-030 | P1 | SEO | JSON-LD·사이트맵·문서 허브를 제품 전환 흐름과 연결하는 법 | `../../apt-insights/docs/history/SERVICE_HISTORY.md` · 정적 가이드 허브·구조화 데이터; `../../apt-insights/docs/README.md` · 문서 인덱스 | 웹 개발자·콘텐츠 엔지니어 | Research·Blog·앱 CTA | 공개 가능 |
| TECH-031 | P1 | 모바일 | 웹 서비스를 Android·iOS 앱으로 확장할 때 Capacitor에서 검토할 것들 | `../../apt-insights/docs/android/ANDROID_CAPACITOR_TECH_REVIEW.md` · WebView·오프라인·OAuth; `../../apt-insights/docs/ios/IOS_CAPACITOR_PRD.md` · 네이티브 요구 | 모바일·프론트엔드 개발자 | 앱 다운로드 | 기술 채널 한정, 심사·보안 세부 검수 |
| TECH-032 | P1 | 모바일 | 웹 기반 앱에서 오프라인 fallback과 인증 WebView 문제를 함께 다룬 방법 | `../../apt-insights/docs/android/ANDROID_CAPACITOR_READINESS_AUDIT.md` · 오프라인·OAuth; `../../apt-insights/docs/reports/audits/ANDROID_PERFORMANCE_AUDIT.md` · 성능·사용성 | 모바일 웹 개발자·긱뉴스 | 모바일 앱 | 기술 채널 한정 |
| TECH-033 | P2 | 모바일 | 홈 화면 위젯과 푸시 액션을 기존 웹 기능에 연결하는 방법 | `../../apt-insights/docs/business/STORE_LISTING.md` · 위젯·푸시 액션; `../../apt-insights/docs/reports/release-notes/RELEASE_NOTE_v0.6.4.md` · 모바일 변경 | 모바일 개발자 | 위젯·알림 | 공개 가능, 플랫폼 설정 재확인 |
| TECH-034 | P1 | 프론트엔드 | 공용 버튼·카드·스켈레톤 토큰으로 화면 일관성과 CLS를 줄인 회고 | `../../apt-insights/docs/guide/DESIGN_GUIDE.md` · 토큰·상태·버튼; `../../apt-insights/docs/design/UI_CONSISTENCY_IMPROVEMENT_PRD.md` · 목표·진단; `../../apt-insights/docs/history/SERVICE_HISTORY.md` · UI 후속 정비 | React·UX·성능 개발자 | 웹 서비스 데모 | 공개 가능, 내부 컴포넌트명 제거 |
| TECH-035 | P1 | 장애 회고 | 비로그인 화면의 요청을 풀스캔해 익명 경로의 문제를 찾은 방법 | `../../apt-insights/docs/reports/audits/ANON_DASHBOARD_FULLSCAN_AUDIT.md` · 증상·진단·재발 방지 | 웹 성능·보안 개발자·긱뉴스 | 랜딩·대시보드 | 기술 채널 한정, 내부 경로 제거 |
| TECH-036 | P1 | 운영 회고 | 공개 문서와 현재 코드가 어긋날 때 문서 정합성부터 회복하는 방법 | `../../apt-insights/docs/superpowers/plans/2026-08-03-docs-refresh.md` · 목표·기준 상태; `../../apt-insights/docs/history/SERVICE_HISTORY.md` · 문서 정합 | 개발자·AI 에이전트 사용자 | GitHub·Research | 공개 가능 |
| TECH-037 | P2 | 릴리즈 운영 | 릴리즈 노트를 기능 홍보가 아니라 검증 가능한 변경 원장으로 쓰는 법 | `../../apt-insights/docs/reports/release-notes/INDEX.md` · 버전 정책; `../../apt-insights/docs/history/SERVICE_HISTORY.md` · 변경 이력 | 릴리즈 엔지니어·1인 개발자 | GitHub·블로그 | 공개 가능 |
| TECH-038 | P1 | B2B | 부동산 분석 서비스를 B2B 기술 쇼케이스로 운영할 때 공개 범위를 정하는 법 | `../../apt-insights/docs/business/BUSINESS_MODEL.md` · 제품 정체성·B2B 전략; `../../apt-insights/docs/reports/APT_INSIGHTS_BLOG_CONTENT_STRATEGY_REPORT.md` · B2B 독자 | B2B·솔루션 개발자 | 데모·문의 | 공개 가능, 가격·내부 운영 비공개 |
| TECH-039 | P1 | 데이터 거버넌스 | 공공 데이터·서비스 계산·AI 설명의 출처 경계를 문서화하는 법 | `../../apt-insights/docs/guide/TRADE_SYNC.md` · 실거래 출처; `../../apt-insights/docs/business/STORE_LISTING.md` · 데이터·AI 설명; `../../apt-insights/docs/public-copy-checklist.md` · 출처 규칙 | 데이터·AI 제품 개발자 | 출처 안내 | 공개 가능 |
| TECH-040 | P2 | 제품 설계 | “보는 사람에게, 보는 시점에” 계산하는 원칙이 데이터·알림·개인화에 반복되는 방식 | `../../apt-insights/docs/architecture/ON_DEMAND_SCALING.md` · 핵심 원칙·개인화 분석; `../../apt-insights/docs/reports/APT_INSIGHTS_BLOG_CONTENT_STRATEGY_REPORT.md` · 기술 콘텐츠 | 시스템 설계·제품 엔지니어·긱뉴스 | 앱 전체 데모 | 공개 가능, 내부 구현 추상화 |
| TECH-041 | P1 | 릴리즈 회고 | 모델 수치를 바꾸지 않고 UI 일관성과 SEO를 함께 정비한 릴리즈 | `../../apt-insights/docs/reports/release-notes/RELEASE_NOTE_v5.1.6.md` · 2026-08-06 후속 정비; `../../apt-insights/docs/guide/DESIGN_GUIDE.md` · 버튼·요약 카드 토큰 | 프론트엔드·제품 엔지니어·긱뉴스 | 웹 서비스·블로그 | 공개 가능, 내부 식별자 제거 |
| TECH-042 | P1 | 아키텍처 해설 | 서버리스 아파트 분석 플랫폼의 전체 구조를 공개 가능한 수준으로 설명하는 법 | `../../apt-insights/docs/architecture/ARCHITECTURE.md` · 개요·전체 시스템 구성·안정성 게이트 | 서버리스·풀스택 개발자·긱뉴스 | GitHub·앱 데모 | 기술 채널 한정, 내부 인프라·모델 세부 추상화 |

## 기술 글의 배포 규칙

1. 아파트 인사이트 블로그에는 문제·설계 선택·실패·검증·일반 원칙을 담은 원문을 둔다.
2. 긱뉴스에는 제품 소개보다 보편적인 문제와 트레이드오프를 앞에 둔 짧은 요약을 올린다.
3. GitHub에는 재현 가능한 코드·공개 문서만 연결한다.
4. 앱 링크는 글의 마지막에 데모로 연결하되, 글 본문에 내부 구조나 운영 식별자를 넣지 않는다.
5. 계획·설계 문서에서만 확인되는 기능은 구현 완료 글로 쓰지 않고 “설계에서 검토한 방법”으로 표시한다.
