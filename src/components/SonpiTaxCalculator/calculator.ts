export type SonpiHoldingPeriod = 'under-one-year' | 'one-year-or-more';

export interface SonpiConditions {
    sellerAcquisitionPriceWon: number;
    premiumWon: number;
    necessaryExpensesWon: number;
    holdingPeriod: SonpiHoldingPeriod;
    buyerInterimInterestWon: number;
    basicDeductionWon?: number;
}

export interface SonpiIteration {
    step: number;
    taxBeforeRecalculationWon: number;
    taxableGainWon: number;
    calculatedTaxWon: number;
}

export interface SonpiTaxEstimate {
    sellerAcquisitionPriceWon: number;
    premiumWon: number;
    necessaryExpensesWon: number;
    basicDeductionWon: number;
    incomeTaxRate: number;
    localIncomeTaxRate: number;
    combinedRate: number;
    transferPriceBeforeTaxWon: number;
    taxableGainWon: number;
    incomeTaxWon: number;
    localIncomeTaxWon: number;
    buyerPaidTaxWon: number;
    premiumAndTaxWon: number;
    buyerInterimInterestWon: number;
    buyerRequiredPremiumCostWon: number;
    effectiveTransferPriceWon: number;
    firstPassTaxWon: number;
    iterations: SonpiIteration[];
    iterationCount: number;
}

const BASIC_DEDUCTION_WON = 2_500_000;
const LOCAL_INCOME_TAX_RATE = 0.1;
const SONPI_CONVERGENCE_WON = 1;
const SONPI_MAX_ITERATIONS = 100;

function nonNegativeFinite(value: number | null | undefined): number {
    return typeof value === 'number' && Number.isFinite(value)
        ? Math.max(0, value)
        : 0;
}

function estimateFromBuyerPaidTax(
    transferPriceBeforeTaxWon: number,
    sellerAcquisitionPriceWon: number,
    necessaryExpensesWon: number,
    basicDeductionWon: number,
    incomeTaxRate: number,
    buyerPaidTaxWon: number
): {
    taxableGainWon: number;
    incomeTaxWon: number;
    localIncomeTaxWon: number;
    totalWon: number;
} {
    const taxableGainWon = Math.max(
        0,
        transferPriceBeforeTaxWon +
            buyerPaidTaxWon -
            sellerAcquisitionPriceWon -
            necessaryExpensesWon -
            basicDeductionWon
    );
    const incomeTaxWon = Math.floor(taxableGainWon * incomeTaxRate);
    const localIncomeTaxWon = Math.floor(incomeTaxWon * LOCAL_INCOME_TAX_RATE);

    return {
        taxableGainWon,
        incomeTaxWon,
        localIncomeTaxWon,
        totalWon: incomeTaxWon + localIncomeTaxWon,
    };
}

export function calculateSonpiTax(
    conditions: SonpiConditions
): SonpiTaxEstimate {
    const sellerAcquisitionPriceWon = nonNegativeFinite(
        conditions.sellerAcquisitionPriceWon
    );
    const premiumWon = nonNegativeFinite(conditions.premiumWon);
    const necessaryExpensesWon = nonNegativeFinite(
        conditions.necessaryExpensesWon
    );
    const buyerInterimInterestWon = nonNegativeFinite(
        conditions.buyerInterimInterestWon
    );
    const basicDeductionWon = nonNegativeFinite(
        conditions.basicDeductionWon ?? BASIC_DEDUCTION_WON
    );
    const incomeTaxRate =
        conditions.holdingPeriod === 'under-one-year' ? 0.7 : 0.6;
    const transferPriceBeforeTaxWon = sellerAcquisitionPriceWon + premiumWon;

    let buyerPaidTaxWon = 0;
    let finalEstimate = estimateFromBuyerPaidTax(
        transferPriceBeforeTaxWon,
        sellerAcquisitionPriceWon,
        necessaryExpensesWon,
        basicDeductionWon,
        incomeTaxRate,
        buyerPaidTaxWon
    );
    const iterations: SonpiIteration[] = [];
    const firstPassTaxWon = finalEstimate.totalWon;
    let iterationCount = 0;

    for (let step = 1; step <= SONPI_MAX_ITERATIONS; step += 1) {
        iterationCount = step;
        iterations.push({
            step,
            taxBeforeRecalculationWon: buyerPaidTaxWon,
            taxableGainWon: finalEstimate.taxableGainWon,
            calculatedTaxWon: finalEstimate.totalWon,
        });

        if (
            Math.abs(finalEstimate.totalWon - buyerPaidTaxWon) <=
            SONPI_CONVERGENCE_WON
        ) {
            buyerPaidTaxWon = finalEstimate.totalWon;
            break;
        }

        buyerPaidTaxWon = finalEstimate.totalWon;
        finalEstimate = estimateFromBuyerPaidTax(
            transferPriceBeforeTaxWon,
            sellerAcquisitionPriceWon,
            necessaryExpensesWon,
            basicDeductionWon,
            incomeTaxRate,
            buyerPaidTaxWon
        );
    }

    finalEstimate = estimateFromBuyerPaidTax(
        transferPriceBeforeTaxWon,
        sellerAcquisitionPriceWon,
        necessaryExpensesWon,
        basicDeductionWon,
        incomeTaxRate,
        buyerPaidTaxWon
    );

    return {
        sellerAcquisitionPriceWon,
        premiumWon,
        necessaryExpensesWon,
        basicDeductionWon,
        incomeTaxRate,
        localIncomeTaxRate: LOCAL_INCOME_TAX_RATE,
        combinedRate: incomeTaxRate * (1 + LOCAL_INCOME_TAX_RATE),
        transferPriceBeforeTaxWon,
        taxableGainWon: finalEstimate.taxableGainWon,
        incomeTaxWon: finalEstimate.incomeTaxWon,
        localIncomeTaxWon: finalEstimate.localIncomeTaxWon,
        buyerPaidTaxWon,
        premiumAndTaxWon: premiumWon + buyerPaidTaxWon,
        buyerInterimInterestWon,
        buyerRequiredPremiumCostWon:
            premiumWon + buyerPaidTaxWon + buyerInterimInterestWon,
        effectiveTransferPriceWon: transferPriceBeforeTaxWon + buyerPaidTaxWon,
        firstPassTaxWon,
        iterations,
        iterationCount,
    };
}

export function formatWon(won: number): string {
    const value = Math.round(nonNegativeFinite(won));
    const eok = Math.floor(value / 100_000_000);
    const manWon = Math.round((value % 100_000_000) / 10_000);

    if (eok > 0 && manWon > 0)
        return `${eok.toLocaleString('ko-KR')}억 ${manWon.toLocaleString('ko-KR')}만원`;
    if (eok > 0) return `${eok.toLocaleString('ko-KR')}억원`;
    return `${manWon.toLocaleString('ko-KR')}만원`;
}

export function formatExactWon(won: number): string {
    return `${Math.round(nonNegativeFinite(won)).toLocaleString('ko-KR')}원`;
}
