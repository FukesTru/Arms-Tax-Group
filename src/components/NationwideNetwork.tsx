'use client';

import { useEffect, useRef } from 'react';
import { usePrefersReducedMotion } from '@/lib/usePrefersReducedMotion';

/**
 * The "practice without borders" network graphic on the homepage.
 *
 * Was a static /images/nationwide.svg rendered through SiteImage. It is a
 * component now so the nodes can drift and the edges can follow them, which a
 * flat <img> cannot do.
 *
 * HOW THE MOTION WORKS
 * Each node drifts along a Lissajous figure: two sine waves at frequencies
 * that are not simple multiples of each other, so the path never closes into
 * an obvious loop and never reads as mechanical. Amplitudes are 5 to 9 user
 * units against an 800-unit viewBox, which lands around 6 to 11 screen pixels
 * at the size this renders. Periods run 15 to 23 seconds. Every node carries
 * its own frequency pair and phase offsets, so nothing moves in step.
 *
 * PERFORMANCE
 * One rAF loop for the whole graphic, writing straight to DOM nodes through
 * refs. React never re-renders, so there is no reconciliation per frame and no
 * state churn. Dots move by `transform`, which composites rather than
 * invalidating geometry. Line endpoints have to be attributes, since an SVG
 * line cannot follow a transformed sibling, but those are SVG geometry
 * properties: they repaint inside the SVG and do not trigger document layout.
 * Per-frame allocation is zero, the scratch array is reused. An
 * IntersectionObserver stops the loop whenever the graphic is off screen.
 *
 * ACCESSIBILITY
 * Under prefers-reduced-motion the loop never starts and every element renders
 * at its base position, which is the original static artwork exactly.
 */

const VIEW = { w: 800, h: 500 };
const CENTER = { x: 400, y: 250 };

type Node = {
  x: number;
  y: number;
  /** Dot radius, and fill opacity. Larger nodes read as the primary network. */
  r: number;
  o: number;
  /** Drift amplitudes, in user units. */
  ax: number;
  ay: number;
  /** Angular frequencies, rad/s. Deliberately not round multiples. */
  fx: number;
  fy: number;
  /** Phase offsets, so no two nodes start together. */
  px: number;
  py: number;
};

/**
 * Positions carried over from the original artwork so the composition is
 * unchanged. Indices 0-4 are the primary nodes, 5-7 the smaller ones.
 */
const NODES: Node[] = [
  { x: 170, y: 330, r: 7, o: 0.85, ax: 7, ay: 6, fx: 0.331, fy: 0.274, px: 0.0, py: 1.9 },
  { x: 300, y: 180, r: 7, o: 0.85, ax: 6, ay: 8, fx: 0.287, fy: 0.352, px: 2.3, py: 0.6 },
  { x: 430, y: 300, r: 7, o: 0.85, ax: 8, ay: 5, fx: 0.368, fy: 0.301, px: 4.1, py: 3.3 },
  { x: 560, y: 140, r: 7, o: 0.85, ax: 5, ay: 7, fx: 0.302, fy: 0.263, px: 1.2, py: 5.0 },
  { x: 680, y: 240, r: 7, o: 0.85, ax: 9, ay: 6, fx: 0.256, fy: 0.339, px: 5.4, py: 2.1 },
  { x: 120, y: 200, r: 5, o: 0.55, ax: 6, ay: 5, fx: 0.313, fy: 0.288, px: 3.0, py: 4.4 },
  { x: 720, y: 380, r: 5, o: 0.55, ax: 5, ay: 7, fx: 0.344, fy: 0.271, px: 0.8, py: 2.7 },
  { x: 500, y: 400, r: 5, o: 0.55, ax: 7, ay: 5, fx: 0.279, fy: 0.322, px: 4.7, py: 1.4 },
];

/** Edges as node-index pairs, so a line can never drift off its endpoints. */
const EDGES: [number, number][] = [
  [0, 1], [1, 2], [2, 3], [3, 4],
  [0, 2], [2, 4],
  [1, 3],
  [5, 1], [5, 0],
  [4, 6], [2, 7], [7, 6],
];

/** Pulse rings around the hub: base radius, stroke opacity, phase offset. */
const RINGS = [
  { r: 52, o: 0.5, phase: 0 },
  { r: 78, o: 0.25, phase: 1.15 },
];

const PULSE_PERIOD = 4.6;

export default function NationwideNetwork({ className = '' }: { className?: string }) {
  const reduce = usePrefersReducedMotion();

  const svgRef = useRef<SVGSVGElement>(null);
  const dotRefs = useRef<(SVGCircleElement | null)[]>([]);
  const lineRefs = useRef<(SVGLineElement | null)[]>([]);
  const ringRefs = useRef<(SVGCircleElement | null)[]>([]);
  const coreRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    if (reduce) return;

    const svg = svgRef.current;
    if (!svg) return;

    // Reused every frame so the loop allocates nothing.
    const px = new Float64Array(NODES.length);
    const py = new Float64Array(NODES.length);

    let raf = 0;
    let start = 0;
    let running = false;

    const frame = (now: number) => {
      if (!start) start = now;
      const t = (now - start) / 1000;

      for (let i = 0; i < NODES.length; i++) {
        const n = NODES[i];
        const dx = n.ax * Math.sin(n.fx * t + n.px);
        const dy = n.ay * Math.sin(n.fy * t + n.py);
        px[i] = n.x + dx;
        py[i] = n.y + dy;
        dotRefs.current[i]?.setAttribute('transform', `translate(${dx.toFixed(2)} ${dy.toFixed(2)})`);
      }

      for (let e = 0; e < EDGES.length; e++) {
        const line = lineRefs.current[e];
        if (!line) continue;
        const [a, b] = EDGES[e];
        line.setAttribute('x1', px[a].toFixed(2));
        line.setAttribute('y1', py[a].toFixed(2));
        line.setAttribute('x2', px[b].toFixed(2));
        line.setAttribute('y2', py[b].toFixed(2));
      }

      // Breathing hub. (1 - cos)/2 is sinusoidal, so it eases in and out with
      // no velocity discontinuity at the turn — smoother than a keyframe pair.
      const w = (Math.PI * 2) / PULSE_PERIOD;
      for (let i = 0; i < RINGS.length; i++) {
        const ring = ringRefs.current[i];
        if (!ring) continue;
        const p = (1 - Math.cos(w * t + RINGS[i].phase)) / 2;
        ring.setAttribute('transform', `scale(${(1 + p * 0.075).toFixed(4)})`);
        ring.setAttribute('stroke-opacity', (RINGS[i].o * (1 - p * 0.45)).toFixed(3));
      }
      const corePulse = (1 - Math.cos(w * t)) / 2;
      coreRef.current?.setAttribute('transform', `scale(${(1 + corePulse * 0.04).toFixed(4)})`);

      raf = requestAnimationFrame(frame);
    };

    const play = () => {
      if (running) return;
      running = true;
      // Rebase the clock so the graphic resumes where it paused rather than
      // jumping forward by however long it spent off screen.
      start = 0;
      raf = requestAnimationFrame(frame);
    };

    const pause = () => {
      if (!running) return;
      running = false;
      cancelAnimationFrame(raf);
    };

    const io = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? play() : pause()),
      { rootMargin: '120px' }
    );
    io.observe(svg);

    return () => {
      io.disconnect();
      pause();
    };
  }, [reduce]);

  return (
    <svg
      ref={svgRef}
      viewBox={`0 0 ${VIEW.w} ${VIEW.h}`}
      className={className}
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="A connected network radiating from a central point."
    >
      <defs>
        <linearGradient id="nw-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#171518" />
          <stop offset="100%" stopColor="#0D0B0D" />
        </linearGradient>
        <radialGradient id="nw-glow" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#D8244D" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#D8244D" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width={VIEW.w} height={VIEW.h} fill="url(#nw-bg)" />
      <circle cx={CENTER.x} cy={CENTER.y} r={300} fill="url(#nw-glow)" />

      <g stroke="#FFFFFF" strokeOpacity="0.16" strokeWidth="1.6" fill="none">
        {EDGES.map(([a, b], i) => (
          <line
            key={`${a}-${b}`}
            ref={(el) => {
              lineRefs.current[i] = el;
            }}
            x1={NODES[a].x}
            y1={NODES[a].y}
            x2={NODES[b].x}
            y2={NODES[b].y}
          />
        ))}
      </g>

      {/* Hub. Each pulsing element gets its own transform origin so scaling
          happens about the centre rather than the viewBox corner. */}
      <g>
        <circle
          ref={coreRef}
          cx={CENTER.x}
          cy={CENTER.y}
          r={30}
          fill="#D8244D"
          style={{ transformOrigin: `${CENTER.x}px ${CENTER.y}px` }}
        />
        {RINGS.map((ring, i) => (
          <circle
            key={ring.r}
            ref={(el) => {
              ringRefs.current[i] = el;
            }}
            cx={CENTER.x}
            cy={CENTER.y}
            r={ring.r}
            fill="none"
            stroke="#D8244D"
            strokeOpacity={ring.o}
            strokeWidth="2"
            style={{ transformOrigin: `${CENTER.x}px ${CENTER.y}px` }}
          />
        ))}
      </g>

      <g fill="#FFFFFF">
        {NODES.map((n, i) => (
          <circle
            key={`${n.x}-${n.y}`}
            ref={(el) => {
              dotRefs.current[i] = el;
            }}
            cx={n.x}
            cy={n.y}
            r={n.r}
            fillOpacity={n.o}
          />
        ))}
      </g>
    </svg>
  );
}
