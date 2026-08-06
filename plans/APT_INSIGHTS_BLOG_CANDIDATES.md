# 아파트 인사이트 블로그 글 후보 목록

> 조사 기준일: 2026-08-06
>
> 부동산·주거금융·기술 블로그 후보를 한 문서에서 찾기 위한 통합 목록이다. 이 문서는 초안이 아니라 후보 백로그다. 모든 `source_markdown`은 이 파일(`playground/plans/`) 기준의 정확한 출처 경로이며, 초안 작성 전 해당 파일과 근거 섹션을 다시 확인한다.
>
> 기술 후보는 아파트 인사이트 블로그에 원문을 두고, 일반화할 수 있는 문제·트레이드오프가 있을 때만 긱뉴스 등 커뮤니티용 요약을 별도로 만든다.

## 후보 집계

- 부동산·주거금융: 61개
- 기술·1인 개발: 42개
- 통합 후보: 103개
- 지역·단지 파생 글은 실제 최신 데이터가 확인될 때만 별도 생성한다.

## 통합 후보 목록

| candidate_id | blog_track | priority | type | blog_title | source_markdown | source_section | app_cta_or_distribution | status |
|---|---|---:|---|---|---|---|---|---|
| RE-001 | Real Estate | P0 | 설명 | 아파트 가격을 현재 거래가·과거 이력·예상 범위로 나눠 보는 법 | `../../apt-insights/docs/guide/USER_GUIDE.md` 단지 상세·시뮬레이션; `../../apt-insights/docs/business/STORE_LISTING.md` 설명 | 근거 섹션은 원천 카탈로그 참조 | 아파트 검색·상세 | 상시·공개용 재작성 |
| RE-002 | Real Estate | P0 | 설명 | 6개월·12개월·18개월 전망을 한꺼번에 비교할 때 주의할 점 | `../../apt-insights/docs/business/STORE_LISTING.md` 분석 결과 공유; `../../apt-insights/docs/FEATURES.md` 예측 기간 | 근거 섹션은 원천 카탈로그 참조 | 시뮬레이션 기간 선택 | 상시·공개용 재작성 |
| RE-003 | Real Estate | P0 | 설명 | 미래 가격을 하나의 숫자보다 범위로 봐야 하는 이유 | `../../apt-insights/docs/business/STORE_LISTING.md` 확률 분포·가격 범위; `../../apt-insights/docs/public-copy-terminology.md` 공개 표현 | 근거 섹션은 원천 카탈로그 참조 | 예측 범위 확인 | 상시·공개용 재작성 |
| RE-004 | Real Estate | P0 | 문제 해결 | 최근 거래 한 건만으로 우리 아파트 시세를 판단하면 안 되는 이유 | `../../apt-insights/docs/guide/TRADE_SYNC.md` 실거래 표본·동기화; `../../apt-insights/docs/FEATURES.md` 실거래 흐름 | 근거 섹션은 원천 카탈로그 참조 | 단지 상세의 거래 흐름 | 상시·공개용 재작성 |
| RE-005 | Real Estate | P0 | 설명 | 전세가율을 매매 판단의 단독 기준으로 사용하면 안 되는 이유 | `../../apt-insights/docs/FACTORS.md` 전세 관련 지표; `../../apt-insights/docs/guide/USER_GUIDE.md` 분석 화면 | 근거 섹션은 원천 카탈로그 참조 | 단지 상세·시나리오 | 상시·개념 공개 |
| RE-006 | Real Estate | P0 | 비교 | 실거주 이사 시점과 투자 수익률 질문을 분리해서 보는 법 | `../../apt-insights/docs/guide/USER_GUIDE.md` 이사 시점·타임라인; `../../apt-insights/docs/business/STORE_LISTING.md` 의사결정 참고용 | 근거 섹션은 원천 카탈로그 참조 | A안·B안 타임라인 | 상시·공개용 재작성 |
| RE-007 | Real Estate | P0 | 설명 | 같은 동네 아파트 가격이 다르게 움직이는 이유를 읽는 순서 | `../../apt-insights/docs/FACTORS.md` 단지·지역 지표; `../../apt-insights/docs/guide/USER_GUIDE.md` 입지 카드 | 근거 섹션은 원천 카탈로그 참조 | 단지별 상세 분석 | 상시·개념 공개 |
| RE-008 | Real Estate | P0 | 비교 | 신축·구축·거래 부족 단지를 같은 방식으로 비교하면 안 되는 이유 | `../../apt-insights/docs/architecture/PREMIUM_POLICIES.md` 신축·재건축 개념; `../../apt-insights/docs/FEATURES.md` 신축 데이터 안내 | 근거 섹션은 원천 카탈로그 참조 | 신축 거래·신뢰도 안내 | 상시·개념 공개 |
| RE-009 | Real Estate | P0 | 설명 | 하방 위험 신호를 매수 추천으로 오해하지 않는 체크리스트 | `../../apt-insights/docs/business/STORE_LISTING.md` 하방 리스크·면책; `../../apt-insights/docs/guide/USER_GUIDE.md` 예측 주의사항 | 근거 섹션은 원천 카탈로그 참조 | 상세 분석·시뮬레이션 | 상시·면책 필수 |
| RE-010 | Real Estate | P1 | FAQ | 아파트 가격 분석에서 “오른다·내린다”보다 먼저 물어야 할 질문 | `../../apt-insights/docs/reports/APT_INSIGHTS_BLOG_CONTENT_STRATEGY_REPORT.md` 실수요자 의사결정; `../../apt-insights/docs/business/STORE_LISTING.md` 참고용 분석 | 근거 섹션은 원천 카탈로그 참조 | 앱 온보딩 | 상시·공개용 재작성 |
| RE-011 | Housing Finance | P0 | 설명 | 주택담보대출 금리와 아파트 가격의 연결을 읽는 법 | `../../apt-insights/docs/ECOS_FACTOR_MAPPING.md` 금리 출처; `../../apt-insights/docs/business/STORE_LISTING.md` 지표 예시 | 근거 섹션은 원천 카탈로그 참조 | 금리 시나리오 | 갱신·수치 검수 |
| RE-012 | Housing Finance | P1 | 설명 | 금리가 바뀌어도 아파트 가격이 바로 움직이지 않을 수 있는 이유 | `../../apt-insights/docs/FACTORS.md` 거시 지표 갱신; `../../apt-insights/docs/history/SERVICE_HISTORY.md` 시장 신호 문맥 | 근거 섹션은 원천 카탈로그 참조 | 가상 조건 비교 | 상시·개념 공개 |
| RE-013 | Housing Finance | P1 | 설명 | 환율이 주택시장에 영향을 주는 간접 경로 | `../../apt-insights/docs/ECOS_FACTOR_MAPPING.md` 환율 출처; `../../apt-insights/docs/reports/APT_INSIGHTS_BLOG_CONTENT_STRATEGY_REPORT.md` 거시 팩터 해설 | 근거 섹션은 원천 카탈로그 참조 | 시나리오 비교 | 갱신·출처 필요 |
| RE-014 | Housing Finance | P1 | 설명 | 유가 변화가 집값에 영향을 주는 경로를 쉽게 설명하면 | `../../apt-insights/docs/ECOS_FACTOR_MAPPING.md` 유가 출처; `../../apt-insights/docs/business/STORE_LISTING.md` 지표 예시 | 근거 섹션은 원천 카탈로그 참조 | 시나리오 비교 | 갱신·출처 필요 |
| RE-015 | Housing Finance | P1 | 설명 | 가계부채를 주택시장 위험 신호로 읽을 때의 한계 | `../../apt-insights/docs/ECOS_FACTOR_MAPPING.md` 가계부채 출처; `../../apt-insights/docs/reports/APT_INSIGHTS_BLOG_CONTENT_STRATEGY_REPORT.md` 거시 팩터 해설 | 근거 섹션은 원천 카탈로그 참조 | 조건별 시뮬레이션 | 갱신·면책 필수 |
| RE-016 | Housing Finance | P1 | 설명 | 건설비가 오를 때 신축 아파트 가격을 읽는 방법 | `../../apt-insights/docs/ECOS_FACTOR_MAPPING.md` 건설비 출처; `../../apt-insights/docs/architecture/PREMIUM_POLICIES.md` 신축 개념 | 근거 섹션은 원천 카탈로그 참조 | 신축 단지 분석 | 갱신·개념 공개 |
| RE-017 | Real Estate | P1 | 설명 | 매수심리지표와 실제 거래가 엇갈릴 때 확인할 것 | `../../apt-insights/docs/FEATURES.md` 시장 흐름; `../../apt-insights/docs/history/SERVICE_HISTORY.md` 시장 reference 지표 | 근거 섹션은 원천 카탈로그 참조 | 시장 흐름 카드 | 갱신·정의 확인 |
| RE-018 | Real Estate | P1 | 설명 | 정책 발표 직후 아파트 가격이 바로 움직이지 않는 이유 | `../../apt-insights/docs/FACTORS.md` 정책 지표; `../../apt-insights/docs/history/SERVICE_HISTORY.md` 정책 시나리오 | 근거 섹션은 원천 카탈로그 참조 | 정책 시나리오 | 갱신·확정 여부 필수 |
| RE-019 | Real Estate | P1 | 비교 | 인구·공급·금리를 따로 보지 않고 함께 보는 방법 | `../../apt-insights/docs/FACTORS.md` 구조·거시 지표; `../../apt-insights/docs/reports/APT_INSIGHTS_BLOG_CONTENT_STRATEGY_REPORT.md` 팩터 조합 | 근거 섹션은 원천 카탈로그 참조 | 조건 비교 | 상시·개념 공개 |
| RE-020 | Housing Finance | P1 | 문제 해결 | 금리 기사와 내 월 현금흐름을 연결해 읽는 체크리스트 | `../../apt-insights/docs/guide/USER_GUIDE.md` 재무·타임라인 입력; `../../apt-insights/docs/business/STORE_LISTING.md` 가계 계획 | 근거 섹션은 원천 카탈로그 참조 | 개인화 분석 | 상시·면책 필수 |
| RE-021 | Housing Finance | P0 | 사용법 | 보유세 계산에서 현행 기준과 정책안 기준을 나눠 보는 이유 | `../../apt-insights/docs/FEATURES.md` 보유세 계산기; `../../apt-insights/docs/history/SERVICE_HISTORY.md` 보유세·정책 시나리오 | 근거 섹션은 원천 카탈로그 참조 | 보유세 계산기 | 정책 갱신·세무 면책 |
| RE-022 | Housing Finance | P0 | FAQ | 공시가격으로 계산한 보유세가 실제 고지액과 다를 수 있는 이유 | `../../apt-insights/docs/superpowers/specs/2026-08-04-holding-tax-public-price-design.md` 공시가격 보완 설계; `../../apt-insights/docs/business/STORE_LISTING.md` 면책 | 근거 섹션은 원천 카탈로그 참조 | 보유세 계산 | 정책 갱신·세무 면책 |
| RE-023 | Housing Finance | P1 | 설명 | 실거주 여부와 보유세 시나리오 입력의 의미 | `../../apt-insights/docs/FEATURES.md` 시뮬레이션 보유세; `../../apt-insights/docs/superpowers/specs/2026-08-04-holding-tax-estimate-design.md` 사용자 입력 | 근거 섹션은 원천 카탈로그 참조 | 보유세 계산 | 정책 갱신·세무 면책 |
| RE-024 | Housing Finance | P1 | 비교 | 세금 계산 결과와 가격 예측 결과를 섞어 해석하면 안 되는 이유 | `../../apt-insights/docs/architecture/PREDICTION_LAYERS_AND_SCENARIOS.md` 공개 개념 재작성; `../../apt-insights/docs/FEATURES.md` 보유세 카드 | 근거 섹션은 원천 카탈로그 참조 | 시뮬레이션·보유세 | 상시·개념 공개 |
| RE-025 | Housing Finance | P1 | 체크리스트 | 정책 발표와 확정된 세법을 구분해서 읽는 법 | `../../apt-insights/docs/reports/APT_INSIGHTS_BLOG_CONTENT_STRATEGY_REPORT.md` 정책·세금 규칙; `../../apt-insights/docs/public-copy-checklist.md` 기준일 규칙 | 근거 섹션은 원천 카탈로그 참조 | 보유세 계산 | 정책 갱신·면책 필수 |
| RE-026 | Real Estate | P0 | 설명 | 교통 호재를 발표·검토·착공·개통 단계로 구분하는 법 | `../../apt-insights/docs/FEATURES.md` 교통 지표; `../../apt-insights/docs/reports/APT_INSIGHTS_BLOG_CONTENT_STRATEGY_REPORT.md` 지역·입지 콘텐츠 | 근거 섹션은 원천 카탈로그 참조 | 입지 카드 | 갱신·공식 출처 필요 |
| RE-027 | Real Estate | P1 | 설명 | 오래 지연된 교통 호재의 기대감을 같은 크기로 보면 안 되는 이유 | `../../apt-insights/docs/history/SERVICE_HISTORY.md` 교통 단계·시간 감쇄 기록; `../../apt-insights/docs/FEATURES.md` 입지 안내 | 근거 섹션은 원천 카탈로그 참조 | 단지 상세 | 갱신·공식 출처 필요 |
| RE-028 | Real Estate | P0 | 설명 | 직주근접·교통·학군·생활 인프라를 따로 읽는 순서 | `../../apt-insights/docs/FEATURES.md` 입지 지표; `../../apt-insights/docs/guide/USER_GUIDE.md` 입지 카드 | 근거 섹션은 원천 카탈로그 참조 | 입지 카드 | 상시·개념 공개 |
| RE-029 | Real Estate | P1 | 비교 | 지역 평균과 개별 단지 거래를 함께 볼 때 생기는 차이 | `../../apt-insights/docs/FACTORS.md` 지역·단지 지표; `../../apt-insights/docs/guide/USER_GUIDE.md` 단지 상세 | 근거 섹션은 원천 카탈로그 참조 | 지역·단지 상세 | 상시·개념 공개 |
| RE-030 | Real Estate | P1 | 설명 | 공급량과 전세 흐름을 함께 봐야 하는 이유 | `../../apt-insights/docs/FACTORS.md` 공급·전세 지표; `../../apt-insights/docs/reports/APT_INSIGHTS_BLOG_CONTENT_STRATEGY_REPORT.md` 지역 콘텐츠 | 근거 섹션은 원천 카탈로그 참조 | 조건 비교 | 갱신·데이터 출처 필요 |
| RE-031 | Real Estate | P0 | 문제 해결 | 신축 아파트의 거래 표본이 부족할 때 분석 결과를 읽는 법 | `../../apt-insights/docs/architecture/ON_DEMAND_SCALING.md` 신축 데이터 부족 처리; `../../apt-insights/docs/FEATURES.md` 신축 안내 | 근거 섹션은 원천 카탈로그 참조 | 신축 거래·신뢰도 안내 | 상시·개념 공개 |
| RE-032 | Real Estate | P1 | 비교 | 일반 매매와 분양권 거래를 같은 가격 데이터로 합치면 안 되는 이유 | `../../apt-insights/docs/guide/TRADE_SYNC.md` 거래 유형·필터; `../../apt-insights/docs/history/SERVICE_HISTORY.md` 거래 유형 정합 | 근거 섹션은 원천 카탈로그 참조 | 거래 흐름 확인 | 상시·공개용 재작성 |
| RE-033 | Real Estate | P1 | 설명 | 거래 취소·신고 지연이 아파트 시세 해석에 미치는 영향 | `../../apt-insights/docs/guide/TRADE_SYNC.md` 실패 월·재시도·거래 데이터; `../../apt-insights/docs/FEATURES.md` 데이터 상태 | 근거 섹션은 원천 카탈로그 참조 | 거래 상태 확인 | 갱신·출처 필요 |
| RE-034 | Real Estate | P1 | FAQ | 대표 평형 거래가 없을 때 예측 신뢰도가 낮아지는 이유 | `../../apt-insights/docs/guide/TRADE_SYNC.md` 표본·평형 처리; `../../apt-insights/docs/business/STORE_LISTING.md` 데이터 한계 | 근거 섹션은 원천 카탈로그 참조 | 단지 상세 | 상시·개념 공개 |
| RE-035 | Real Estate | P1 | 비교 | “예측 불가”와 “낮은 신뢰도”를 구분해서 읽는 법 | `../../apt-insights/docs/FEATURES.md` 신뢰도·거래 부족 안내; `../../apt-insights/docs/guide/USER_GUIDE.md` 면책 | 근거 섹션은 원천 카탈로그 참조 | 상세 분석 | 상시·공개용 재작성 |
| RE-036 | Real Estate | P1 | 설명 | 신축 거래 패턴을 일반 시세와 분리해서 보는 이유 | `../../apt-insights/docs/history/SERVICE_HISTORY.md` 신축 거래 패턴 기록; `../../apt-insights/docs/superpowers/specs/2026-07-29-new-construction-trade-pattern-verification-design.md` 사용자 영향만 재작성 | 근거 섹션은 원천 카탈로그 참조 | 신축 카드 | 갱신·개념 공개 |
| RE-037 | Real Estate | P0 | 설명 | 기본 경로와 가상 시나리오의 차이 | `../../apt-insights/docs/FEATURES.md` 가상 시나리오; `../../apt-insights/docs/guide/USER_GUIDE.md` 시뮬레이션 | 근거 섹션은 원천 카탈로그 참조 | 시나리오 선택 | 상시·공개용 재작성 |
| RE-038 | Real Estate | P0 | 사용법 | 금리 상승·공급 변화 시나리오를 넣고 결과를 비교하는 순서 | `../../apt-insights/docs/FEATURES.md` 시나리오 카드; `../../apt-insights/docs/history/SERVICE_HISTORY.md` 시나리오 적용 경계 | 근거 섹션은 원천 카탈로그 참조 | 시뮬레이션 | 갱신·현재 UI 확인 |
| RE-039 | Real Estate | P1 | 설명 | 1만 번의 가상 경로가 미래를 맞히는 기술은 아닌 이유 | `../../apt-insights/docs/business/STORE_LISTING.md` 확률 분포·면책; `../../apt-insights/docs/public-copy-terminology.md` 공개 표현 | 근거 섹션은 원천 카탈로그 참조 | 시뮬레이션 | 상시·공개용 재작성 |
| RE-040 | Real Estate | P1 | 설명 | 예측 범위의 아래쪽과 위쪽을 해석하는 방법 | `../../apt-insights/docs/business/STORE_LISTING.md` 가격 범위; `../../apt-insights/docs/FEATURES.md` 결과 카드 | 근거 섹션은 원천 카탈로그 참조 | 결과 카드 | 상시·공개용 재작성 |
| RE-041 | Real Estate | P1 | 설명 | 영향 요인 차트에서 가장 긴 막대만 보면 안 되는 이유 | `../../apt-insights/docs/business/STORE_LISTING.md` 영향 요인 설명; `../../apt-insights/docs/guide/USER_GUIDE.md` 결과 해석 | 근거 섹션은 원천 카탈로그 참조 | 결과 영향 요인 카드 | 상시·공개용 재작성 |
| RE-042 | Real Estate | P1 | 비교 | 여러 가정을 동시에 바꿀 때 결과를 과신하지 않는 방법 | `../../apt-insights/docs/history/SERVICE_HISTORY.md` 시나리오 입력 경계; `../../apt-insights/docs/FEATURES.md` 시나리오 | 근거 섹션은 원천 카탈로그 참조 | 시나리오 초기화·비교 | 상시·면책 필수 |
| RE-043 | Real Estate | P0 | 사용법 | 아파트 인사이트 처음 시작하기: 지역·단지·이사 시점 입력 | `../../apt-insights/docs/guide/USER_GUIDE.md` 온보딩; `../../apt-insights/docs/FEATURES.md` 온보딩 | 근거 섹션은 원천 카탈로그 참조 | 온보딩 | 상시·현재 UI 확인 |
| RE-044 | Real Estate | P0 | 사용법 | 관심 아파트를 등록한 뒤 먼저 확인할 정보 | `../../apt-insights/docs/guide/USER_GUIDE.md` 홈·아파트 목록·상세; `../../apt-insights/docs/FEATURES.md` 등록 | 근거 섹션은 원천 카탈로그 참조 | 아파트 등록 | 상시·현재 UI 확인 |
| RE-045 | Real Estate | P1 | 사용법 | 팩터 카드에서 데이터 출처와 업데이트 시각 읽는 법 | `../../apt-insights/docs/guide/USER_GUIDE.md` 대시보드·팩터; `../../apt-insights/docs/FEATURES.md` 출처 문맥 | 근거 섹션은 원천 카탈로그 참조 | 팩터 카드 | 갱신·현재 UI 확인 |
| RE-046 | Real Estate | P0 | 사용법 | A안·B안 시뮬레이션으로 이사 시점을 비교하는 방법 | `../../apt-insights/docs/guide/USER_GUIDE.md` 타임라인; `../../apt-insights/docs/business/STORE_LISTING.md` 재무 조건 분석 | 근거 섹션은 원천 카탈로그 참조 | A/B 타임라인 | 상시·현재 UI 확인 |
| RE-047 | Real Estate | P1 | 사용법 | 예측 변경 이력과 알림을 함께 사용하는 순서 | `../../apt-insights/docs/guide/PREDICTION_NOTIFICATION_FLOW.md` 사용자 영향; `../../apt-insights/docs/guide/PUSH_NOTIFICATIONS.md` 알림 | 근거 섹션은 원천 카탈로그 참조 | 예측 이력·알림 | 갱신·현재 정책 확인 |
| RE-048 | Real Estate | P1 | 사용법 | 분석 결과 공유 URL을 보낼 때 확인할 개인정보와 만료 조건 | `../../apt-insights/docs/business/STORE_LISTING.md` 공유 기능; `../../apt-insights/docs/guide/USER_GUIDE.md` 공유 | 근거 섹션은 원천 카탈로그 참조 | 공유 URL | 갱신·공유 정책 확인 |
| RE-049 | Real Estate | P1 | 사용법 | 보유세 계산기와 가격 시나리오를 함께 사용하는 순서 | `../../apt-insights/docs/FEATURES.md` 보유세·시나리오; `../../apt-insights/docs/history/SERVICE_HISTORY.md` 카드 정렬 | 근거 섹션은 원천 카탈로그 참조 | 보유세·시뮬레이션 | 갱신·세무 면책 |
| RE-050 | Real Estate | P2 | 사용법 | 모바일 위젯과 푸시 알림으로 관심 단지를 모니터링하는 법 | `../../apt-insights/docs/business/STORE_LISTING.md` 위젯·푸시; `../../apt-insights/docs/android/PLAY_STORE_RELEASE_NOTES.md` 모바일 기능 | 근거 섹션은 원천 카탈로그 참조 | 위젯·푸시 | 릴리즈 갱신 |
| RE-051 | Real Estate | P1 | 신뢰 | 평균 절대 오차를 아파트 예측 성적표에서 읽는 법 | `../../apt-insights/docs/reports/v31.1/VALIDATION.md` 공식 검증 개요; `../../apt-insights/docs/reports/APT_INSIGHTS_BLOG_CONTENT_STRATEGY_REPORT.md` 오차 해설 | 근거 섹션은 원천 카탈로그 참조 | 검증 안내 | 갱신·수치 기준일 필요 |
| RE-052 | Real Estate | P1 | 신뢰 | R²와 평균 절대 오차를 함께 봐야 하는 이유 | `../../apt-insights/docs/reports/v31.1/VALIDATION.md` 지표 정의; `../../apt-insights/docs/business/STORE_LISTING.md` 백테스트 | 근거 섹션은 원천 카탈로그 참조 | 검증 화면 | 갱신·수치 기준일 필요 |
| RE-053 | Real Estate | P1 | 신뢰 | 과거 검증에서 잘 맞았다는 말이 미래 가격을 보장하지 않는 이유 | `../../apt-insights/docs/reports/v31.1/VALIDATION.md` 해석 한계; `../../apt-insights/docs/guide/USER_GUIDE.md` 면책 | 근거 섹션은 원천 카탈로그 참조 | 분석 화면 | 갱신·면책 필수 |
| RE-054 | Real Estate | P1 | 신뢰 | 예측 범위가 실제 가격을 포함했는지 확인하는 방법 | `../../apt-insights/docs/reports/v31.1/VALIDATION.md` 범위 검증; `../../apt-insights/docs/business/STORE_LISTING.md` 확률 범위 | 근거 섹션은 원천 카탈로그 참조 | 검증 안내 | 갱신·수치 기준일 필요 |
| RE-055 | Real Estate | P2 | 신뢰 | 데이터 출처·기준일·표본을 글 하나에 표시하는 방법 | `../../apt-insights/docs/public-copy-checklist.md` 수치·기준일; `../../apt-insights/docs/reports/APT_INSIGHTS_BLOG_CONTENT_STRATEGY_REPORT.md` 발행 규칙 | 근거 섹션은 원천 카탈로그 참조 | 관련 상세 분석 | 상시·공개용 재작성 |
| RE-056 | Real Estate | P1 | 설명 | AI 설명과 가격 시뮬레이션 결과가 다른 역할을 하는 이유 | `../../apt-insights/docs/business/STORE_LISTING.md` AI 맞춤 진단; `../../apt-insights/docs/public-copy-terminology.md` AI 표현 | 근거 섹션은 원천 카탈로그 참조 | 개인화 분석 | 상시·AI 면책 필수 |
| RE-057 | Real Estate | P1 | 체크리스트 | 부동산 AI 분석을 매수 추천으로 오해하지 않는 방법 | `../../apt-insights/docs/business/STORE_LISTING.md` 면책; `../../apt-insights/docs/public-copy-checklist.md` 권유성 표현 금지 | 근거 섹션은 원천 카탈로그 참조 | 앱 분석 시작 | 상시·면책 필수 |
| RE-058 | Real Estate | P2 | FAQ | 데이터가 부족한 단지에서 확신보다 한계를 먼저 봐야 하는 이유 | `../../apt-insights/docs/architecture/ON_DEMAND_SCALING.md` 데이터 부족 처리; `../../apt-insights/docs/guide/USER_GUIDE.md` 주의사항 | 근거 섹션은 원천 카탈로그 참조 | 상세 분석 | 상시·개념 공개 |
| RE-059 | Real Estate | P2 | 설명 | 지역·단지 글을 숫자 없이도 유용하게 만드는 데이터 읽기 구조 | `../../apt-insights/docs/reports/APT_INSIGHTS_BLOG_CONTENT_STRATEGY_REPORT.md` 지역 확장 규칙; `../../apt-insights/docs/public-copy-checklist.md` 지역 수치 검수 | 근거 섹션은 원천 카탈로그 참조 | 지역 검색 | 상시·공개용 재작성 |
| RE-060 | Real Estate | P2 | 허브 | 아파트 인사이트 부동산 콘텐츠 허브: 거래·금리·세금·시나리오·검증 | `../../apt-insights/docs/reports/APT_INSIGHTS_BLOG_CONTENT_STRATEGY_REPORT.md` 10개 콘텐츠 축; `../../apt-insights/docs/README.md` 문서 인덱스 | 근거 섹션은 원천 카탈로그 참조 | 앱 시작·관련 글 | 상시·허브 문서 |
| TECH-001 | Technology | P0 | 1인 개발 회고 | 1인 개발자가 부동산 분석 서비스를 운영하며 먼저 자동화한 일들 | `../../apt-insights/docs/reports/SOLO_DEVELOPMENT_STATISTICS.md` | 왜 이 리포트를 쓰는가·개발 리듬·품질 지표; `../../apt-insights/docs/history/AI_DEV_STATISTICS.md` · 개발 성과 | 데모·블로그 원문 | 공개 가능, 수치 재확인 |
| TECH-002 | Technology | P0 | AI 협업 회고 | AI가 코드를 많이 쓰는 것보다 중요한 작업 경계와 검증 기준 | `../../apt-insights/docs/history/AI_DEV_STATISTICS.md` | AI 개발 성과·검증; `../../apt-insights/docs/guide/WEB_STABILITY_RUNBOOK.md` · 안정성 게이트 | 공개 저장소·앱 데모 | 공개 가능, 내부 식별자 제거 |
| TECH-003 | Technology | P0 | 문서화 | 혼자 개발할수록 작업 지침서와 공개 문구 검수 규칙이 필요한 이유 | `../../apt-insights/AGENTS.md` | 콘텐츠·보안·검증 정책; `../../apt-insights/docs/public-copy-checklist.md` · 발행 전 검사 | 공개 문서 원칙 | 공개 가능, 비밀값 제외 |
| TECH-004 | Technology | P1 | 운영 회고 | 1인 개발 서비스에서 기능 욕심을 운영 가능한 범위로 줄이는 방법 | `../../apt-insights/docs/reports/SOLO_DEVELOPMENT_STATISTICS.md` | 개발 규모·운영 리듬; `../../apt-insights/docs/history/SERVICE_HISTORY.md` · 릴리즈 경계 | 앱 데모 | 공개 가능, 실측 갱신 |
| TECH-005 | Technology | P1 | 프로세스 | 계획·설계·구현·검증 문서를 하나의 변경 흐름으로 관리한 방법 | `../../apt-insights/docs/superpowers/plans/2026-08-03-docs-refresh.md` | 문서 정합성; `../../apt-insights/docs/README.md` · 문서 인덱스 | GitHub·문서 | 계획과 구현 구분 |
| TECH-006 | Technology | P0 | 아키텍처 | 전국 데이터를 미리 계산하지 않고 사용자가 보는 지역부터 확장하는 온디맨드 구조 | `../../apt-insights/docs/architecture/ON_DEMAND_SCALING.md` | 핵심 원칙·왜 이렇게 설계했나·지역 카탈로그 | 앱 검색 데모 | 공개 가능, 규모·내부 한도 추상화 |
| TECH-007 | Technology | P0 | 데이터 파이프라인 | 지역을 선택하는 순간 검색 카탈로그를 지연 구축하는 설계 | `../../apt-insights/docs/architecture/ON_DEMAND_SCALING.md` | 지역 검색 카탈로그; `../../apt-insights/docs/history/SERVICE_HISTORY.md` · 지역 검색 최신화 | 아파트 검색 | 공개 가능, 라우트·키 비공개 |
| TECH-008 | Technology | P0 | 데이터 파이프라인 | 사용자가 보는 단지에 실거래 동기화를 우선 배치한 이유 | `../../apt-insights/docs/architecture/ON_DEMAND_SCALING.md` | 실거래 동기화; `../../apt-insights/docs/guide/TRADE_SYNC.md` · 경로 요약·화면 진입 동기화 | 관심 단지 등록 | 공개 가능, 배치 세부값 제거 |
| TECH-009 | Technology | P1 | 확장성 | 아파트를 등록하는 행동이 데이터 커버리지를 넓히는 구조 | `../../apt-insights/docs/architecture/ON_DEMAND_SCALING.md` | 아파트 추가·사용자별 이력 | 온보딩 데모 | 공개 가능, 내부 필드명 제거 |
| TECH-010 | Technology | P0 | 메시징 | 무거운 작업을 큐로 분리하고 장애 시 대체 경로를 둔 설계 | `../../apt-insights/docs/architecture/QUEUE_ROUTING.md` | 실제 흐름·재시도; `../../apt-insights/docs/architecture/ON_DEMAND_SCALING.md` · 큐 인프라 | 앱 처리 안정성 | 공개 가능, 공급자·키 상세 추상화 |
| TECH-011 | Technology | P0 | 신뢰성 | 실거래 수집 작업을 멱등·재시도·부분 실패 복구로 설계한 이유 | `../../apt-insights/docs/guide/TRADE_SYNC.md` | 실패 월·재시도·완료 조건; `../../apt-insights/docs/reports/release-notes/RELEASE_NOTE_v4.8.3.md` · 부분 실패 보강 | 거래 데이터 신뢰 | 공개 가능 |
| TECH-012 | Technology | P1 | 신뢰성 | 수집이 덜 끝났을 때 성공으로 기록하지 않는 fail-closed 원칙 | `../../apt-insights/docs/guide/TRADE_SYNC.md` | 실패 처리; `../../apt-insights/docs/guide/PREDICTION_INPUT_PARITY.md` · 공통 입력 계약 | 예측 신뢰성 | 공개 가능, 내부 계약명 제거 |
| TECH-013 | Technology | P1 | 작업 원장 | 대량 실거래 수집을 실행·대상·작업 원장으로 나눠 복구 가능하게 만든 방법 | `../../apt-insights/docs/reports/release-notes/RELEASE_NOTE_v5.1.4.md` | durable 작업 원장·복구; `../../apt-insights/docs/guide/DR_RUNBOOK.md` · 복구 절차 | 운영 안정성 | 공개 가능, 수치·경로 추상화 |
| TECH-014 | Technology | P0 | 캐시 | 웹과 엣지의 캐시 역할을 분리해 병목을 줄인 이유 | `../../apt-insights/docs/architecture/ON_DEMAND_SCALING.md` | 캐시 계층; `../../apt-insights/docs/architecture/COST_OPTIMIZATION.md` · 비용·캐시 원칙 | 분석 응답 속도 | 공개 가능, 저장소 키 비공개 |
| TECH-015 | Technology | P1 | 비용 최적화 | 서버리스 선택과 데이터 사전 구축 비용을 같은 원칙으로 맞추기 | `../../apt-insights/docs/architecture/ON_DEMAND_SCALING.md` | 서버리스 컴퓨팅·실질적 이점; `../../apt-insights/docs/architecture/COST_OPTIMIZATION.md` · 비용 방어 | 서비스 데모 | 공개 가능, 실제 비용은 재검수 |
| TECH-016 | Technology | P1 | 비용 최적화 | 생성형 AI 호출 비용을 캐시·재실행·사용량 정책으로 통제한 방법 | `../../apt-insights/docs/operations/GEMINI_USAGE.md` | 역할·캐시·모니터링; `../../apt-insights/docs/operations/COST_CHECKLIST.md` · 비용 방어 | 맞춤 분석 데모 | 공개 가능, 모델·한도·비용 수치 제거 |
| TECH-017 | Technology | P1 | AI 시스템 | AI 설명 기능과 계산 결과의 역할을 분리한 부동산 서비스 설계 | `../../apt-insights/docs/business/STORE_LISTING.md` | AI 맞춤 진단·면책; `../../apt-insights/docs/public-copy-terminology.md` · AI 표현 | 앱 분석 화면 | 공개 가능, 공급자·프롬프트 비공개 |
| TECH-018 | Technology | P1 | AI 시스템 | 최신 뉴스 검색 근거를 시나리오 설명에 연결할 때 생기는 검증 문제 | `../../apt-insights/docs/history/SERVICE_HISTORY.md` | 가상 시나리오 grounding; `../../apt-insights/docs/superpowers/specs/2026-07-24-macro-scenario-variable-global-factors-design.md` · 검색 근거 경계 | 시나리오 데모 | 기술 채널 한정, 내부 설정 제거 |
| TECH-019 | Technology | P0 | ML 운영 | 학습·검증·서빙 입력을 맞추지 않으면 생기는 train-serve skew | `../../apt-insights/docs/reports/audits/EDGE_MIGRATION_AUDIT.md` | 계산식 크로스체크·skew; `../../apt-insights/docs/guide/PREDICTION_INPUT_PARITY.md` · 입력 정합성 | 검증 화면 | 기술 채널 한정, 내부 수식 제거 |
| TECH-020 | Technology | P0 | ML 운영 | 과거 검증과 실제 서비스 결과를 같은 계약으로 비교하는 방법 | `../../apt-insights/docs/guide/PREDICTION_INPUT_PARITY.md` | 백테스트 정합; `../../apt-insights/docs/reports/v31.1/VALIDATION.md` · 검증 경계 | 공개 검증 안내 | 기술 채널 한정, 표본 구조 비공개 |
| TECH-021 | Technology | P1 | ML 운영 | 모델 변경을 바로 배포하지 않고 전체 경로를 다시 확인하는 승격 게이트 | `../../apt-insights/docs/reports/v31.1/V31.1_CALIBRATION_PATH_AUDIT_2026-08-05.md` | 경로 감사·승격 증적; `../../apt-insights/docs/history/MODEL_HISTORY.md` · 변경 이력 | 투명성 콘텐츠 | 기술 채널 한정, 내부 분류 제거 |
| TECH-022 | Technology | P1 | 관측성 | 예측 변경 이력을 저장하고 알림 팬아웃으로 연결한 설계 | `../../apt-insights/docs/architecture/ON_DEMAND_SCALING.md` | 사용자별 이력·알림; `../../apt-insights/docs/guide/PREDICTION_NOTIFICATION_FLOW.md` · 전체 흐름 | 예측 이력·알림 | 공개 가능, 내부 필드명 제거 |
| TECH-023 | Technology | P1 | 알림 | 푸시 알림에서 접수·발송·재시도를 분리해야 하는 이유 | `../../apt-insights/docs/guide/PUSH_NOTIFICATIONS.md` | 푸시 흐름; `../../apt-insights/docs/reports/release-notes/RELEASE_NOTE_v4.9.0.md` · 오류 정책 | 알림 기능 | 공개 가능, 토큰·사용자 정보 비공개 |
| TECH-024 | Technology | P0 | 장애 대응 | 데이터베이스·큐·외부 API 장애를 가정한 1인 개발 서비스 복구 런북 | `../../apt-insights/docs/guide/DR_RUNBOOK.md` | 장애 시나리오·운영 대응; `../../apt-insights/docs/guide/WEB_STABILITY_RUNBOOK.md` · 안정성 게이트 | 서비스 신뢰 | 기술 채널 한정, 자격증명·경로 제거 |
| TECH-025 | Technology | P1 | 배치 운영 | 일간 데이터 작업과 주간·월간 검증을 분리한 이유 | `../../apt-insights/docs/guide/BATCH_SCHEDULE.md` | 배치 역할·검증 주기; `../../apt-insights/docs/history/SERVICE_HISTORY.md` · 배치 변경 이력 | 앱 데이터 신선도 | 공개 가능, 내부 스케줄·표본 제거 |
| TECH-026 | Technology | P1 | 장애 회고 | 배치 타임아웃을 스케줄 소유권과 커서 연속성으로 줄인 방법 | `../../apt-insights/docs/reports/release-notes/RELEASE_NOTE_v5.1.4.md` | 커서·스케줄 ownership; `../../apt-insights/docs/superpowers/specs/2026-08-01-batch-timeout-github-schedule-design.md` · 설계 결정 | 운영 안정성 | 기술 채널 한정, 워크플로 식별자 제거 |
| TECH-027 | Technology | P1 | 공개 웹 | 공유 페이지에서 분석 결과와 개인정보를 분리하는 설계 | `../../apt-insights/docs/business/STORE_LISTING.md` | 공유 기능·민감 정보 보호; `../../apt-insights/docs/guide/USER_GUIDE.md` · 공유 | 공유 URL | 공개 가능, whitelist·내부 경로 추상화 |
| TECH-028 | Technology | P2 | 웹 플랫폼 | 차트가 포함된 공유 페이지를 서버 OG 이미지와 웹 화면으로 나누는 이유 | `../../apt-insights/docs/business/STORE_LISTING.md` | 공유·미리보기; `../../apt-insights/docs/history/SERVICE_HISTORY.md` · 공유 URL 정합 | 공유 결과 | 공개 가능, URL 구조 일반화 |
| TECH-029 | Technology | P0 | SEO | 부동산 분석 서비스를 검색엔진과 AI 검색에 함께 노출시키는 문서 구조 | `../../apt-insights/docs/history/SERVICE_HISTORY.md` | 정적 가이드·SEO·AI Search Discovery; `../../apt-insights/docs/reports/release-notes/RELEASE_NOTE_v4.8.7.md` · 랜딩 정비 | 블로그·앱 유입 | 공개 가능, 현재 사이트 상태 재확인 |
| TECH-030 | Technology | P1 | SEO | JSON-LD·사이트맵·문서 허브를 제품 전환 흐름과 연결하는 법 | `../../apt-insights/docs/history/SERVICE_HISTORY.md` | 정적 가이드 허브·구조화 데이터; `../../apt-insights/docs/README.md` · 문서 인덱스 | Research·Blog·앱 CTA | 공개 가능 |
| TECH-031 | Technology | P1 | 모바일 | 웹 서비스를 Android·iOS 앱으로 확장할 때 Capacitor에서 검토할 것들 | `../../apt-insights/docs/android/ANDROID_CAPACITOR_TECH_REVIEW.md` | WebView·오프라인·OAuth; `../../apt-insights/docs/ios/IOS_CAPACITOR_PRD.md` · 네이티브 요구 | 앱 다운로드 | 기술 채널 한정, 심사·보안 세부 검수 |
| TECH-032 | Technology | P1 | 모바일 | 웹 기반 앱에서 오프라인 fallback과 인증 WebView 문제를 함께 다룬 방법 | `../../apt-insights/docs/android/ANDROID_CAPACITOR_READINESS_AUDIT.md` | 오프라인·OAuth; `../../apt-insights/docs/reports/audits/ANDROID_PERFORMANCE_AUDIT.md` · 성능·사용성 | 모바일 앱 | 기술 채널 한정 |
| TECH-033 | Technology | P2 | 모바일 | 홈 화면 위젯과 푸시 액션을 기존 웹 기능에 연결하는 방법 | `../../apt-insights/docs/business/STORE_LISTING.md` | 위젯·푸시 액션; `../../apt-insights/docs/reports/release-notes/RELEASE_NOTE_v0.6.4.md` · 모바일 변경 | 위젯·알림 | 공개 가능, 플랫폼 설정 재확인 |
| TECH-034 | Technology | P1 | 프론트엔드 | 공용 버튼·카드·스켈레톤 토큰으로 화면 일관성과 CLS를 줄인 회고 | `../../apt-insights/docs/guide/DESIGN_GUIDE.md` | 토큰·상태·버튼; `../../apt-insights/docs/design/UI_CONSISTENCY_IMPROVEMENT_PRD.md` · 목표·진단; `../../apt-insights/docs/history/SERVICE_HISTORY.md` · UI 후속 정비 | 웹 서비스 데모 | 공개 가능, 내부 컴포넌트명 제거 |
| TECH-035 | Technology | P1 | 장애 회고 | 비로그인 화면의 요청을 풀스캔해 익명 경로의 문제를 찾은 방법 | `../../apt-insights/docs/reports/audits/ANON_DASHBOARD_FULLSCAN_AUDIT.md` | 증상·진단·재발 방지 | 랜딩·대시보드 | 기술 채널 한정, 내부 경로 제거 |
| TECH-036 | Technology | P1 | 운영 회고 | 공개 문서와 현재 코드가 어긋날 때 문서 정합성부터 회복하는 방법 | `../../apt-insights/docs/superpowers/plans/2026-08-03-docs-refresh.md` | 목표·기준 상태; `../../apt-insights/docs/history/SERVICE_HISTORY.md` · 문서 정합 | GitHub·Research | 공개 가능 |
| TECH-037 | Technology | P2 | 릴리즈 운영 | 릴리즈 노트를 기능 홍보가 아니라 검증 가능한 변경 원장으로 쓰는 법 | `../../apt-insights/docs/reports/release-notes/INDEX.md` | 버전 정책; `../../apt-insights/docs/history/SERVICE_HISTORY.md` · 변경 이력 | GitHub·블로그 | 공개 가능 |
| TECH-038 | Technology | P1 | B2B | 부동산 분석 서비스를 B2B 기술 쇼케이스로 운영할 때 공개 범위를 정하는 법 | `../../apt-insights/docs/business/BUSINESS_MODEL.md` | 제품 정체성·B2B 전략; `../../apt-insights/docs/reports/APT_INSIGHTS_BLOG_CONTENT_STRATEGY_REPORT.md` · B2B 독자 | 데모·문의 | 공개 가능, 가격·내부 운영 비공개 |
| TECH-039 | Technology | P1 | 데이터 거버넌스 | 공공 데이터·서비스 계산·AI 설명의 출처 경계를 문서화하는 법 | `../../apt-insights/docs/guide/TRADE_SYNC.md` | 실거래 출처; `../../apt-insights/docs/business/STORE_LISTING.md` · 데이터·AI 설명; `../../apt-insights/docs/public-copy-checklist.md` · 출처 규칙 | 출처 안내 | 공개 가능 |
| TECH-040 | Technology | P2 | 제품 설계 | “보는 사람에게, 보는 시점에” 계산하는 원칙이 데이터·알림·개인화에 반복되는 방식 | `../../apt-insights/docs/architecture/ON_DEMAND_SCALING.md` | 핵심 원칙·개인화 분석; `../../apt-insights/docs/reports/APT_INSIGHTS_BLOG_CONTENT_STRATEGY_REPORT.md` · 기술 콘텐츠 | 앱 전체 데모 | 공개 가능, 내부 구현 추상화 |
| RE-061 | Real Estate | P1 | 업데이트·사용법 | 보유세·시나리오·신축·재건축 카드를 함께 읽는 순서 | `../../apt-insights/docs/reports/release-notes/RELEASE_NOTE_v5.1.6.md` | 주요 변경·보유세·시뮬레이션 보정 카드 | 보유세·시뮬레이션 | 릴리즈 갱신·현재 UI 확인 |
| TECH-041 | Technology | P1 | 릴리즈 회고 | 모델 수치를 바꾸지 않고 UI 일관성과 SEO를 함께 정비한 릴리즈 | `../../apt-insights/docs/reports/release-notes/RELEASE_NOTE_v5.1.6.md` | 2026-08-06 후속 정비; `../../apt-insights/docs/guide/DESIGN_GUIDE.md` · 버튼·요약 카드 토큰 | 웹 서비스·블로그 | 공개 가능, 내부 식별자 제거 |
| TECH-042 | Technology | P1 | 아키텍처 해설 | 서버리스 아파트 분석 플랫폼의 전체 구조를 공개 가능한 수준으로 설명하는 법 | `../../apt-insights/docs/architecture/ARCHITECTURE.md` | 개요·전체 시스템 구성·안정성 게이트 | GitHub·앱 데모 | 기술 채널 한정, 인프라·모델 세부 추상화 |

## 다음 세션 사용법

1. `candidate_id`로 후보를 선택한다.
2. `source_markdown` 파일을 먼저 열고 `source_section`의 현재 내용을 확인한다.
3. 계획·설계 문서만 근거인 경우 구현 완료처럼 쓰지 않는다.
4. 공개용 제목·본문·메타·CTA를 작성한 뒤 공개 문구 검수를 실행한다.
5. 초안 파일명에는 공백을 쓰지 않고 `_`를 사용한다.
