export type JointTaxMode = 'individual-deduction' | 'one-house-special' | 'none';

export interface TaxConditions {
    mode: CalculationMode;
    ownershipType: OwnershipType;
    isCoupleJointOwnership?: boolean;
    otherHousingAssessedPricesWon: number[];
    residentHouseIndex: number | null;
    age: number | null;
    holdingYears: number;
    residenceYears: number;
    hasAdjustedAreaHouse: boolean;
    urbanArea: boolean;
    previousYearHoldingTaxWon: number | null;
}

export interface TaxEstimate {
    annualTotalWon: number;
    propertyTaxWon: number;
    urbanAreaTaxWon: number;
    localEducationTaxWon: number;
    comprehensiveTaxWon: number;
    ruralSpecialTaxWon: number;
    propertyTaxBaseWon: number;
    comprehensiveTaxBaseWon: number;
    deductionWon: number;
    fairMarketValueRatio: number;
    taxableThresholdWon: number;
    deductiblePropertyTaxWon: number;
    oneHouseTaxCreditRate: number;
    oneHouseTaxCreditWon: number;
    burdenCapRatio: number;
    burdenCapReductionWon: number;
    totalAssessedPriceWon: number;
    declaredOneHouse: boolean;
    appliedJointTaxMode?: JointTaxMode;
}

export interface TaxComparison {
    selected: TaxEstimate;
    currentLaw: TaxEstimate;
    annualDeltaWon: number;
}

interface ProgressiveBand {
    upperBoundWon: number;
    rate: number;
}

const WON_PER_EOK = 100_000_000;

// 2026년 현행 기준과 2026-08-03 정부안의 공개 정책 숫자만 사용한다.
const CURRENT_LAW_RATIO = 0.6;
const CURRENT_LAW_ONE_HOUSE_DEDUCTION_WON = 12 * WON_PER_EOK;
const CURRENT_LAW_GENERAL_DEDUCTION_WON = 9 * WON_PER_EOK;
const REFORM_ONE_HOUSE_TAXABLE_THRESHOLD_WON = 14 * WON_PER_EOK;
const REFORM_GENERAL_TAXABLE_THRESHOLD_WON = 9 * WON_PER_EOK;
const REFORM_RESIDENT_ONE_HOUSE_DEDUCTION_WON = 14 * WON_PER_EOK;
const REFORM_NON_RESIDENT_ONE_HOUSE_DEDUCTION_WON = 9 * WON_PER_EOK;
const REFORM_GENERAL_BASE_DEDUCTION_WON = 4 * WON_PER_EOK;
const REFORM_RESIDENT_SHARE_DEDUCTION_WON = 5 * WON_PER_EOK;
const REFORM_2027_RATIO = 0.7;
const REFORM_2028_STANDARD_RATIO = 0.7;
const REFORM_2028_HIGH_RATIO = 0.8;
const CURRENT_LAW_BURDEN_CAP_RATIO = 1.5;
const REFORM_BURDEN_CAP_RATIO = 2;
const REFORM_2027_CREDIT_CAP_WON = 8_000_000;
const REFORM_2028_CREDIT_CAP_WON = 6_000_000;

const CURRENT_LAW_TWO_OR_LESS_BANDS: ProgressiveBand[] = [
    { upperBoundWon: 300_000_000, rate: 0.005 },
    { upperBoundWon: 600_000_000, rate: 0.007 },
    { upperBoundWon: 1_200_000_000, rate: 0.01 },
    { upperBoundWon: 2_500_000_000, rate: 0.013 },
    { upperBoundWon: 5_000_000_000, rate: 0.015 },
    { upperBoundWon: 9_400_000_000, rate: 0.02 },
    { upperBoundWon: Number.POSITIVE_INFINITY, rate: 0.027 },
];

const CURRENT_LAW_THREE_OR_MORE_BANDS: ProgressiveBand[] = [
    { upperBoundWon: 300_000_000, rate: 0.005 },
    { upperBoundWon: 600_000_000, rate: 0.007 },
    { upperBoundWon: 1_200_000_000, rate: 0.01 },
    { upperBoundWon: 2_500_000_000, rate: 0.02 },
    { upperBoundWon: 5_000_000_000, rate: 0.03 },
    { upperBoundWon: 9_400_000_000, rate: 0.04 },
    { upperBoundWon: Number.POSITIVE_INFINITY, rate: 0.05 },
];

const REFORM_2027_TWO_OR_LESS_BANDS: ProgressiveBand[] = [
    { upperBoundWon: 300_000_000, rate: 0.005 },
    { upperBoundWon: 600_000_000, rate: 0.007 },
    { upperBoundWon: 1_200_000_000, rate: 0.013 },
    { upperBoundWon: 2_500_000_000, rate: 0.015 },
    { upperBoundWon: 5_000_000_000, rate: 0.02 },
    { upperBoundWon: 9_400_000_000, rate: 0.027 },
    { upperBoundWon: Number.POSITIVE_INFINITY, rate: 0.035 },
];

const REFORM_HIGH_BANDS: ProgressiveBand[] = [
    { upperBoundWon: 300_000_000, rate: 0.005 },
    { upperBoundWon: 600_000_000, rate: 0.007 },
    { upperBoundWon: 1_200_000_000, rate: 0.013 },
    { upperBoundWon: 2_500_000_000, rate: 0.02 },
    { upperBoundWon: 5_000_000_000, rate: 0.03 },
    { upperBoundWon: 9_400_000_000, rate: 0.04 },
    { upperBoundWon: Number.POSITIVE_INFINITY, rate: 0.05 },
];

const PROPERTY_TAX_ONE_HOUSE_SPECIAL_LIMIT_WON = 900_000_000;
const PROPERTY_TAX_URBAN_AREA_RATE = 0.0014;
const PROPERTY_TAX_STANDARD_RATE = 0.004;
const LOCAL_EDUCATION_TAX_RATE = 0.2;
const RURAL_SPECIAL_TAX_RATE = 0.2;

const GENERAL_PROPERTY_TAX_BANDS: ProgressiveBand[] = [
    { upperBoundWon: 60_000_000, rate: 0.001 },
    { upperBoundWon: 150_000_000, rate: 0.0015 },
    { upperBoundWon: 300_000_000, rate: 0.0025 },
    { upperBoundWon: Number.POSITIVE_INFINITY, rate: 0.004 },
];

const ONE_HOUSE_PROPERTY_TAX_BANDS: ProgressiveBand[] = [
    { upperBoundWon: 60_000_000, rate: 0.0005 },
    { upperBoundWon: 150_000_000, rate: 0.001 },
    { upperBoundWon: 300_000_000, rate: 0.002 },
    { upperBoundWon: Number.POSITIVE_INFINITY, rate: 0.0035 },
];

function nonNegativeFinite(value: number | null | undefined): number {
    return typeof value === 'number' && Number.isFinite(value) ? Math.max(0, value) : 0;
}

function progressiveTax(baseWon: number, bands: ProgressiveBand[]): number {
    const base = nonNegativeFinite(baseWon);
    let lowerBoundWon = 0;
    let taxWon = 0;

    for (const band of bands) {
        const upperBoundWon = Math.min(base, band.upperBoundWon);
        if (upperBoundWon > lowerBoundWon) {
            taxWon += (upperBoundWon - lowerBoundWon) * band.rate;
        }
        if (base <= band.upperBoundWon) break;
        lowerBoundWon = band.upperBoundWon;
    }

    return Math.round(taxWon);
}

function propertyTaxFairMarketRatio(assessedPriceWon: number, declaredOneHouse: boolean): number {
    if (!declaredOneHouse) return 0.6;
    if (assessedPriceWon <= 300_000_000) return 0.43;
    if (assessedPriceWon <= 600_000_000) return 0.44;
    return 0.45;
}

function ageCreditRate(age: number | null): number {
    const validAge = age != null && Number.isFinite(age) ? Math.max(0, age) : 0;
    return validAge >= 70 ? 0.4 : validAge >= 65 ? 0.3 : validAge >= 60 ? 0.2 : 0;
}

function durationCreditRate(years: number): number {
    const validYears = Number.isFinite(years) ? Math.max(0, years) : 0;
    return validYears >= 15 ? 0.5 : validYears >= 10 ? 0.4 : validYears >= 5 ? 0.2 : 0;
}

function resolveOneHouseCredit(
    conditions: TaxConditions,
    residentOneHouse: boolean,
): { rate: number; amountCapWon: number | null } {
    const ageRate = ageCreditRate(conditions.age);
    if (conditions.mode === 'current-law') {
        return {
            rate: Math.min(0.8, ageRate + durationCreditRate(conditions.holdingYears)),
            amountCapWon: null,
        };
    }

    const residenceRate = residentOneHouse ? durationCreditRate(conditions.residenceYears) : 0;
    if (conditions.mode === 'reform-2027') {
        const transitionalHoldingRate = durationCreditRate(conditions.holdingYears) / 2;
        return {
            rate: Math.min(0.8, ageRate + Math.max(residenceRate, transitionalHoldingRate)),
            amountCapWon: REFORM_2027_CREDIT_CAP_WON,
        };
    }

    return {
        rate: Math.min(0.8, ageRate + residenceRate),
        amountCapWon: REFORM_2028_CREDIT_CAP_WON,
    };
}

interface PropertyTaxBreakdown {
    propertyTaxBaseWon: number;
    propertyTaxWon: number;
    urbanAreaTaxWon: number;
    localEducationTaxWon: number;
}

function calculatePropertyTaxForHouse(
    assessedPriceWon: number,
    declaredOneHouse: boolean,
    urbanArea: boolean,
): PropertyTaxBreakdown {
    const propertyTaxBaseWon = Math.round(
        assessedPriceWon * propertyTaxFairMarketRatio(assessedPriceWon, declaredOneHouse),
    );
    const useOneHousePropertyTaxRate =
        declaredOneHouse && assessedPriceWon <= PROPERTY_TAX_ONE_HOUSE_SPECIAL_LIMIT_WON;
    const propertyTaxWon = progressiveTax(
        propertyTaxBaseWon,
        useOneHousePropertyTaxRate ? ONE_HOUSE_PROPERTY_TAX_BANDS : GENERAL_PROPERTY_TAX_BANDS,
    );
    const urbanAreaTaxWon = urbanArea
        ? Math.round(propertyTaxBaseWon * PROPERTY_TAX_URBAN_AREA_RATE)
        : 0;
    const localEducationTaxWon = Math.round(propertyTaxWon * LOCAL_EDUCATION_TAX_RATE);

    return { propertyTaxBaseWon, propertyTaxWon, urbanAreaTaxWon, localEducationTaxWon };
}

function sumPropertyTaxBreakdowns(breakdowns: PropertyTaxBreakdown[]): PropertyTaxBreakdown {
    return breakdowns.reduce(
        (sum, breakdown) => ({
            propertyTaxBaseWon: sum.propertyTaxBaseWon + breakdown.propertyTaxBaseWon,
            propertyTaxWon: sum.propertyTaxWon + breakdown.propertyTaxWon,
            urbanAreaTaxWon: sum.urbanAreaTaxWon + breakdown.urbanAreaTaxWon,
            localEducationTaxWon: sum.localEducationTaxWon + breakdown.localEducationTaxWon,
        }),
        { propertyTaxBaseWon: 0, propertyTaxWon: 0, urbanAreaTaxWon: 0, localEducationTaxWon: 0 },
    );
}

interface ComprehensiveTaxPolicy {
    taxableThresholdWon: number;
    deductionWon: number;
    ratio: number;
    bands: ProgressiveBand[];
    creditRate: number;
    creditAmountCapWon: number | null;
    burdenCapRatio: number;
}

function resolveResidentHousePrice(
    housePricesWon: readonly number[],
    residentHouseIndex: number | null,
): number {
    if (
        residentHouseIndex == null ||
        !Number.isInteger(residentHouseIndex) ||
        residentHouseIndex < 0 ||
        residentHouseIndex >= housePricesWon.length
    ) {
        return 0;
    }
    return housePricesWon[residentHouseIndex] ?? 0;
}

function resolveComprehensiveTaxPolicy(
    conditions: TaxConditions,
    declaredOneHouse: boolean,
    housePricesWon: number[],
): ComprehensiveTaxPolicy {
    const residentHousePriceWon = resolveResidentHousePrice(housePricesWon, conditions.residentHouseIndex);
    const residentOneHouse = declaredOneHouse && conditions.residentHouseIndex === 0;
    const oneHouseCredit = declaredOneHouse
        ? resolveOneHouseCredit(conditions, residentOneHouse)
        : { rate: 0, amountCapWon: null };

    if (conditions.mode === 'current-law') {
        return {
            taxableThresholdWon: declaredOneHouse
                ? CURRENT_LAW_ONE_HOUSE_DEDUCTION_WON
                : CURRENT_LAW_GENERAL_DEDUCTION_WON,
            deductionWon: declaredOneHouse
                ? CURRENT_LAW_ONE_HOUSE_DEDUCTION_WON
                : CURRENT_LAW_GENERAL_DEDUCTION_WON,
            ratio: CURRENT_LAW_RATIO,
            bands:
                conditions.ownershipType === 'three-or-more'
                    ? CURRENT_LAW_THREE_OR_MORE_BANDS
                    : CURRENT_LAW_TWO_OR_LESS_BANDS,
            creditRate: oneHouseCredit.rate,
            creditAmountCapWon: oneHouseCredit.amountCapWon,
            burdenCapRatio: CURRENT_LAW_BURDEN_CAP_RATIO,
        };
    }

    const totalAssessedPriceWon = housePricesWon.reduce((sum, value) => sum + value, 0);
    const residentShare = totalAssessedPriceWon > 0
        ? Math.min(1, residentHousePriceWon / totalAssessedPriceWon)
        : 0;
    const deductionWon = declaredOneHouse
        ? residentOneHouse
            ? REFORM_RESIDENT_ONE_HOUSE_DEDUCTION_WON
            : REFORM_NON_RESIDENT_ONE_HOUSE_DEDUCTION_WON
        : REFORM_GENERAL_BASE_DEDUCTION_WON + REFORM_RESIDENT_SHARE_DEDUCTION_WON * residentShare;
    const highRatioApplies =
        !declaredOneHouse &&
        (conditions.ownershipType === 'three-or-more' || conditions.hasAdjustedAreaHouse);

    return {
        taxableThresholdWon: declaredOneHouse
            ? REFORM_ONE_HOUSE_TAXABLE_THRESHOLD_WON
            : REFORM_GENERAL_TAXABLE_THRESHOLD_WON,
        deductionWon,
        ratio:
            conditions.mode === 'reform-2027'
                ? REFORM_2027_RATIO
                : highRatioApplies
                    ? REFORM_2028_HIGH_RATIO
                    : REFORM_2028_STANDARD_RATIO,
        bands:
            conditions.mode === 'reform-2028' || conditions.ownershipType === 'three-or-more'
                ? REFORM_HIGH_BANDS
                : REFORM_2027_TWO_OR_LESS_BANDS,
        creditRate: oneHouseCredit.rate,
        creditAmountCapWon: oneHouseCredit.amountCapWon,
        burdenCapRatio: REFORM_BURDEN_CAP_RATIO,
    };
}

function calculateDeductiblePropertyTax(
    comprehensiveTaxBaseWon: number,
    targetAssessedPriceWon: number,
    declaredOneHouse: boolean,
    rawComprehensiveTaxWon: number,
): number {
    const standardPropertyTaxRate =
        propertyTaxFairMarketRatio(targetAssessedPriceWon, declaredOneHouse) * PROPERTY_TAX_STANDARD_RATE;
    return Math.min(rawComprehensiveTaxWon, Math.round(comprehensiveTaxBaseWon * standardPropertyTaxRate));
}

function applyBurdenCap(
    comprehensiveTaxWon: number,
    propertyTaxBreakdown: PropertyTaxBreakdown,
    previousYearHoldingTaxWon: number | null,
    burdenCapRatio: number,
): { comprehensiveTaxWon: number; ruralSpecialTaxWon: number; burdenCapReductionWon: number } {
    const ruralSpecialTaxWon = Math.round(comprehensiveTaxWon * RURAL_SPECIAL_TAX_RATE);
    const previousTaxWon = nonNegativeFinite(previousYearHoldingTaxWon);
    if (previousTaxWon <= 0) {
        return { comprehensiveTaxWon, ruralSpecialTaxWon, burdenCapReductionWon: 0 };
    }

    const fixedPropertyTaxesWon =
        propertyTaxBreakdown.propertyTaxWon +
        propertyTaxBreakdown.urbanAreaTaxWon +
        propertyTaxBreakdown.localEducationTaxWon;
    const maximumHoldingTaxWon = Math.round(previousTaxWon * burdenCapRatio);
    const uncappedTotalWon = fixedPropertyTaxesWon + comprehensiveTaxWon + ruralSpecialTaxWon;
    if (uncappedTotalWon <= maximumHoldingTaxWon) {
        return { comprehensiveTaxWon, ruralSpecialTaxWon, burdenCapReductionWon: 0 };
    }

    const allowedComprehensiveWithSurtaxWon = Math.max(0, maximumHoldingTaxWon - fixedPropertyTaxesWon);
    const cappedComprehensiveTaxWon = Math.min(
        comprehensiveTaxWon,
        Math.floor(allowedComprehensiveWithSurtaxWon / (1 + RURAL_SPECIAL_TAX_RATE)),
    );
    const cappedRuralSpecialTaxWon = Math.round(cappedComprehensiveTaxWon * RURAL_SPECIAL_TAX_RATE);

    return {
        comprehensiveTaxWon: cappedComprehensiveTaxWon,
        ruralSpecialTaxWon: cappedRuralSpecialTaxWon,
        burdenCapReductionWon:
            comprehensiveTaxWon + ruralSpecialTaxWon - cappedComprehensiveTaxWon - cappedRuralSpecialTaxWon,
    };
}

export function calculateHoldingTax(assessedPriceWon: number, conditions: TaxConditions): TaxEstimate {
    const priceWon = nonNegativeFinite(assessedPriceWon);
    const otherHousingPricesWon = conditions.otherHousingAssessedPricesWon
        .map(nonNegativeFinite)
        .filter((value) => value > 0);
    const housePricesWon = [priceWon, ...otherHousingPricesWon];
    const declaredOneHouse = conditions.ownershipType === 'one-house' && otherHousingPricesWon.length === 0;
    const propertyTaxBreakdown = sumPropertyTaxBreakdowns([
        calculatePropertyTaxForHouse(priceWon, declaredOneHouse, conditions.urbanArea),
        ...otherHousingPricesWon.map((otherPriceWon) =>
            calculatePropertyTaxForHouse(otherPriceWon, false, conditions.urbanArea),
        ),
    ]);
    const comprehensiveTaxPolicy = resolveComprehensiveTaxPolicy(
        conditions,
        declaredOneHouse,
        housePricesWon,
    );
    const totalAssessedPriceWon = housePricesWon.reduce((sum, value) => sum + value, 0);
    const comprehensiveTaxBaseWon =
        totalAssessedPriceWon > comprehensiveTaxPolicy.taxableThresholdWon
            ? Math.round(
                Math.max(0, totalAssessedPriceWon - comprehensiveTaxPolicy.deductionWon) *
                comprehensiveTaxPolicy.ratio,
            )
            : 0;
    const rawComprehensiveTaxWon = progressiveTax(comprehensiveTaxBaseWon, comprehensiveTaxPolicy.bands);
    const deductiblePropertyTaxWon = calculateDeductiblePropertyTax(
        comprehensiveTaxBaseWon,
        priceWon,
        declaredOneHouse,
        rawComprehensiveTaxWon,
    );
    const creditBaseWon = Math.max(0, rawComprehensiveTaxWon - deductiblePropertyTaxWon);
    const percentageCreditWon = Math.round(creditBaseWon * comprehensiveTaxPolicy.creditRate);
    const oneHouseTaxCreditWon = comprehensiveTaxPolicy.creditAmountCapWon == null
        ? percentageCreditWon
        : Math.min(percentageCreditWon, comprehensiveTaxPolicy.creditAmountCapWon);
    const comprehensiveTaxBeforeBurdenCapWon = Math.max(0, creditBaseWon - oneHouseTaxCreditWon);
    const burdenCapResult = applyBurdenCap(
        comprehensiveTaxBeforeBurdenCapWon,
        propertyTaxBreakdown,
        conditions.previousYearHoldingTaxWon,
        comprehensiveTaxPolicy.burdenCapRatio,
    );

    const singleEstimate: TaxEstimate = {
        annualTotalWon:
            propertyTaxBreakdown.propertyTaxWon +
            propertyTaxBreakdown.urbanAreaTaxWon +
            propertyTaxBreakdown.localEducationTaxWon +
            burdenCapResult.comprehensiveTaxWon +
            burdenCapResult.ruralSpecialTaxWon,
        propertyTaxWon: propertyTaxBreakdown.propertyTaxWon,
        urbanAreaTaxWon: propertyTaxBreakdown.urbanAreaTaxWon,
        localEducationTaxWon: propertyTaxBreakdown.localEducationTaxWon,
        comprehensiveTaxWon: burdenCapResult.comprehensiveTaxWon,
        ruralSpecialTaxWon: burdenCapResult.ruralSpecialTaxWon,
        propertyTaxBaseWon: propertyTaxBreakdown.propertyTaxBaseWon,
        comprehensiveTaxBaseWon,
        deductionWon: comprehensiveTaxPolicy.deductionWon,
        fairMarketValueRatio: comprehensiveTaxPolicy.ratio,
        taxableThresholdWon: comprehensiveTaxPolicy.taxableThresholdWon,
        deductiblePropertyTaxWon,
        oneHouseTaxCreditRate: comprehensiveTaxPolicy.creditRate,
        oneHouseTaxCreditWon,
        burdenCapRatio: comprehensiveTaxPolicy.burdenCapRatio,
        burdenCapReductionWon: burdenCapResult.burdenCapReductionWon,
        totalAssessedPriceWon,
        declaredOneHouse,
        appliedJointTaxMode:
            declaredOneHouse && conditions.isCoupleJointOwnership === true
                ? 'one-house-special'
                : 'none',
    };

    if (declaredOneHouse && conditions.isCoupleJointOwnership === true) {
        const jointEstimate = estimateJointIndividualHoldingTax(
            priceWon,
            conditions,
            propertyTaxBreakdown,
        );
        if (jointEstimate.annualTotalWon < singleEstimate.annualTotalWon) {
            return jointEstimate;
        }
    }

    return singleEstimate;
}

function estimateJointIndividualHoldingTax(
    assessedPriceWon: number,
    conditions: TaxConditions,
    propertyTaxBreakdown: PropertyTaxBreakdown,
): TaxEstimate {
    const priceWon = nonNegativeFinite(assessedPriceWon);
    const halfPriceWon = priceWon * 0.5;

    const thresholdWon = CURRENT_LAW_GENERAL_DEDUCTION_WON; // 9억원
    const ratio = conditions.mode === 'current-law' ? CURRENT_LAW_RATIO : REFORM_2027_RATIO;

    const perPersonBaseWon = halfPriceWon > thresholdWon
        ? Math.round((halfPriceWon - thresholdWon) * ratio)
        : 0;

    const bands = conditions.mode === 'current-law'
        ? CURRENT_LAW_TWO_OR_LESS_BANDS
        : conditions.mode === 'reform-2027'
            ? REFORM_2027_TWO_OR_LESS_BANDS
            : REFORM_HIGH_BANDS;

    const perPersonRawComprehensiveTaxWon = progressiveTax(perPersonBaseWon, bands);
    const perPersonDeductiblePropertyTaxWon = calculateDeductiblePropertyTax(
        perPersonBaseWon,
        halfPriceWon,
        false,
        perPersonRawComprehensiveTaxWon,
    );

    const perPersonComprehensiveBeforeBurdenCapWon = Math.max(
        0,
        perPersonRawComprehensiveTaxWon - perPersonDeductiblePropertyTaxWon,
    );

    const totalComprehensiveBeforeBurdenCapWon = perPersonComprehensiveBeforeBurdenCapWon * 2;
    const totalDeductiblePropertyTaxWon = perPersonDeductiblePropertyTaxWon * 2;
    const totalComprehensiveTaxBaseWon = perPersonBaseWon * 2;

    const burdenCapRatio = conditions.mode === 'current-law'
        ? CURRENT_LAW_BURDEN_CAP_RATIO
        : REFORM_BURDEN_CAP_RATIO;

    const burdenCapResult = applyBurdenCap(
        totalComprehensiveBeforeBurdenCapWon,
        propertyTaxBreakdown,
        conditions.previousYearHoldingTaxWon,
        burdenCapRatio,
    );

    return {
        annualTotalWon:
            propertyTaxBreakdown.propertyTaxWon +
            propertyTaxBreakdown.urbanAreaTaxWon +
            propertyTaxBreakdown.localEducationTaxWon +
            burdenCapResult.comprehensiveTaxWon +
            burdenCapResult.ruralSpecialTaxWon,
        propertyTaxWon: propertyTaxBreakdown.propertyTaxWon,
        urbanAreaTaxWon: propertyTaxBreakdown.urbanAreaTaxWon,
        localEducationTaxWon: propertyTaxBreakdown.localEducationTaxWon,
        comprehensiveTaxWon: burdenCapResult.comprehensiveTaxWon,
        ruralSpecialTaxWon: burdenCapResult.ruralSpecialTaxWon,
        propertyTaxBaseWon: propertyTaxBreakdown.propertyTaxBaseWon,
        comprehensiveTaxBaseWon: totalComprehensiveTaxBaseWon,
        deductionWon: thresholdWon * 2,
        fairMarketValueRatio: ratio,
        taxableThresholdWon: thresholdWon * 2,
        deductiblePropertyTaxWon: totalDeductiblePropertyTaxWon,
        oneHouseTaxCreditRate: 0,
        oneHouseTaxCreditWon: 0,
        burdenCapRatio,
        burdenCapReductionWon: burdenCapResult.burdenCapReductionWon,
        totalAssessedPriceWon: priceWon,
        declaredOneHouse: true,
        appliedJointTaxMode: 'individual-deduction',
    };
}

export function calculateComparison(
    assessedPriceWon: number,
    conditions: TaxConditions,
): TaxComparison {
    const currentLaw = calculateHoldingTax(assessedPriceWon, { ...conditions, mode: 'current-law' });
    const selected = calculateHoldingTax(assessedPriceWon, conditions);
    return {
        selected,
        currentLaw,
        annualDeltaWon: selected.annualTotalWon - currentLaw.annualTotalWon,
    };
}

export function modeLabel(mode: CalculationMode): string {
    if (mode === 'current-law') return '2026년 현행 세법 기준';
    if (mode === 'reform-2027') return '2027년 정부안 중간 단계';
    return '2028년 정부안 본격 시행';
}

export function formatWon(won: number): string {
    const manWon = Math.round(nonNegativeFinite(won) / 10_000);
    if (manWon >= 10_000) {
        const eok = manWon / 10_000;
        return `${eok.toLocaleString('ko-KR', { maximumFractionDigits: 1 })}억원`;
    }
    return `${manWon.toLocaleString('ko-KR')}만원`;
}

export function formatEokWon(won: number): string {
    return `${(nonNegativeFinite(won) / WON_PER_EOK).toLocaleString('ko-KR', {
        maximumFractionDigits: 1,
    })}억원`;
}
