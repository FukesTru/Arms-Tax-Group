'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';
import { locations } from '@/content/locations';
import { categories, whoWeServeLinks } from '@/lib/services';
import { site } from '@/lib/site';
import Icon from './Icon';
import Logo from './Logo';

type OpenMenu = 'services' | 'who' | null;

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<OpenMenu>(null);
  /** The taxonomy carries one category today; the menu adapts rather than
      hard-coding it, so adding a second back needs no layout work. */
  const soloCategory = categories.length === 1;
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Transparent over the hero, solid once the user scrolls past it.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close every menu on navigation.
  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
  }, [pathname]);

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      setOpenMenu(null);
      setMobileOpen(false);
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!navRef.current?.contains(event.target as Node)) setOpenMenu(null);
    };
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onPointerDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('pointerdown', onPointerDown);
    };
  }, []);

  const openWithHover = useCallback((menu: OpenMenu) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(menu);
  }, []);

  const closeWithDelay = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenu(null), 140);
  }, []);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  // The header is a solid light bar rather than transparent-over-hero. The
  // client's logo is black lettering on a light ground, so a dark bar forced
  // it onto a white chip that read as a sticker; on a light bar it sits
  // natively. Scroll only deepens the shadow now.
  const lifted = scrolled || mobileOpen || openMenu !== null;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b bg-white transition-shadow duration-300 ${
        lifted
          ? 'border-ink-900/10 shadow-[0_2px_16px_rgba(16,6,11,0.10)]'
          : 'border-ink-900/[0.07]'
      }`}
    >
      <a
        href="#main"
        className="sr-only rounded-md bg-accent px-4 py-2 font-display text-sm font-bold text-white focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-10"
      >
        Skip to content
      </a>

      <div ref={navRef} className="container-x">
        <div className="flex h-20 items-center justify-between gap-6">
          <Link
            href="/"
            className="shrink-0"
            aria-label={`${site.brandName}. Home`}
          >
            <Logo variant="onLight" size={58} priority />
          </Link>

          {/* Desktop navigation */}
          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="Main navigation"
          >
            <Link
              href="/"
              className={`rounded-md px-3.5 py-2 font-display text-[0.94rem] font-semibold transition-colors ${
                isActive('/') ? 'text-accent' : 'text-ink-700 hover:text-ink-900'
              }`}
            >
              Home
            </Link>

            <div
              className="relative"
              onMouseEnter={() => openWithHover('services')}
              onMouseLeave={closeWithDelay}
            >
              <button
                type="button"
                className={`flex items-center gap-1.5 rounded-md px-3.5 py-2 font-display text-[0.94rem] font-semibold transition-colors ${
                  isActive('/services')
                    ? 'text-accent'
                    : 'text-ink-700 hover:text-ink-900'
                }`}
                aria-expanded={openMenu === 'services'}
                aria-haspopup="true"
                onClick={() =>
                  setOpenMenu(openMenu === 'services' ? null : 'services')
                }
              >
                Services
                <Chevron open={openMenu === 'services'} />
              </button>

              {openMenu === 'services' && (
                /*
                  With two categories the panel is a column each. With one it
                  would otherwise render a single column in a 46rem box, half
                  of it empty, so the panel narrows and the services themselves
                  take the two columns instead.
                */
                <div
                  className={`absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 ${
                    soloCategory ? 'w-[min(38rem,90vw)]' : 'w-[min(46rem,90vw)]'
                  }`}
                >
                  <div
                    className={`gap-x-6 gap-y-1 rounded-xl border border-ink-900/10 bg-white p-5 shadow-card-hover ${
                      soloCategory ? 'block' : 'grid grid-cols-2'
                    }`}
                  >
                    {categories.map((category) => (
                      <div key={category.key}>
                        <Link
                          href={category.href}
                          className="group mb-2 flex items-baseline justify-between gap-2 border-b border-ink-900/10 pb-2"
                        >
                          <span className="font-display text-[0.78rem] font-bold uppercase tracking-[0.14em] text-accent">
                            {category.title}
                          </span>
                          <span className="font-display text-xs font-semibold text-ink-600 opacity-0 transition-opacity group-hover:opacity-100">
                            View all →
                          </span>
                        </Link>
                        <ul className={soloCategory ? 'grid sm:grid-cols-2' : ''}>
                          {category.services.map((service) => (
                            <li key={service.href}>
                              <Link
                                href={service.href}
                                className="group flex items-start gap-3 rounded-lg px-2 py-2.5 transition-colors hover:bg-accent-50"
                              >
                                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-accent-50 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                                  <Icon name={service.icon} className="h-4 w-4" />
                                </span>
                                <span>
                                  <span className="block font-display text-[0.9rem] font-semibold leading-snug text-ink-900">
                                    {service.title}
                                  </span>
                                  <span className="mt-0.5 block text-[0.8rem] leading-snug text-ink-600">
                                    {service.blurb}
                                  </span>
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => openWithHover('who')}
              onMouseLeave={closeWithDelay}
            >
              <button
                type="button"
                className={`flex items-center gap-1.5 rounded-md px-3.5 py-2 font-display text-[0.94rem] font-semibold transition-colors ${
                  isActive('/who-we-serve')
                    ? 'text-accent'
                    : 'text-ink-700 hover:text-ink-900'
                }`}
                aria-expanded={openMenu === 'who'}
                aria-haspopup="true"
                onClick={() => setOpenMenu(openMenu === 'who' ? null : 'who')}
              >
                Who We Serve
                <Chevron open={openMenu === 'who'} />
              </button>

              {openMenu === 'who' && (
                /*
                  Two columns: how we work on the left, where we work on the
                  right. Twelve entries in the old single 22rem column would
                  have run most of the way down the viewport.
                */
                <div className="absolute left-1/2 top-full z-50 w-[min(42rem,92vw)] -translate-x-1/2 pt-3">
                  <div className="grid grid-cols-[1.05fr_1fr] gap-x-5 rounded-xl border border-ink-900/10 bg-white p-4 shadow-card-hover">
                    <ul>
                      {whoWeServeLinks.map((link) => (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            className="block rounded-lg px-3 py-3 transition-colors hover:bg-accent-50"
                          >
                            <span className="block font-display text-[0.92rem] font-semibold text-ink-900">
                              {link.title}
                            </span>
                            <span className="mt-0.5 block text-[0.82rem] leading-snug text-ink-600">
                              {link.blurb}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>

                    <div className="border-l border-ink-900/10 pl-5">
                      <p className="mb-2 px-2 font-display text-[0.72rem] font-bold uppercase tracking-[0.14em] text-accent">
                        Westchester County
                      </p>
                      <ul className="grid grid-cols-2 gap-x-2">
                        {locations.map((location) => (
                          <li key={location.slug}>
                            <Link
                              href={`/who-we-serve/${location.slug}`}
                              className="block rounded-lg px-2 py-1.5 font-display text-[0.85rem] font-medium leading-snug text-ink-700 transition-colors hover:bg-accent-50 hover:text-accent"
                            >
                              {location.city}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/about"
              className={`rounded-md px-3.5 py-2 font-display text-[0.94rem] font-semibold transition-colors ${
                isActive('/about') ? 'text-accent' : 'text-ink-700 hover:text-ink-900'
              }`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`rounded-md px-3.5 py-2 font-display text-[0.94rem] font-semibold transition-colors ${
                isActive('/contact')
                  ? 'text-accent'
                  : 'text-ink-700 hover:text-ink-900'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop calls to action */}
          <div className="hidden items-center gap-4 lg:flex">
            <a
              href={site.phone.href}
              className="font-display text-[0.94rem] font-bold text-ink-900 transition-colors hover:text-accent"
            >
              {site.phone.display}
            </a>
            <Link href="/contact" className="btn-primary !px-5 !py-2.5 !text-sm">
              Get a Free Consultation
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-lg text-ink-900 lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileOpen((open) => !open)}
          >
            <span className="relative block h-4 w-6">
              <span
                className={`absolute left-0 block h-0.5 w-6 bg-current transition-transform duration-200 ${
                  mobileOpen ? 'top-1.5 rotate-45' : 'top-0'
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 block h-0.5 w-6 bg-current transition-opacity duration-200 ${
                  mobileOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute left-0 block h-0.5 w-6 bg-current transition-transform duration-200 ${
                  mobileOpen ? 'top-1.5 -rotate-45' : 'top-3'
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="max-h-[calc(100dvh-5rem)] overflow-y-auto border-t border-ink-900/10 bg-white pb-8 lg:hidden"
        >
          <nav className="container-x pt-5" aria-label="Mobile navigation">
            <Link
              href="/"
              className="mb-5 block border-b border-ink-900/10 pb-4 font-display text-base font-semibold text-ink-900"
            >
              Home
            </Link>

            {categories.map((category) => (
              <div key={category.key} className="mb-6">
                <Link
                  href={category.href}
                  className="mb-2 block font-display text-xs font-bold uppercase tracking-[0.14em] text-accent"
                >
                  {category.title}
                </Link>
                <ul className="space-y-0.5">
                  {category.services.map((service) => (
                    <li key={service.href}>
                      <Link
                        href={service.href}
                        className="flex items-center gap-3 rounded-lg py-2.5 text-[0.95rem] font-medium text-ink-700"
                      >
                        <Icon
                          name={service.icon}
                          className="h-4 w-4 shrink-0 text-accent"
                        />
                        {service.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="mb-6">
              <p className="mb-2 font-display text-xs font-bold uppercase tracking-[0.14em] text-accent">
                Who We Serve
              </p>
              <ul className="space-y-0.5">
                {whoWeServeLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="block rounded-lg py-2.5 text-[0.95rem] font-medium text-ink-700"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>

              <p className="mb-1 mt-3 font-display text-[0.7rem] font-bold uppercase tracking-[0.14em] text-ink-600">
                Westchester County
              </p>
              <ul className="grid grid-cols-2 gap-x-3">
                {locations.map((location) => (
                  <li key={location.slug}>
                    <Link
                      href={`/who-we-serve/${location.slug}`}
                      className="block rounded-lg py-2 text-[0.9rem] font-medium text-ink-700"
                    >
                      {location.city}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <ul className="mb-7 space-y-0.5 border-t border-ink-900/10 pt-4">
              <li>
                <Link
                  href="/about"
                  className="block py-2.5 font-display text-base font-semibold text-ink-900"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block py-2.5 font-display text-base font-semibold text-ink-900"
                >
                  Contact
                </Link>
              </li>
            </ul>

            <div className="space-y-3">
              <Link href="/contact" className="btn-primary w-full">
                Get a Free Consultation
              </Link>
              <a href={site.phone.href} className="btn-outline-dark w-full">
                Call {site.phone.display}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 12 12"
      className={`h-3 w-3 transition-transform duration-200 ${
        open ? 'rotate-180' : ''
      }`}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M2.5 4.5 6 8l3.5-3.5" />
    </svg>
  );
}
