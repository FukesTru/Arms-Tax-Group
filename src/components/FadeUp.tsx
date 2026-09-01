'use client';

import { useEffect, useRef, useState, type ReactNode, type Ref } from 'react';

type FadeUpProps = {
  children: ReactNode;
  /** Stagger delay in seconds, for grids of cards. */
  delay?: number;
  className?: string;
  as?: 'div' | 'section' | 'li' | 'article' | 'header';
  /**
   * Render visible immediately, with no reveal. For above-the-fold content:
   * there is no scroll to trigger on, and fading in the largest contentful
   * element just delays LCP by the length of the transition.
   */
  immediate?: boolean;
};

/**
 * Scroll-triggered fade-up. Used on nearly every section for a consistent feel.
 *
 * This was framer-motion's `whileInView`. That pulled the whole animation
 * library into all 24 pages for one opacity-and-translate transition: about
 * 40KB of JavaScript, 23KB of it unused, plus parse and evaluation cost on
 * every route. An IntersectionObserver and a CSS transition do the same job
 * with no dependency and no per-frame JavaScript, and the browser composites
 * the transition off the main thread.
 *
 * The visual result is deliberately identical: 24px rise, 0.55s, the same
 * cubic-bezier, fires once, with the same -80px viewport margin.
 *
 * Reduced motion and the no-JavaScript case are both handled in CSS (see
 * globals.css and the noscript block in layout.tsx), so content is never left
 * invisible if the observer never runs.
 */
export default function FadeUp({
  children,
  delay = 0,
  className,
  as: Tag = 'div',
  immediate = false,
}: FadeUpProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(immediate);

  useEffect(() => {
    const node = ref.current;
    if (!node || shown) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setShown(true);
        observer.disconnect();
      },
      // Matches the viewport margin the old implementation used.
      { rootMargin: '-80px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [shown]);

  return (
    <Tag
      // One cast: every tag this accepts is an HTMLElement, but a dynamic tag
      // name gives TypeScript the union of their individual ref types.
      ref={ref as Ref<never>}
      className={`fade-up${shown ? ' is-visible' : ''}${className ? ` ${className}` : ''}`}
      style={delay && !immediate ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </Tag>
  );
}
