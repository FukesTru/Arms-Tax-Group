'use client';

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type MotionValue,
} from 'framer-motion';
import { useCallback, useRef } from 'react';

/**
 * Animated hero visual: an aperture opening onto a rising path.
 *
 * The gesture is "clarity" — concentric arcs sweep open like a lens, a path
 * draws itself through them, and metric chips settle into place around it.
 *
 * GUARDRAIL: the chips carry category labels and trend glyphs, never figures.
 * The site does not publish statistics it cannot stand behind, and an
 * invented number in a hero visual is the same problem as an invented one in
 * body copy. To show real metrics, add them to CHIPS once the client has
 * signed off on the values.
 *
 * Motion budget: ~20 vector nodes and three chips, animated with transforms
 * and pathLength only. No particle system, no canvas, no layout thrash —
 * pointer parallax is driven through motion values so it never re-renders.
 *
 * Accessibility: honours prefers-reduced-motion by rendering the settled
 * state with no animation at all. Marked aria-hidden because it is
 * decorative; the hero headline carries the meaning.
 */

const ACCENT = '#D8244D';
const ACCENT_BRIGHT = '#F03A5F';

/** Waypoints of the rising path, in viewBox units. */
const CENTER = { x: 300, y: 260 };

/**
 * Waypoints of the rising path. Every point sits inside the innermost ring
 * radius so the aperture frames the path instead of crossing it — the arcs
 * and the line colliding was what made the first pass read as noise.
 */
const PATH_POINTS: [number, number][] = [
  [168, 356],
  [238, 318],
  [300, 332],
  [372, 248],
  [438, 186],
];

const PATH_D = PATH_POINTS.map(([x, y], i) => `${i ? 'L' : 'M'}${x} ${y}`).join(' ');

type Chip = {
  label: string;
  /** 'trend' rising sparkline, 'check' resolved tick, 'arrow' upward move. */
  glyph: 'trend' | 'check' | 'arrow';
  /** Position as a percentage of the container. */
  x: number;
  y: number;
  /** Parallax depth, 0 = static, 1 = moves most. */
  depth: number;
  delay: number;
};

const CHIPS: Chip[] = [
  { label: 'Filings current', glyph: 'check', x: 1, y: 20, depth: 1, delay: 1.15 },
  { label: 'Cash flow', glyph: 'trend', x: 52, y: 2, depth: 0.55, delay: 1.35 },
  { label: 'Recovered', glyph: 'arrow', x: 58, y: 80, depth: 0.8, delay: 1.55 },
];

export default function HeroAperture({ className = '' }: { className?: string }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  // Pointer position, normalised to -1..1 around the centre.
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 60, damping: 20, mass: 0.6 });
  const sy = useSpring(py, { stiffness: 60, damping: 20, mass: 0.6 });

  const onPointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (reduce) return;
      const r = ref.current?.getBoundingClientRect();
      if (!r) return;
      px.set(((e.clientX - r.left) / r.width - 0.5) * 2);
      py.set(((e.clientY - r.top) / r.height - 0.5) * 2);
    },
    [px, py, reduce]
  );

  const onPointerLeave = useCallback(() => {
    px.set(0);
    py.set(0);
  }, [px, py]);

  // Layer offsets. Deeper layers travel further, which reads as depth.
  const ringX = useTransform(sx, (v) => v * -16);
  const ringY = useTransform(sy, (v) => v * -12);
  const pathX = useTransform(sx, (v) => v * 10);
  const pathY = useTransform(sy, (v) => v * 8);
  const ringSpin = useTransform(sx, (v) => v * 5);

  return (
    <div
      ref={ref}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      aria-hidden="true"
      className={`relative select-none ${className}`}
    >
      <motion.svg
        viewBox="0 0 560 520"
        className="h-auto w-full overflow-visible"
        style={reduce ? undefined : { x: ringX, y: ringY }}
      >
        <defs>
          <linearGradient id="ha-line" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor={ACCENT} />
            <stop offset="100%" stopColor={ACCENT_BRIGHT} />
          </linearGradient>
          <radialGradient id="ha-core" cx="50%" cy="50%">
            <stop offset="0%" stopColor={ACCENT} stopOpacity="0.34" />
            <stop offset="70%" stopColor={ACCENT} stopOpacity="0.06" />
            <stop offset="100%" stopColor={ACCENT} stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Soft core, so the aperture reads as a lens rather than a wireframe */}
        <motion.circle
          cx={CENTER.x}
          cy={CENTER.y}
          r={196}
          fill="url(#ha-core)"
          initial={reduce ? false : { opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={reduce ? { duration: 0 } : { duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: `${CENTER.x}px ${CENTER.y}px` }}
        />

        {/* Aperture: three arcs sweeping open at staggered rates */}
        <motion.g style={
            reduce
              ? undefined
              : { rotate: ringSpin, transformOrigin: `${CENTER.x}px ${CENTER.y}px` }
          }>
          {[
            { r: 136, w: 1.5, stroke: 'rgba(255,255,255,0.10)', span: 0.58, rot: 54, delay: 0.05 },
            { r: 176, w: 2, stroke: 'rgba(255,255,255,0.18)', span: 0.4, rot: -152, delay: 0.16 },
            { r: 214, w: 3, stroke: ACCENT, span: 0.26, rot: -98, delay: 0.28 },
          ].map((a) => (
            <motion.circle
              key={a.r}
              cx={CENTER.x}
              cy={CENTER.y}
              r={a.r}
              fill="none"
              stroke={a.stroke}
              strokeWidth={a.w}
              strokeLinecap="round"
              transform={`rotate(${a.rot} ${CENTER.x} ${CENTER.y})`}
              initial={reduce ? false : { pathLength: 0, opacity: 0 }}
              animate={{ pathLength: a.span, opacity: 1 }}
              transition={
                reduce
                  ? { duration: 0 }
                  : { duration: 1.3, delay: a.delay, ease: [0.22, 1, 0.36, 1] }
              }
            />
          ))}
        </motion.g>

        {/* The rising path, drawn through the aperture */}
        <motion.g style={reduce ? undefined : { x: pathX, y: pathY }}>
          <motion.path
            d={PATH_D}
            fill="none"
            stroke="url(#ha-line)"
            strokeWidth={3.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={reduce ? false : { pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={
              reduce
                ? { duration: 0 }
                : { duration: 1.5, delay: 0.45, ease: [0.22, 1, 0.36, 1] }
            }
          />
          {PATH_POINTS.map(([x, y], i) => {
            const last = i === PATH_POINTS.length - 1;
            return (
              <motion.circle
                key={`${x}-${y}`}
                cx={x}
                cy={y}
                r={last ? 7 : 4.5}
                fill={last ? '#fff' : ACCENT_BRIGHT}
                initial={reduce ? false : { opacity: 0, scale: 0.3 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={
                  reduce
                    ? { duration: 0 }
                    : { duration: 0.5, delay: 0.7 + i * 0.16, ease: 'easeOut' }
                }
                style={{ transformOrigin: `${x}px ${y}px` }}
              />
            );
          })}
          {/* Halo on the final node, the only element that keeps moving */}
          {!reduce && (
            <motion.circle
              cx={PATH_POINTS[4][0]}
              cy={PATH_POINTS[4][1]}
              r={7}
              fill="none"
              stroke="#fff"
              strokeWidth={1.5}
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: [0, 0.45, 0], scale: [1, 2.2, 2.2] }}
              transition={{ duration: 3.2, delay: 1.9, repeat: Infinity, repeatDelay: 1.6, ease: 'easeOut' }}
              style={{ transformOrigin: `${PATH_POINTS[4][0]}px ${PATH_POINTS[4][1]}px` }}
            />
          )}
        </motion.g>
      </motion.svg>

      {CHIPS.map((chip) => (
        <ChipCard key={chip.label} chip={chip} sx={sx} sy={sy} reduce={!!reduce} />
      ))}
    </div>
  );
}

function ChipCard({
  chip,
  sx,
  sy,
  reduce,
}: {
  chip: Chip;
  sx: MotionValue<number>;
  sy: MotionValue<number>;
  reduce: boolean;
}) {
  const x = useTransform(sx, (v) => v * 22 * chip.depth);
  const y = useTransform(sy, (v) => v * 16 * chip.depth);

  return (
    <motion.div
      className="absolute"
      style={{
        left: `${chip.x}%`,
        top: `${chip.y}%`,
        ...(reduce ? {} : { x, y }),
      }}
      initial={reduce ? false : { opacity: 0, y: 14, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={
        reduce
          ? { duration: 0 }
          : { duration: 0.7, delay: chip.delay, ease: [0.22, 1, 0.36, 1] }
      }
    >
      <motion.div
        className="flex items-center gap-2.5 rounded-xl border border-white/12 bg-white/[0.06] px-3.5 py-2.5 backdrop-blur-md"
        animate={reduce ? undefined : { y: [0, -5, 0] }}
        transition={
          reduce
            ? undefined
            : { duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: chip.delay }
        }
      >
        <Glyph kind={chip.glyph} />
        <span className="whitespace-nowrap font-display text-[0.78rem] font-semibold text-white/90">
          {chip.label}
        </span>
      </motion.div>
    </motion.div>
  );
}

function Glyph({ kind }: { kind: Chip['glyph'] }) {
  const common = {
    fill: 'none',
    stroke: ACCENT_BRIGHT,
    strokeWidth: 2,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4 shrink-0" aria-hidden="true">
      {kind === 'trend' && <path d="M3 14l4.5-4.5 3.5 3L17 6" {...common} />}
      {kind === 'check' && <path d="M4 10.5l4 4L16 6" {...common} />}
      {kind === 'arrow' && <path d="M10 16V5M5.5 9.5L10 5l4.5 4.5" {...common} />}
    </svg>
  );
}
