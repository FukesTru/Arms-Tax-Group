import FadeUp from './FadeUp';

/** "What We Handle" bullet lists — the recurring capability block. */
export default function CheckList({
  items,
  columns = 2,
  tone = 'light',
}: {
  items: string[];
  columns?: 1 | 2;
  tone?: 'light' | 'dark';
}) {
  const isDark = tone === 'dark';

  return (
    <ul
      className={`grid gap-x-8 gap-y-4 ${columns === 2 ? 'sm:grid-cols-2' : ''}`}
    >
      {items.map((item, index) => (
        <FadeUp
          as="li"
          key={item}
          delay={Math.min(index * 0.05, 0.3)}
          className="flex items-start gap-3.5"
        >
          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-accent-50 text-accent">
            <svg
              viewBox="0 0 16 16"
              className="h-3.5 w-3.5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.3}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m3 8.5 3.2 3.2L13 5" />
            </svg>
          </span>
          <span
            className={`text-[0.98rem] leading-relaxed ${
              isDark ? 'text-white/75' : 'text-ink-600'
            }`}
          >
            {item}
          </span>
        </FadeUp>
      ))}
    </ul>
  );
}
