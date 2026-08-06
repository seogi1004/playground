# 아파트 인사이트 부동산·주거금융 콘텐츠 카탈로그

> 조사 기준일: 2026-08-06
>
> 아래 제목은 `apt-insights/docs`에 실제로 적힌 기능·문제·데이터 해석·검증 원칙에서만 뽑은 작업 제목이다. 특정 지역이나 단지의 최신 수치를 넣는 글은 발행 직전에 별도 데이터 확인이 필요하다. 제목과 본문에는 내부 모델 분류·세부 계수·운영 구조를 넣지 않는다.
>
> `source_markdown`은 이 카탈로그 파일(`playground/plans/`)을 기준으로 다음 세션에서 반드시 다시 열어볼 정확한 출처 Markdown 경로다. 후보를 발행하거나 제목을 확정하기 전에 해당 파일의 최신 상태와 근거 섹션을 다시 확인한다.

## 사용 규칙

- `Real Estate`는 아파트·거래·지역·입지·공급·정책·보유 비용을 다룬다.
- `Housing Finance`는 금리·대출·가계 현금흐름·보유세처럼 주거 의사결정에 직접 연결되는 금융만 다룬다.
- 주식·코인·보험 등 아파트와 직접 연결되지 않는 금융 주제는 이 카탈로그에 넣지 않는다.
- `상시`는 구조가 유지되는 한 반복 발행할 수 있는 주제, `갱신`은 기준일·정책·서비스 상태를 다시 확인해야 하는 주제다.
- 모든 글은 정보 제공용이며 가격·수익·거래·대출·세액을 보장하거나 권유하지 않는다.

| ID | 트랙 | 우선순위 | 콘텐츠 유형 | 작업 제목 | source_markdown (exact path) · 근거 섹션 | 독자·검색 의도 | 앱 연결 | 주기·상태 |
|---|---|---:|---|---|---|---|---|---|
| RE-001 | Real Estate | P0 | 설명 | 아파트 가격을 현재 거래가·과거 이력·예상 범위로 나눠 보는 법 | `../../apt-insights/docs/guide/USER_GUIDE.md` 단지 상세·시뮬레이션; `../../apt-insights/docs/business/STORE_LISTING.md` 설명 | 첫 내 집 마련; 정보형 | 아파트 검색·상세 | 상시·공개용 재작성 |
| RE-002 | Real Estate | P0 | 설명 | 6개월·12개월·18개월 전망을 한꺼번에 비교할 때 주의할 점 | `../../apt-insights/docs/business/STORE_LISTING.md` 분석 결과 공유; `../../apt-insights/docs/FEATURES.md` 예측 기간 | 전망 기간을 비교하려는 독자; 비교형 | 시뮬레이션 기간 선택 | 상시·공개용 재작성 |
| RE-003 | Real Estate | P0 | 설명 | 미래 가격을 하나의 숫자보다 범위로 봐야 하는 이유 | `../../apt-insights/docs/business/STORE_LISTING.md` 확률 분포·가격 범위; `../../apt-insights/docs/public-copy-terminology.md` 공개 표현 | 예측 해석 초보자; 정보형 | 예측 범위 확인 | 상시·공개용 재작성 |
| RE-004 | Real Estate | P0 | 문제 해결 | 최근 거래 한 건만으로 우리 아파트 시세를 판단하면 안 되는 이유 | `../../apt-insights/docs/guide/TRADE_SYNC.md` 실거래 표본·동기화; `../../apt-insights/docs/FEATURES.md` 실거래 흐름 | 최근 거래를 검색하는 보유자; 문제 해결형 | 단지 상세의 거래 흐름 | 상시·공개용 재작성 |
| RE-005 | Real Estate | P0 | 설명 | 전세가율을 매매 판단의 단독 기준으로 사용하면 안 되는 이유 | `../../apt-insights/docs/FACTORS.md` 전세 관련 지표; `../../apt-insights/docs/guide/USER_GUIDE.md` 분석 화면 | 매매·전세를 함께 보는 실수요자; 정보형 | 단지 상세·시나리오 | 상시·개념 공개 |
| RE-006 | Real Estate | P0 | 비교 | 실거주 이사 시점과 투자 수익률 질문을 분리해서 보는 법 | `../../apt-insights/docs/guide/USER_GUIDE.md` 이사 시점·타임라인; `../../apt-insights/docs/business/STORE_LISTING.md` 의사결정 참고용 | 갈아타기·이사 준비자; 비교형 | A안·B안 타임라인 | 상시·공개용 재작성 |
| RE-007 | Real Estate | P0 | 설명 | 같은 동네 아파트 가격이 다르게 움직이는 이유를 읽는 순서 | `../../apt-insights/docs/FACTORS.md` 단지·지역 지표; `../../apt-insights/docs/guide/USER_GUIDE.md` 입지 카드 | 지역 탐색자; 정보형 | 단지별 상세 분석 | 상시·개념 공개 |
| RE-008 | Real Estate | P0 | 비교 | 신축·구축·거래 부족 단지를 같은 방식으로 비교하면 안 되는 이유 | `../../apt-insights/docs/architecture/PREMIUM_POLICIES.md` 신축·재건축 개념; `../../apt-insights/docs/FEATURES.md` 신축 데이터 안내 | 신축 매수 검토자; 비교형 | 신축 거래·신뢰도 안내 | 상시·개념 공개 |
| RE-009 | Real Estate | P0 | 설명 | 하방 위험 신호를 매수 추천으로 오해하지 않는 체크리스트 | `../../apt-insights/docs/business/STORE_LISTING.md` 하방 리스크·면책; `../../apt-insights/docs/guide/USER_GUIDE.md` 예측 주의사항 | 가격 부담을 점검하는 독자; 문제 해결형 | 상세 분석·시뮬레이션 | 상시·면책 필수 |
| RE-010 | Real Estate | P1 | FAQ | 아파트 가격 분석에서 “오른다·내린다”보다 먼저 물어야 할 질문 | `../../apt-insights/docs/reports/APT_INSIGHTS_BLOG_CONTENT_STRATEGY_REPORT.md` 실수요자 의사결정; `../../apt-insights/docs/business/STORE_LISTING.md` 참고용 분석 | 검색 초보자; 정보형 | 앱 온보딩 | 상시·공개용 재작성 |
| RE-011 | Housing Finance | P0 | 설명 | 주택담보대출 금리와 아파트 가격의 연결을 읽는 법 | `../../apt-insights/docs/ECOS_FACTOR_MAPPING.md` 금리 출처; `../../apt-insights/docs/business/STORE_LISTING.md` 지표 예시 | 금리 변화가 궁금한 실수요자; 정보형 | 금리 시나리오 | 갱신·수치 검수 |
| RE-012 | Housing Finance | P1 | 설명 | 금리가 바뀌어도 아파트 가격이 바로 움직이지 않을 수 있는 이유 | `../../apt-insights/docs/FACTORS.md` 거시 지표 갱신; `../../apt-insights/docs/history/SERVICE_HISTORY.md` 시장 신호 문맥 | 금리 뉴스 검색자; 정보형 | 가상 조건 비교 | 상시·개념 공개 |
| RE-013 | Housing Finance | P1 | 설명 | 환율이 주택시장에 영향을 주는 간접 경로 | `../../apt-insights/docs/ECOS_FACTOR_MAPPING.md` 환율 출처; `../../apt-insights/docs/reports/APT_INSIGHTS_BLOG_CONTENT_STRATEGY_REPORT.md` 거시 팩터 해설 | 경제 뉴스 독자; 정보형 | 시나리오 비교 | 갱신·출처 필요 |
| RE-014 | Housing Finance | P1 | 설명 | 유가 변화가 집값에 영향을 주는 경로를 쉽게 설명하면 | `../../apt-insights/docs/ECOS_FACTOR_MAPPING.md` 유가 출처; `../../apt-insights/docs/business/STORE_LISTING.md` 지표 예시 | 거시경제 초보자; 정보형 | 시나리오 비교 | 갱신·출처 필요 |
| RE-015 | Housing Finance | P1 | 설명 | 가계부채를 주택시장 위험 신호로 읽을 때의 한계 | `../../apt-insights/docs/ECOS_FACTOR_MAPPING.md` 가계부채 출처; `../../apt-insights/docs/reports/APT_INSIGHTS_BLOG_CONTENT_STRATEGY_REPORT.md` 거시 팩터 해설 | 대출·부채 검색자; 정보형 | 조건별 시뮬레이션 | 갱신·면책 필수 |
| RE-016 | Housing Finance | P1 | 설명 | 건설비가 오를 때 신축 아파트 가격을 읽는 방법 | `../../apt-insights/docs/ECOS_FACTOR_MAPPING.md` 건설비 출처; `../../apt-insights/docs/architecture/PREMIUM_POLICIES.md` 신축 개념 | 분양·신축 관심자; 정보형 | 신축 단지 분석 | 갱신·개념 공개 |
| RE-017 | Real Estate | P1 | 설명 | 매수심리지표와 실제 거래가 엇갈릴 때 확인할 것 | `../../apt-insights/docs/FEATURES.md` 시장 흐름; `../../apt-insights/docs/history/SERVICE_HISTORY.md` 시장 reference 지표 | 시장 분위기 검색자; 문제 해결형 | 시장 흐름 카드 | 갱신·정의 확인 |
| RE-018 | Real Estate | P1 | 설명 | 정책 발표 직후 아파트 가격이 바로 움직이지 않는 이유 | `../../apt-insights/docs/FACTORS.md` 정책 지표; `../../apt-insights/docs/history/SERVICE_HISTORY.md` 정책 시나리오 | 정책 뉴스 독자; 정보형 | 정책 시나리오 | 갱신·확정 여부 필수 |
| RE-019 | Real Estate | P1 | 비교 | 인구·공급·금리를 따로 보지 않고 함께 보는 방법 | `../../apt-insights/docs/FACTORS.md` 구조·거시 지표; `../../apt-insights/docs/reports/APT_INSIGHTS_BLOG_CONTENT_STRATEGY_REPORT.md` 팩터 조합 | 지역·시장 분석 독자; 비교형 | 조건 비교 | 상시·개념 공개 |
| RE-020 | Housing Finance | P1 | 문제 해결 | 금리 기사와 내 월 현금흐름을 연결해 읽는 체크리스트 | `../../apt-insights/docs/guide/USER_GUIDE.md` 재무·타임라인 입력; `../../apt-insights/docs/business/STORE_LISTING.md` 가계 계획 | 대출·이사 계획자; 문제 해결형 | 개인화 분석 | 상시·면책 필수 |
| RE-021 | Housing Finance | P0 | 사용법 | 보유세 계산에서 현행 기준과 정책안 기준을 나눠 보는 이유 | `../../apt-insights/docs/FEATURES.md` 보유세 계산기; `../../apt-insights/docs/history/SERVICE_HISTORY.md` 보유세·정책 시나리오 | 보유세 검색자; 사용법형 | 보유세 계산기 | 정책 갱신·세무 면책 |
| RE-022 | Housing Finance | P0 | FAQ | 공시가격으로 계산한 보유세가 실제 고지액과 다를 수 있는 이유 | `../../apt-insights/docs/superpowers/specs/2026-08-04-holding-tax-public-price-design.md` 공시가격 보완 설계; `../../apt-insights/docs/business/STORE_LISTING.md` 면책 | 주택 보유자; 문제 해결형 | 보유세 계산 | 정책 갱신·세무 면책 |
| RE-023 | Housing Finance | P1 | 설명 | 실거주 여부와 보유세 시나리오 입력의 의미 | `../../apt-insights/docs/FEATURES.md` 시뮬레이션 보유세; `../../apt-insights/docs/superpowers/specs/2026-08-04-holding-tax-estimate-design.md` 사용자 입력 | 보유 조건을 비교하는 독자; 사용법형 | 보유세 계산 | 정책 갱신·세무 면책 |
| RE-024 | Housing Finance | P1 | 비교 | 세금 계산 결과와 가격 예측 결과를 섞어 해석하면 안 되는 이유 | `../../apt-insights/docs/architecture/PREDICTION_LAYERS_AND_SCENARIOS.md` 공개 개념 재작성; `../../apt-insights/docs/FEATURES.md` 보유세 카드 | 분석 결과를 함께 보는 사용자; 비교형 | 시뮬레이션·보유세 | 상시·개념 공개 |
| RE-025 | Housing Finance | P1 | 체크리스트 | 정책 발표와 확정된 세법을 구분해서 읽는 법 | `../../apt-insights/docs/reports/APT_INSIGHTS_BLOG_CONTENT_STRATEGY_REPORT.md` 정책·세금 규칙; `../../apt-insights/docs/public-copy-checklist.md` 기준일 규칙 | 정책 검색자; 문제 해결형 | 보유세 계산 | 정책 갱신·면책 필수 |
| RE-026 | Real Estate | P0 | 설명 | 교통 호재를 발표·검토·착공·개통 단계로 구분하는 법 | `../../apt-insights/docs/FEATURES.md` 교통 지표; `../../apt-insights/docs/reports/APT_INSIGHTS_BLOG_CONTENT_STRATEGY_REPORT.md` 지역·입지 콘텐츠 | 교통 호재 검색자; 정보형 | 입지 카드 | 갱신·공식 출처 필요 |
| RE-027 | Real Estate | P1 | 설명 | 오래 지연된 교통 호재의 기대감을 같은 크기로 보면 안 되는 이유 | `../../apt-insights/docs/history/SERVICE_HISTORY.md` 교통 단계·시간 감쇄 기록; `../../apt-insights/docs/FEATURES.md` 입지 안내 | 호재의 실현 가능성을 확인하는 독자; 정보형 | 단지 상세 | 갱신·공식 출처 필요 |
| RE-028 | Real Estate | P0 | 설명 | 직주근접·교통·학군·생활 인프라를 따로 읽는 순서 | `../../apt-insights/docs/FEATURES.md` 입지 지표; `../../apt-insights/docs/guide/USER_GUIDE.md` 입지 카드 | 지역 비교자; 정보형 | 입지 카드 | 상시·개념 공개 |
| RE-029 | Real Estate | P1 | 비교 | 지역 평균과 개별 단지 거래를 함께 볼 때 생기는 차이 | `../../apt-insights/docs/FACTORS.md` 지역·단지 지표; `../../apt-insights/docs/guide/USER_GUIDE.md` 단지 상세 | 지역 탐색자; 비교형 | 지역·단지 상세 | 상시·개념 공개 |
| RE-030 | Real Estate | P1 | 설명 | 공급량과 전세 흐름을 함께 봐야 하는 이유 | `../../apt-insights/docs/FACTORS.md` 공급·전세 지표; `../../apt-insights/docs/reports/APT_INSIGHTS_BLOG_CONTENT_STRATEGY_REPORT.md` 지역 콘텐츠 | 이사·전세 검색자; 정보형 | 조건 비교 | 갱신·데이터 출처 필요 |
| RE-031 | Real Estate | P0 | 문제 해결 | 신축 아파트의 거래 표본이 부족할 때 분석 결과를 읽는 법 | `../../apt-insights/docs/architecture/ON_DEMAND_SCALING.md` 신축 데이터 부족 처리; `../../apt-insights/docs/FEATURES.md` 신축 안내 | 신축 매수 검토자; 문제 해결형 | 신축 거래·신뢰도 안내 | 상시·개념 공개 |
| RE-032 | Real Estate | P1 | 비교 | 일반 매매와 분양권 거래를 같은 가격 데이터로 합치면 안 되는 이유 | `../../apt-insights/docs/guide/TRADE_SYNC.md` 거래 유형·필터; `../../apt-insights/docs/history/SERVICE_HISTORY.md` 거래 유형 정합 | 분양권·신축 검색자; 비교형 | 거래 흐름 확인 | 상시·공개용 재작성 |
| RE-033 | Real Estate | P1 | 설명 | 거래 취소·신고 지연이 아파트 시세 해석에 미치는 영향 | `../../apt-insights/docs/guide/TRADE_SYNC.md` 실패 월·재시도·거래 데이터; `../../apt-insights/docs/FEATURES.md` 데이터 상태 | 실거래가 검색자; 문제 해결형 | 거래 상태 확인 | 갱신·출처 필요 |
| RE-034 | Real Estate | P1 | FAQ | 대표 평형 거래가 없을 때 예측 신뢰도가 낮아지는 이유 | `../../apt-insights/docs/guide/TRADE_SYNC.md` 표본·평형 처리; `../../apt-insights/docs/business/STORE_LISTING.md` 데이터 한계 | 평형별 가격을 비교하는 독자; 정보형 | 단지 상세 | 상시·개념 공개 |
| RE-035 | Real Estate | P1 | 비교 | “예측 불가”와 “낮은 신뢰도”를 구분해서 읽는 법 | `../../apt-insights/docs/FEATURES.md` 신뢰도·거래 부족 안내; `../../apt-insights/docs/guide/USER_GUIDE.md` 면책 | 거래 부족 단지 관심자; 비교형 | 상세 분석 | 상시·공개용 재작성 |
| RE-036 | Real Estate | P1 | 설명 | 신축 거래 패턴을 일반 시세와 분리해서 보는 이유 | `../../apt-insights/docs/history/SERVICE_HISTORY.md` 신축 거래 패턴 기록; `../../apt-insights/docs/superpowers/specs/2026-07-29-new-construction-trade-pattern-verification-design.md` 사용자 영향만 재작성 | 신축·분양권 검색자; 정보형 | 신축 카드 | 갱신·개념 공개 |
| RE-037 | Real Estate | P0 | 설명 | 기본 경로와 가상 시나리오의 차이 | `../../apt-insights/docs/FEATURES.md` 가상 시나리오; `../../apt-insights/docs/guide/USER_GUIDE.md` 시뮬레이션 | 시뮬레이션 초보자; 정보형 | 시나리오 선택 | 상시·공개용 재작성 |
| RE-038 | Real Estate | P0 | 사용법 | 금리 상승·공급 변화 시나리오를 넣고 결과를 비교하는 순서 | `../../apt-insights/docs/FEATURES.md` 시나리오 카드; `../../apt-insights/docs/history/SERVICE_HISTORY.md` 시나리오 적용 경계 | 조건을 바꿔보고 싶은 사용자; 사용법형 | 시뮬레이션 | 갱신·현재 UI 확인 |
| RE-039 | Real Estate | P1 | 설명 | 1만 번의 가상 경로가 미래를 맞히는 기술은 아닌 이유 | `../../apt-insights/docs/business/STORE_LISTING.md` 확률 분포·면책; `../../apt-insights/docs/public-copy-terminology.md` 공개 표현 | 확률 시뮬레이션 초보자; 정보형 | 시뮬레이션 | 상시·공개용 재작성 |
| RE-040 | Real Estate | P1 | 설명 | 예측 범위의 아래쪽과 위쪽을 해석하는 방법 | `../../apt-insights/docs/business/STORE_LISTING.md` 가격 범위; `../../apt-insights/docs/FEATURES.md` 결과 카드 | 결과 화면을 읽는 사용자; 사용법형 | 결과 카드 | 상시·공개용 재작성 |
| RE-041 | Real Estate | P1 | 설명 | 영향 요인 차트에서 가장 긴 막대만 보면 안 되는 이유 | `../../apt-insights/docs/business/STORE_LISTING.md` 영향 요인 설명; `../../apt-insights/docs/guide/USER_GUIDE.md` 결과 해석 | 결과 원인을 확인하는 사용자; 정보형 | 결과 영향 요인 카드 | 상시·공개용 재작성 |
| RE-042 | Real Estate | P1 | 비교 | 여러 가정을 동시에 바꿀 때 결과를 과신하지 않는 방법 | `../../apt-insights/docs/history/SERVICE_HISTORY.md` 시나리오 입력 경계; `../../apt-insights/docs/FEATURES.md` 시나리오 | 시뮬레이션 사용자; 문제 해결형 | 시나리오 초기화·비교 | 상시·면책 필수 |
| RE-043 | Real Estate | P0 | 사용법 | 아파트 인사이트 처음 시작하기: 지역·단지·이사 시점 입력 | `../../apt-insights/docs/guide/USER_GUIDE.md` 온보딩; `../../apt-insights/docs/FEATURES.md` 온보딩 | 신규 사용자; 사용법형 | 온보딩 | 상시·현재 UI 확인 |
| RE-044 | Real Estate | P0 | 사용법 | 관심 아파트를 등록한 뒤 먼저 확인할 정보 | `../../apt-insights/docs/guide/USER_GUIDE.md` 홈·아파트 목록·상세; `../../apt-insights/docs/FEATURES.md` 등록 | 신규 가입자; 사용법형 | 아파트 등록 | 상시·현재 UI 확인 |
| RE-045 | Real Estate | P1 | 사용법 | 팩터 카드에서 데이터 출처와 업데이트 시각 읽는 법 | `../../apt-insights/docs/guide/USER_GUIDE.md` 대시보드·팩터; `../../apt-insights/docs/FEATURES.md` 출처 문맥 | 분석 근거를 확인하는 사용자; 사용법형 | 팩터 카드 | 갱신·현재 UI 확인 |
| RE-046 | Real Estate | P0 | 사용법 | A안·B안 시뮬레이션으로 이사 시점을 비교하는 방법 | `../../apt-insights/docs/guide/USER_GUIDE.md` 타임라인; `../../apt-insights/docs/business/STORE_LISTING.md` 재무 조건 분석 | 갈아타기 준비자; 사용법형 | A/B 타임라인 | 상시·현재 UI 확인 |
| RE-047 | Real Estate | P1 | 사용법 | 예측 변경 이력과 알림을 함께 사용하는 순서 | `../../apt-insights/docs/guide/PREDICTION_NOTIFICATION_FLOW.md` 사용자 영향; `../../apt-insights/docs/guide/PUSH_NOTIFICATIONS.md` 알림 | 보유자·관심 단지 추적자; 사용법형 | 예측 이력·알림 | 갱신·현재 정책 확인 |
| RE-048 | Real Estate | P1 | 사용법 | 분석 결과 공유 URL을 보낼 때 확인할 개인정보와 만료 조건 | `../../apt-insights/docs/business/STORE_LISTING.md` 공유 기능; `../../apt-insights/docs/guide/USER_GUIDE.md` 공유 | 가족·지인과 결과를 공유하는 사용자; 사용법형 | 공유 URL | 갱신·공유 정책 확인 |
| RE-049 | Real Estate | P1 | 사용법 | 보유세 계산기와 가격 시나리오를 함께 사용하는 순서 | `../../apt-insights/docs/FEATURES.md` 보유세·시나리오; `../../apt-insights/docs/history/SERVICE_HISTORY.md` 카드 정렬 | 보유 비용을 비교하는 사용자; 사용법형 | 보유세·시뮬레이션 | 갱신·세무 면책 |
| RE-050 | Real Estate | P2 | 사용법 | 모바일 위젯과 푸시 알림으로 관심 단지를 모니터링하는 법 | `../../apt-insights/docs/business/STORE_LISTING.md` 위젯·푸시; `../../apt-insights/docs/android/PLAY_STORE_RELEASE_NOTES.md` 모바일 기능 | 모바일 사용자; 사용법형 | 위젯·푸시 | 릴리즈 갱신 |
| RE-051 | Real Estate | P1 | 신뢰 | 평균 절대 오차를 아파트 예측 성적표에서 읽는 법 | `../../apt-insights/docs/reports/v31.1/VALIDATION.md` 공식 검증 개요; `../../apt-insights/docs/reports/APT_INSIGHTS_BLOG_CONTENT_STRATEGY_REPORT.md` 오차 해설 | 데이터에 민감한 독자; 정보형 | 검증 안내 | 갱신·수치 기준일 필요 |
| RE-052 | Real Estate | P1 | 신뢰 | R²와 평균 절대 오차를 함께 봐야 하는 이유 | `../../apt-insights/docs/reports/v31.1/VALIDATION.md` 지표 정의; `../../apt-insights/docs/business/STORE_LISTING.md` 백테스트 | 모델 성능을 비교하는 독자; 비교형 | 검증 화면 | 갱신·수치 기준일 필요 |
| RE-053 | Real Estate | P1 | 신뢰 | 과거 검증에서 잘 맞았다는 말이 미래 가격을 보장하지 않는 이유 | `../../apt-insights/docs/reports/v31.1/VALIDATION.md` 해석 한계; `../../apt-insights/docs/guide/USER_GUIDE.md` 면책 | 예측을 검증하려는 독자; 정보형 | 분석 화면 | 갱신·면책 필수 |
| RE-054 | Real Estate | P1 | 신뢰 | 예측 범위가 실제 가격을 포함했는지 확인하는 방법 | `../../apt-insights/docs/reports/v31.1/VALIDATION.md` 범위 검증; `../../apt-insights/docs/business/STORE_LISTING.md` 확률 범위 | 검증 지표 검색자; 문제 해결형 | 검증 안내 | 갱신·수치 기준일 필요 |
| RE-055 | Real Estate | P2 | 신뢰 | 데이터 출처·기준일·표본을 글 하나에 표시하는 방법 | `../../apt-insights/docs/public-copy-checklist.md` 수치·기준일; `../../apt-insights/docs/reports/APT_INSIGHTS_BLOG_CONTENT_STRATEGY_REPORT.md` 발행 규칙 | 부동산 콘텐츠 소비자; 체크리스트형 | 관련 상세 분석 | 상시·공개용 재작성 |
| RE-056 | Real Estate | P1 | 설명 | AI 설명과 가격 시뮬레이션 결과가 다른 역할을 하는 이유 | `../../apt-insights/docs/business/STORE_LISTING.md` AI 맞춤 진단; `../../apt-insights/docs/public-copy-terminology.md` AI 표현 | AI 부동산 서비스 관심자; 정보형 | 개인화 분석 | 상시·AI 면책 필수 |
| RE-057 | Real Estate | P1 | 체크리스트 | 부동산 AI 분석을 매수 추천으로 오해하지 않는 방법 | `../../apt-insights/docs/business/STORE_LISTING.md` 면책; `../../apt-insights/docs/public-copy-checklist.md` 권유성 표현 금지 | AI 검색 유입 독자; 문제 해결형 | 앱 분석 시작 | 상시·면책 필수 |
| RE-058 | Real Estate | P2 | FAQ | 데이터가 부족한 단지에서 확신보다 한계를 먼저 봐야 하는 이유 | `../../apt-insights/docs/architecture/ON_DEMAND_SCALING.md` 데이터 부족 처리; `../../apt-insights/docs/guide/USER_GUIDE.md` 주의사항 | 거래 부족 단지 관심자; 정보형 | 상세 분석 | 상시·개념 공개 |
| RE-059 | Real Estate | P2 | 설명 | 지역·단지 글을 숫자 없이도 유용하게 만드는 데이터 읽기 구조 | `../../apt-insights/docs/reports/APT_INSIGHTS_BLOG_CONTENT_STRATEGY_REPORT.md` 지역 확장 규칙; `../../apt-insights/docs/public-copy-checklist.md` 지역 수치 검수 | 지역 콘텐츠 제작자·검색자; 정보형 | 지역 검색 | 상시·공개용 재작성 |
| RE-060 | Real Estate | P2 | 허브 | 아파트 인사이트 부동산 콘텐츠 허브: 거래·금리·세금·시나리오·검증 | `../../apt-insights/docs/reports/APT_INSIGHTS_BLOG_CONTENT_STRATEGY_REPORT.md` 10개 콘텐츠 축; `../../apt-insights/docs/README.md` 문서 인덱스 | 여러 주제를 탐색하는 신규 방문자; 탐색형 | 앱 시작·관련 글 | 상시·허브 문서 |
| RE-061 | Real Estate | P1 | 업데이트·사용법 | 보유세·시나리오·신축·재건축 카드를 함께 읽는 순서 | `../../apt-insights/docs/reports/release-notes/RELEASE_NOTE_v5.1.6.md` 주요 변경·보유세·시뮬레이션 보정 카드 | 최신 기능 사용자; 사용법형 | 보유세·시뮬레이션 | 릴리즈 갱신·현재 UI 확인 |

## 지역·단지 파생 발행 슬롯

위 상시형 글을 지역명만 바꿔 복제하지 않는다. 실제 거래·정책·공식 권역 자료가 확인된 경우에만 아래 변수 조합으로 파생한다.

`[지역 또는 단지] + [독자 문제] + [거래·입지·금리·세금 요인] + [기준일 또는 기간] + [해석 한계]`

파생 후보는 다음 다섯 묶음으로 제한한다.

1. `[지역]` 거래 흐름과 전세 흐름을 함께 읽는 법
2. `[지역]` 교통 계획의 단계와 확인해야 할 공식 자료
3. `[단지]` 거래 표본이 적을 때 가격 범위를 해석하는 법
4. `[단지]` 보유 조건별 세금 시나리오를 비교하는 법
5. `[지역]` 금리·공급 조건을 바꿔 시나리오를 비교하는 법

각 파생 글은 발행 전에 국토교통부·지자체·공식 정책 자료의 기준일과 출처를 다시 기록한다. 데이터가 없는 지역에 수치를 채워 넣지 않는다.
