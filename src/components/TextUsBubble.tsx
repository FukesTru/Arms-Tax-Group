'use client';

import { useEffect, useState } from 'react';
import { site } from '@/lib/site';

/**
 * Floating "Text Us" bubble, routed to the client's SMS line.
 *
 * Sits bottom-LEFT: the LeadConnector chat widget renders its own launcher
 * bottom-right, and two stacked bubbles in the same corner would overlap.
 * Appears after a short scroll so it never covers the hero CTAs.
 */
export default function TextUsBubble() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href={site.text.href}
      className={`fixed bottom-5 left-5 z-40 flex items-center gap-2.5 rounded-full bg-accent py-3.5 pl-4 pr-5 font-display text-[0.9rem] font-bold text-white shadow-card-hover transition-all duration-300 hover:bg-accent-600 ${
        visible
          ? 'translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-4 opacity-0'
      }`}
      aria-label={`Text us at ${site.text.display}`}
    >
      <svg
        viewBox="0 0 20 20"
        className="h-[1.125rem] w-[1.125rem]"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.7}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M17 10.5c0 3.3-3.1 6-7 6a8 8 0 0 1-2.2-.3L3.5 17.5l1.2-3A5.7 5.7 0 0 1 3 10.5c0-3.3 3.1-6 7-6s7 2.7 7 6Z" />
      </svg>
      Text Us
    </a>
  );
}
