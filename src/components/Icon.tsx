import type { IconName } from '@/lib/services';

const paths: Record<IconName, string> = {
  // Personal tax prep — a filed return
  receipt:
    'M6 2h9l5 5v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1Zm8 1.5V8h4.5M9 12h6M9 16h6',
  // Business tax prep — an office building
  building:
    'M4 21V5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v16M15 21V10h4a1 1 0 0 1 1 1v10M4 21h17M8 8h3M8 12h3M8 16h3',
  // Tax resolution — protection
  shield: 'M12 3l8 3v6c0 4.5-3.2 7.9-8 9-4.8-1.1-8-4.5-8-9V6l8-3ZM9 12l2 2 4-4',
  // Bookkeeping — ledger book
  ledger: 'M5 4h13a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H5a2 2 0 0 1 0-4h14M9 8h6M9 12h6',
  // Tax planning — upward trend
  chart: 'M4 20V4M4 20h16M8 16l4-5 3 3 5-7',
  // Funding — cash
  cash: 'M3 7h18a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1Zm9 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM6 10h.01M18 14h.01',
  // Credit — a score gauge
  gauge: 'M4 18a8 8 0 1 1 16 0M12 18l4.5-5',
  // Unclaimed funds — search
  search: 'M11 4a7 7 0 1 1 0 14 7 7 0 0 1 0-14Zm5.5 12.5L21 21',
  // Consulting — direction
  compass: 'M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18Zm3.5 5.5-2 5-5 2 2-5 5-2Z',
};

type IconProps = {
  name: IconName;
  className?: string;
};

export default function Icon({ name, className = 'h-5 w-5' }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path d={paths[name]} />
    </svg>
  );
}
