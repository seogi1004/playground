# 아파트 인사이트 콘텐츠 원천 전수조사 인벤토리

> 조사 기준일: 2026-08-06
>
> 이 파일은 `/Users/alvin/Documents/my/github/apt-insights/docs`의 파일 단위를 빠짐없이 추적하기 위한 내부 계획 산출물이다. 표의 `public_disposition`은 블로그 발행 허용을 의미하지 않으며, 모든 후보는 별도 공개 문구 검수를 거쳐야 한다. 내부 문서의 제목·세부 섹션은 노출을 늘리지 않기 위해 일부러 “내부 검토 원천”으로 축약했다.
>
> 내부 모델 분류·검증 표본을 연상시키는 계획·설계·리포트 파일명은 공개 계획 산출물에서도 의도적으로 `[internal-…]`로 마스킹했다. 원문 파일은 `apt-insights/docs` 안에 있으며, 공개 후보의 `source_markdown`만 정확한 경로를 기록한다.

## 집계

- Markdown: 390개
- CSV: 1개
- 합계: 391개
- `docs/reports/`: 143개
- 새 파일명에는 공백을 사용하지 않고 `_`를 사용한다.

## 파일별 조사 원장

| source_path | source_type | status | title_or_redaction | public_disposition |
|---|---|---|---|---|
| `docs/ECOS_FACTOR_MAPPING.md` | 정책·기준 | current_reference | 내부 검토 원천(제목 비공개) | internal-review; public concepts only |
| `docs/FACTORS.md` | 정책·기준 | current_reference | 내부 검토 원천(제목 비공개) | internal-review; public concepts only |
| `docs/FEATURES.md` | 정본·서비스 | current_reference | 구현된 기능 리스트 | public-candidate; rewrite with public terminology |
| `docs/QUICK_START.md` | 정본·서비스 | current_reference | APT Insights 문서 빠른 시작 가이드 | reference; section-level review required |
| `docs/README.md` | 정본·서비스 | current_reference | APT Insights 개발 및 운영 문서 (Documentation Index) | reference; section-level review required |
| `docs/android/ANDROID_CAPACITOR_PRD.md` | 모바일 | current_reference | PRD: apt-insights 안드로이드 앱 출시를 위한 Capacitor 구축 및 심사 통과 실행 계획 | concept-or-how-to candidate; section-level review required |
| `docs/android/ANDROID_CAPACITOR_READINESS_AUDIT.md` | 모바일 | current_reference | 안드로이드 Capacitor 및 플레이스토어 출시 준비도 정밀 검토 결과 보고서 | concept-or-how-to candidate; section-level review required |
| `docs/android/ANDROID_CAPACITOR_TECH_REVIEW.md` | 모바일 | current_reference | 기술 검토서: Next.js Web (`apps/web`) → Android Capacitor 마이그레이션 | concept-or-how-to candidate; section-level review required |
| `docs/android/INDEX.md` | 모바일 | current_reference | Android 개발 & 배포 (Android Development & Deployment) | concept-or-how-to candidate; section-level review required |
| `docs/android/PLAY_STORE_RELEASE_NOTES.md` | 모바일 | current_reference | 구글 플레이 스토어 프로덕션 릴리즈 노트 (Google Play Release Notes) | concept-or-how-to candidate; section-level review required |
| `docs/api/EDGE_API.md` | API | current_reference | Edge API 레퍼런스 | concept-or-how-to candidate; section-level review required |
| `docs/api/INDEX.md` | API | current_reference | API 명세서 (API Specifications) | concept-or-how-to candidate; section-level review required |
| `docs/api/WEB_API.md` | API | current_reference | Web (Next.js) API 레퍼런스 | concept-or-how-to candidate; section-level review required |
| `docs/architecture/ARCHITECTURE.md` | 아키텍처 | current_reference | 시스템 아키텍처 | technical-candidate; abstract implementation details |
| `docs/architecture/COST_OPTIMIZATION.md` | 아키텍처 | current_reference | Vercel & Cloudflare 비용 최적화 검토 및 실행 로드맵 | technical-candidate; abstract implementation details |
| `docs/architecture/DATA_SCHEMA.md` | 아키텍처 | current_reference | 데이터 스킴 명세 | concept-or-how-to candidate; section-level review required |
| `docs/architecture/GEMINI_TEMPERATURES.md` | 아키텍처 | current_reference | 내부 검토 원천(제목 비공개) | internal-review; public concepts only |
| `docs/architecture/HOW_PREDICTION_WORKS.md` | 아키텍처 | current_reference | 내부 검토 원천(제목 비공개) | internal-review; public concepts only |
| `docs/architecture/INDEX.md` | 아키텍처 | current_reference | 아키텍처 및 핵심 이론 (Architecture & Methodology) | concept-or-how-to candidate; section-level review required |
| `docs/architecture/ON_DEMAND_SCALING.md` | 아키텍처 | current_reference | 온디맨드 확장 구조 — 가입자가 늘어날수록 저절로 넓어지는 서비스 | technical-candidate; abstract implementation details |
| `docs/architecture/PREDICTION_LAYERS_AND_SCENARIOS.md` | 아키텍처 | current_reference | 내부 검토 원천(제목 비공개) | internal-review; public concepts only |
| `docs/architecture/PREMIUM_POLICIES.md` | 아키텍처 | current_reference | 내부 검토 원천(제목 비공개) | internal-review; public concepts only |
| `docs/architecture/QUEUE_ROUTING.md` | 아키텍처 | current_reference | 큐 라우팅 정책 | technical-candidate; abstract implementation details |
| `docs/architecture/REALTIME_TREND_NOWCAST.md` | 아키텍처 | current_reference | 내부 검토 원천(제목 비공개) | internal-review; public concepts only |
| `docs/architecture/[internal-model-document].md` | 아키텍처 | current_reference | 내부 검토 원천(파일명 비공개) | internal-review; public concepts only |
| `docs/architecture/formula-reference.md` | 아키텍처 | current_reference | 내부 검토 원천(제목 비공개) | internal-review; public concepts only |
| `docs/archive/INDEX.md` | 아카이브 | historical | 아카이브 (Archive - 과거 설계 & 폐기 문서) | historical-only; never present as current |
| `docs/archive/KAKAO_LOGIN_PRD.md` | 아카이브 | historical | PRD — 카카오(Kakao) 로그인 연동 (v1.1) | historical-only; never present as current |
| `docs/archive/PUSH_NOTIFICATION_AND_INBOX_PRD.md` | 아카이브 | historical | PRD: 모바일 푸시 알림 및 통합 알림함(알림 센터) 시스템 구축 | historical-only; never present as current |
| `docs/archive/SIMULATION_PAST_FORECAST_VERIFICATION_SAMPLE_FILTER_PRD.md` | 아카이브 | historical | PRD: 시뮬레이션 화면 과거 예측 즉석 검증 표본 필터 강화 | historical-only; never present as current |
| `docs/archive/STORE_REVIEWER_BYPASS_PRD.md` | 아카이브 | historical | PRD: 일반 유저 소셜 전용 및 Android/iPhone 앱 마켓 심사관 우회 로그인(Reviewer Credentials Bypass) | historical-only; never present as current |
| `docs/archive/oauth-email-fallback.md` | 아카이브 | historical | OAuth 연동 시 이메일 누락 대응 정책 (Email Fallback Policy) | historical-only; never present as current |
| `docs/archive/troubleshooting-hydration-error.md` | 아카이브 | historical | 대시보드 로그인 후 하이드레이션 에러 (Hydration Mismatch) 원인 분석 리포트 | historical-only; never present as current |
| `docs/business/ANDROID_FEATURING_GUIDE.md` | 사업·스토어 | current_reference | Android 구글 플레이 피처링 요청 가이드 및 준비 체크리스트 | public-candidate; rewrite with public terminology |
| `docs/business/ANDROID_LAUNCH_CHECKLIST.md` | 사업·스토어 | current_reference | 안드로이드 Capacitor 구글 플레이 스토어 런칭 체크리스트 | concept-or-how-to candidate; section-level review required |
| `docs/business/ANDROID_RELEASE_GUIDE.md` | 사업·스토어 | current_reference | 안드로이드 구글 플레이 비공개 테스트 및 프로덕션 출시 가이드 | concept-or-how-to candidate; section-level review required |
| `docs/business/ANDROID_STORE_LISTING_GUIDE.md` | 사업·스토어 | current_reference | 구글 플레이 스토어 등록 정보 (실전 텍스트 & 스크린샷 기획) 가이드 | concept-or-how-to candidate; section-level review required |
| `docs/business/BILLING.md` | 사업·스토어 | current_reference | 서비스 과금 및 비용 관리 (Billing & Cost Management) | concept-or-how-to candidate; section-level review required |
| `docs/business/BUSINESS_MODEL.md` | 사업·스토어 | current_reference | 비즈니스 모델 & B2B 기술 이전 및 제휴 전략 | concept-or-how-to candidate; section-level review required |
| `docs/business/INDEX.md` | 사업·스토어 | current_reference | 비즈니스 및 배포 정책 (Business & Deployment Policies) | concept-or-how-to candidate; section-level review required |
| `docs/business/IOS_FEATURING_GUIDE.md` | 사업·스토어 | current_reference | iOS 앱스토어 피처링 요청 가이드 및 준비 체크리스트 | public-candidate; rewrite with public terminology |
| `docs/business/IOS_LAUNCH_CHECKLIST.md` | 사업·스토어 | current_reference | iOS 출시 체크리스트 및 앱스토어 심사 거절 방지 가이드 | concept-or-how-to candidate; section-level review required |
| `docs/business/IOS_RELEASE_GUIDE.md` | 사업·스토어 | current_reference | iOS Xcode Archive 및 TestFlight 릴리즈 가이드 | concept-or-how-to candidate; section-level review required |
| `docs/business/IOS_STORE_SUBMISSION_GUIDE.md` | 사업·스토어 | current_reference | iOS 앱스토어 등록 및 심사 제출 가이드 (App Store Connect Submission Guide) | concept-or-how-to candidate; section-level review required |
| `docs/business/STORE_LISTING.md` | 사업·스토어 | current_reference | 스토어 소개글 (App Store / Play Store Listing) | public-candidate; rewrite with public terminology |
| `docs/design/INDEX.md` | 디자인 | current_reference | 디자인 & UI 일관성 (Design & UI Consistency) | concept-or-how-to candidate; section-level review required |
| `docs/design/UI_CONSISTENCY_IMPROVEMENT_PRD.md` | 디자인 | current_reference | PRD — UI 컴포넌트 일관성 개선 (v1.0) | concept-or-how-to candidate; section-level review required |
| `docs/guide/BATCH_SCHEDULE.md` | 가이드 | current_reference | BATCH_SCHEDULE — 배치·검증 타이밍 quick-ref | concept-or-how-to candidate; section-level review required |
| `docs/guide/DESIGN_GUIDE.md` | 가이드 | current_reference | DESIGN_GUIDE | concept-or-how-to candidate; section-level review required |
| `docs/guide/DR_RUNBOOK.md` | 가이드 | current_reference | Disaster Recovery Runbook | concept-or-how-to candidate; section-level review required |
| `docs/guide/ENVIRONMENT.md` | 가이드 | current_reference | 환경변수 가이드 | concept-or-how-to candidate; section-level review required |
| `docs/guide/INDEX.md` | 가이드 | current_reference | 개발 및 운영 가이드 (Development & Operations Guide) | concept-or-how-to candidate; section-level review required |
| `docs/guide/NOTIFICATION_TYPES.md` | 가이드 | current_reference | 알림 타입 카탈로그 | concept-or-how-to candidate; section-level review required |
| `docs/guide/PREDICTION_INPUT_PARITY.md` | 가이드 | current_reference | PREDICTION_INPUT_PARITY — 예측 입력·검증 경로 정합성 | concept-or-how-to candidate; section-level review required |
| `docs/guide/PREDICTION_NOTIFICATION_FLOW.md` | 가이드 | current_reference | 아파트 예측 가격 변동 알림 동작 가이드 | concept-or-how-to candidate; section-level review required |
| `docs/guide/PUSH_NOTIFICATIONS.md` | 가이드 | current_reference | 푸시 알림 운영 가이드 | concept-or-how-to candidate; section-level review required |
| `docs/guide/SCRIPTS.md` | 가이드 | current_reference | Scripts 카탈로그 | concept-or-how-to candidate; section-level review required |
| `docs/guide/TRADE_SYNC.md` | 가이드 | current_reference | TRADE_SYNC — 실거래 동기화 경로 총정리 | concept-or-how-to candidate; section-level review required |
| `docs/guide/USER_GUIDE.md` | 가이드 | current_reference | APT Insights 사용자 가이드 | public-candidate; rewrite with public terminology |
| `docs/guide/WEB_STABILITY_RUNBOOK.md` | 가이드 | current_reference | Web 안정성 일일 게이트 런북 | concept-or-how-to candidate; section-level review required |
| `docs/history/AI_DEV_STATISTICS.md` | 역사 | historical | AI 기반 개발 성과 보고서 (APT Insights) | historical-candidate only when user impact or engineering lesson is explicit |
| `docs/history/INDEX.md` | 역사 | historical | 모델 변경 이력 및 통계 (History & Statistics) | historical-candidate only when user impact or engineering lesson is explicit |
| `docs/history/MODEL_HISTORY.md` | 역사 | historical | 내부 검토 원천(제목 비공개) | historical-candidate only when user impact or engineering lesson is explicit |
| `docs/history/SERVICE_HISTORY.md` | 역사 | historical | 서비스 및 인프라 변경 이력 (Service & Infrastructure History) | historical-candidate only when user impact or engineering lesson is explicit |
| `docs/history/TAG_ARCHIVE.md` | 역사 | historical | 태그 아카이브 (2026-07-25 정리 이전 기록) | historical-candidate only when user impact or engineering lesson is explicit |
| `docs/history/discussion-policy-weight.md` | 역사 | historical | 정부 정책 방향성(`policy_index`) 가중 비대칭 — Gemini 자문 요청 | historical-candidate only when user impact or engineering lesson is explicit |
| `docs/history/prediction-validation-logging.md` | 역사 | historical | 예측값 검증 로깅 전략 | historical-candidate only when user impact or engineering lesson is explicit |
| `docs/ios/INDEX.md` | 모바일 | current_reference | iOS 개발 & 배포 (iOS Development & Deployment) | concept-or-how-to candidate; section-level review required |
| `docs/ios/IOS_CAPACITOR_PRD.md` | 모바일 | current_reference | PRD: apt-insights iOS 앱 출시를 위한 Capacitor 구축 및 앱스토어 통과 계획 | concept-or-how-to candidate; section-level review required |
| `docs/operations/2026-09-quarterly-calibration-runbook.md` | 운영 | current_reference | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/operations/CACHE_INVALIDATION_RUNBOOK.md` | 운영 | current_reference | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/operations/COST_CHECKLIST.md` | 운영 | current_reference | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/operations/GEMINI_USAGE.md` | 운영 | current_reference | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/operations/INDEX.md` | 운영 | current_reference | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/public-copy-checklist.md` | 정책·기준 | current_reference | 내부 검토 원천(제목 비공개) | policy-only |
| `docs/public-copy-terminology.md` | 정책·기준 | current_reference | 내부 검토 원천(제목 비공개) | policy-only |
| `docs/reference/국토교통부_전국 법정동_20250807.csv` | 데이터 참고 | current_reference | CSV 데이터 참고 파일 | data-reference-only |
| `docs/reports/ADMIN_FORECAST_INITIAL_ARCHIVE_2026-08-01.md` | 검증·감사·운영 리포트 | current_reference | 내부 검토 원천(제목 비공개) | internal-only source; no numeric/model detail |
| `docs/reports/APT_INSIGHTS_BLOG_CONTENT_STRATEGY_REPORT.md` | 검증·감사·운영 리포트 | current_reference | 아파트 인사이트 부동산 콘텐츠 유입 전략 보고서 | reference; section-level review required |
| `docs/reports/README.md` | 검증·감사·운영 리포트 | current_reference | 검증 & 진단 리포트 (Reports & Diagnostics) | reference; section-level review required |
| `docs/reports/SOLO_DEVELOPMENT_STATISTICS.md` | 검증·감사·운영 리포트 | current_reference | 1인 개발 통계 리포트 (Solo Development Statistics) | candidate after current-state and public-safety check |
| `docs/reports/audits/ANDROID_PERFORMANCE_AUDIT.md` | 검증·감사·운영 리포트 | evidence_snapshot | 안드로이드(Capacitor) 빌드 대비 성능 및 사용성 종합 진단 보고서 | technical-candidate; abstract implementation details |
| `docs/reports/audits/ANON_DASHBOARD_FULLSCAN_AUDIT.md` | 검증·감사·운영 리포트 | evidence_snapshot | 비로그인 대시보드 요청 익명 풀스캔 진단 및 수정 보고서 | technical-candidate; abstract implementation details |
| `docs/reports/audits/EDGE_MIGRATION_AUDIT.md` | 검증·감사·운영 리포트 | evidence_snapshot | Edge Forecast 이관 수식 및 추론 검증 리포트 (Audit Report) | technical-candidate; abstract implementation details |
| `docs/reports/audits/INDEX.md` | 검증·감사·운영 리포트 | evidence_snapshot | 감사 리포트 (Audit Reports) | reference; section-level review required |
| `docs/reports/infrastructure/INDEX.md` | 검증·감사·운영 리포트 | evidence_snapshot | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/infrastructure/PEAK_ANCHOR_VALIDATION_2026-07-12.md` | 검증·감사·운영 리포트 | evidence_snapshot | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/infrastructure/PREDICTION_LOGIC_REMEDIATION_PLAN_2026-08-04.md` | 검증·감사·운영 리포트 | evidence_snapshot | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/infrastructure/PREDICTION_RESPONSIVENESS_DIAGNOSIS_2026-07-24.md` | 검증·감사·운영 리포트 | evidence_snapshot | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/infrastructure/VECM_RESIDUAL_FRESHNESS_BENCHMARK_2026-07-07.md` | 검증·감사·운영 리포트 | evidence_snapshot | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/release-notes/INDEX.md` | 릴리즈 | historical_or_current | 릴리즈 노트 (Release Notes) | candidate after current-state and public-safety check |
| `docs/reports/release-notes/RELEASE_NOTE_v0.6.3.md` | 릴리즈 | historical_or_current | 모바일 v0.6.3 릴리즈 노트 | candidate after current-state and public-safety check |
| `docs/reports/release-notes/RELEASE_NOTE_v0.6.4.md` | 릴리즈 | historical_or_current | 모바일 v0.6.4 릴리즈 노트 — Android 0.6.3 통합 핫픽스 | candidate after current-state and public-safety check |
| `docs/reports/release-notes/RELEASE_NOTE_v4.7.1.md` | 릴리즈 | historical_or_current | APT Insights v4.7.1 릴리즈 노트 | candidate after current-state and public-safety check |
| `docs/reports/release-notes/RELEASE_NOTE_v4.8.3.md` | 릴리즈 | historical_or_current | v4.8.3 릴리즈 노트 | candidate after current-state and public-safety check |
| `docs/reports/release-notes/RELEASE_NOTE_v4.8.4.md` | 릴리즈 | historical_or_current | v4.8.4 릴리즈 노트 | candidate after current-state and public-safety check |
| `docs/reports/release-notes/RELEASE_NOTE_v4.8.5.md` | 릴리즈 | historical_or_current | v4.8.5 릴리즈 노트 | candidate after current-state and public-safety check |
| `docs/reports/release-notes/RELEASE_NOTE_v4.8.6.md` | 릴리즈 | historical_or_current | v4.8.6 릴리즈 노트 | candidate after current-state and public-safety check |
| `docs/reports/release-notes/RELEASE_NOTE_v4.8.7.md` | 릴리즈 | historical_or_current | v4.8.7 릴리즈 노트 | candidate after current-state and public-safety check |
| `docs/reports/release-notes/RELEASE_NOTE_v4.9.0.md` | 릴리즈 | historical_or_current | v4.9.0 릴리즈 노트 | candidate after current-state and public-safety check |
| `docs/reports/release-notes/RELEASE_NOTE_v5.1.4.md` | 릴리즈 | historical_or_current | v5.1.4 릴리즈 노트 | candidate after current-state and public-safety check |
| `docs/reports/release-notes/RELEASE_NOTE_v5.1.5.md` | 릴리즈 | historical_or_current | v5.1.5 릴리즈 노트 | candidate after current-state and public-safety check |
| `docs/reports/release-notes/RELEASE_NOTE_v5.1.6.md` | 릴리즈 | historical_or_current | v5.1.6 서비스 릴리즈 노트 | candidate after current-state and public-safety check |
| `docs/reports/serving-forecast/[internal-forecast].md` | 검증·감사·운영 리포트 | evidence_snapshot | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/serving-forecast/[internal-forecast].md` | 검증·감사·운영 리포트 | evidence_snapshot | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/serving-forecast/[internal-forecast].md` | 검증·감사·운영 리포트 | evidence_snapshot | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v27/[internal-validation].md` | 검증·감사·운영 리포트 | historical | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v27/FORWARD_BACKTEST_NONBENCH_v27.3.md` | 검증·감사·운영 리포트 | historical | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v27/INDEX.md` | 검증·감사·운영 리포트 | historical | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v27/MAPE_AXIS_RECONCILIATION_v27.3_v28.0.md` | 검증·감사·운영 리포트 | historical | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v27/RANDOM_METRO_VALIDATION_v27.3.md` | 검증·감사·운영 리포트 | historical | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v27/RANDOM_PROVINCE_VALIDATION_v27.3.md` | 검증·감사·운영 리포트 | historical | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v27/V27.3_VALIDATION.md` | 검증·감사·운영 리포트 | historical | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v27/V27.4_RUNTIME_SAFETY_RAIL.md` | 검증·감사·운영 리포트 | historical | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v28/[internal-validation].md` | 검증·감사·운영 리포트 | historical | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v28/[internal-validation].md` | 검증·감사·운영 리포트 | historical | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v28/[internal-validation].md` | 검증·감사·운영 리포트 | historical | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v28/FORWARD_BACKTEST_NONBENCH_v28.0.md` | 검증·감사·운영 리포트 | historical | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v28/FORWARD_BACKTEST_NONBENCH_v28.1.md` | 검증·감사·운영 리포트 | historical | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v28/FORWARD_BACKTEST_NONBENCH_v28.3.md` | 검증·감사·운영 리포트 | historical | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v28/INDEX.md` | 검증·감사·운영 리포트 | historical | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v28/RANDOM_METRO_VALIDATION_v28.0.md` | 검증·감사·운영 리포트 | historical | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v28/RANDOM_METRO_VALIDATION_v28.1.md` | 검증·감사·운영 리포트 | historical | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v28/RANDOM_METRO_VALIDATION_v28.3.md` | 검증·감사·운영 리포트 | historical | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v28/RANDOM_PROVINCE_VALIDATION_v28.0.md` | 검증·감사·운영 리포트 | historical | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v28/RANDOM_PROVINCE_VALIDATION_v28.1.md` | 검증·감사·운영 리포트 | historical | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v28/RANDOM_PROVINCE_VALIDATION_v28.3.md` | 검증·감사·운영 리포트 | historical | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v28/V28.0_PREVIEW_FULL_CALIBRATION_2026-07-07.md` | 검증·감사·운영 리포트 | historical | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v28/V28.0_RUNTIME_SAFETY_RAIL.md` | 검증·감사·운영 리포트 | historical | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v28/V28.0_VALIDATION.md` | 검증·감사·운영 리포트 | historical | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v28/VALIDATION_v28.0.md` | 검증·감사·운영 리포트 | historical | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v28/VALIDATION_v28.0_PREVIEW_COMPARISON_2026-07-07.md` | 검증·감사·운영 리포트 | historical | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v28/VALIDATION_v28.1.md` | 검증·감사·운영 리포트 | historical | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v28/VALIDATION_v28.1_VS_V28.3.md` | 검증·감사·운영 리포트 | historical | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v28/VALIDATION_v28.3.md` | 검증·감사·운영 리포트 | historical | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v28/VALIDATION_v28.3_VS_V29.0.md` | 검증·감사·운영 리포트 | historical | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v29/[internal-validation].md` | 검증·감사·운영 리포트 | historical | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/[internal-validation-137].md` | 검증·감사·운영 리포트 | historical | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v29/[internal-validation].md` | 검증·감사·운영 리포트 | historical | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v29/FORWARD_BACKTEST_NONBENCH_v29.0.md` | 검증·감사·운영 리포트 | historical | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v29/INDEX.md` | 검증·감사·운영 리포트 | historical | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v29/RANDOM_METRO_VALIDATION_v29.0.md` | 검증·감사·운영 리포트 | historical | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v29/RANDOM_PROVINCE_VALIDATION_v29.0.md` | 검증·감사·운영 리포트 | historical | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v29/VALIDATION_v29.0.md` | 검증·감사·운영 리포트 | historical | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v29/VECM_SSE_SWEEP_v29.0.md` | 검증·감사·운영 리포트 | historical | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v30-serving/[internal-validation].md` | 검증·감사·운영 리포트 | historical | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v30-serving/[internal-validation].md` | 검증·감사·운영 리포트 | historical | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v30-serving/[internal-validation].md` | 검증·감사·운영 리포트 | historical | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/[internal-validation-148].md` | 검증·감사·운영 리포트 | historical | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/[internal-validation-149].md` | 검증·감사·운영 리포트 | historical | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v30-serving/[internal-validation].md` | 검증·감사·운영 리포트 | historical | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v30-serving/[internal-validation].md` | 검증·감사·운영 리포트 | historical | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v30-serving/FORWARD_BACKTEST_NONBENCH_v30.0.md` | 검증·감사·운영 리포트 | historical | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v30-serving/FORWARD_BACKTEST_NONBENCH_v30.1.md` | 검증·감사·운영 리포트 | historical | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v30-serving/INDEX.md` | 검증·감사·운영 리포트 | historical | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v30-serving/MARKET_NOWCAST_VALIDATION_v30.0.md` | 검증·감사·운영 리포트 | historical | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v30-serving/RANDOM_METRO_VALIDATION_v30.0.md` | 검증·감사·운영 리포트 | historical | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v30-serving/RANDOM_METRO_VALIDATION_v30.1.md` | 검증·감사·운영 리포트 | historical | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v30-serving/RANDOM_PROVINCE_VALIDATION_v30.0.md` | 검증·감사·운영 리포트 | historical | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v30-serving/RANDOM_PROVINCE_VALIDATION_v30.1.md` | 검증·감사·운영 리포트 | historical | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v30-serving/VALIDATION_v29.0_VS_v30.0.md` | 검증·감사·운영 리포트 | historical | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v30-serving/VALIDATION_v29.0_VS_v30.1.md` | 검증·감사·운영 리포트 | historical | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v30-serving/VALIDATION_v30.0.md` | 검증·감사·운영 리포트 | historical | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v30-serving/VALIDATION_v30.1.md` | 검증·감사·운영 리포트 | historical | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v30-serving/VECM_SSE_SWEEP_v30.0.md` | 검증·감사·운영 리포트 | historical | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v30-serving/VECM_SSE_SWEEP_v30.1.md` | 검증·감사·운영 리포트 | historical | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v30.1/[internal-validation].md` | 검증·감사·운영 리포트 | historical | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v30.1/[internal-validation].md` | 검증·감사·운영 리포트 | historical | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v30.1/[internal-validation].md` | 검증·감사·운영 리포트 | historical | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v30.1/FORWARD_BACKTEST_NONBENCH_v30.1.md` | 검증·감사·운영 리포트 | historical | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v30.1/INDEX.md` | 검증·감사·운영 리포트 | historical | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v30.1/RANDOM_METRO_VALIDATION_v30.1.md` | 검증·감사·운영 리포트 | historical | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v30.1/RANDOM_PROVINCE_VALIDATION_v30.1.md` | 검증·감사·운영 리포트 | historical | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v30.1/VALIDATION.md` | 검증·감사·운영 리포트 | historical | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v30.1/VALIDATION_v30.0_VS_v30.1.md` | 검증·감사·운영 리포트 | historical | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v30.1/VECM_SSE_SWEEP_v30.1.md` | 검증·감사·운영 리포트 | historical | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v30/[internal-validation].md` | 검증·감사·운영 리포트 | historical | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/[internal-validation-177].md` | 검증·감사·운영 리포트 | historical | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v30/[internal-validation].md` | 검증·감사·운영 리포트 | historical | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v30/FORWARD_BACKTEST_NONBENCH_v30.0.md` | 검증·감사·운영 리포트 | historical | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v30/INDEX.md` | 검증·감사·운영 리포트 | historical | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v30/RANDOM_METRO_VALIDATION_v30.0.md` | 검증·감사·운영 리포트 | historical | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v30/RANDOM_PROVINCE_VALIDATION_v30.0.md` | 검증·감사·운영 리포트 | historical | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v30/V30_FACTOR_RESTORATION_AUDIT_2026-07-28.md` | 검증·감사·운영 리포트 | historical | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v30/VALIDATION.md` | 검증·감사·운영 리포트 | historical | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v30/VALIDATION_v29_VS_v30.0.md` | 검증·감사·운영 리포트 | historical | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v30/VECM_SSE_SWEEP_v30.0.md` | 검증·감사·운영 리포트 | historical | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v31.1/[internal-validation].md` | 검증·감사·운영 리포트 | current_reference | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v31.1/[internal-validation].md` | 검증·감사·운영 리포트 | current_reference | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v31.1/[internal-validation].md` | 검증·감사·운영 리포트 | current_reference | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v31.1/FORWARD_BACKTEST_NONBENCH_v31.1.md` | 검증·감사·운영 리포트 | current_reference | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v31.1/INDEX.md` | 검증·감사·운영 리포트 | current_reference | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v31.1/RANDOM_METRO_VALIDATION_v31.1.md` | 검증·감사·운영 리포트 | current_reference | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v31.1/RANDOM_PROVINCE_VALIDATION_v31.1.md` | 검증·감사·운영 리포트 | current_reference | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v31.1/RANDOM_VALIDATION_v31.0_VS_v31.1.md` | 검증·감사·운영 리포트 | current_reference | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v31.1/V31.1_CALIBRATION_PATH_AUDIT_2026-08-05.md` | 검증·감사·운영 리포트 | current_reference | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v31.1/VALIDATION.md` | 검증·감사·운영 리포트 | current_reference | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v31.1/VALIDATION_v31.0_VS_v31.1.md` | 검증·감사·운영 리포트 | current_reference | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v31.1/VECM_SSE_SWEEP_v31.1.md` | 검증·감사·운영 리포트 | current_reference | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v31.1/WEEKLY_RANDOM_VECM_TARGETS_v31.0_VS_v31.1.md` | 검증·감사·운영 리포트 | current_reference | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v31/ADMIN_FORECAST_D1_LOG_2026-08-04.md` | 검증·감사·운영 리포트 | historical | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v31/ADMIN_FORECAST_V31.1_VS_V31.0_2026-08-05.md` | 검증·감사·운영 리포트 | historical | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v31/[internal-validation].md` | 검증·감사·운영 리포트 | historical | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/[internal-validation-203].md` | 검증·감사·운영 리포트 | historical | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v31/[internal-validation].md` | 검증·감사·운영 리포트 | historical | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v31/FORWARD_BACKTEST_NONBENCH_v31.0.md` | 검증·감사·운영 리포트 | historical | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v31/INDEX.md` | 검증·감사·운영 리포트 | historical | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v31/RANDOM_METRO_VALIDATION_v31.0.md` | 검증·감사·운영 리포트 | historical | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v31/RANDOM_PROVINCE_VALIDATION_v31.0.md` | 검증·감사·운영 리포트 | historical | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v31/SAMPLE_GENERALIZATION_ANALYSIS_v31.0.md` | 검증·감사·운영 리포트 | historical | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v31/V31_BUGFIX_AUDIT_2026-08-04.md` | 검증·감사·운영 리포트 | historical | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v31/V31_FACTOR_RESTORATION_AUDIT_2026-08-04.md` | 검증·감사·운영 리포트 | historical | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v31/VALIDATION.md` | 검증·감사·운영 리포트 | historical | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v31/VALIDATION_v29_VS_v31.0.md` | 검증·감사·운영 리포트 | historical | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v31/VALIDATION_v30_VS_v31.0.md` | 검증·감사·운영 리포트 | historical | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/v31/VECM_SSE_SWEEP_v31.0.md` | 검증·감사·운영 리포트 | historical | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/weekly-validation/INDEX.md` | 검증·감사·운영 리포트 | evidence_snapshot | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/weekly-validation/WEEKLY_RANDOM_VALIDATION_2026-07-22.md` | 검증·감사·운영 리포트 | evidence_snapshot | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/weekly-validation/WEEKLY_RANDOM_VALIDATION_MC_INTEGRITY_2026-07-12.md` | 검증·감사·운영 리포트 | evidence_snapshot | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/reports/weekly-validation/WEEKLY_RANDOM_VALIDATION_UPDATE_2026-06-22.md` | 검증·감사·운영 리포트 | evidence_snapshot | 내부 검토 원천(제목 비공개) | internal-only source; derive only high-level validation principles |
| `docs/roadmap/ROADMAP.md` | 로드맵 | current_reference | 개발 로드맵 | reference; section-level review required |
| `docs/superpowers/plans/2026-07-22-admin-haptics.md` | 계획 | planned_or_verify | 관리자 시스템 화면 햅틱 피드백 Implementation Plan | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/plans/2026-07-22-macro-briefing-icon.md` | 계획 | planned_or_verify | Macro Briefing Icon and Native Store Link Implementation Plan | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/plans/2026-07-22-platform-icon-assets.md` | 계획 | planned_or_verify | Platform Icon Assets Implementation Plan | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/plans/2026-07-22-prediction-history-timezone-badge-plan.md` | 계획 | planned_or_verify | Prediction History Timezone and Badge Implementation Plan | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/plans/2026-07-22-service-haptics-redesign.md` | 계획 | planned_or_verify | 서비스 전체 햅틱 재설계 Implementation Plan | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/plans/2026-07-22-system-button-consistency.md` | 계획 | planned_or_verify | System Button Consistency Implementation Plan | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/plans/2026-07-23-apple-private-relay-profile-display.md` | 계획 | planned_or_verify | Apple Private Relay Profile Display Implementation Plan | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/plans/[internal-plan-023].md` | 계획 | planned_or_verify | 내부 분류 대표 내부 그룹 Regime Report Implementation Plan | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/plans/2026-07-23-foldable-widget-meta-row-plan.md` | 계획 | planned_or_verify | Android Foldable Widget Metadata Row Implementation Plan | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/plans/2026-07-23-gemini-36-advisor-recovery.md` | 계획 | planned_or_verify | Gemini 3.6 Advisor Recovery Implementation Plan | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/plans/2026-07-23-gemini-model-config-copy.md` | 계획 | planned_or_verify | Gemini Model Config Copy Implementation Plan | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/plans/2026-07-23-market-buy-environment-card.md` | 계획 | planned_or_verify | Market Buy Environment Card Implementation Plan | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/plans/2026-07-23-native-push-auth-recovery.md` | 계획 | planned_or_verify | Native Push 인증 오류 복구 Implementation Plan | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/plans/2026-07-23-push-notification-system-hardening.md` | 계획 | planned_or_verify | Push Notification System Hardening Implementation Plan | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/plans/2026-07-23-push-structure-audit-refactor.md` | 계획 | planned_or_verify | Push Structure Audit Refactor Implementation Plan | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/plans/2026-07-24-macro-scenario-variable-global-factors.md` | 계획 | planned_or_verify | Macro Scenario Variable Global Factors Implementation Plan | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/plans/2026-07-24-prediction-market-nowcast-dual-anchor.md` | 계획 | planned_or_verify | Prediction Market Nowcast Dual-Anchor Implementation Plan | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/plans/2026-07-27-geomdan-live-forecast-report.md` | 계획 | planned_or_verify | Geomdan Live Forecast Report Implementation Plan | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/plans/2026-07-27-[internal-validation]-live-forecast-report.md` | 계획 | planned_or_verify | 내부 검증 표본 Live Forecast Report Implementation Plan | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/plans/2026-07-27-price-conditioned-tax-exposure.md` | 계획 | planned_or_verify | Price-Conditioned Tax Exposure Implementation Plan | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/plans/2026-07-27-realtime-trend-direction-veto.md` | 계획 | planned_or_verify | Realtime Trend Direction Veto Implementation Plan | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/plans/2026-07-28-context-tab-design-release-1.md` | 계획 | planned_or_verify | Context Tab Design Release 1 Implementation Plan | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/plans/2026-07-28-personalized-analysis-daily-briefing-release-3.md` | 계획 | planned_or_verify | Personalized Analysis Daily Briefing Release 3 Implementation Plan | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/plans/2026-07-28-personalized-analysis-evidence-release-2.md` | 계획 | planned_or_verify | Personalized Buy Analysis Evidence v26 Implementation Plan | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/plans/2026-07-28-personalized-buy-analysis-context.md` | 계획 | planned_or_verify | 맞춤 매수 분석 개인화·컨텍스트 탭 구현 계획 | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/plans/2026-07-28-tax-exposure-activation-safety.md` | 계획 | planned_or_verify | Tax Exposure Activation Safety Implementation Plan | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/plans/2026-07-28-v29-v30-regime-comparison.md` | 계획 | planned_or_verify | V29 ↔ V30 국면 비교 리포트 Implementation Plan | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/plans/2026-07-28-v30-comprehensive-audit.md` | 계획 | planned_or_verify | V30 Comprehensive Model Audit Implementation Plan | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/plans/2026-07-28-v30-report-set.md` | 계획 | planned_or_verify | V30 Validation Report Set Implementation Plan | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/plans/2026-07-28-vercel-batch-cutover.md` | 계획 | planned_or_verify | Vercel Batch Cutover Implementation Plan | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/plans/2026-07-29-admin-user-apartment-monitor.md` | 계획 | planned_or_verify | 사용자 등록 아파트 모니터링 Implementation Plan | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/plans/2026-07-29-apartment-beta-single-application.md` | 계획 | planned_or_verify | Apartment Beta Single-Application Implementation Plan | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/plans/2026-07-29-briefing-header-cleanup-and-dashboard-recommendation-highlight.md` | 계획 | planned_or_verify | 브리핑 헤더 정리·홈 추천안 강조 Implementation Plan | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/plans/2026-07-29-daily-briefing-placement.md` | 계획 | planned_or_verify | 오늘의 브리핑 제목·배치 통합 Implementation Plan | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/plans/2026-07-29-dashboard-briefing-embed-and-baseline-badge.md` | 계획 | planned_or_verify | 홈 브리핑 임베드·첫 기준점 뱃지 Implementation Plan | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/plans/2026-07-29-dashboard-briefing-link-cleanup.md` | 계획 | planned_or_verify | 홈 브리핑 중복 링크 제거 Implementation Plan | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/plans/[internal-plan-029].md` | 계획 | planned_or_verify | 내부 검토 원천(파일명 비공개) | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/plans/2026-07-29-new-construction-trade-pattern-release-a.md` | 계획 | planned_or_verify | New Construction Trade Pattern Release A Implementation Plan | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/plans/2026-07-29-personalized-analysis-apartment-correction-release-5.md` | 계획 | planned_or_verify | Personalized Analysis Apartment Correction Release 5 Implementation Plan | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/plans/2026-07-29-personalized-analysis-release-audit.md` | 계획 | planned_or_verify | 맞춤 매수 분석 계획 실행 감사 — 2026-07-29 | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/plans/2026-07-29-personalized-analysis-tax-cost-release-4.md` | 계획 | planned_or_verify | Personalized Analysis Tax and Transaction Cost Release 4 Implementation Plan | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/plans/2026-07-29-personalized-trade-verification-release-b.md` | 계획 | planned_or_verify | Personalized Trade Verification Release B Implementation Plan | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/plans/2026-07-29-safe-parallel-calibration-promotion.md` | 계획 | planned_or_verify | Safe Parallel Calibration and Promotion Implementation Plan | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/plans/2026-07-30-advisor-shared-research-kv.md` | 계획 | planned_or_verify | Advisor Shared Research KV Implementation Plan | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/plans/2026-07-30-cold-start-backlog-recovery.md` | 계획 | planned_or_verify | 신축 인근 시세 기반 예측 백로그 회수 Implementation Plan | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/plans/2026-07-30-gemini-cost-control.md` | 계획 | planned_or_verify | Gemini Cost Control Implementation Plan | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/plans/2026-07-30-score-derived-apartment-beta.md` | 계획 | planned_or_verify | Score-Derived Apartment Beta Implementation Plan | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/plans/2026-07-31-account-deletion-cache-revocation.md` | 계획 | planned_or_verify | Stage 2: 계정 삭제 캐시 정리와 revocation | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/plans/2026-07-31-active-model-bundle-key-contract.md` | 계획 | planned_or_verify | Active model bundle KV key 계약 정리 계획 | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/plans/2026-07-31-advisor-research-key-contract.md` | 계획 | planned_or_verify | 공유 리서치 key 계약 정리 계획 | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/plans/2026-07-31-advisor-research-timing-policy.md` | 계획 | planned_or_verify | 공유 리서치 시간 정책 정리 계획 | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/plans/2026-07-31-date-validator-contract.md` | 계획 | planned_or_verify | 날짜 validator 계약 정리 계획 | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/plans/2026-07-31-gemini-cost-telemetry.md` | 계획 | planned_or_verify | Gemini 실측 비용 연결 구현 계획 | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/plans/2026-07-31-gemini-usage-telemetry.md` | 계획 | planned_or_verify | Gemini Usage Telemetry Implementation Plan | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/plans/2026-07-31-new-construction-trade-pattern-card-tone.md` | 계획 | planned_or_verify | 신축 거래 패턴 카드 의미별 색상 구현 계획 | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/plans/2026-07-31-recharge-timer-badge.md` | 계획 | planned_or_verify | 아파트 추가 할당량 재충전 타이머 뱃지 Implementation Plan | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/plans/2026-07-31-shared-research-handoff.md` | 계획 | planned_or_verify | Shared Research Handoff Implementation Plan | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/plans/2026-07-31-simulation-interest-push.md` | 계획 | planned_or_verify | Simulation Interest Push Implementation Plan | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/plans/2026-07-31-verdict-pending-stale-safety.md` | 계획 | planned_or_verify | Verdict Pending/Stale Safety Implementation Plan | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/plans/2026-08-01-active-model-bundle-ttl-contract.md` | 계획 | planned_or_verify | Active model bundle KV TTL 계약 정리 계획 | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/plans/2026-08-01-apartment-search-side-effects.md` | 계획 | planned_or_verify | Apartment Search Side Effects Mitigation Implementation Plan | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/plans/2026-08-01-batch-notification-hardening.md` | 계획 | planned_or_verify | 배치 알림 경계 강화 Implementation Plan | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/plans/2026-08-01-batch-timeout-github-schedule.md` | 계획 | planned_or_verify | 일간 배치 GitHub 스케줄·타임아웃 방지 구현 계획 | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/plans/2026-08-01-cold-start-forecast-parity.md` | 계획 | planned_or_verify | Cold-start forecast parity implementation plan | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/plans/2026-08-01-gemini-cost-reduction.md` | 계획 | planned_or_verify | Gemini 비용 절감 Implementation Plan | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/plans/2026-08-01-seoul-residual-region-classification.md` | 계획 | planned_or_verify | 서울 잔차 권역 분류 개선 Implementation Plan | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/plans/2026-08-02-admin-prediction-batch-redesign.md` | 계획 | planned_or_verify | 관리자 고정 예측 배치 재설계 Implementation Plan | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/plans/2026-08-02-batch-docs-statistics-refresh.md` | 계획 | planned_or_verify | 배치 운영 문서·통계 갱신 Implementation Plan | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/plans/2026-08-02-dashboard-prediction-notice-gate.md` | 계획 | planned_or_verify | 대시보드 예측 결과 이용 안내 게이트 구현 계획 | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/plans/2026-08-02-login-page-redesign.md` | 계획 | planned_or_verify | Responsive Login Page Redesign Implementation Plan | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/plans/2026-08-02-model-mobile-card-padding.md` | 계획 | planned_or_verify | model.html 모바일 학술 카드 여백 수정 및 배포 Implementation Plan | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/plans/2026-08-02-monitoring-backfill-status-column.md` | 계획 | planned_or_verify | 신규 단지 실거래가 수집 상태 열 축소 Implementation Plan | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/plans/2026-08-02-prediction-disclaimer.md` | 계획 | planned_or_verify | 예측 결과 법적 고지 정비 Implementation Plan | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/plans/2026-08-02-prediction-notification-completion.md` | 계획 | planned_or_verify | Prediction Notification Completion Implementation Plan | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/plans/2026-08-02-simulation-trade-sync-queue.md` | 계획 | planned_or_verify | Simulation Trade Sync Queue Implementation Plan | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/plans/2026-08-03-admin-forecast-initial-archive.md` | 계획 | planned_or_verify | 관리자 고정 예측 최초 박제 보고서 Implementation Plan | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/plans/2026-08-03-apartment-detail-disclaimer-removal.md` | 계획 | planned_or_verify | 아파트 상세 중복 이용 안내 제거 Implementation Plan | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/plans/2026-08-03-dashboard-factor-collection-status.md` | 계획 | planned_or_verify | 홈 대시보드 지표 수집 현황 범위 조정 Implementation Plan | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/plans/2026-08-03-docs-refresh.md` | 계획 | planned_or_verify | 최신 코드 기준 문서 정합성 갱신 Implementation Plan | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/plans/2026-08-03-limit-click-guards.md` | 계획 | planned_or_verify | 한도 초과 클릭 가드 구현 계획 | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/plans/2026-08-03-share-creator-email.md` | 계획 | planned_or_verify | Share Creator Email Display Implementation Plan | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/plans/[internal-plan-073].md` | 계획 | planned_or_verify | 내부 검토 원천(파일명 비공개) | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/plans/2026-08-03-user-loading-skeleton-alignment.md` | 계획 | planned_or_verify | 사용자 화면 로딩 스켈레톤 정렬 구현 계획 | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/plans/2026-08-03-www-site-nav-scroll.md` | 계획 | planned_or_verify | www Mobile Site Navigation Scroll Preservation Implementation Plan | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/plans/2026-08-03-www-theory-references-mobile-spacing.md` | 계획 | planned_or_verify | www Mobile Theory References Spacing Implementation Plan | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/plans/2026-08-04-holding-tax-estimate.md` | 계획 | planned_or_verify | 보유세 추정 카드 구현 계획 | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/plans/2026-08-04-holding-tax-public-price-plan.md` | 계획 | planned_or_verify | 보유세 공시가격 fallback Implementation Plan | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/plans/2026-08-04-mc-current-relative-display.md` | 계획 | planned_or_verify | MC Current-Relative Display Implementation Plan | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/plans/2026-08-04-neon-usd-cost-alerts.md` | 계획 | planned_or_verify | Neon USD Cost Alerts Implementation Plan | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/plans/2026-08-04-simulation-correction-final-price.md` | 계획 | planned_or_verify | Simulation Correction Final Price Implementation Plan | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/plans/2026-08-04-simulation-info-bar-cleanup.md` | 계획 | planned_or_verify | Simulation Info Bar Cleanup Implementation Plan | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/plans/2026-08-04-system-push-title-and-ui.md` | 계획 | planned_or_verify | 전체 푸시알림 제목 입력 및 강조 UI Implementation Plan | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/plans/2026-08-04-system-user-announcements.md` | 계획 | planned_or_verify | 시스템 사용자 공지 구현 계획 | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/plans/[internal-plan-085].md` | 계획 | planned_or_verify | 내부 검토 원천(파일명 비공개) | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/plans/2026-08-04-vworld-redis-cache-compaction.md` | 계획 | planned_or_verify | VWorld Redis Cache Compaction Implementation Plan | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/plans/2026-08-05-holding-tax-scenario-rate.md` | 계획 | planned_or_verify | Holding Tax Scenario Rate Alignment Implementation Plan | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/plans/2026-08-05-simulation-adjustment-cards.md` | 계획 | planned_or_verify | Simulation Adjustment Cards Implementation Plan | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/plans/2026-08-05-simulation-ephemeral-adjustment-state.md` | 계획 | planned_or_verify | Simulation Ephemeral Adjustment State Implementation Plan | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/plans/2026-08-05-simulation-guidance-dialog.md` | 계획 | planned_or_verify | 시뮬레이션 활용 안내 다이얼로그 구현 계획 | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/plans/2026-08-05-simulation-price-warning-alignment.md` | 계획 | planned_or_verify | Simulation Price Warning Removal Implementation Plan | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/specs/2026-07-22-admin-haptics-design.md` | 설계 | planned_or_verify | 관리자 시스템 화면 햅틱 피드백 설계 | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/specs/2026-07-22-card-level-suspense-design.md` | 설계 | planned_or_verify | 카드 단위 Suspense 분리 설계 | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/specs/2026-07-22-macro-briefing-icon-design.md` | 설계 | planned_or_verify | Macro Briefing Icon and Native Store Link Design | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/specs/2026-07-22-prediction-history-timezone-badge-design.md` | 설계 | planned_or_verify | 예측 가격 변경 히스토리 시간대·뱃지 축약 설계 | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/specs/2026-07-22-system-button-consistency-design.md` | 설계 | planned_or_verify | 시스템 버튼 규격 정리 설계 | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/specs/2026-07-23-apple-private-relay-profile-display-design.md` | 설계 | planned_or_verify | Apple Private Relay Profile Display Design | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/specs/[internal-spec-023].md` | 설계 | planned_or_verify | 내부 분류 대표 내부 그룹 국면 충격 테스트 리포트 설계 | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/specs/2026-07-23-foldable-widget-meta-row-design.md` | 설계 | planned_or_verify | Android 폴더블 위젯 메타 행 축약 설계 | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/specs/2026-07-23-gemini-36-advisor-recovery-design.md` | 설계 | planned_or_verify | Gemini 3.6 맞춤 매수 분석 복구 설계 | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/specs/2026-07-23-gemini-model-config-copy-design.md` | 설계 | planned_or_verify | Gemini 모델 설정 안내 문구 개선 | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/specs/2026-07-23-market-buy-environment-card-design.md` | 설계 | planned_or_verify | 시장 매수환경 카드 개선 설계 | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/specs/2026-07-23-native-push-auth-recovery-design.md` | 설계 | planned_or_verify | Native Push 인증 오류 복구 설계 | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/specs/2026-07-23-push-notification-system-hardening-design.md` | 설계 | planned_or_verify | 푸시 알림 운영 체계 하드닝 설계 | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/specs/2026-07-23-push-structure-audit-design.md` | 설계 | planned_or_verify | Push 구조 감사 및 보수적 리팩터링 설계 | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/specs/2026-07-24-macro-scenario-variable-global-factors-design.md` | 설계 | planned_or_verify | 가상 거시 시나리오 가변 팩터 설계 | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/specs/2026-07-24-prediction-market-nowcast-dual-anchor-design.md` | 설계 | planned_or_verify | 예측 반응성 개선을 위한 Market Nowcast 이중 앵커 설계 | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/specs/2026-07-27-[internal-validation]-live-forecast-report-design.md` | 설계 | planned_or_verify | 고정 내부 검증 표본단지 실시간 6·12개월 예측 보고서 설계 | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/specs/2026-07-27-price-conditioned-tax-exposure-design.md` | 설계 | planned_or_verify | 가격 조건부 보유세 노출도 설계 | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/specs/2026-07-27-realtime-trend-direction-veto-design.md` | 설계 | planned_or_verify | Realtime Trend Direction Veto Design | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/specs/2026-07-28-personalized-buy-analysis-daily-briefing-design.md` | 설계 | planned_or_verify | 맞춤 매수 분석 일일 브리핑·데이터 보완 설계 | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/specs/2026-07-28-v29-v30-regime-comparison-design.md` | 설계 | planned_or_verify | V29 ↔ V30 국면별 비교 문서 설계 | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/specs/2026-07-28-vercel-batch-cutover-design.md` | 설계 | planned_or_verify | Vercel 배치 주 실행 전환 설계 | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/specs/2026-07-29-admin-user-apartment-monitor-design.md` | 설계 | planned_or_verify | 사용자 등록 아파트 수집 모니터링 설계 | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/specs/2026-07-29-apartment-model-beta-single-application-design.md` | 설계 | planned_or_verify | 단지 모델 베타 단일 적용·개발자 전용 노출·순차 승격 설계 | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/specs/2026-07-29-daily-briefing-placement-design.md` | 설계 | planned_or_verify | 오늘의 브리핑 제목·배치 통합 설계 | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/specs/2026-07-29-new-construction-trade-pattern-verification-design.md` | 설계 | planned_or_verify | 신축 손피·마피 공통 판정과 맞춤 매수 분석 검증 설계 | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/specs/2026-07-30-gemini-cost-control-design.md` | 설계 | planned_or_verify | Gemini 비용 절감 안전 변경 설계 (이전안) | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/specs/2026-07-30-score-derived-apartment-beta-design.md` | 설계 | planned_or_verify | 점수 기반 단지 베타 기준값 재설계 | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/specs/2026-07-31-cache-gemini-hardening-design.md` | 설계 | planned_or_verify | 캐시·Gemini 비용 안전 하드닝 설계 | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/specs/2026-07-31-new-construction-trade-pattern-card-tone-design.md` | 설계 | planned_or_verify | 신축 거래 패턴 카드 의미별 색상 디자인 | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/specs/2026-07-31-recharge-timer-badge-design.md` | 설계 | planned_or_verify | 아파트 추가 할당량 재충전 타이머 뱃지 디자인 | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/specs/2026-07-31-simulation-interest-push-design.md` | 설계 | planned_or_verify | 시뮬레이션 관심 단지 6시간 집계 푸시 디자인 | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/specs/2026-08-01-apartment-search-side-effects-design.md` | 설계 | planned_or_verify | 아파트 검색 사이드 이펙트 완화 설계 | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/specs/2026-08-01-batch-notification-hardening-design.md` | 설계 | planned_or_verify | 배치 알림 경계 강화 설계 | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/specs/2026-08-01-batch-timeout-github-schedule-design.md` | 설계 | planned_or_verify | 일간 배치 GitHub Actions 재전환 및 타임아웃 방지 설계 | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/specs/2026-08-01-cold-start-forecast-parity-design.md` | 설계 | planned_or_verify | Cold-start forecast parity design | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/specs/2026-08-01-gemini-cost-reduction-prd.md` | 설계 | planned_or_verify | Gemini 비용 절감 PRD | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/specs/2026-08-01-seoul-residual-region-classification-design.md` | 설계 | planned_or_verify | 서울 잔차 권역 분류 개선 설계 | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/specs/2026-08-02-admin-prediction-batch-redesign-design.md` | 설계 | planned_or_verify | 관리자 고정 예측 배치 재설계 | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/specs/2026-08-02-batch-docs-statistics-refresh-design.md` | 설계 | planned_or_verify | 배치 운영 문서·통계 갱신 설계 | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/specs/2026-08-02-dashboard-prediction-notice-gate-design.md` | 설계 | planned_or_verify | 대시보드 예측 결과 이용 안내 게이트 설계 | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/specs/2026-08-02-login-page-design.md` | 설계 | planned_or_verify | 로그인 페이지 반응형 디자인 개선 설계 | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/specs/2026-08-02-model-mobile-card-padding-design.md` | 설계 | planned_or_verify | model.html 모바일 학술 카드 여백 디자인 | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/specs/2026-08-02-monitoring-backfill-status-column-design.md` | 설계 | planned_or_verify | 신규 단지 실거래가 수집 테이블 상태 열 축소 설계 | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/specs/2026-08-02-prediction-notification-completion-design.md` | 설계 | planned_or_verify | 예측 변동 알림 배치 완료 보장 설계 | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/specs/2026-08-02-simulation-trade-sync-queue-design.md` | 설계 | planned_or_verify | 시뮬레이션 단지 일간 실거래 수집 큐 전환 설계 | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/specs/2026-08-03-admin-forecast-initial-archive-design.md` | 설계 | planned_or_verify | 관리자 고정 예측 최초 박제 보고서 설계 | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/specs/2026-08-03-apartment-detail-disclaimer-design.md` | 설계 | planned_or_verify | 아파트 상세 중복 이용 안내 제거 설계 | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/specs/2026-08-03-dashboard-factor-collection-status-design.md` | 설계 | planned_or_verify | 홈 대시보드 지표 수집 현황 범위 조정 설계 | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/specs/2026-08-03-docs-refresh-design.md` | 설계 | planned_or_verify | 최신 코드 기준 문서 정합성 갱신 설계 | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/specs/2026-08-03-limit-click-guards-design.md` | 설계 | planned_or_verify | 한도 초과 클릭 가드 설계 | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/specs/2026-08-03-share-creator-email-design.md` | 설계 | planned_or_verify | 시스템 공유 URL 생성자 이메일 표시 설계 | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/specs/[internal-spec-063].md` | 설계 | planned_or_verify | 내부 검토 원천(파일명 비공개) | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/specs/2026-08-03-user-loading-skeleton-alignment-design.md` | 설계 | planned_or_verify | 사용자 화면 로딩 스켈레톤 정렬 설계 | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/specs/2026-08-03-www-site-nav-scroll-design.md` | 설계 | planned_or_verify | www 모바일 상단 메뉴 가로 스크롤 유지 설계 | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/specs/2026-08-03-www-theory-references-mobile-spacing-design.md` | 설계 | planned_or_verify | www 모바일 논문 목록 좌측 여백 조정 설계 | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/specs/2026-08-04-cost-alert-cards.md` | 설계 | planned_or_verify | 비용 알림 카드 및 Neon 달러 임계치 설계 | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/specs/2026-08-04-holding-tax-estimate-design.md` | 설계 | planned_or_verify | 시뮬레이션 보유세 추정 카드 설계 | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/specs/2026-08-04-holding-tax-public-price-design.md` | 설계 | planned_or_verify | 보유세 계산기 공시가격 조회·표시 보완 설계 | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/specs/2026-08-04-mc-current-relative-display-design.md` | 설계 | planned_or_verify | MC 카드 현재 대비 변동률 표시 설계 | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/specs/2026-08-04-simulation-correction-final-price-design.md` | 설계 | planned_or_verify | 시뮬레이션 보정 최종가·고점 대비 표시 설계 | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/specs/2026-08-04-simulation-info-bar-design.md` | 설계 | planned_or_verify | 시뮬레이션 상단 가격 정보 바 정리 설계 | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/specs/2026-08-04-tax-policy-adjustment-card-design.md` | 설계 | planned_or_verify | 세제 개편 보정 카드 설계 | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/specs/2026-08-04-user-announcements-design.md` | 설계 | planned_or_verify | 사용자 공지 푸시 알림 설계 | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/specs/2026-08-04-vworld-redis-cache-compaction-design.md` | 설계 | planned_or_verify | VWorld Redis 캐시 정리 및 요약 저장 설계 | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/specs/2026-08-05-result-card-height-design.md` | 설계 | planned_or_verify | 결과 카드 높이 정렬 설계 | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/specs/2026-08-05-simulation-adjustment-cards-design.md` | 설계 | planned_or_verify | 시뮬레이션 보정 카드 상태 정합성 설계 | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/specs/2026-08-05-simulation-ephemeral-adjustment-state-design.md` | 설계 | planned_or_verify | 시뮬레이션 보정 상태 단순화 설계 | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/specs/2026-08-05-simulation-guidance-dialog-design.md` | 설계 | planned_or_verify | 시뮬레이션 활용 안내 다이얼로그 설계 | internal-review; only publish implemented user impact or generic engineering lesson |
| `docs/superpowers/specs/2026-08-05-simulation-price-warning-alignment-design.md` | 설계 | planned_or_verify | 시뮬레이션 정보 바 가격 경고 제거 설계 | internal-review; only publish implemented user impact or generic engineering lesson |
