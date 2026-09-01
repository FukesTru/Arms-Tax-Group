'use client';

import { useEffect, useState } from 'react';

const QUERY = '(prefers-reduced-motion: reduce)';

/**
 * Replaces framer-motion's `useReducedMotion`, which was the only thing two
 * components still imported the library for.
 *
 * Reads synchronously on the client so an animation never gets one frame in
 * before the preference is honoured. That is safe against hydration warnings
 * only because no caller uses this value to change what it renders, just
 * whether it animates afterwards. If you use it to branch markup, initialise
 * it to false instead and accept the extra frame.
 */
export function usePrefersReducedMotion(): boolean {
  const [reduce, setReduce] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(QUERY).matches
  );

  useEffect(() => {
    const mq = window.matchMedia(QUERY);
    setReduce(mq.matches);
    const onChange = (event: MediaQueryListEvent) => setReduce(event.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return reduce;
}
