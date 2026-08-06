# 아파트 인사이트 Markdown 문서 전수 감사 원장

> 감사 기준일: 2026-08-06
>
> 이 원장은 `apt-insights/docs`의 Markdown 390개를 파일 단위로 빠짐없이 읽은 결과를 추적한다. `read_state=full_content_read`는 파일 전체를 읽어 줄 수·제목·섹션·주제 신호를 계산했다는 뜻이다. 후보 제목의 최종 승격은 별도 카탈로그의 `source_markdown`과 `source_section`을 기준으로 한다.
>
> 내부 모델·운영 세부를 연상시키는 파일명, 표본 식별자, 제목은 공개 계획 산출물에서 마스킹했다. 블로그 후보에는 공개 가능한 출처 Markdown만 정확한 경로로 남겼다.

## 감사 요약

- Markdown 전체: 390개
- `full_content_read`: 390개
- 누락: 0개
- 후보 매핑: 부동산·주거금융 61개, 기술 42개
- 오늘 파일시스템 수정 문서: 각 행의 `today_modified=yes`로 표시
- 모든 후보의 정확한 출처: `APT_INSIGHTS_BLOG_CANDIDATES.md`, 세부 카탈로그, 백로그에 기록

## 파일별 감사 원장

| audit_id | source_path_or_safe_redaction | read_state | lines | h1 | h2 | today_modified | topic_signals | candidate_ids | decision |
|---:|---|---|---:|---|---:|---|---|---|---|
| DOC-001 | `docs/ECOS_FACTOR_MAPPING.md` | full_content_read | 134 | ECOS Factor Mapping (v2.5.0) | 3 | no | 부동산·주거·데이터·검증·AI·검색·인프라·운영 | RE-011, RE-013, RE-014, RE-015, RE-016 | candidate-mapped |
| DOC-002 | `docs/FACTORS.md` | full_content_read | 639 | 내부 팩터 문서(제목 비공개) | 11 | yes | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영·웹·모바일 | RE-005, RE-007, RE-012, RE-018, RE-019, RE-029, RE-030 | candidate-mapped |
| DOC-003 | `docs/FEATURES.md` | full_content_read | 854 | 구현된 기능 리스트 | 39 | yes | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영·웹·모바일 | RE-017, RE-021, RE-023, RE-026, RE-028, RE-035, RE-037, RE-038, RE-049 | candidate-mapped |
| DOC-004 | `docs/QUICK_START.md` | full_content_read | 170 | APT Insights 문서 빠른 시작 가이드 | 6 | yes | 부동산·주거·데이터·검증·인프라·운영·웹·모바일 | — | reviewed-reference-or-concept |
| DOC-005 | `docs/README.md` | full_content_read | 163 | APT Insights 개발 및 운영 문서 (Documentation Index) | 5 | yes | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영·웹·모바일 | — | reviewed-reference-or-concept |
| DOC-006 | `docs/android/ANDROID_CAPACITOR_PRD.md` | full_content_read | 457 | PRD: apt-insights 안드로이드 앱 출시를 위한 Capacitor 구축 및 심사 통과 실행 계획 | 18 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영·웹·모바일 | — | reviewed-reference-or-concept |
| DOC-007 | `docs/android/ANDROID_CAPACITOR_READINESS_AUDIT.md` | full_content_read | 82 | 안드로이드 Capacitor 및 플레이스토어 출시 준비도 정밀 검토 결과 보고서 | 3 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영·웹·모바일 | TECH-032 | candidate-mapped |
| DOC-008 | `docs/android/ANDROID_CAPACITOR_TECH_REVIEW.md` | full_content_read | 207 | 기술 검토서: Next.js Web (`apps/web`) → Android Capacitor 마이그레이션 | 8 | no | 제품·앱·데이터·검증·AI·검색·인프라·운영·웹·모바일 | TECH-031 | candidate-mapped |
| DOC-009 | `docs/android/INDEX.md` | full_content_read | 51 | Android 개발 & 배포 (Android Development & Deployment) | 7 | no | 부동산·주거·데이터·검증·웹·모바일 | — | reviewed-reference-or-concept |
| DOC-010 | `docs/android/PLAY_STORE_RELEASE_NOTES.md` | full_content_read | 102 | 구글 플레이 스토어 프로덕션 릴리즈 노트 (Google Play Release Notes) | 4 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영·웹·모바일 | — | reviewed-reference-or-concept |
| DOC-011 | `docs/api/EDGE_API.md` | full_content_read | 1314 | Edge API 레퍼런스 | 12 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영·웹·모바일 | — | reviewed-reference-or-concept |
| DOC-012 | `docs/api/INDEX.md` | full_content_read | 56 | API 명세서 (API Specifications) | 6 | no | 제품·앱·데이터·검증·인프라·운영 | — | reviewed-reference-or-concept |
| DOC-013 | `docs/api/WEB_API.md` | full_content_read | 437 | Web (Next.js) API 레퍼런스 | 6 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영·웹·모바일 | — | reviewed-reference-or-concept |
| DOC-014 | `docs/architecture/ARCHITECTURE.md` | full_content_read | 1069 | 시스템 아키텍처 | 13 | yes | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영·웹·모바일 | TECH-042 | candidate-mapped |
| DOC-015 | `docs/architecture/COST_OPTIMIZATION.md` | full_content_read | 300 | Vercel & Cloudflare 비용 최적화 검토 및 실행 로드맵 | 5 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영·웹·모바일 | — | reviewed-reference-or-concept |
| DOC-016 | `docs/architecture/DATA_SCHEMA.md` | full_content_read | 559 | 데이터 스킴 명세 | 5 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영·웹·모바일 | — | reviewed-reference-or-concept |
| DOC-017 | `docs/[internal-source-017].md` | full_content_read | 47 | 내부 검토 원천(제목 비공개) | 4 | yes | 부동산·주거·제품·앱·AI·검색 | — | reviewed-reference-or-concept |
| DOC-018 | `docs/[internal-source-018].md` | full_content_read | 517 | 내부 검토 원천(제목 비공개) | 10 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영·웹·모바일 | — | reviewed-reference-or-concept |
| DOC-019 | `docs/architecture/INDEX.md` | full_content_read | 44 | 아키텍처 및 핵심 이론 (Architecture & Methodology) | 7 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영·웹·모바일 | — | reviewed-reference-or-concept |
| DOC-020 | `docs/architecture/ON_DEMAND_SCALING.md` | full_content_read | 229 | 온디맨드 확장 구조 — 가입자가 늘어날수록 저절로 넓어지는 서비스 | 13 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영 | RE-031, RE-058, TECH-006, TECH-007, TECH-008, TECH-009, TECH-014, TECH-015, TECH-022, TECH-040 | candidate-mapped |
| DOC-021 | `docs/architecture/PREDICTION_LAYERS_AND_SCENARIOS.md` | full_content_read | 312 | 예측 보정층과 가상 시나리오 경계 | 6 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영 | RE-024 | candidate-mapped |
| DOC-022 | `docs/architecture/PREMIUM_POLICIES.md` | full_content_read | 165 | 재건축·신축 프리미엄 정책과 학술 근거 | 6 | no | 부동산·주거·데이터·검증·AI·검색·웹·모바일 | RE-008 | candidate-mapped |
| DOC-023 | `docs/architecture/QUEUE_ROUTING.md` | full_content_read | 147 | 큐 라우팅 정책 | 5 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영 | TECH-010 | candidate-mapped |
| DOC-024 | `docs/architecture/REALTIME_TREND_NOWCAST.md` | full_content_read | 779 | 실시간 추세 Nowcast — 구조 예측 위의 production-only level 신호와 방향 veto | 14 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영·웹·모바일 | — | reviewed-reference-or-concept |
| DOC-025 | `docs/[internal-source-025].md` | full_content_read | 428 | 내부 검토 원천(제목 비공개) | 12 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영 | — | reviewed-reference-or-concept |
| DOC-026 | `docs/[internal-source-026].md` | full_content_read | 1122 | 내부 검토 원천(제목 비공개) | 12 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영·웹·모바일 | — | reviewed-reference-or-concept |
| DOC-027 | `docs/archive/INDEX.md` | full_content_read | 77 | 아카이브 (Archive - 과거 설계 & 폐기 문서) | 5 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색 | — | historical-only |
| DOC-028 | `docs/archive/KAKAO_LOGIN_PRD.md` | full_content_read | 290 | PRD — 카카오(Kakao) 로그인 연동 (v1.1) | 9 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영·웹·모바일 | — | historical-only |
| DOC-029 | `docs/archive/PUSH_NOTIFICATION_AND_INBOX_PRD.md` | full_content_read | 405 | PRD: 모바일 푸시 알림 및 통합 알림함(알림 센터) 시스템 구축 | 9 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영·웹·모바일 | — | historical-only |
| DOC-030 | `docs/[internal-source-030].md` | full_content_read | 268 | 내부 검토 원천(제목 비공개) | 16 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색 | — | historical-only |
| DOC-031 | `docs/archive/STORE_REVIEWER_BYPASS_PRD.md` | full_content_read | 196 | PRD: 일반 유저 소셜 전용 및 Android/iPhone 앱 마켓 심사관 우회 로그인(Reviewer Credentials Bypass) | 5 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영·웹·모바일 | — | historical-only |
| DOC-032 | `docs/archive/oauth-email-fallback.md` | full_content_read | 44 | OAuth 연동 시 이메일 누락 대응 정책 (Email Fallback Policy) | 3 | no | 부동산·주거·제품·앱·AI·검색·웹·모바일 | — | historical-only |
| DOC-033 | `docs/archive/troubleshooting-hydration-error.md` | full_content_read | 128 | 대시보드 로그인 후 하이드레이션 에러 (Hydration Mismatch) 원인 분석 리포트 | 3 | no | 제품·앱·AI·검색·인프라·운영·웹·모바일 | — | historical-only |
| DOC-034 | `docs/business/ANDROID_FEATURING_GUIDE.md` | full_content_read | 167 | Android 구글 플레이 피처링 요청 가이드 및 준비 체크리스트 | 6 | no | 부동산·주거·제품·앱·데이터·검증·웹·모바일 | — | reviewed-reference-or-concept |
| DOC-035 | `docs/business/ANDROID_LAUNCH_CHECKLIST.md` | full_content_read | 144 | 안드로이드 Capacitor 구글 플레이 스토어 런칭 체크리스트 | 6 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·웹·모바일 | — | reviewed-reference-or-concept |
| DOC-036 | `docs/business/ANDROID_RELEASE_GUIDE.md` | full_content_read | 95 | 안드로이드 구글 플레이 비공개 테스트 및 프로덕션 출시 가이드 | 4 | no | 부동산·주거·제품·앱·데이터·검증·인프라·운영·웹·모바일 | — | reviewed-reference-or-concept |
| DOC-037 | `docs/business/ANDROID_STORE_LISTING_GUIDE.md` | full_content_read | 133 | 구글 플레이 스토어 등록 정보 (실전 텍스트 & 스크린샷 기획) 가이드 | 5 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영·웹·모바일 | — | reviewed-reference-or-concept |
| DOC-038 | `docs/business/BILLING.md` | full_content_read | 61 | 서비스 과금 및 비용 관리 (Billing & Cost Management) | 3 | no | 제품·앱·AI·검색·인프라·운영 | — | reviewed-reference-or-concept |
| DOC-039 | `docs/business/BUSINESS_MODEL.md` | full_content_read | 211 | 비즈니스 모델 & B2B 기술 이전 및 제휴 전략 | 9 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영 | TECH-038 | candidate-mapped |
| DOC-040 | `docs/business/INDEX.md` | full_content_read | 43 | 비즈니스 및 배포 정책 (Business & Deployment Policies) | 5 | no | 부동산·주거·제품·앱·AI·검색·웹·모바일 | — | reviewed-reference-or-concept |
| DOC-041 | `docs/business/IOS_FEATURING_GUIDE.md` | full_content_read | 191 | iOS 앱스토어 피처링 요청 가이드 및 준비 체크리스트 | 7 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영·웹·모바일 | — | reviewed-reference-or-concept |
| DOC-042 | `docs/business/IOS_LAUNCH_CHECKLIST.md` | full_content_read | 122 | iOS 출시 체크리스트 및 앱스토어 심사 거절 방지 가이드 | 3 | no | 제품·앱·데이터·검증·AI·검색·인프라·운영·웹·모바일 | — | reviewed-reference-or-concept |
| DOC-043 | `docs/business/IOS_RELEASE_GUIDE.md` | full_content_read | 123 | iOS Xcode Archive 및 TestFlight 릴리즈 가이드 | 7 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영·웹·모바일 | — | reviewed-reference-or-concept |
| DOC-044 | `docs/business/IOS_STORE_SUBMISSION_GUIDE.md` | full_content_read | 226 | iOS 앱스토어 등록 및 심사 제출 가이드 (App Store Connect Submission Guide) | 8 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·웹·모바일 | — | reviewed-reference-or-concept |
| DOC-045 | `docs/business/STORE_LISTING.md` | full_content_read | 130 | 스토어 소개글 (App Store / Play Store Listing) | 5 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영·웹·모바일 | RE-002, RE-003, RE-009, RE-039, RE-040, RE-041, RE-048, RE-050, RE-056, RE-057, TECH-017, TECH-027, TECH-028, TECH-033 | candidate-mapped |
| DOC-046 | `docs/design/INDEX.md` | full_content_read | 33 | 디자인 & UI 일관성 (Design & UI Consistency) | 3 | yes | 부동산·주거·AI·검색 | — | reviewed-reference-or-concept |
| DOC-047 | `docs/design/UI_CONSISTENCY_IMPROVEMENT_PRD.md` | full_content_read | 326 | PRD — UI 컴포넌트 일관성 개선 (v1.0) | 8 | yes | 부동산·주거·제품·앱·데이터·검증·AI·검색·웹·모바일 | — | reviewed-reference-or-concept |
| DOC-048 | `docs/guide/BATCH_SCHEDULE.md` | full_content_read | 141 | BATCH_SCHEDULE — 배치·검증 타이밍 quick-ref | 2 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영 | TECH-025 | candidate-mapped |
| DOC-049 | `docs/guide/DESIGN_GUIDE.md` | full_content_read | 261 | DESIGN_GUIDE | 14 | yes | 부동산·주거·제품·앱·AI·검색·인프라·운영·웹·모바일 | TECH-034 | candidate-mapped |
| DOC-050 | `docs/guide/DR_RUNBOOK.md` | full_content_read | 332 | Disaster Recovery Runbook | 11 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영·웹·모바일 | TECH-024 | candidate-mapped |
| DOC-051 | `docs/guide/ENVIRONMENT.md` | full_content_read | 695 | 환경변수 가이드 | 10 | yes | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영·웹·모바일 | — | reviewed-reference-or-concept |
| DOC-052 | `docs/guide/INDEX.md` | full_content_read | 42 | 개발 및 운영 가이드 (Development & Operations Guide) | 7 | no | 부동산·주거·제품·앱·데이터·검증·인프라·운영·웹·모바일 | — | reviewed-reference-or-concept |
| DOC-053 | `docs/guide/NOTIFICATION_TYPES.md` | full_content_read | 79 | 알림 타입 카탈로그 | 7 | no | 부동산·주거·제품·앱·AI·검색·인프라·운영·웹·모바일 | — | reviewed-reference-or-concept |
| DOC-054 | `docs/guide/PREDICTION_INPUT_PARITY.md` | full_content_read | 554 | PREDICTION_INPUT_PARITY — 예측 입력·검증 경로 정합성 | 6 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영 | TECH-020 | candidate-mapped |
| DOC-055 | `docs/guide/PREDICTION_NOTIFICATION_FLOW.md` | full_content_read | 305 | 아파트 예측 가격 변동 알림 동작 가이드 | 9 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영·웹·모바일 | RE-047 | candidate-mapped |
| DOC-056 | `docs/guide/PUSH_NOTIFICATIONS.md` | full_content_read | 424 | 푸시 알림 운영 가이드 | 12 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영·웹·모바일 | TECH-023 | candidate-mapped |
| DOC-057 | `docs/guide/SCRIPTS.md` | full_content_read | 222 | Scripts 카탈로그 | 13 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영·웹·모바일 | — | reviewed-reference-or-concept |
| DOC-058 | `docs/guide/TRADE_SYNC.md` | full_content_read | 264 | TRADE_SYNC — 실거래 동기화 경로 총정리 | 4 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영 | RE-004, RE-032, RE-033, RE-034, TECH-011, TECH-012, TECH-039 | candidate-mapped |
| DOC-059 | `docs/guide/USER_GUIDE.md` | full_content_read | 343 | APT Insights 사용자 가이드 | 15 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영·웹·모바일 | RE-001, RE-006, RE-020, RE-043, RE-044, RE-045, RE-046 | candidate-mapped |
| DOC-060 | `docs/guide/WEB_STABILITY_RUNBOOK.md` | full_content_read | 86 | Web 안정성 일일 게이트 런북 | 7 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영·웹·모바일 | — | reviewed-reference-or-concept |
| DOC-061 | `docs/history/AI_DEV_STATISTICS.md` | full_content_read | 332 | AI 기반 개발 성과 보고서 (APT Insights) | 7 | yes | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영·웹·모바일 | TECH-002 | candidate-mapped |
| DOC-062 | `docs/history/INDEX.md` | full_content_read | 72 | 모델 변경 이력 및 통계 (History & Statistics) | 6 | yes | 부동산·주거·데이터·검증·AI·검색·웹·모바일 | — | reviewed-history |
| DOC-063 | `docs/[internal-source-063].md` | full_content_read | 1174 | 내부 검토 원천(제목 비공개) | 106 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영·웹·모바일 | — | reviewed-history |
| DOC-064 | `docs/history/SERVICE_HISTORY.md` | full_content_read | 623 | 서비스 및 인프라 변경 이력 (Service & Infrastructure History) | 84 | yes | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영·웹·모바일 | RE-027, RE-036, RE-042, TECH-018, TECH-029, TECH-030 | candidate-mapped |
| DOC-065 | `docs/history/TAG_ARCHIVE.md` | full_content_read | 187 | 태그 아카이브 (2026-07-25 정리 이전 기록) | 0 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영·웹·모바일 | — | reviewed-history |
| DOC-066 | `docs/history/discussion-policy-weight.md` | full_content_read | 152 | 정부 정책 방향성(`policy_index`) 가중 비대칭 — Gemini 자문 요청 | 10 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영 | — | reviewed-history |
| DOC-067 | `docs/[internal-source-067].md` | full_content_read | 1518 | 내부 검토 원천(제목 비공개) | 12 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영·웹·모바일 | — | reviewed-history |
| DOC-068 | `docs/ios/INDEX.md` | full_content_read | 49 | iOS 개발 & 배포 (iOS Development & Deployment) | 7 | no | 부동산·주거·웹·모바일 | — | reviewed-reference-or-concept |
| DOC-069 | `docs/ios/IOS_CAPACITOR_PRD.md` | full_content_read | 85 | PRD: apt-insights iOS 앱 출시를 위한 Capacitor 구축 및 앱스토어 통과 계획 | 5 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영·웹·모바일 | — | reviewed-reference-or-concept |
| DOC-070 | `docs/[internal-source-070].md` | full_content_read | 135 | 내부 검토 원천(제목 비공개) | 10 | no | AI·검색·웹·모바일 | — | reviewed-evidence-or-operations |
| DOC-071 | `docs/[internal-source-071].md` | full_content_read | 185 | 내부 검토 원천(제목 비공개) | 6 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영 | — | reviewed-evidence-or-operations |
| DOC-072 | `docs/operations/COST_CHECKLIST.md` | full_content_read | 595 | 비용 방어 운영 체크리스트 | 9 | yes | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영·웹·모바일 | — | reviewed-evidence-or-operations |
| DOC-073 | `docs/operations/GEMINI_USAGE.md` | full_content_read | 69 | Google Gemini 사용 현황 | 5 | yes | 부동산·주거·제품·앱·AI·검색·인프라·운영 | TECH-016 | candidate-mapped |
| DOC-074 | `docs/operations/INDEX.md` | full_content_read | 41 | 운영 및 비상 복구 (Operations & Disaster Recovery) | 6 | no | 부동산·주거·제품·앱·AI·검색·인프라·운영 | — | reviewed-evidence-or-operations |
| DOC-075 | `docs/public-copy-checklist.md` | full_content_read | 36 | 공개 문구 점검 체크리스트 (배포 전) | 3 | yes | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영 | RE-055, TECH-003 | candidate-mapped |
| DOC-076 | `docs/public-copy-terminology.md` | full_content_read | 104 | 공개 문구 용어집 (외부 공개용) | 14 | yes | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영 | — | policy-only |
| DOC-077 | `docs/[internal-source-077].md` | full_content_read | 180 | 내부 검토 원천(제목 비공개) | 6 | no | 데이터·검증·AI·검색·인프라·운영 | — | reviewed-evidence-or-operations |
| DOC-078 | `docs/reports/APT_INSIGHTS_BLOG_CONTENT_STRATEGY_REPORT.md` | full_content_read | 634 | 아파트 인사이트 부동산 콘텐츠 유입 전략 보고서 | 10 | yes | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영·웹·모바일 | RE-010, RE-025, RE-059, RE-060 | candidate-mapped |
| DOC-079 | `docs/reports/README.md` | full_content_read | 142 | 검증 & 진단 리포트 (Reports & Diagnostics) | 6 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색 | — | reviewed-evidence-or-operations |
| DOC-080 | `docs/reports/SOLO_DEVELOPMENT_STATISTICS.md` | full_content_read | 287 | 1인 개발 통계 리포트 (Solo Development Statistics) | 9 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영·웹·모바일 | TECH-001, TECH-004 | candidate-mapped |
| DOC-081 | `docs/reports/audits/ANDROID_PERFORMANCE_AUDIT.md` | full_content_read | 49 | 안드로이드(Capacitor) 빌드 대비 성능 및 사용성 종합 진단 보고서 | 3 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영·웹·모바일 | — | reviewed-evidence-or-operations |
| DOC-082 | `docs/reports/audits/ANON_DASHBOARD_FULLSCAN_AUDIT.md` | full_content_read | 68 | 비로그인 대시보드 요청 익명 풀스캔 진단 및 수정 보고서 | 6 | no | 제품·앱·데이터·검증·AI·검색·인프라·운영·웹·모바일 | TECH-035 | candidate-mapped |
| DOC-083 | `docs/reports/audits/EDGE_MIGRATION_AUDIT.md` | full_content_read | 67 | Edge Forecast 이관 수식 및 추론 검증 리포트 (Audit Report) | 4 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영 | TECH-019 | candidate-mapped |
| DOC-084 | `docs/reports/audits/INDEX.md` | full_content_read | 21 | 감사 리포트 (Audit Reports) | 2 | no | 제품·앱·데이터·검증·인프라·운영·웹·모바일 | — | reviewed-evidence-or-operations |
| DOC-085 | `docs/reports/infrastructure/INDEX.md` | full_content_read | 34 | 인프라 진단 리포트 (Infrastructure Diagnostics) | 3 | no | 데이터·검증·인프라·운영 | — | reviewed-evidence-or-operations |
| DOC-086 | `docs/reports/infrastructure/PEAK_ANCHOR_VALIDATION_2026-07-12.md` | full_content_read | 164 | Peak Anchor Validation — 2026-07-12 | 5 | no | 부동산·주거·데이터·검증·AI·검색 | — | reviewed-evidence-or-operations |
| DOC-087 | `docs/[internal-source-087].md` | full_content_read | 563 | 내부 검토 원천(제목 비공개) | 7 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영·웹·모바일 | — | reviewed-evidence-or-operations |
| DOC-088 | `docs/[internal-source-088].md` | full_content_read | 248 | 내부 검토 원천(제목 비공개) | 9 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영 | — | reviewed-evidence-or-operations |
| DOC-089 | `docs/[internal-source-089].md` | full_content_read | 157 | 내부 검토 원천(제목 비공개) | 8 | no | AI·검색·웹·모바일 | — | reviewed-evidence-or-operations |
| DOC-090 | `docs/reports/release-notes/INDEX.md` | full_content_read | 33 | 릴리즈 노트 (Release Notes) | 2 | no | 부동산·주거 | TECH-037 | candidate-mapped |
| DOC-091 | `docs/reports/release-notes/RELEASE_NOTE_v0.6.3.md` | full_content_read | 93 | 모바일 v0.6.3 릴리즈 노트 | 4 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·웹·모바일 | — | reviewed-evidence-or-operations |
| DOC-092 | `docs/reports/release-notes/RELEASE_NOTE_v0.6.4.md` | full_content_read | 61 | 모바일 v0.6.4 릴리즈 노트 — Android 0.6.3 통합 핫픽스 | 5 | no | 부동산·주거·제품·앱·AI·검색·웹·모바일 | — | reviewed-evidence-or-operations |
| DOC-093 | `docs/reports/release-notes/RELEASE_NOTE_v4.7.1.md` | full_content_read | 30 | APT Insights v4.7.1 릴리즈 노트 | 3 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영 | — | reviewed-evidence-or-operations |
| DOC-094 | `docs/reports/release-notes/RELEASE_NOTE_v4.8.3.md` | full_content_read | 44 | v4.8.3 릴리즈 노트 | 4 | no | 부동산·주거·제품·앱·데이터·검증·인프라·운영·웹·모바일 | — | reviewed-evidence-or-operations |
| DOC-095 | `docs/reports/release-notes/RELEASE_NOTE_v4.8.4.md` | full_content_read | 43 | v4.8.4 릴리즈 노트 | 2 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영·웹·모바일 | — | reviewed-evidence-or-operations |
| DOC-096 | `docs/reports/release-notes/RELEASE_NOTE_v4.8.5.md` | full_content_read | 33 | v4.8.5 릴리즈 노트 | 2 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영·웹·모바일 | — | reviewed-evidence-or-operations |
| DOC-097 | `docs/reports/release-notes/RELEASE_NOTE_v4.8.6.md` | full_content_read | 32 | v4.8.6 릴리즈 노트 | 2 | no | 부동산·주거·데이터·검증·웹·모바일 | — | reviewed-evidence-or-operations |
| DOC-098 | `docs/reports/release-notes/RELEASE_NOTE_v4.8.7.md` | full_content_read | 44 | v4.8.7 릴리즈 노트 | 2 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영·웹·모바일 | — | reviewed-evidence-or-operations |
| DOC-099 | `docs/reports/release-notes/RELEASE_NOTE_v4.9.0.md` | full_content_read | 64 | v4.9.0 릴리즈 노트 | 3 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·웹·모바일 | — | reviewed-evidence-or-operations |
| DOC-100 | `docs/reports/release-notes/RELEASE_NOTE_v5.1.4.md` | full_content_read | 86 | v5.1.4 릴리즈 노트 | 4 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영·웹·모바일 | TECH-013, TECH-026 | candidate-mapped |
| DOC-101 | `docs/reports/release-notes/RELEASE_NOTE_v5.1.5.md` | full_content_read | 56 | v5.1.5 릴리즈 노트 | 4 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영·웹·모바일 | — | reviewed-evidence-or-operations |
| DOC-102 | `docs/reports/release-notes/RELEASE_NOTE_v5.1.6.md` | full_content_read | 45 | v5.1.6 서비스 릴리즈 노트 | 3 | yes | 부동산·주거·제품·앱·데이터·검증·웹·모바일 | RE-061, TECH-041 | candidate-mapped |
| DOC-103 | `docs/[internal-source-103].md` | full_content_read | 150 | 내부 검토 원천(제목 비공개) | 7 | no | 부동산·주거·데이터·검증·AI·검색·인프라·운영 | — | reviewed-evidence-or-operations |
| DOC-104 | `docs/[internal-source-104].md` | full_content_read | 84 | 내부 검토 원천(제목 비공개) | 7 | no | 부동산·주거·데이터·검증·AI·검색·인프라·운영 | — | reviewed-evidence-or-operations |
| DOC-105 | `docs/[internal-source-105].md` | full_content_read | 110 | 내부 검토 원천(제목 비공개) | 7 | no | 부동산·주거·데이터·검증·AI·검색·인프라·운영 | — | reviewed-evidence-or-operations |
| DOC-106 | `docs/reports/v27/[internal-validation].md` | full_content_read | 116 | 내부 그룹 vs 비내부 그룹 비교 검증 보고서 — v27.3 | 4 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색 | — | reviewed-evidence-or-operations |
| DOC-107 | `docs/reports/v27/FORWARD_BACKTEST_NONBENCH_v27.3.md` | full_content_read | 42 | 비-bench Forward-Backtest — v27 (티어당 2개 무작위 + VECM 출처) | 4 | no | 데이터·검증 | — | reviewed-evidence-or-operations |
| DOC-108 | `docs/reports/v27/INDEX.md` | full_content_read | 20 | v27 검증 리포트 | 2 | no | 데이터·검증·AI·검색 | — | reviewed-evidence-or-operations |
| DOC-109 | `docs/reports/v27/MAPE_AXIS_RECONCILIATION_v27.3_v28.0.md` | full_content_read | 105 | MAPE Axis Reconciliation — v27.3 vs v28.0 | 6 | no | 데이터·검증·AI·검색 | — | reviewed-evidence-or-operations |
| DOC-110 | `docs/reports/v27/RANDOM_METRO_VALIDATION_v27.3.md` | full_content_read | 34 | 수도권 무작위 8개 단지 VECM 검증 보고서 | 2 | no | 부동산·주거·데이터·검증 | — | reviewed-evidence-or-operations |
| DOC-111 | `docs/reports/v27/RANDOM_PROVINCE_VALIDATION_v27.3.md` | full_content_read | 27 | 비수도권(지방) 무작위 4개 단지 VECM 검증 보고서 | 2 | no | 부동산·주거·데이터·검증 | — | reviewed-evidence-or-operations |
| DOC-112 | `docs/reports/v27/V27.3_VALIDATION.md` | full_content_read | 93 | V27.3 Validation Report | 4 | no | 부동산·주거·데이터·검증·AI·검색 | — | reviewed-evidence-or-operations |
| DOC-113 | `docs/reports/v27/V27.4_RUNTIME_SAFETY_RAIL.md` | full_content_read | 87 | V27.4 Runtime Safety Rail Report | 4 | no | 데이터·검증·AI·검색 | — | reviewed-evidence-or-operations |
| DOC-114 | `docs/reports/v28/[internal-validation].md` | full_content_read | 109 | 내부 그룹 vs 비내부 그룹 비교 검증 보고서 — v28.0 | 5 | no | 부동산·주거·데이터·검증·AI·검색 | — | reviewed-evidence-or-operations |
| DOC-115 | `docs/reports/v28/[internal-validation].md` | full_content_read | 107 | 내부 그룹 vs 비내부 그룹 비교 검증 보고서 — v28.1 | 5 | no | 데이터·검증·AI·검색 | — | reviewed-evidence-or-operations |
| DOC-116 | `docs/reports/v28/[internal-validation].md` | full_content_read | 152 | 내부 그룹·고정 비내부 그룹 역할 분리 보고서 — v28.3.5 | 6 | no | 부동산·주거·데이터·검증·AI·검색·인프라·운영 | — | reviewed-evidence-or-operations |
| DOC-117 | `docs/reports/v28/FORWARD_BACKTEST_NONBENCH_v28.0.md` | full_content_read | 42 | 비-bench Forward-Backtest — v28.0 (티어당 2개 무작위 + VECM 출처) | 4 | no | 데이터·검증 | — | reviewed-evidence-or-operations |
| DOC-118 | `docs/reports/v28/FORWARD_BACKTEST_NONBENCH_v28.1.md` | full_content_read | 42 | 비-bench Forward-Backtest — v28.1 (티어당 2개 무작위 + VECM 출처) | 4 | no | 데이터·검증 | — | reviewed-evidence-or-operations |
| DOC-119 | `docs/reports/v28/FORWARD_BACKTEST_NONBENCH_v28.3.md` | full_content_read | 53 | 비-bench 고정 표본 Forward-Backtest — v28.3.5 보조 진단 (VECM 출처) | 4 | no | 데이터·검증 | — | reviewed-evidence-or-operations |
| DOC-120 | `docs/reports/v28/INDEX.md` | full_content_read | 39 | v28 검증 리포트 | 2 | no | 데이터·검증·AI·검색 | — | reviewed-evidence-or-operations |
| DOC-121 | `docs/reports/v28/RANDOM_METRO_VALIDATION_v28.0.md` | full_content_read | 33 | 수도권 무작위 8개 단지 VECM 검증 보고서 | 2 | no | 부동산·주거·데이터·검증 | — | reviewed-evidence-or-operations |
| DOC-122 | `docs/reports/v28/RANDOM_METRO_VALIDATION_v28.1.md` | full_content_read | 33 | 수도권 무작위 8개 단지 VECM 검증 보고서 — v28.1 | 2 | no | 부동산·주거·데이터·검증 | — | reviewed-evidence-or-operations |
| DOC-123 | `docs/reports/v28/RANDOM_METRO_VALIDATION_v28.3.md` | full_content_read | 42 | 수도권 고정 8개 단지 VECM 보조 진단 — v28.3.5 | 4 | no | 부동산·주거·데이터·검증·AI·검색 | — | reviewed-evidence-or-operations |
| DOC-124 | `docs/reports/v28/RANDOM_PROVINCE_VALIDATION_v28.0.md` | full_content_read | 27 | 비수도권(지방) 무작위 4개 단지 VECM 검증 보고서 | 2 | no | 부동산·주거·데이터·검증 | — | reviewed-evidence-or-operations |
| DOC-125 | `docs/reports/v28/RANDOM_PROVINCE_VALIDATION_v28.1.md` | full_content_read | 26 | 비수도권(지방) 무작위 4개 단지 VECM 검증 보고서 — v28.1 | 2 | no | 부동산·주거·데이터·검증 | — | reviewed-evidence-or-operations |
| DOC-126 | `docs/reports/v28/RANDOM_PROVINCE_VALIDATION_v28.3.md` | full_content_read | 38 | 비수도권(지방) 고정 4개 단지 VECM 보조 진단 — v28.3.5 | 4 | no | 부동산·주거·데이터·검증·AI·검색 | — | reviewed-evidence-or-operations |
| DOC-127 | `docs/[internal-source-127].md` | full_content_read | 319 | 내부 검토 원천(제목 비공개) | 9 | no | AI·검색 | — | reviewed-evidence-or-operations |
| DOC-128 | `docs/reports/v28/V28.0_RUNTIME_SAFETY_RAIL.md` | full_content_read | 102 | V28.0 Runtime Safety Rail Report | 5 | no | 데이터·검증·AI·검색 | — | reviewed-evidence-or-operations |
| DOC-129 | `docs/reports/v28/V28.0_VALIDATION.md` | full_content_read | 140 | V28.0 Validation Report | 7 | no | 데이터·검증·AI·검색 | — | reviewed-evidence-or-operations |
| DOC-130 | `docs/reports/v28/VALIDATION_v28.0.md` | full_content_read | 227 | VALIDATION v28.0 - 2026-07-12 (계산식·서빙 정합 addendum) | 10 | no | 데이터·검증·AI·검색 | — | reviewed-evidence-or-operations |
| DOC-131 | `docs/reports/v28/VALIDATION_v28.0_PREVIEW_COMPARISON_2026-07-07.md` | full_content_read | 90 | VALIDATION v28.0 Preview Comparison - 2026-07-07 | 8 | no | AI·검색 | — | reviewed-evidence-or-operations |
| DOC-132 | `docs/reports/v28/VALIDATION_v28.1.md` | full_content_read | 87 | VALIDATION v28.1 — Bust policy support preservation + MC interval calibration | 5 | no | 데이터·검증·AI·검색·인프라·운영 | — | reviewed-evidence-or-operations |
| DOC-133 | `docs/reports/v28/VALIDATION_v28.1_VS_V28.3.md` | full_content_read | 152 | AMFM v28.3.5와 v28.1 역사 비교 보고서 | 7 | no | 부동산·주거·데이터·검증·AI·검색·인프라·운영 | — | reviewed-evidence-or-operations |
| DOC-134 | `docs/reports/v28/VALIDATION_v28.3.md` | full_content_read | 255 | VALIDATION v28.3.5 — 공식 내부 그룹 평가와 별도 일반화 진단 | 10 | no | 부동산·주거·데이터·검증·AI·검색·인프라·운영 | — | reviewed-evidence-or-operations |
| DOC-135 | `docs/reports/v28/VALIDATION_v28.3_VS_V29.0.md` | full_content_read | 182 | AMFM v28 계열과 v29.0 비교 보고서 | 9 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색 | — | reviewed-evidence-or-operations |
| DOC-136 | `docs/reports/v29/[internal-validation].md` | full_content_read | 78 | 내부 검증 표본 예측 기간별 MAPE — v29.0.2 | 5 | no | 부동산·주거·데이터·검증·AI·검색 | — | reviewed-evidence-or-operations |
| DOC-137 | `docs/reports/[internal-validation-137].md` | full_content_read | 160 | 내부 분류 대표 내부 그룹 국면별 12개월 검증 — v29.0.2 | 6 | no | 데이터·검증·AI·검색·웹·모바일 | — | reviewed-evidence-or-operations |
| DOC-138 | `docs/reports/v29/[internal-validation].md` | full_content_read | 141 | 내부 그룹·고정 비내부 그룹 역할 분리 보고서 — v29.0.2 | 5 | no | 부동산·주거·데이터·검증·AI·검색 | — | reviewed-evidence-or-operations |
| DOC-139 | `docs/reports/v29/FORWARD_BACKTEST_NONBENCH_v29.0.md` | full_content_read | 43 | 비-bench 고정 표본 Forward-Backtest — v29.0 (VECM 출처) | 4 | no | 데이터·검증 | — | reviewed-evidence-or-operations |
| DOC-140 | `docs/reports/v29/INDEX.md` | full_content_read | 22 | v29 검증 리포트 | 2 | no | 데이터·검증 | — | reviewed-evidence-or-operations |
| DOC-141 | `docs/reports/v29/RANDOM_METRO_VALIDATION_v29.0.md` | full_content_read | 42 | 수도권 고정 8개 단지 VECM 검증 보고서 — v29.0 | 4 | no | 부동산·주거·데이터·검증·AI·검색 | — | reviewed-evidence-or-operations |
| DOC-142 | `docs/reports/v29/RANDOM_PROVINCE_VALIDATION_v29.0.md` | full_content_read | 38 | 비수도권(지방) 고정 4개 단지 VECM 검증 보고서 — v29.0 | 4 | no | 부동산·주거·데이터·검증·AI·검색 | — | reviewed-evidence-or-operations |
| DOC-143 | `docs/reports/v29/VALIDATION_v29.0.md` | full_content_read | 214 | VALIDATION v29.0.2 — 월별 거시 이력·trajectory·정책대출 가격 경로 정합 | 10 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영 | — | reviewed-evidence-or-operations |
| DOC-144 | `docs/[internal-source-144].md` | full_content_read | 89 | 내부 검토 원천(제목 비공개) | 5 | no | 부동산·주거·데이터·검증·AI·검색 | — | reviewed-evidence-or-operations |
| DOC-145 | `docs/reports/v30-serving/[internal-validation].md` | full_content_read | 26 | 내부 검증 표본 서빙 Horizon MAPE — V30.0 | 2 | no | 부동산·주거·AI·검색 | — | reviewed-evidence-or-operations |
| DOC-146 | `docs/reports/v30-serving/[internal-validation].md` | full_content_read | 88 | 내부 검증 표본 예측 기간별 MAPE — v30.1 | 5 | no | 부동산·주거·데이터·검증·AI·검색 | — | reviewed-evidence-or-operations |
| DOC-147 | `docs/reports/v30-serving/[internal-validation].md` | full_content_read | 118 | V29.0.2 ↔ V30.0 대표 내부 그룹 국면 비교 | 5 | no | 데이터·검증·AI·검색·웹·모바일 | — | reviewed-evidence-or-operations |
| DOC-148 | `docs/reports/[internal-validation-148].md` | full_content_read | 21 | 내부 분류 대표 내부 그룹 국면별 서빙 검증 — V30.0 | 1 | no | 데이터·검증 | — | reviewed-evidence-or-operations |
| DOC-149 | `docs/reports/[internal-validation-149].md` | full_content_read | 175 | 내부 분류 대표 내부 그룹 국면별 12개월 검증 — v30.1 | 6 | no | 데이터·검증·AI·검색·웹·모바일 | — | reviewed-evidence-or-operations |
| DOC-150 | `docs/reports/v30-serving/[internal-validation].md` | full_content_read | 20 | 내부 그룹·고정 비내부 그룹 서빙 역할 분리 — V30.0 | 0 | no | AI·검색 | — | reviewed-evidence-or-operations |
| DOC-151 | `docs/reports/v30-serving/[internal-validation].md` | full_content_read | 161 | 내부 그룹·고정 비내부 그룹 역할 분리 보고서 — v30.1 | 5 | no | 부동산·주거·데이터·검증·AI·검색 | — | reviewed-evidence-or-operations |
| DOC-152 | `docs/reports/v30-serving/FORWARD_BACKTEST_NONBENCH_v30.0.md` | full_content_read | 18 | 비-bench 고정 표본 서빙 Forward-Backtest — V30.0 | 0 | no | 데이터·검증 | — | reviewed-evidence-or-operations |
| DOC-153 | `docs/reports/v30-serving/FORWARD_BACKTEST_NONBENCH_v30.1.md` | full_content_read | 43 | 비-bench 고정 표본 Forward-Backtest — v30.1 (VECM 출처) | 4 | no | 데이터·검증 | — | reviewed-evidence-or-operations |
| DOC-154 | `docs/reports/v30-serving/INDEX.md` | full_content_read | 30 | v30.0 서빙 검증 리포트 | 2 | no | 부동산·주거·데이터·검증 | — | reviewed-evidence-or-operations |
| DOC-155 | `docs/reports/v30-serving/MARKET_NOWCAST_VALIDATION_v30.0.md` | full_content_read | 34 | V30.0 Market Nowcast 서빙 정책 검증 | 3 | no | 부동산·주거·데이터·검증·AI·검색 | — | reviewed-evidence-or-operations |
| DOC-156 | `docs/reports/v30-serving/RANDOM_METRO_VALIDATION_v30.0.md` | full_content_read | 16 | 수도권 고정 8개 서빙 검증 — V30.0 | 0 | no | 데이터·검증 | — | reviewed-evidence-or-operations |
| DOC-157 | `docs/reports/v30-serving/RANDOM_METRO_VALIDATION_v30.1.md` | full_content_read | 42 | 수도권 고정 8개 단지 VECM 검증 보고서 — v30.1 | 4 | no | 부동산·주거·데이터·검증·AI·검색 | — | reviewed-evidence-or-operations |
| DOC-158 | `docs/reports/v30-serving/RANDOM_PROVINCE_VALIDATION_v30.0.md` | full_content_read | 16 | 비수도권 고정 4개 서빙 검증 — V30.0 | 0 | no | 데이터·검증 | — | reviewed-evidence-or-operations |
| DOC-159 | `docs/reports/v30-serving/RANDOM_PROVINCE_VALIDATION_v30.1.md` | full_content_read | 38 | 비수도권(지방) 고정 4개 단지 VECM 검증 보고서 — v30.1 | 4 | no | 부동산·주거·데이터·검증·AI·검색 | — | reviewed-evidence-or-operations |
| DOC-160 | `docs/reports/v30-serving/VALIDATION_v29.0_VS_v30.0.md` | full_content_read | 18 | V29.0.2 ↔ V30.0 서빙 동일 축 비교 | 0 | no | 문서 기준·참고 | — | reviewed-evidence-or-operations |
| DOC-161 | `docs/reports/v30-serving/VALIDATION_v29.0_VS_v30.1.md` | full_content_read | 205 | AMFM v29.0.2와 runtime v30.1 비교 보고서 | 10 | no | 데이터·검증·AI·검색 | — | reviewed-evidence-or-operations |
| DOC-162 | `docs/reports/v30-serving/VALIDATION_v30.0.md` | full_content_read | 54 | V30.0 서빙 검증 — 12·18개월 | 4 | no | 데이터·검증·AI·검색 | — | reviewed-evidence-or-operations |
| DOC-163 | `docs/reports/v30-serving/VALIDATION_v30.1.md` | full_content_read | 326 | VALIDATION runtime v30.1 — trajectory 단조성 수정·재스윕 + VECM Clean Pool 30 | 13 | no | 제품·앱·데이터·검증·AI·검색 | — | reviewed-evidence-or-operations |
| DOC-164 | `docs/[internal-source-164].md` | full_content_read | 17 | 내부 검토 원천(제목 비공개) | 0 | no | 부동산·주거·AI·검색 | — | reviewed-evidence-or-operations |
| DOC-165 | `docs/[internal-source-165].md` | full_content_read | 91 | 내부 검토 원천(제목 비공개) | 5 | no | 부동산·주거·데이터·검증·AI·검색 | — | reviewed-evidence-or-operations |
| DOC-166 | `docs/reports/v30.1/[internal-validation].md` | full_content_read | 16 | v30.1 Horizon별 MAPE 보조 진단 | 2 | no | 데이터·검증 | — | reviewed-evidence-or-operations |
| DOC-167 | `docs/reports/v30.1/[internal-validation].md` | full_content_read | 25 | v30.1 고정 내부 그룹 대표 국면 진단 | 2 | no | 데이터·검증 | — | reviewed-evidence-or-operations |
| DOC-168 | `docs/reports/v30.1/[internal-validation].md` | full_content_read | 23 | v30.1 고정 내부 그룹 vs 비공개 그룹 역할 분리 | 3 | no | 데이터·검증 | — | reviewed-evidence-or-operations |
| DOC-169 | `docs/reports/v30.1/FORWARD_BACKTEST_NONBENCH_v30.1.md` | full_content_read | 42 | 비-bench 고정 표본 Forward-Backtest — v30.1 (VECM 출처) | 4 | no | 데이터·검증 | — | reviewed-evidence-or-operations |
| DOC-170 | `docs/reports/v30.1/INDEX.md` | full_content_read | 21 | v30.1 검증 리포트 | 1 | no | 데이터·검증·AI·검색 | — | reviewed-evidence-or-operations |
| DOC-171 | `docs/reports/v30.1/RANDOM_METRO_VALIDATION_v30.1.md` | full_content_read | 41 | 수도권 고정 8개 단지 VECM 검증 보고서 — v30.1 | 4 | no | 부동산·주거·데이터·검증·AI·검색 | — | reviewed-evidence-or-operations |
| DOC-172 | `docs/reports/v30.1/RANDOM_PROVINCE_VALIDATION_v30.1.md` | full_content_read | 37 | 비수도권(지방) 고정 4개 단지 VECM 검증 보고서 — v30.1 | 4 | no | 부동산·주거·데이터·검증·AI·검색 | — | reviewed-evidence-or-operations |
| DOC-173 | `docs/reports/v30.1/VALIDATION.md` | full_content_read | 90 | VALIDATION v30.1 — 캘리브레이션 갱신 및 성능 재검증 | 3 | no | 데이터·검증·AI·검색·인프라·운영 | — | reviewed-evidence-or-operations |
| DOC-174 | `docs/reports/v30.1/VALIDATION_v30.0_VS_v30.1.md` | full_content_read | 22 | v30.0 vs v30.1 동일 축 비교 | 2 | no | AI·검색 | — | reviewed-evidence-or-operations |
| DOC-175 | `docs/[internal-source-175].md` | full_content_read | 30 | 내부 검토 원천(제목 비공개) | 2 | no | 데이터·검증·AI·검색 | — | reviewed-evidence-or-operations |
| DOC-176 | `docs/reports/v30/[internal-validation].md` | full_content_read | 61 | 내부 검증 표본 예측 기간별 MAPE — v30.0 | 4 | no | 부동산·주거·데이터·검증·AI·검색 | — | reviewed-evidence-or-operations |
| DOC-177 | `docs/reports/[internal-validation-177].md` | full_content_read | 106 | 내부 분류 대표 내부 그룹 국면별 12개월 검증 — v30.0 | 5 | no | 데이터·검증·웹·모바일 | — | reviewed-evidence-or-operations |
| DOC-178 | `docs/reports/v30/[internal-validation].md` | full_content_read | 82 | 내부 그룹·고정 비내부 그룹 역할 분리 보고서 — v30.0 | 5 | no | 데이터·검증·AI·검색 | — | reviewed-evidence-or-operations |
| DOC-179 | `docs/reports/v30/FORWARD_BACKTEST_NONBENCH_v30.0.md` | full_content_read | 42 | 비-bench 고정 표본 Forward-Backtest — v30.0 (VECM 출처) | 4 | no | 데이터·검증 | — | reviewed-evidence-or-operations |
| DOC-180 | `docs/reports/v30/INDEX.md` | full_content_read | 25 | v30.0 검증 리포트 | 1 | no | 데이터·검증·AI·검색 | — | reviewed-evidence-or-operations |
| DOC-181 | `docs/reports/v30/RANDOM_METRO_VALIDATION_v30.0.md` | full_content_read | 41 | 수도권 고정 8개 단지 VECM 검증 보고서 — v30.0 | 4 | no | 부동산·주거·데이터·검증·AI·검색 | — | reviewed-evidence-or-operations |
| DOC-182 | `docs/reports/v30/RANDOM_PROVINCE_VALIDATION_v30.0.md` | full_content_read | 37 | 비수도권(지방) 고정 4개 단지 VECM 검증 보고서 — v30.0 | 4 | no | 부동산·주거·데이터·검증·AI·검색 | — | reviewed-evidence-or-operations |
| DOC-183 | `docs/reports/v30/V30_FACTOR_RESTORATION_AUDIT_2026-07-28.md` | full_content_read | 198 | v30 활성 팩터 복원·캘리브레이션 감사 | 9 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영 | — | reviewed-evidence-or-operations |
| DOC-184 | `docs/reports/v30/VALIDATION.md` | full_content_read | 191 | VALIDATION v30.0 — 활성 팩터 복원·풀 캘리브레이션 | 8 | no | 데이터·검증·AI·검색 | — | reviewed-evidence-or-operations |
| DOC-185 | `docs/reports/v30/VALIDATION_v29_VS_v30.0.md` | full_content_read | 43 | v29.0.2 ↔ v30.0 동일 축 비교 | 3 | no | 데이터·검증·AI·검색 | — | reviewed-evidence-or-operations |
| DOC-186 | `docs/[internal-source-186].md` | full_content_read | 31 | 내부 검토 원천(제목 비공개) | 2 | no | 데이터·검증·AI·검색 | — | reviewed-evidence-or-operations |
| DOC-187 | `docs/reports/v31.1/[internal-validation].md` | full_content_read | 17 | 내부 그룹 기간별 MAPE 측정 계약 — v31.1 | 0 | no | 데이터·검증 | — | reviewed-evidence-or-operations |
| DOC-188 | `docs/reports/v31.1/[internal-validation].md` | full_content_read | 16 | 대표 내부 그룹 국면별 검증 — v31.1 | 0 | no | 데이터·검증 | — | reviewed-evidence-or-operations |
| DOC-189 | `docs/reports/v31.1/[internal-validation].md` | full_content_read | 28 | 내부 그룹·고정 비내부 그룹 역할 분리 — v31.1 | 3 | no | 데이터·검증 | — | reviewed-evidence-or-operations |
| DOC-190 | `docs/reports/v31.1/FORWARD_BACKTEST_NONBENCH_v31.1.md` | full_content_read | 13 | 비벤치 고정 표본 Forward-Backtest — v31.1 | 0 | no | 문서 기준·참고 | — | reviewed-evidence-or-operations |
| DOC-191 | `docs/reports/v31.1/INDEX.md` | full_content_read | 36 | v31.1 검증 리포트 | 2 | no | 데이터·검증 | — | reviewed-evidence-or-operations |
| DOC-192 | `docs/reports/v31.1/RANDOM_METRO_VALIDATION_v31.1.md` | full_content_read | 53 | 수도권 고정 8개 단지 VECM 검증 보고서 — v31.1 | 4 | no | 부동산·주거·데이터·검증 | — | reviewed-evidence-or-operations |
| DOC-193 | `docs/reports/v31.1/RANDOM_PROVINCE_VALIDATION_v31.1.md` | full_content_read | 48 | 비수도권(지방) 고정 4개 단지 VECM 검증 보고서 — v31.1 | 4 | no | 부동산·주거·데이터·검증·AI·검색 | — | reviewed-evidence-or-operations |
| DOC-194 | `docs/reports/v31.1/RANDOM_VALIDATION_v31.0_VS_v31.1.md` | full_content_read | 66 | 고정 단지 예측 성능 비교 — v31.0 vs v31.1 | 4 | no | 데이터·검증·AI·검색 | — | reviewed-evidence-or-operations |
| DOC-195 | `docs/reports/v31.1/V31.1_CALIBRATION_PATH_AUDIT_2026-08-05.md` | full_content_read | 31 | v31.1 단기 경로·캘리브레이션 감사 | 4 | no | 인프라·운영 | TECH-021 | candidate-mapped |
| DOC-196 | `docs/reports/v31.1/VALIDATION.md` | full_content_read | 54 | VALIDATION v31.1 — 단기 경로 보정·정밀 캘리브레이션 | 5 | no | 데이터·검증·AI·검색·인프라·운영 | RE-051, RE-052, RE-053, RE-054 | candidate-mapped |
| DOC-197 | `docs/reports/v31.1/VALIDATION_v31.0_VS_v31.1.md` | full_content_read | 27 | v31.0 ↔ v31.1 동일 평가 축 비교 | 0 | no | 데이터·검증·AI·검색 | — | reviewed-evidence-or-operations |
| DOC-198 | `docs/[internal-source-198].md` | full_content_read | 17 | 내부 검토 원천(제목 비공개) | 0 | no | 데이터·검증·AI·검색 | — | reviewed-evidence-or-operations |
| DOC-199 | `docs/[internal-source-199].md` | full_content_read | 129 | 내부 검토 원천(제목 비공개) | 6 | no | 데이터·검증 | — | reviewed-evidence-or-operations |
| DOC-200 | `docs/[internal-source-200].md` | full_content_read | 33 | 내부 검토 원천(제목 비공개) | 3 | no | 데이터·검증·인프라·운영 | — | reviewed-evidence-or-operations |
| DOC-201 | `docs/[internal-source-201].md` | full_content_read | 95 | 내부 검토 원천(제목 비공개) | 3 | no | 문서 기준·참고 | — | reviewed-evidence-or-operations |
| DOC-202 | `docs/reports/v31/[internal-validation].md` | full_content_read | 65 | 내부 검증 표본 예측 기간별 MAPE — v31.0 | 4 | no | 부동산·주거·데이터·검증·AI·검색 | — | reviewed-evidence-or-operations |
| DOC-203 | `docs/reports/[internal-validation-203].md` | full_content_read | 109 | 내부 분류 대표 내부 그룹 국면별 12개월 검증 — v31.0 | 5 | no | 데이터·검증·웹·모바일 | — | reviewed-evidence-or-operations |
| DOC-204 | `docs/reports/v31/[internal-validation].md` | full_content_read | 85 | 내부 그룹·고정 비내부 그룹 역할 분리 보고서 — v31.0 | 5 | no | 데이터·검증·AI·검색 | — | reviewed-evidence-or-operations |
| DOC-205 | `docs/reports/v31/FORWARD_BACKTEST_NONBENCH_v31.0.md` | full_content_read | 45 | 비-bench 고정 표본 Forward-Backtest — v31.0 (VECM 출처) | 4 | no | 데이터·검증 | — | reviewed-evidence-or-operations |
| DOC-206 | `docs/reports/v31/INDEX.md` | full_content_read | 29 | v31.0 검증 리포트 (역사 기록) | 1 | no | 데이터·검증·AI·검색·인프라·운영 | — | reviewed-evidence-or-operations |
| DOC-207 | `docs/reports/v31/RANDOM_METRO_VALIDATION_v31.0.md` | full_content_read | 44 | 수도권 고정 8개 단지 VECM 검증 보고서 — v31.0 | 4 | no | 부동산·주거·데이터·검증·AI·검색 | — | reviewed-evidence-or-operations |
| DOC-208 | `docs/reports/v31/RANDOM_PROVINCE_VALIDATION_v31.0.md` | full_content_read | 40 | 비수도권(지방) 고정 4개 단지 VECM 검증 보고서 — v31.0 | 4 | no | 부동산·주거·데이터·검증·AI·검색 | — | reviewed-evidence-or-operations |
| DOC-209 | `docs/reports/v31/SAMPLE_GENERALIZATION_ANALYSIS_v31.0.md` | full_content_read | 88 | v31 표본별 성능 종합 분석 | 5 | no | 부동산·주거·데이터·검증·AI·검색 | — | reviewed-evidence-or-operations |
| DOC-210 | `docs/reports/v31/V31_BUGFIX_AUDIT_2026-08-04.md` | full_content_read | 206 | v31 예측 경로 버그 수정·풀 캘리브레이션 감사 | 9 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영 | — | reviewed-evidence-or-operations |
| DOC-211 | `docs/reports/v31/V31_FACTOR_RESTORATION_AUDIT_2026-08-04.md` | full_content_read | 48 | v31 팩터 복원·활성화 감사 | 4 | no | 부동산·주거·데이터·검증·AI·검색·인프라·운영 | — | reviewed-evidence-or-operations |
| DOC-212 | `docs/reports/v31/VALIDATION.md` | full_content_read | 195 | VALIDATION v31.0 — 활성 팩터 복원·풀 캘리브레이션 (역사 기록) | 8 | no | 데이터·검증·AI·검색·인프라·운영 | — | reviewed-evidence-or-operations |
| DOC-213 | `docs/reports/v31/VALIDATION_v29_VS_v31.0.md` | full_content_read | 43 | v29.0.2 ↔ v31.0 동일 축 비교 | 3 | no | 데이터·검증·AI·검색 | — | reviewed-evidence-or-operations |
| DOC-214 | `docs/reports/v31/VALIDATION_v30_VS_v31.0.md` | full_content_read | 60 | v30.0 ↔ v31.0 동일 축 비교 | 4 | no | 데이터·검증·AI·검색·인프라·운영 | — | reviewed-evidence-or-operations |
| DOC-215 | `docs/[internal-source-215].md` | full_content_read | 31 | 내부 검토 원천(제목 비공개) | 2 | no | 데이터·검증·AI·검색 | — | reviewed-evidence-or-operations |
| DOC-216 | `docs/reports/weekly-validation/INDEX.md` | full_content_read | 26 | 주간 검증 리포트 (Weekly Validation) | 3 | no | 데이터·검증 | — | reviewed-evidence-or-operations |
| DOC-217 | `docs/reports/weekly-validation/WEEKLY_RANDOM_VALIDATION_2026-07-22.md` | full_content_read | 126 | 주간 무작위 검증 후속 진단 — 2026-07-22 | 3 | no | 부동산·주거·데이터·검증·인프라·운영 | — | reviewed-evidence-or-operations |
| DOC-218 | `docs/reports/weekly-validation/WEEKLY_RANDOM_VALIDATION_MC_INTEGRITY_2026-07-12.md` | full_content_read | 103 | 주간 대표 검증 MC 무결성 기록 — 2026-07-12 | 5 | no | 부동산·주거·데이터·검증·AI·검색 | — | reviewed-evidence-or-operations |
| DOC-219 | `docs/reports/weekly-validation/WEEKLY_RANDOM_VALIDATION_UPDATE_2026-06-22.md` | full_content_read | 16 | 주간 무작위 예측 신뢰도 검증 보정 요약 (2026-06-22) | 2 | no | 부동산·주거·데이터·검증·인프라·운영 | — | reviewed-evidence-or-operations |
| DOC-220 | `docs/roadmap/ROADMAP.md` | full_content_read | 909 | 개발 로드맵 | 14 | yes | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영·웹·모바일 | — | reviewed-reference-or-concept |
| DOC-221 | `docs/[internal-source-221].md` | full_content_read | 533 | 내부 검토 원천(제목 비공개) | 2 | no | 제품·앱·데이터·검증·AI·검색·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-222 | `docs/superpowers/plans/2026-07-22-macro-briefing-icon.md` | full_content_read | 133 | Macro Briefing Icon and Native Store Link Implementation Plan | 1 | no | AI·검색·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-223 | `docs/superpowers/plans/2026-07-22-platform-icon-assets.md` | full_content_read | 190 | Platform Icon Assets Implementation Plan | 1 | no | AI·검색·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-224 | `docs/[internal-source-224].md` | full_content_read | 194 | 내부 검토 원천(제목 비공개) | 1 | no | 제품·앱·AI·검색·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-225 | `docs/superpowers/plans/2026-07-22-service-haptics-redesign.md` | full_content_read | 806 | 서비스 전체 햅틱 재설계 Implementation Plan | 6 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-226 | `docs/superpowers/plans/2026-07-22-system-button-consistency.md` | full_content_read | 67 | System Button Consistency Implementation Plan | 1 | no | AI·검색·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-227 | `docs/superpowers/plans/2026-07-23-apple-private-relay-profile-display.md` | full_content_read | 207 | Apple Private Relay Profile Display Implementation Plan | 1 | no | AI·검색·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-228 | `docs/superpowers/plans/[internal-plan-023].md` | full_content_read | 74 | 내부 분류 대표 내부 그룹 Regime Report Implementation Plan | 6 | no | 부동산·주거·데이터·검증·AI·검색·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-229 | `docs/superpowers/plans/2026-07-23-foldable-widget-meta-row-plan.md` | full_content_read | 246 | Android Foldable Widget Metadata Row Implementation Plan | 1 | no | 부동산·주거·AI·검색·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-230 | `docs/[internal-source-230].md` | full_content_read | 61 | 내부 검토 원천(제목 비공개) | 1 | no | AI·검색·인프라·운영 | — | reviewed-internal-plan-or-design |
| DOC-231 | `docs/[internal-source-231].md` | full_content_read | 79 | 내부 검토 원천(제목 비공개) | 1 | no | AI·검색 | — | reviewed-internal-plan-or-design |
| DOC-232 | `docs/superpowers/plans/2026-07-23-market-buy-environment-card.md` | full_content_read | 1017 | Market Buy Environment Card Implementation Plan | 3 | no | 부동산·주거·제품·앱·AI·검색·인프라·운영·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-233 | `docs/superpowers/plans/2026-07-23-native-push-auth-recovery.md` | full_content_read | 509 | Native Push 인증 오류 복구 Implementation Plan | 1 | no | 부동산·주거·제품·앱·AI·검색·인프라·운영·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-234 | `docs/superpowers/plans/2026-07-23-push-notification-system-hardening.md` | full_content_read | 2159 | Push Notification System Hardening Implementation Plan | 2 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-235 | `docs/superpowers/plans/2026-07-23-push-structure-audit-refactor.md` | full_content_read | 1495 | Push Structure Audit Refactor Implementation Plan | 2 | no | AI·검색·인프라·운영·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-236 | `docs/superpowers/plans/2026-07-24-macro-scenario-variable-global-factors.md` | full_content_read | 355 | Macro Scenario Variable Global Factors Implementation Plan | 1 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-237 | `docs/[internal-source-237].md` | full_content_read | 289 | 내부 검토 원천(제목 비공개) | 1 | no | AI·검색·인프라·운영·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-238 | `docs/[internal-source-238].md` | full_content_read | 177 | 내부 검토 원천(제목 비공개) | 1 | no | AI·검색·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-239 | `docs/[internal-source-239].md` | full_content_read | 858 | 내부 검토 원천(제목 비공개) | 10 | no | 데이터·검증·AI·검색·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-240 | `docs/superpowers/plans/2026-07-27-price-conditioned-tax-exposure.md` | full_content_read | 476 | Price-Conditioned Tax Exposure Implementation Plan | 2 | no | 부동산·주거·AI·검색·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-241 | `docs/superpowers/plans/2026-07-27-realtime-trend-direction-veto.md` | full_content_read | 940 | Realtime Trend Direction Veto Implementation Plan | 1 | no | AI·검색·인프라·운영·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-242 | `docs/superpowers/plans/2026-07-28-context-tab-design-release-1.md` | full_content_read | 344 | Context Tab Design Release 1 Implementation Plan | 2 | no | 부동산·주거·데이터·검증·AI·검색·인프라·운영·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-243 | `docs/superpowers/plans/2026-07-28-personalized-analysis-daily-briefing-release-3.md` | full_content_read | 587 | Personalized Analysis Daily Briefing Release 3 Implementation Plan | 1 | no | AI·검색·인프라·운영·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-244 | `docs/superpowers/plans/2026-07-28-personalized-analysis-evidence-release-2.md` | full_content_read | 613 | Personalized Buy Analysis Evidence v26 Implementation Plan | 2 | no | 부동산·주거·AI·검색·인프라·운영·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-245 | `docs/superpowers/plans/2026-07-28-personalized-buy-analysis-context.md` | full_content_read | 631 | 맞춤 매수 분석 개인화·컨텍스트 탭 구현 계획 | 2 | no | 부동산·주거·데이터·검증·AI·검색·인프라·운영·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-246 | `docs/superpowers/plans/2026-07-28-tax-exposure-activation-safety.md` | full_content_read | 259 | Tax Exposure Activation Safety Implementation Plan | 1 | no | 부동산·주거·데이터·검증·AI·검색·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-247 | `docs/superpowers/plans/2026-07-28-v29-v30-regime-comparison.md` | full_content_read | 111 | V29 ↔ V30 국면 비교 리포트 Implementation Plan | 1 | no | AI·검색 | — | reviewed-internal-plan-or-design |
| DOC-248 | `docs/superpowers/plans/2026-07-28-v30-comprehensive-audit.md` | full_content_read | 231 | V30 Comprehensive Model Audit Implementation Plan | 1 | no | 부동산·주거·데이터·검증·AI·검색·인프라·운영·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-249 | `docs/superpowers/plans/2026-07-28-v30-report-set.md` | full_content_read | 38 | V30 Validation Report Set Implementation Plan | 2 | no | AI·검색·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-250 | `docs/superpowers/plans/2026-07-28-vercel-batch-cutover.md` | full_content_read | 241 | Vercel Batch Cutover Implementation Plan | 1 | no | 데이터·검증·AI·검색·인프라·운영·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-251 | `docs/[internal-source-251].md` | full_content_read | 316 | 내부 검토 원천(제목 비공개) | 1 | no | 부동산·주거·제품·앱·AI·검색·인프라·운영·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-252 | `docs/[internal-source-252].md` | full_content_read | 801 | 내부 검토 원천(제목 비공개) | 2 | no | AI·검색·인프라·운영·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-253 | `docs/superpowers/plans/2026-07-29-briefing-header-cleanup-and-dashboard-recommendation-highlight.md` | full_content_read | 249 | 브리핑 헤더 정리·홈 추천안 강조 Implementation Plan | 2 | no | 제품·앱·데이터·검증·AI·검색·인프라·운영·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-254 | `docs/superpowers/plans/2026-07-29-daily-briefing-placement.md` | full_content_read | 534 | 오늘의 브리핑 제목·배치 통합 Implementation Plan | 2 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-255 | `docs/superpowers/plans/2026-07-29-dashboard-briefing-embed-and-baseline-badge.md` | full_content_read | 343 | 홈 브리핑 임베드·첫 기준점 뱃지 Implementation Plan | 2 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-256 | `docs/superpowers/plans/2026-07-29-dashboard-briefing-link-cleanup.md` | full_content_read | 96 | 홈 브리핑 중복 링크 제거 Implementation Plan | 1 | no | 제품·앱·데이터·검증·AI·검색·인프라·운영·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-257 | `docs/[internal-source-257].md` | full_content_read | 1180 | 내부 검토 원천(제목 비공개) | 2 | no | 부동산·주거·AI·검색·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-258 | `docs/superpowers/plans/2026-07-29-new-construction-trade-pattern-release-a.md` | full_content_read | 675 | New Construction Trade Pattern Release A Implementation Plan | 2 | no | 부동산·주거·데이터·검증·AI·검색·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-259 | `docs/superpowers/plans/2026-07-29-personalized-analysis-apartment-correction-release-5.md` | full_content_read | 127 | Personalized Analysis Apartment Correction Release 5 Implementation Plan | 1 | no | AI·검색·인프라·운영·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-260 | `docs/superpowers/plans/2026-07-29-personalized-analysis-release-audit.md` | full_content_read | 47 | 맞춤 매수 분석 계획 실행 감사 — 2026-07-29 | 5 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-261 | `docs/superpowers/plans/2026-07-29-personalized-analysis-tax-cost-release-4.md` | full_content_read | 125 | Personalized Analysis Tax and Transaction Cost Release 4 Implementation Plan | 1 | no | 부동산·주거·AI·검색·인프라·운영·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-262 | `docs/superpowers/plans/2026-07-29-personalized-trade-verification-release-b.md` | full_content_read | 909 | Personalized Trade Verification Release B Implementation Plan | 3 | no | 부동산·주거·데이터·검증·AI·검색·인프라·운영·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-263 | `docs/[internal-source-263].md` | full_content_read | 787 | 내부 검토 원천(제목 비공개) | 2 | no | AI·검색·인프라·운영·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-264 | `docs/superpowers/plans/2026-07-30-advisor-shared-research-kv.md` | full_content_read | 487 | Advisor Shared Research KV Implementation Plan | 2 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-265 | `docs/superpowers/plans/2026-07-30-cold-start-backlog-recovery.md` | full_content_read | 188 | 신축 인근 시세 기반 예측 백로그 회수 Implementation Plan | 10 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-266 | `docs/[internal-source-266].md` | full_content_read | 969 | 내부 검토 원천(제목 비공개) | 1 | no | AI·검색·인프라·운영·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-267 | `docs/[internal-source-267].md` | full_content_read | 585 | 내부 검토 원천(제목 비공개) | 2 | no | AI·검색·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-268 | `docs/[internal-source-268].md` | full_content_read | 29 | 내부 검토 원천(제목 비공개) | 3 | no | 제품·앱·데이터·검증·AI·검색·인프라·운영 | — | reviewed-internal-plan-or-design |
| DOC-269 | `docs/[internal-source-269].md` | full_content_read | 13 | 내부 검토 원천(제목 비공개) | 1 | no | AI·검색·인프라·운영 | — | reviewed-internal-plan-or-design |
| DOC-270 | `docs/superpowers/plans/2026-07-31-advisor-research-key-contract.md` | full_content_read | 13 | 공유 리서치 key 계약 정리 계획 | 1 | no | 제품·앱·데이터·검증·AI·검색 | — | reviewed-internal-plan-or-design |
| DOC-271 | `docs/superpowers/plans/2026-07-31-advisor-research-timing-policy.md` | full_content_read | 13 | 공유 리서치 시간 정책 정리 계획 | 1 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색 | — | reviewed-internal-plan-or-design |
| DOC-272 | `docs/superpowers/plans/2026-07-31-date-validator-contract.md` | full_content_read | 13 | 날짜 validator 계약 정리 계획 | 1 | no | 데이터·검증·AI·검색·인프라·운영 | — | reviewed-internal-plan-or-design |
| DOC-273 | `docs/[internal-source-273].md` | full_content_read | 32 | 내부 검토 원천(제목 비공개) | 4 | no | 데이터·검증·AI·검색·인프라·운영 | — | reviewed-internal-plan-or-design |
| DOC-274 | `docs/[internal-source-274].md` | full_content_read | 119 | 내부 검토 원천(제목 비공개) | 5 | no | 데이터·검증·AI·검색·인프라·운영·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-275 | `docs/superpowers/plans/2026-07-31-new-construction-trade-pattern-card-tone.md` | full_content_read | 132 | 신축 거래 패턴 카드 의미별 색상 구현 계획 | 1 | no | 부동산·주거·데이터·검증·AI·검색·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-276 | `docs/superpowers/plans/2026-07-31-recharge-timer-badge.md` | full_content_read | 537 | 아파트 추가 할당량 재충전 타이머 뱃지 Implementation Plan | 3 | no | 부동산·주거·데이터·검증·AI·검색 | — | reviewed-internal-plan-or-design |
| DOC-277 | `docs/superpowers/plans/2026-07-31-shared-research-handoff.md` | full_content_read | 109 | Shared Research Handoff Implementation Plan | 5 | no | 부동산·주거·데이터·검증·AI·검색·인프라·운영·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-278 | `docs/superpowers/plans/2026-07-31-simulation-interest-push.md` | full_content_read | 84 | Simulation Interest Push Implementation Plan | 7 | no | 부동산·주거·제품·앱·AI·검색·인프라·운영·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-279 | `docs/superpowers/plans/2026-07-31-verdict-pending-stale-safety.md` | full_content_read | 359 | Verdict Pending/Stale Safety Implementation Plan | 3 | no | AI·검색·인프라·운영·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-280 | `docs/[internal-source-280].md` | full_content_read | 13 | 내부 검토 원천(제목 비공개) | 1 | no | AI·검색 | — | reviewed-internal-plan-or-design |
| DOC-281 | `docs/superpowers/plans/2026-08-01-apartment-search-side-effects.md` | full_content_read | 117 | Apartment Search Side Effects Mitigation Implementation Plan | 1 | no | AI·검색·인프라·운영·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-282 | `docs/superpowers/plans/2026-08-01-batch-notification-hardening.md` | full_content_read | 182 | 배치 알림 경계 강화 Implementation Plan | 1 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-283 | `docs/superpowers/plans/2026-08-01-batch-timeout-github-schedule.md` | full_content_read | 911 | 일간 배치 GitHub 스케줄·타임아웃 방지 구현 계획 | 3 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-284 | `docs/[internal-source-284].md` | full_content_read | 115 | 내부 검토 원천(제목 비공개) | 5 | no | AI·검색·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-285 | `docs/[internal-source-285].md` | full_content_read | 92 | 내부 검토 원천(제목 비공개) | 6 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-286 | `docs/[internal-source-286].md` | full_content_read | 219 | 내부 검토 원천(제목 비공개) | 12 | no | 데이터·검증·AI·검색·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-287 | `docs/[internal-source-287].md` | full_content_read | 241 | 내부 검토 원천(제목 비공개) | 2 | no | 제품·앱·AI·검색·인프라·운영·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-288 | `docs/superpowers/plans/2026-08-02-batch-docs-statistics-refresh.md` | full_content_read | 104 | 배치 운영 문서·통계 갱신 Implementation Plan | 1 | no | 제품·앱·데이터·검증·AI·검색·인프라·운영·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-289 | `docs/[internal-source-289].md` | full_content_read | 117 | 내부 검토 원천(제목 비공개) | 8 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-290 | `docs/superpowers/plans/2026-08-02-login-page-redesign.md` | full_content_read | 327 | Responsive Login Page Redesign Implementation Plan | 2 | no | 데이터·검증·AI·검색·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-291 | `docs/[internal-source-291].md` | full_content_read | 115 | 내부 검토 원천(제목 비공개) | 1 | no | 데이터·검증·AI·검색·인프라·운영·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-292 | `docs/superpowers/plans/2026-08-02-monitoring-backfill-status-column.md` | full_content_read | 142 | 신규 단지 실거래가 수집 상태 열 축소 Implementation Plan | 1 | no | 부동산·주거·데이터·검증·AI·검색·인프라·운영 | — | reviewed-internal-plan-or-design |
| DOC-293 | `docs/[internal-source-293].md` | full_content_read | 98 | 내부 검토 원천(제목 비공개) | 1 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-294 | `docs/[internal-source-294].md` | full_content_read | 375 | 내부 검토 원천(제목 비공개) | 1 | no | 제품·앱·AI·검색·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-295 | `docs/[internal-source-295].md` | full_content_read | 974 | 내부 검토 원천(제목 비공개) | 5 | no | 부동산·주거·제품·앱·AI·검색·인프라·운영·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-296 | `docs/[internal-source-296].md` | full_content_read | 120 | 내부 검토 원천(제목 비공개) | 1 | no | 데이터·검증·AI·검색·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-297 | `docs/superpowers/plans/2026-08-03-apartment-detail-disclaimer-removal.md` | full_content_read | 95 | 아파트 상세 중복 이용 안내 제거 Implementation Plan | 1 | no | 부동산·주거·제품·앱·AI·검색·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-298 | `docs/superpowers/plans/2026-08-03-dashboard-factor-collection-status.md` | full_content_read | 117 | 홈 대시보드 지표 수집 현황 범위 조정 Implementation Plan | 1 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-299 | `docs/superpowers/plans/2026-08-03-docs-refresh.md` | full_content_read | 276 | 최신 코드 기준 문서 정합성 갱신 Implementation Plan | 1 | no | 데이터·검증·AI·검색·웹·모바일 | TECH-005, TECH-036 | candidate-mapped |
| DOC-300 | `docs/superpowers/plans/2026-08-03-limit-click-guards.md` | full_content_read | 8 | 한도 초과 클릭 가드 구현 계획 | 0 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색 | — | reviewed-internal-plan-or-design |
| DOC-301 | `docs/superpowers/plans/2026-08-03-share-creator-email.md` | full_content_read | 151 | Share Creator Email Display Implementation Plan | 1 | no | AI·검색·인프라·운영 | — | reviewed-internal-plan-or-design |
| DOC-302 | `docs/[internal-source-302].md` | full_content_read | 306 | 내부 검토 원천(제목 비공개) | 1 | no | 부동산·주거·제품·앱·AI·검색·인프라·운영·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-303 | `docs/superpowers/plans/2026-08-03-user-loading-skeleton-alignment.md` | full_content_read | 294 | 사용자 화면 로딩 스켈레톤 정렬 구현 계획 | 1 | no | 제품·앱·데이터·검증·AI·검색·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-304 | `docs/superpowers/plans/2026-08-03-www-site-nav-scroll.md` | full_content_read | 233 | www Mobile Site Navigation Scroll Preservation Implementation Plan | 3 | no | AI·검색·인프라·운영·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-305 | `docs/superpowers/plans/2026-08-03-www-theory-references-mobile-spacing.md` | full_content_read | 133 | www Mobile Theory References Spacing Implementation Plan | 2 | no | AI·검색·인프라·운영·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-306 | `docs/superpowers/plans/2026-08-04-holding-tax-estimate.md` | full_content_read | 112 | 보유세 추정 카드 구현 계획 | 0 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-307 | `docs/superpowers/plans/2026-08-04-holding-tax-public-price-plan.md` | full_content_read | 190 | 보유세 공시가격 fallback Implementation Plan | 2 | no | 부동산·주거·데이터·검증·AI·검색·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-308 | `docs/superpowers/plans/2026-08-04-mc-current-relative-display.md` | full_content_read | 315 | MC Current-Relative Display Implementation Plan | 1 | no | 제품·앱·AI·검색·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-309 | `docs/superpowers/plans/2026-08-04-neon-usd-cost-alerts.md` | full_content_read | 280 | Neon USD Cost Alerts Implementation Plan | 1 | no | AI·검색·인프라·운영·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-310 | `docs/superpowers/plans/2026-08-04-simulation-correction-final-price.md` | full_content_read | 270 | Simulation Correction Final Price Implementation Plan | 1 | no | AI·검색·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-311 | `docs/superpowers/plans/2026-08-04-simulation-info-bar-cleanup.md` | full_content_read | 126 | Simulation Info Bar Cleanup Implementation Plan | 2 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-312 | `docs/superpowers/plans/2026-08-04-system-push-title-and-ui.md` | full_content_read | 228 | 전체 푸시알림 제목 입력 및 강조 UI Implementation Plan | 6 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-313 | `docs/superpowers/plans/2026-08-04-system-user-announcements.md` | full_content_read | 335 | 시스템 사용자 공지 구현 계획 | 8 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-314 | `docs/[internal-source-314].md` | full_content_read | 251 | 내부 검토 원천(제목 비공개) | 1 | no | 부동산·주거·제품·앱·AI·검색 | — | reviewed-internal-plan-or-design |
| DOC-315 | `docs/[internal-source-315].md` | full_content_read | 703 | 내부 검토 원천(제목 비공개) | 2 | no | AI·검색·인프라·운영·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-316 | `docs/superpowers/plans/2026-08-05-holding-tax-scenario-rate.md` | full_content_read | 61 | Holding Tax Scenario Rate Alignment Implementation Plan | 1 | no | AI·검색·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-317 | `docs/superpowers/plans/2026-08-05-simulation-adjustment-cards.md` | full_content_read | 110 | Simulation Adjustment Cards Implementation Plan | 1 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-318 | `docs/superpowers/plans/2026-08-05-simulation-ephemeral-adjustment-state.md` | full_content_read | 454 | Simulation Ephemeral Adjustment State Implementation Plan | 2 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-319 | `docs/superpowers/plans/2026-08-05-simulation-guidance-dialog.md` | full_content_read | 483 | 시뮬레이션 활용 안내 다이얼로그 구현 계획 | 3 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-320 | `docs/superpowers/plans/2026-08-05-simulation-price-warning-alignment.md` | full_content_read | 126 | Simulation Price Warning Removal Implementation Plan | 1 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-321 | `docs/[internal-source-321].md` | full_content_read | 96 | 내부 검토 원천(제목 비공개) | 8 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-322 | `docs/superpowers/specs/2026-07-22-card-level-suspense-design.md` | full_content_read | 66 | 카드 단위 Suspense 분리 설계 | 5 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영 | — | reviewed-internal-plan-or-design |
| DOC-323 | `docs/superpowers/specs/2026-07-22-macro-briefing-icon-design.md` | full_content_read | 37 | Macro Briefing Icon and Native Store Link Design | 4 | no | AI·검색·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-324 | `docs/[internal-source-324].md` | full_content_read | 69 | 내부 검토 원천(제목 비공개) | 8 | no | 제품·앱·데이터·검증·인프라·운영·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-325 | `docs/superpowers/specs/2026-07-22-system-button-consistency-design.md` | full_content_read | 40 | 시스템 버튼 규격 정리 설계 | 5 | no | 제품·앱·데이터·검증·AI·검색·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-326 | `docs/superpowers/specs/2026-07-23-apple-private-relay-profile-display-design.md` | full_content_read | 38 | Apple Private Relay Profile Display Design | 4 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색 | — | reviewed-internal-plan-or-design |
| DOC-327 | `docs/superpowers/specs/[internal-spec-023].md` | full_content_read | 119 | 내부 분류 대표 내부 그룹 국면 충격 테스트 리포트 설계 | 9 | no | 데이터·검증·AI·검색·인프라·운영·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-328 | `docs/superpowers/specs/2026-07-23-foldable-widget-meta-row-design.md` | full_content_read | 62 | Android 폴더블 위젯 메타 행 축약 설계 | 6 | no | 부동산·주거·제품·앱·데이터·검증·인프라·운영·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-329 | `docs/[internal-source-329].md` | full_content_read | 59 | 내부 검토 원천(제목 비공개) | 5 | no | 데이터·검증·AI·검색·인프라·운영 | — | reviewed-internal-plan-or-design |
| DOC-330 | `docs/[internal-source-330].md` | full_content_read | 20 | 내부 검토 원천(제목 비공개) | 3 | no | 데이터·검증·AI·검색 | — | reviewed-internal-plan-or-design |
| DOC-331 | `docs/superpowers/specs/2026-07-23-market-buy-environment-card-design.md` | full_content_read | 263 | 시장 매수환경 카드 개선 설계 | 9 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영 | — | reviewed-internal-plan-or-design |
| DOC-332 | `docs/superpowers/specs/2026-07-23-native-push-auth-recovery-design.md` | full_content_read | 115 | Native Push 인증 오류 복구 설계 | 10 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-333 | `docs/superpowers/specs/2026-07-23-push-notification-system-hardening-design.md` | full_content_read | 384 | 푸시 알림 운영 체계 하드닝 설계 | 13 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-334 | `docs/superpowers/specs/2026-07-23-push-structure-audit-design.md` | full_content_read | 248 | Push 구조 감사 및 보수적 리팩터링 설계 | 9 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-335 | `docs/superpowers/specs/2026-07-24-macro-scenario-variable-global-factors-design.md` | full_content_read | 169 | 가상 거시 시나리오 가변 팩터 설계 | 9 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-336 | `docs/[internal-source-336].md` | full_content_read | 671 | 내부 검토 원천(제목 비공개) | 17 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-337 | `docs/[internal-source-337].md` | full_content_read | 211 | 내부 검토 원천(제목 비공개) | 11 | no | 데이터·검증·인프라·운영·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-338 | `docs/superpowers/specs/2026-07-27-price-conditioned-tax-exposure-design.md` | full_content_read | 237 | 가격 조건부 보유세 노출도 설계 | 11 | no | 부동산·주거·데이터·검증·AI·검색·인프라·운영·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-339 | `docs/superpowers/specs/2026-07-27-realtime-trend-direction-veto-design.md` | full_content_read | 295 | Realtime Trend Direction Veto Design | 10 | no | AI·검색·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-340 | `docs/superpowers/specs/2026-07-28-personalized-buy-analysis-daily-briefing-design.md` | full_content_read | 939 | 맞춤 매수 분석 일일 브리핑·데이터 보완 설계 | 25 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-341 | `docs/superpowers/specs/2026-07-28-v29-v30-regime-comparison-design.md` | full_content_read | 32 | V29 ↔ V30 국면별 비교 문서 설계 | 4 | no | 데이터·검증·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-342 | `docs/superpowers/specs/2026-07-28-vercel-batch-cutover-design.md` | full_content_read | 69 | Vercel 배치 주 실행 전환 설계 | 4 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-343 | `docs/[internal-source-343].md` | full_content_read | 59 | 내부 검토 원천(제목 비공개) | 6 | no | 부동산·주거·제품·앱·데이터·검증·인프라·운영 | — | reviewed-internal-plan-or-design |
| DOC-344 | `docs/[internal-source-344].md` | full_content_read | 373 | 내부 검토 원천(제목 비공개) | 14 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영 | — | reviewed-internal-plan-or-design |
| DOC-345 | `docs/superpowers/specs/2026-07-29-daily-briefing-placement-design.md` | full_content_read | 173 | 오늘의 브리핑 제목·배치 통합 설계 | 7 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-346 | `docs/superpowers/specs/2026-07-29-new-construction-trade-pattern-verification-design.md` | full_content_read | 563 | 신축 손피·마피 공통 판정과 맞춤 매수 분석 검증 설계 | 16 | no | 부동산·주거·데이터·검증·AI·검색·인프라·운영·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-347 | `docs/[internal-source-347].md` | full_content_read | 237 | 내부 검토 원천(제목 비공개) | 11 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-348 | `docs/[internal-source-348].md` | full_content_read | 189 | 내부 검토 원천(제목 비공개) | 13 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영 | — | reviewed-internal-plan-or-design |
| DOC-349 | `docs/[internal-source-349].md` | full_content_read | 210 | 내부 검토 원천(제목 비공개) | 11 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-350 | `docs/superpowers/specs/2026-07-31-new-construction-trade-pattern-card-tone-design.md` | full_content_read | 37 | 신축 거래 패턴 카드 의미별 색상 디자인 | 5 | no | 부동산·주거·데이터·검증 | — | reviewed-internal-plan-or-design |
| DOC-351 | `docs/superpowers/specs/2026-07-31-recharge-timer-badge-design.md` | full_content_read | 88 | 아파트 추가 할당량 재충전 타이머 뱃지 디자인 | 6 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색 | — | reviewed-internal-plan-or-design |
| DOC-352 | `docs/superpowers/specs/2026-07-31-simulation-interest-push-design.md` | full_content_read | 82 | 시뮬레이션 관심 단지 6시간 집계 푸시 디자인 | 6 | no | 부동산·주거·제품·앱·데이터·검증·인프라·운영 | — | reviewed-internal-plan-or-design |
| DOC-353 | `docs/superpowers/specs/2026-08-01-apartment-search-side-effects-design.md` | full_content_read | 54 | 아파트 검색 사이드 이펙트 완화 설계 | 5 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-354 | `docs/superpowers/specs/2026-08-01-batch-notification-hardening-design.md` | full_content_read | 42 | 배치 알림 경계 강화 설계 | 5 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영 | — | reviewed-internal-plan-or-design |
| DOC-355 | `docs/superpowers/specs/2026-08-01-batch-timeout-github-schedule-design.md` | full_content_read | 159 | 일간 배치 GitHub Actions 재전환 및 타임아웃 방지 설계 | 9 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-356 | `docs/[internal-source-356].md` | full_content_read | 80 | 내부 검토 원천(제목 비공개) | 6 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영 | — | reviewed-internal-plan-or-design |
| DOC-357 | `docs/[internal-source-357].md` | full_content_read | 302 | 내부 검토 원천(제목 비공개) | 11 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-358 | `docs/[internal-source-358].md` | full_content_read | 257 | 내부 검토 원천(제목 비공개) | 12 | no | 부동산·주거·데이터·검증·인프라·운영·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-359 | `docs/[internal-source-359].md` | full_content_read | 112 | 내부 검토 원천(제목 비공개) | 8 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영 | — | reviewed-internal-plan-or-design |
| DOC-360 | `docs/superpowers/specs/2026-08-02-batch-docs-statistics-refresh-design.md` | full_content_read | 38 | 배치 운영 문서·통계 갱신 설계 | 6 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-361 | `docs/[internal-source-361].md` | full_content_read | 50 | 내부 검토 원천(제목 비공개) | 6 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색 | — | reviewed-internal-plan-or-design |
| DOC-362 | `docs/superpowers/specs/2026-08-02-login-page-design.md` | full_content_read | 124 | 로그인 페이지 반응형 디자인 개선 설계 | 9 | no | 제품·앱·데이터·검증·인프라·운영·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-363 | `docs/[internal-source-363].md` | full_content_read | 50 | 내부 검토 원천(제목 비공개) | 6 | no | 데이터·검증·인프라·운영 | — | reviewed-internal-plan-or-design |
| DOC-364 | `docs/superpowers/specs/2026-08-02-monitoring-backfill-status-column-design.md` | full_content_read | 27 | 신규 단지 실거래가 수집 테이블 상태 열 축소 설계 | 4 | no | 부동산·주거·데이터·검증·인프라·운영 | — | reviewed-internal-plan-or-design |
| DOC-365 | `docs/[internal-source-365].md` | full_content_read | 71 | 내부 검토 원천(제목 비공개) | 6 | no | 제품·앱·데이터·검증·AI·검색·인프라·운영 | — | reviewed-internal-plan-or-design |
| DOC-366 | `docs/[internal-source-366].md` | full_content_read | 219 | 내부 검토 원천(제목 비공개) | 8 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-367 | `docs/[internal-source-367].md` | full_content_read | 37 | 내부 검토 원천(제목 비공개) | 4 | no | 데이터·검증·AI·검색 | — | reviewed-internal-plan-or-design |
| DOC-368 | `docs/superpowers/specs/2026-08-03-apartment-detail-disclaimer-design.md` | full_content_read | 27 | 아파트 상세 중복 이용 안내 제거 설계 | 4 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-369 | `docs/superpowers/specs/2026-08-03-dashboard-factor-collection-status-design.md` | full_content_read | 43 | 홈 대시보드 지표 수집 현황 범위 조정 설계 | 6 | no | 부동산·주거·제품·앱·데이터·검증·인프라·운영 | — | reviewed-internal-plan-or-design |
| DOC-370 | `docs/superpowers/specs/2026-08-03-docs-refresh-design.md` | full_content_read | 90 | 최신 코드 기준 문서 정합성 갱신 설계 | 8 | no | 부동산·주거·데이터·검증·인프라·운영·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-371 | `docs/superpowers/specs/2026-08-03-limit-click-guards-design.md` | full_content_read | 21 | 한도 초과 클릭 가드 설계 | 3 | no | 부동산·주거·제품·앱 | — | reviewed-internal-plan-or-design |
| DOC-372 | `docs/superpowers/specs/2026-08-03-share-creator-email-design.md` | full_content_read | 52 | 시스템 공유 URL 생성자 이메일 표시 설계 | 6 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영 | — | reviewed-internal-plan-or-design |
| DOC-373 | `docs/[internal-source-373].md` | full_content_read | 105 | 내부 검토 원천(제목 비공개) | 6 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영 | — | reviewed-internal-plan-or-design |
| DOC-374 | `docs/superpowers/specs/2026-08-03-user-loading-skeleton-alignment-design.md` | full_content_read | 53 | 사용자 화면 로딩 스켈레톤 정렬 설계 | 5 | no | 제품·앱·데이터·검증·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-375 | `docs/superpowers/specs/2026-08-03-www-site-nav-scroll-design.md` | full_content_read | 59 | www 모바일 상단 메뉴 가로 스크롤 유지 설계 | 6 | no | 데이터·검증·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-376 | `docs/superpowers/specs/2026-08-03-www-theory-references-mobile-spacing-design.md` | full_content_read | 28 | www 모바일 논문 목록 좌측 여백 조정 설계 | 5 | no | 데이터·검증·인프라·운영·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-377 | `docs/superpowers/specs/2026-08-04-cost-alert-cards.md` | full_content_read | 52 | 비용 알림 카드 및 Neon 달러 임계치 설계 | 5 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영 | — | reviewed-internal-plan-or-design |
| DOC-378 | `docs/superpowers/specs/2026-08-04-holding-tax-estimate-design.md` | full_content_read | 144 | 시뮬레이션 보유세 추정 카드 설계 | 9 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-379 | `docs/superpowers/specs/2026-08-04-holding-tax-public-price-design.md` | full_content_read | 55 | 보유세 계산기 공시가격 조회·표시 보완 설계 | 5 | no | 부동산·주거·인프라·운영 | RE-022 | candidate-mapped |
| DOC-380 | `docs/superpowers/specs/2026-08-04-mc-current-relative-display-design.md` | full_content_read | 128 | MC 카드 현재 대비 변동률 표시 설계 | 7 | no | 부동산·주거·제품·앱·데이터·검증·인프라·운영·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-381 | `docs/superpowers/specs/2026-08-04-simulation-correction-final-price-design.md` | full_content_read | 83 | 시뮬레이션 보정 최종가·고점 대비 표시 설계 | 6 | no | 부동산·주거·제품·앱·데이터·검증·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-382 | `docs/superpowers/specs/2026-08-04-simulation-info-bar-design.md` | full_content_read | 37 | 시뮬레이션 상단 가격 정보 바 정리 설계 | 4 | no | 부동산·주거·제품·앱 | — | reviewed-internal-plan-or-design |
| DOC-383 | `docs/superpowers/specs/2026-08-04-tax-policy-adjustment-card-design.md` | full_content_read | 72 | 세제 개편 보정 카드 설계 | 5 | no | 부동산·주거·데이터·검증·AI·검색·인프라·운영·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-384 | `docs/superpowers/specs/2026-08-04-user-announcements-design.md` | full_content_read | 164 | 사용자 공지 푸시 알림 설계 | 8 | no | 부동산·주거·제품·앱·데이터·검증·인프라·운영·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-385 | `docs/[internal-source-385].md` | full_content_read | 169 | 내부 검토 원천(제목 비공개) | 9 | no | 부동산·주거·데이터·검증·인프라·운영·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-386 | `docs/superpowers/specs/2026-08-05-result-card-height-design.md` | full_content_read | 24 | 결과 카드 높이 정렬 설계 | 3 | no | 부동산·주거·제품·앱·데이터·검증 | — | reviewed-internal-plan-or-design |
| DOC-387 | `docs/superpowers/specs/2026-08-05-simulation-adjustment-cards-design.md` | full_content_read | 87 | 시뮬레이션 보정 카드 상태 정합성 설계 | 5 | no | 부동산·주거·제품·앱·데이터·검증·AI·검색·인프라·운영·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-388 | `docs/superpowers/specs/2026-08-05-simulation-ephemeral-adjustment-state-design.md` | full_content_read | 138 | 시뮬레이션 보정 상태 단순화 설계 | 9 | no | 부동산·주거·제품·앱·인프라·운영·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-389 | `docs/superpowers/specs/2026-08-05-simulation-guidance-dialog-design.md` | full_content_read | 184 | 시뮬레이션 활용 안내 다이얼로그 설계 | 8 | no | 부동산·주거·제품·앱·데이터·검증·인프라·운영·웹·모바일 | — | reviewed-internal-plan-or-design |
| DOC-390 | `docs/superpowers/specs/2026-08-05-simulation-price-warning-alignment-design.md` | full_content_read | 36 | 시뮬레이션 정보 바 가격 경고 제거 설계 | 4 | no | 부동산·주거·제품·앱·데이터·검증·웹·모바일 | — | reviewed-internal-plan-or-design |
