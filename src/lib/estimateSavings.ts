/**
 * Hero "tax savings estimator" — the maths behind the two sliders.
 *
 * This is an illustration, not a computation of anyone's tax. It exists to
 * give a visitor a rough, honest sense of scale before they book a call, and
 * every number it produces is labelled as an estimate on screen.
 *
 * ── TUNING ────────────────────────────────────────────────────────────────
 * The three constants below are the whole model. Change them here and the
 * hero, the result card, and the query params handed to the intake form all
 * follow. Nothing else in the app hard-codes an estimate.
 */

/**
 * Average value of one commonly-missed deduction, expressed as a share of
 * annual income. 0.009 means each missed deduction is treated as worth
 * roughly 0.9% of income in reduced tax.
 *
 * ⚠️ PLACEHOLDER — confirm with the client before launch. This figure drives
 * every number the estimator shows, so it is the one value worth arguing
 * about. See the launch checklist in README.md.
 */
export const SAVINGS_PER_DEDUCTION = 0.009;

/**
 * Floor applied once a visitor reports at least one missed deduction, so a
 * low-income taxpayer does not see a figure so small it reads as "not worth
 * calling". Not applied at zero deductions.
 */
export const MINIMUM_SAVINGS = 150;

/**
 * Ceiling as a share of income. Caps the top of the range so the estimator
 * cannot imply an outsized result at the extremes of both sliders.
 *
 * Keep this at or above SAVINGS_PER_DEDUCTION × DEDUCTIONS.max (currently
 * 0.009 × 8 = 0.072). Set it lower and the cap binds partway up the slider:
 * the top few steps all return the same figure, so dragging the deductions
 * slider stops changing the number and the control feels broken.
 */
export const MAXIMUM_SAVINGS_RATE = 0.072;

/** Slider bounds, shared by the UI and by the query-param parser. */
export const INCOME = { min: 20_000, max: 250_000, step: 5_000 } as const;
export const DEDUCTIONS = { min: 0, max: 8, step: 1 } as const;

export type EstimateInput = {
  /** Annual income in whole dollars. */
  income: number;
  /** Count of deductions the visitor thinks they may be missing. */
  deductions: number;
};

export type Estimate = {
  /** Estimated annual saving, in whole dollars. */
  savings: number;
  /**
   * Where this estimate sits between zero and the capped maximum for this
   * income, 0..1. The progress bar reads this directly.
   */
  fraction: number;
};

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

/**
 * Pure. Given income and a count of missed deductions, returns the estimated
 * annual saving and its position within the capped range for that income.
 */
export function estimateSavings({ income, deductions }: EstimateInput): Estimate {
  const safeIncome = clamp(
    Number.isFinite(income) ? income : INCOME.min,
    INCOME.min,
    INCOME.max
  );
  const safeDeductions = clamp(
    Number.isFinite(deductions) ? Math.round(deductions) : DEDUCTIONS.min,
    DEDUCTIONS.min,
    DEDUCTIONS.max
  );

  const ceiling = safeIncome * MAXIMUM_SAVINGS_RATE;

  if (safeDeductions === 0) {
    return { savings: 0, fraction: 0 };
  }

  const raw = safeIncome * SAVINGS_PER_DEDUCTION * safeDeductions;
  const savings = Math.round(clamp(raw, MINIMUM_SAVINGS, ceiling) / 10) * 10;

  return { savings, fraction: ceiling > 0 ? clamp(savings / ceiling, 0, 1) : 0 };
}

/** Snaps an arbitrary number onto a slider's step grid. */
export function snap(value: number, { min, max, step }: { min: number; max: number; step: number }) {
  return clamp(Math.round(value / step) * step, min, max);
}

/**
 * Reads estimator values out of a query string, for the intake form to
 * pre-fill from. Returns null for anything missing or unparseable so callers
 * can tell "no estimate was passed" from "an estimate of zero".
 */
export function parseEstimateParams(params: {
  income?: string | string[];
  deductions?: string | string[];
}): EstimateInput | null {
  const first = (v?: string | string[]) => (Array.isArray(v) ? v[0] : v);
  const income = Number(first(params.income));
  const deductions = Number(first(params.deductions));

  if (!Number.isFinite(income) || !Number.isFinite(deductions)) return null;

  return {
    income: snap(income, INCOME),
    deductions: snap(deductions, DEDUCTIONS),
  };
}

/** Whole dollars, no cents — the figures here are never precise enough for them. */
export const formatUsd = (value: number) =>
  value.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  });
