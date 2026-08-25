/**
 * Placeholder wordmark.
 *
 * The client's transparent-background PNG logo was confirmed in the intake but
 * not yet delivered. To swap it in: drop the file at /public/logo.png and
 * replace this component's body with a next/image, keeping the same className
 * contract (height-driven, width auto).
 */
export default function Logo({ className = 'h-9 w-auto' }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 40 40"
        className="h-full w-auto shrink-0"
        fill="none"
        aria-hidden="true"
      >
        <rect width="40" height="40" rx="9" fill="#FF6536" />
        <path
          d="M11 28.5 20 11l9 17.5h-4.4L20 19.4l-4.6 9.1H11Z"
          fill="#FFFFFF"
        />
      </svg>
      <span className="flex flex-col justify-center leading-none">
        <span className="font-display text-[0.95rem] font-extrabold uppercase tracking-[0.08em]">
          The Arms
        </span>
        <span className="mt-0.5 font-display text-[0.62rem] font-bold uppercase tracking-[0.3em] text-accent">
          Corporation
        </span>
      </span>
    </span>
  );
}
