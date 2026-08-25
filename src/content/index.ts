import {
  businessConsulting,
  businessFinancialCategory,
  businessFinancialPages,
  businessLoansFunding,
  creditSolutions,
  unclaimedFundsRecovery,
} from './business-financial';
import {
  bookkeepingAccounting,
  businessTaxPreparation,
  personalTaxPreparation,
  taxAccountingCategory,
  taxAccountingPages,
  taxPlanning,
  taxResolution,
} from './tax-accounting';
import type { ServicePageContent } from './types';

export {
  taxAccountingCategory,
  personalTaxPreparation,
  businessTaxPreparation,
  taxResolution,
  bookkeepingAccounting,
  taxPlanning,
  businessFinancialCategory,
  businessLoansFunding,
  creditSolutions,
  unclaimedFundsRecovery,
  businessConsulting,
};

/** Every service page, category pages included. */
export const allServiceContent: ServicePageContent[] = [
  taxAccountingCategory,
  ...taxAccountingPages,
  businessFinancialCategory,
  ...businessFinancialPages,
];

export function contentFor(href: string): ServicePageContent | undefined {
  return allServiceContent.find((page) => page.href === href);
}
