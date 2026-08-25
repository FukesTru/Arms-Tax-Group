import Link from 'next/link';
import { categories, whoWeServeLinks } from '@/lib/services';
import { site } from '@/lib/site';
import Logo from './Logo';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="on-dark bg-ink-900 pt-16 text-white/70">
      <div className="container-x">
        <div className="grid gap-10 pb-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          <div>
            <Link href="/" aria-label={`${site.brandName} — home`}>
              <Logo className="h-10 w-auto text-white" />
            </Link>
            <p className="mt-5 max-w-xs text-[0.92rem] leading-relaxed">
              Tax preparation, IRS resolution, bookkeeping, funding, and credit
              solutions for individuals and businesses. Based in Bronx, NY —
              serving clients nationwide.
            </p>
            <p className="mt-4 font-display text-[0.92rem] font-semibold italic text-accent">
              &ldquo;{site.tagline}&rdquo;
            </p>

            {/*
              Social icon slot — structured but empty. No profiles are set up
              yet. Adding entries to site.social activates this row and the
              sameAs property in the organization schema.
            */}
            {site.social.length > 0 && (
              <ul className="mt-6 flex items-center gap-3">
                {site.social.map((profile) => (
                  <li key={profile.href}>
                    <a
                      href={profile.href}
                      className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 transition-colors hover:border-accent hover:text-accent"
                      aria-label={profile.label}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {profile.label.charAt(0)}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div>
            <h2 className="font-display text-xs font-bold uppercase tracking-[0.16em] text-white">
              Services
            </h2>
            <ul className="mt-5 space-y-2.5">
              {categories.flatMap((category) => category.services).map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-[0.92rem] transition-colors hover:text-accent"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-xs font-bold uppercase tracking-[0.16em] text-white">
              Who We Serve
            </h2>
            <ul className="mt-5 space-y-2.5">
              {whoWeServeLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[0.92rem] transition-colors hover:text-accent"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>

            <h2 className="mt-8 font-display text-xs font-bold uppercase tracking-[0.16em] text-white">
              Company
            </h2>
            <ul className="mt-5 space-y-2.5">
              <li>
                <Link href="/about" className="text-[0.92rem] transition-colors hover:text-accent">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-[0.92rem] transition-colors hover:text-accent">
                  All Services
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-[0.92rem] transition-colors hover:text-accent">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[0.92rem] transition-colors hover:text-accent">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-xs font-bold uppercase tracking-[0.16em] text-white">
              Contact
            </h2>
            <ul className="mt-5 space-y-3.5 text-[0.92rem]">
              <li>
                <address className="not-italic leading-relaxed">
                  {site.address.street}
                  <br />
                  {site.address.city}, {site.address.state} {site.address.zip}
                </address>
              </li>
              <li>
                <a href={site.phone.href} className="transition-colors hover:text-accent">
                  Call {site.phone.display}
                </a>
              </li>
              <li>
                <a href={site.text.href} className="transition-colors hover:text-accent">
                  Text {site.text.display}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="break-all transition-colors hover:text-accent"
                >
                  {site.email}
                </a>
              </li>
              {/* UNCONFIRMED hours — see src/lib/site.ts */}
              <li className="pt-1">
                <span className="block font-display text-[0.78rem] font-bold uppercase tracking-[0.14em] text-white/50">
                  Hours
                </span>
                <span className="mt-1 block">{site.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-7 text-[0.85rem] sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {site.legalName}, DBA {site.brandName}. All rights
            reserved.
          </p>
          <ul className="flex items-center gap-6">
            <li>
              <Link href="/privacy-policy" className="transition-colors hover:text-accent">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="transition-colors hover:text-accent">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
