import Link from 'next/link';
import type { ReactNode } from 'react';
import type { SiteImageAsset } from '@/lib/images';
import { site } from '@/lib/site';
import SavingsEstimator from './SavingsEstimator';
import SiteImage from './SiteImage';
import Breadcrumbs, { type Crumb } from './Breadcrumbs';
import FadeUp from './FadeUp';

type HeroProps = {
  eyebrow?: string;
  title: ReactNode;
  subtitle: string;
  /** Short trust points shown beneath the subheadline. Never ratings. */
  trustPoints?: string[];
  breadcrumbs?: Crumb[];
  primaryCta?: { label: string; href: string };
  /** Taller treatment reserved for the homepage. */
  size?: 'default' | 'large';
  /**
   * Optional artwork shown beside the copy on large screens. Hidden below
   * lg so it never competes with the headline on a phone.
   */
  image?: SiteImageAsset;
  /** 'estimator' swaps the artwork for the interactive savings estimator. */
  visual?: 'image' | 'estimator';
};

export default function Hero({
  eyebrow,
  title,
  subtitle,
  trustPoints,
  breadcrumbs,
  primaryCta = { label: 'Get a Free Consultation', href: '/contact' },
  size = 'default',
  image,
  visual = 'image',
}: HeroProps) {
  return (
    <section
      className={`on-dark relative overflow-hidden bg-ink-900 bg-hero-grain ${
        size === 'large' ? 'pb-20 pt-36 md:pb-28 md:pt-44' : 'pb-16 pt-32 md:pb-20 md:pt-40'
      }`}
    >
      {/* Decorative grid wash */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 70% 70% at 50% 0%, #000, transparent)',
          WebkitMaskImage:
            'radial-gradient(ellipse 70% 70% at 50% 0%, #000, transparent)',
        }}
        aria-hidden="true"
      />

      <div className="container-x relative">
        {breadcrumbs && <Breadcrumbs trail={breadcrumbs} />}

        <div
          className={
            image || visual === 'estimator'
              ? 'grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12'
              : ''
          }
        >
        <FadeUp
          immediate
          className={
            image || visual === 'estimator'
              ? ''
              : size === 'large'
                ? 'max-w-4xl'
                : 'max-w-3xl'
          }
        >
          {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}

          <h1
            className={`text-white ${
              size === 'large'
                ? 'text-[2.1rem] leading-[1.12] sm:text-5xl lg:text-[3.4rem]'
                : 'text-[1.95rem] leading-[1.15] sm:text-4xl lg:text-[3rem]'
            }`}
          >
            {title}
          </h1>

          <span className="accent-rule" aria-hidden="true" />

          <p className="mt-7 max-w-2xl text-[1.05rem] leading-[1.7] text-white/70 md:text-[1.12rem]">
            {subtitle}
          </p>

          {trustPoints && trustPoints.length > 0 && (
            <ul className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2.5">
              {trustPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] py-2 pl-3 pr-4 font-display text-[0.82rem] font-semibold text-white/85"
                >
                  <svg
                    viewBox="0 0 16 16"
                    className="h-3.5 w-3.5 shrink-0 text-accent"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="m3 8.5 3.2 3.2L13 5" />
                  </svg>
                  {point}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href={primaryCta.href} className="btn-primary">
              {primaryCta.label}
            </Link>
            <a href={site.phone.href} className="btn-outline-light">
              <svg
                viewBox="0 0 20 20"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.7}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M4.5 3h3l1.5 3.8-1.9 1.4a10.5 10.5 0 0 0 4.7 4.7l1.4-1.9L17 12.5v3a1.5 1.5 0 0 1-1.6 1.5A13.5 13.5 0 0 1 3 4.6 1.5 1.5 0 0 1 4.5 3Z" />
              </svg>
              Call {site.phone.display}
            </a>
          </div>
        </FadeUp>

        {visual === 'estimator' ? (
          /* Stacks below the copy on small screens rather than hiding. */
          <FadeUp immediate className="w-full max-w-[520px] self-center lg:mt-0">
            <SavingsEstimator />
          </FadeUp>
        ) : (
          image && (
            <FadeUp immediate className="hidden lg:block">
              <SiteImage
                asset={image}
                priority
                className="h-auto w-full"
                sizes="(min-width: 1024px) 45vw, 0px"
              />
            </FadeUp>
          )
        )}
        </div>
      </div>
    </section>
  );
}
