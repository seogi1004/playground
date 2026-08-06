import { useMemo, useState } from 'react';
import styles from './styles.module.css';
import {
    calculateComparison,
    formatEokWon,
    formatWon,
    modeLabel,
    type CalculationMode,
    type OwnershipType,
    type TaxConditions,
} from './calculator';

interface FormState {
    mode: CalculationMode;
    ownershipType: OwnershipType;
    assessedPriceEok: string;
    otherHousingPricesEok: string[];
    residentHouse: string;
    age: string;
    holdingYears: string;
    residenceYears: string;
    hasAdjustedAreaHouse: boolean;
    urbanArea: boolean;
    previousYearHoldingTaxManWon: string;
}

const DEFAULT_FORM: FormState = {
    mode: 'reform-2028',
    ownershipType: 'one-house',
    assessedPriceEok: '20',
    otherHousingPricesEok: [],
    residentHouse: 'target',
    age: '',
    holdingYears: '',
    residenceYears: '',
    hasAdjustedAreaHouse: false,
    urbanArea: true,
    previousYearHoldingTaxManWon: '',
};

const MODE_OPTIONS: Array<{ value: CalculationMode; label: string; note: string }> = [
    { value: 'current-law', label: '현행 세법', note: '2026년 기준' },
    { value: 'reform-2027', label: '2027년 정부안', note: '중간 단계' },
    { value: 'reform-2028', label: '2028년 정부안', note: '본격 시행안' },
];

const OWNERSHIP_OPTIONS: Array<{ value: OwnershipType; label: string; note: string }> = [
    { value: 'one-house', label: '1주택', note: '대상 아파트 1채' },
    { value: 'two-or-less', label: '2주택', note: '대상 포함 2채' },
    { value: 'three-or-more', label: '3채 이상', note: '입력한 주택 합산' },
];

function parseNumber(value: string): number {
    const parsed = Number(value.replace(/,/g, '').trim());
    return Number.isFinite(parsed) ? Math.max(0, parsed) : 0;
}

function parseEok(value: string): number {
    return parseNumber(value) * 100_000_000;
}

function parseOptionalNumber(value: string): number | null {
    const trimmed = value.trim();
    return trimmed === '' ? null : parseNumber(trimmed);
}

function minimumOtherHousingCount(ownershipType: OwnershipType): number {
    if (ownershipType === 'two-or-less') return 1;
    if (ownershipType === 'three-or-more') return 2;
    return 0;
}

function resizeOtherHousingInputs(ownershipType: OwnershipType, current: string[]): string[] {
    const minimumCount = minimumOtherHousingCount(ownershipType);
    if (minimumCount === 0) return [];
    return Array.from(
        { length: Math.max(minimumCount, current.length) },
        (_, index) => current[index] ?? '',
    );
}

function buildConditions(form: FormState): TaxConditions {
    const otherHousingAssessedPricesWon = form.otherHousingPricesEok
        .map(parseEok)
        .filter((value) => value > 0);
    let residentHouseIndex: number | null = null;

    if (form.residentHouse === 'target') {
        residentHouseIndex = 0;
    } else if (form.residentHouse.startsWith('other-')) {
        const otherIndex = Number(form.residentHouse.slice('other-'.length));
        residentHouseIndex = Number.isInteger(otherIndex) ? otherIndex + 1 : null;
    }

    return {
        mode: form.mode,
        ownershipType: form.ownershipType,
        otherHousingAssessedPricesWon,
        residentHouseIndex,
        age: parseOptionalNumber(form.age),
        holdingYears: parseNumber(form.holdingYears),
        residenceYears: parseNumber(form.residenceYears),
        hasAdjustedAreaHouse: form.hasAdjustedAreaHouse,
        urbanArea: form.urbanArea,
        previousYearHoldingTaxWon:
            form.previousYearHoldingTaxManWon.trim() === ''
                ? null
                : parseNumber(form.previousYearHoldingTaxManWon) * 10_000,
    };
}

function formatDelta(deltaWon: number): string {
    if (deltaWon === 0) return '차이 없음';
    return `${deltaWon > 0 ? '+' : '−'}${formatWon(Math.abs(deltaWon))}`;
}

function percent(value: number): string {
    return `${Math.round(value * 100)}%`;
}

function updateResidentHouseForOwnership(residentHouse: string, otherCount: number): string {
    if (residentHouse === 'target' || residentHouse === 'none') return residentHouse;
    const index = Number(residentHouse.slice('other-'.length));
    return Number.isInteger(index) && index < otherCount ? residentHouse : 'target';
}

export default function HoldingTaxCalculator(): JSX.Element {
    const [form, setForm] = useState<FormState>({ ...DEFAULT_FORM });

    const comparison = useMemo(() => {
        const conditions = buildConditions(form);
        return calculateComparison(parseEok(form.assessedPriceEok), conditions);
    }, [form]);

    const conditions = buildConditions(form);
    const selected = comparison.selected;
    const currentLaw = comparison.currentLaw;
    const otherHouseCount = form.otherHousingPricesEok.length;

    const setMode = (mode: CalculationMode) => setForm((current) => ({ ...current, mode }));

    const setOwnership = (ownershipType: OwnershipType) => {
        const nextOtherHousingPricesEok = resizeOtherHousingInputs(
            ownershipType,
            form.otherHousingPricesEok,
        );
        setForm((current) => ({
            ...current,
            ownershipType,
            otherHousingPricesEok: nextOtherHousingPricesEok,
            residentHouse: updateResidentHouseForOwnership(
                current.residentHouse,
                nextOtherHousingPricesEok.length,
            ),
        }));
    };

    const addOtherHouse = () => {
        if (form.otherHousingPricesEok.length >= 6) return;
        setForm((current) => ({
            ...current,
            otherHousingPricesEok: [...current.otherHousingPricesEok, ''],
        }));
    };

    return (
        <section className={styles.calculator} aria-label="8.3 부동산 세제개편안 보유세 계산기">
            <div className={styles.calculatorHeader}>
                <div>
                    <p className={styles.kicker}>PUBLIC POLICY CALCULATOR</p>
                    <h2>내 조건으로 보유세 차이를 비교해보세요</h2>
                    <p>
                        공시가격과 보유 조건을 입력하면 2026년 현행 기준과 8.3 정부안 기준의
                        연간 보유세를 같은 조건에서 비교합니다.
                    </p>
                </div>
                <div className={styles.statusBadge}>
                    <span aria-hidden="true" />
                    8.3 정부안
                </div>
            </div>

            <div className={styles.calculatorGrid}>
                <div className={styles.formPanel}>
                    <div className={styles.fieldGroup}>
                        <div className={styles.fieldHeading}>
                            <label>계산 기준</label>
                            <span>현재안과 단계별 정부안을 비교</span>
                        </div>
                        <div className={styles.segmentedControl} role="group" aria-label="계산 기준">
                            {MODE_OPTIONS.map((option) => (
                                <button
                                    type="button"
                                    key={option.value}
                                    className={form.mode === option.value ? styles.segmentActive : ''}
                                    onClick={() => setMode(option.value)}
                                >
                                    <strong>{option.label}</strong>
                                    <small>{option.note}</small>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className={styles.fieldGroup}>
                        <div className={styles.fieldHeading}>
                            <label htmlFor="target-assessed-price">대상 아파트 공시가격</label>
                            <span>시세가 아닌 공시가격 기준</span>
                        </div>
                        <div className={styles.inputWithUnit}>
                            <input
                                id="target-assessed-price"
                                type="number"
                                min="0"
                                step="0.1"
                                inputMode="decimal"
                                value={form.assessedPriceEok}
                                onChange={(event) =>
                                    setForm((current) => ({ ...current, assessedPriceEok: event.target.value }))
                                }
                            />
                            <span>억원</span>
                        </div>
                        <p className={styles.helperText}>
                            국토부 실거래가나 호가가 아니라, 세금 계산에 쓰이는 공시가격을 입력하세요.
                        </p>
                    </div>

                    <div className={styles.fieldGroup}>
                        <div className={styles.fieldHeading}>
                            <label>보유 주택 수</label>
                            <span>대상 아파트를 포함해 입력</span>
                        </div>
                        <div className={styles.choiceGrid} role="group" aria-label="보유 주택 수">
                            {OWNERSHIP_OPTIONS.map((option) => (
                                <button
                                    type="button"
                                    key={option.value}
                                    className={conditions.ownershipType === option.value ? styles.choiceActive : ''}
                                    onClick={() => setOwnership(option.value)}
                                >
                                    <strong>{option.label}</strong>
                                    <small>{option.note}</small>
                                </button>
                            ))}
                        </div>
                    </div>

                    {otherHouseCount > 0 && (
                        <div className={styles.fieldGroup}>
                            <div className={styles.fieldHeading}>
                                <label>다른 주택 공시가격</label>
                                <span>비워두면 해당 주택을 제외</span>
                            </div>
                            <div className={styles.otherHouseList}>
                                {form.otherHousingPricesEok.map((value, index) => (
                                    <div className={styles.inputWithUnit} key={`other-house-${index}`}>
                                        <label className={styles.srOnly} htmlFor={`other-house-${index}`}>
                                            다른 주택 {index + 1} 공시가격
                                        </label>
                                        <input
                                            id={`other-house-${index}`}
                                            type="number"
                                            min="0"
                                            step="0.1"
                                            inputMode="decimal"
                                            placeholder="예: 10"
                                            value={value}
                                            onChange={(event) =>
                                                setForm((current) => ({
                                                    ...current,
                                                    otherHousingPricesEok: current.otherHousingPricesEok.map(
                                                        (price, priceIndex) =>
                                                            priceIndex === index ? event.target.value : price,
                                                    ),
                                                }))
                                            }
                                        />
                                        <span>억원</span>
                                    </div>
                                ))}
                            </div>
                            {conditions.ownershipType === 'three-or-more' && otherHouseCount < 6 && (
                                <button type="button" className={styles.addButton} onClick={addOtherHouse}>
                                    + 다른 주택 추가
                                </button>
                            )}
                        </div>
                    )}

                    <div className={styles.fieldGroup}>
                        <div className={styles.fieldHeading}>
                            <label htmlFor="resident-house">실거주 주택</label>
                            <span>거주기간 공제와 주택 비중에 반영</span>
                        </div>
                        <select
                            id="resident-house"
                            className={styles.select}
                            value={form.residentHouse}
                            onChange={(event) =>
                                setForm((current) => ({ ...current, residentHouse: event.target.value }))
                            }
                        >
                            <option value="target">대상 아파트에 거주</option>
                            {form.otherHousingPricesEok.map((_, index) => (
                                <option value={`other-${index}`} key={`resident-other-${index}`}>
                                    다른 주택 {index + 1}에 거주
                                </option>
                            ))}
                            <option value="none">보유 주택에 거주하지 않음</option>
                        </select>
                    </div>

                    {conditions.ownershipType === 'one-house' && (
                        <div className={styles.twoColumnFields}>
                            <div className={styles.fieldGroup}>
                                <label htmlFor="age">만 나이</label>
                                <div className={styles.inputWithUnit}>
                                    <input
                                        id="age"
                                        type="number"
                                        min="0"
                                        max="120"
                                        value={form.age}
                                        onChange={(event) => setForm((current) => ({ ...current, age: event.target.value }))}
                                    />
                                    <span>세</span>
                                </div>
                            </div>
                            <div className={styles.fieldGroup}>
                                <label htmlFor="holding-years">보유기간</label>
                                <div className={styles.inputWithUnit}>
                                    <input
                                        id="holding-years"
                                        type="number"
                                        min="0"
                                        step="1"
                                        value={form.holdingYears}
                                        onChange={(event) =>
                                            setForm((current) => ({ ...current, holdingYears: event.target.value }))
                                        }
                                    />
                                    <span>년</span>
                                </div>
                            </div>
                            <div className={styles.fieldGroup}>
                                <label htmlFor="residence-years">거주기간</label>
                                <div className={styles.inputWithUnit}>
                                    <input
                                        id="residence-years"
                                        type="number"
                                        min="0"
                                        step="1"
                                        value={form.residenceYears}
                                        onChange={(event) =>
                                            setForm((current) => ({ ...current, residenceYears: event.target.value }))
                                        }
                                    />
                                    <span>년</span>
                                </div>
                            </div>
                        </div>
                    )}

                    {conditions.ownershipType !== 'one-house' && form.mode === 'reform-2028' && (
                        <label className={styles.checkRow}>
                            <input
                                type="checkbox"
                                checked={form.hasAdjustedAreaHouse}
                                onChange={(event) =>
                                    setForm((current) => ({
                                        ...current,
                                        hasAdjustedAreaHouse: event.target.checked,
                                    }))
                                }
                            />
                            <span>
                                <strong>조정대상지역 주택이 포함되어 있음</strong>
                                <small>2028년 정부안의 보유세 계산 조건에 반영합니다.</small>
                            </span>
                        </label>
                    )}

                    <div className={styles.optionalFields}>
                        <label className={styles.checkRow}>
                            <input
                                type="checkbox"
                                checked={form.urbanArea}
                                onChange={(event) =>
                                    setForm((current) => ({ ...current, urbanArea: event.target.checked }))
                                }
                            />
                            <span>
                                <strong>도시지역분 포함</strong>
                                <small>기본값은 포함입니다.</small>
                            </span>
                        </label>
                        <div className={styles.fieldGroup}>
                            <div className={styles.fieldHeading}>
                                <label htmlFor="previous-tax">전년도 보유세</label>
                                <span>세부담 상한을 적용할 때만 입력</span>
                            </div>
                            <div className={styles.inputWithUnit}>
                                <input
                                    id="previous-tax"
                                    type="number"
                                    min="0"
                                    step="1"
                                    inputMode="numeric"
                                    placeholder="선택 입력"
                                    value={form.previousYearHoldingTaxManWon}
                                    onChange={(event) =>
                                        setForm((current) => ({
                                            ...current,
                                            previousYearHoldingTaxManWon: event.target.value,
                                        }))
                                    }
                                />
                                <span>만원</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.resultPanel}>
                    <div className={styles.resultTopline}>
                        <div>
                            <p className={styles.kicker}>ESTIMATE RESULT</p>
                            <p className={styles.resultLabel}>{modeLabel(form.mode)}</p>
                        </div>
                        <span className={styles.resultDate}>연간 추정</span>
                    </div>
                    <div className={styles.totalResult}>
                        <span>예상 연간 보유세</span>
                        <strong>{formatWon(selected.annualTotalWon)}</strong>
                        <small>재산세·종합부동산세·부가세 포함 추정치</small>
                    </div>

                    <div className={styles.compareBox}>
                        <div>
                            <span>현행 세법 기준</span>
                            <strong>{formatWon(currentLaw.annualTotalWon)}</strong>
                        </div>
                        <div className={comparison.annualDeltaWon > 0 ? styles.deltaUp : styles.deltaDown}>
                            <span>선택 기준과의 차이</span>
                            <strong>{formatDelta(comparison.annualDeltaWon)}</strong>
                        </div>
                    </div>

                    <div className={styles.breakdown}>
                        <div className={styles.breakdownHeader}>
                            <strong>세목별 구성</strong>
                            <span>{formatEokWon(selected.totalAssessedPriceWon)} 합산</span>
                        </div>
                        {[
                            ['재산세', selected.propertyTaxWon],
                            ['도시지역분', selected.urbanAreaTaxWon],
                            ['지방교육세', selected.localEducationTaxWon],
                            ['종합부동산세', selected.comprehensiveTaxWon],
                            ['농어촌특별세', selected.ruralSpecialTaxWon],
                        ].map(([label, value]) => (
                            <div className={styles.breakdownRow} key={label as string}>
                                <span>{label as string}</span>
                                <strong>{formatWon(value as number)}</strong>
                            </div>
                        ))}
                    </div>

                    <div className={styles.formulaBox}>
                        <div className={styles.formulaHeader}>
                            <strong>이번 결과가 만들어진 과정</strong>
                            <span>공개 정책 기준</span>
                        </div>
                        <ol>
                            <li>
                                <span>01</span>
                                <p>
                                    합산 공시가격 {formatEokWon(selected.totalAssessedPriceWon)}에서
                                    기본공제 {formatEokWon(selected.deductionWon)}를 뺍니다.
                                </p>
                            </li>
                            <li>
                                <span>02</span>
                                <p>
                                    남은 금액에 공정시장가액비율 {percent(selected.fairMarketValueRatio)}을
                                    적용해 과세표준 {formatEokWon(selected.comprehensiveTaxBaseWon)}을 구합니다.
                                </p>
                            </li>
                            <li>
                                <span>03</span>
                                <p>과세표준에 누진 세율을 적용하고 재산세 공제·세액공제를 반영합니다.</p>
                            </li>
                            <li>
                                <span>04</span>
                                <p>
                                    전년도 세액을 입력했다면 세부담 상한을 적용합니다.
                                    {selected.burdenCapReductionWon > 0 && (
                                        <> 이번 계산에서는 {formatWon(selected.burdenCapReductionWon)}을 상한으로 조정했습니다.</>
                                    )}
                                </p>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>

            <div className={styles.disclaimer}>
                <strong>계산 결과를 읽는 법</strong>
                <p>
                    이 계산기는 공개된 정부안과 일반적인 세목 구조를 바탕으로 한 콘텐츠용 추정치입니다.
                    공동명의, 특례주택, 지방세 감면, 실제 공시가격 확정값과 고지 방식에 따라 실제 세액은
                    달라질 수 있습니다. 정부안은 국회 심의와 하위법령 과정에서 바뀔 수 있으므로 계약·신고 전에는
                    원문과 세무 전문가의 확인이 필요합니다.
                </p>
            </div>
        </section>
    );
}
