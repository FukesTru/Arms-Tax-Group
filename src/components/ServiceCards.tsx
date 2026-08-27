import Link from 'next/link';
import type { ServiceCategory, ServiceLink } from '@/lib/services';
import FadeUp from './FadeUp';
import Icon from './Icon';

/** The two big side-by-side category cards used on the homepage and hub. */
export function CategoryCards({ categories }: { categories: ServiceCategory[] }) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {categories.map((category, index) => (
        <FadeUp
          as="article"
          key={category.key}
          delay={index * 0.1}
          className="group flex flex-col overflow-hidden rounded-2xl border border-ink-900/10 bg-white shadow-card transition-shadow duration-300 hover:shadow-card-hover"
        >
          <div className="relative overflow-hidden bg-ink-900 px-7 py-9">
            <div
              className="pointer-events-none absolute inset-0 opacity-60"
              style={{
                backgroundImage:
                  'radial-gradient(ellipse 70% 90% at 90% 10%, rgba(168,30,60,0.35), transparent 65%)',
              }}
              aria-hidden="true"
            />
            <div className="relative">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent text-white">
                <Icon name={category.services[0].icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-5 !text-white text-[1.35rem] leading-snug">
                {category.title}
              </h3>
              <p className="mt-3 text-[0.96rem] leading-relaxed text-white/65">
                {category.blurb}
              </p>
            </div>
          </div>

          <div className="flex flex-1 flex-col p-7">
            <ul className="flex-1 space-y-3">
              {category.services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="flex items-center gap-3 text-[0.96rem] font-medium text-ink-700 transition-colors hover:text-accent"
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
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href={category.href}
              className="mt-7 inline-flex items-center gap-2 font-display text-[0.92rem] font-bold text-accent transition-colors hover:text-accent-600"
            >
              Explore {category.shortTitle}
              <span
                className="transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              >
                →
              </span>
            </Link>
          </div>
        </FadeUp>
      ))}
    </div>
  );
}

/** Compact grid of sub-service cards, used on the two category pages. */
export function SubServiceGrid({ services }: { services: ServiceLink[] }) {
  return (
    <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => (
        <FadeUp as="li" key={service.href} delay={index * 0.06}>
          <Link
            href={service.href}
            className="group flex h-full flex-col rounded-xl border border-ink-900/10 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-card-hover"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent-50 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
              <Icon name={service.icon} className="h-5 w-5" />
            </span>
            <h3 className="mt-5 font-display text-[1.08rem] font-bold leading-snug">
              {service.title}
            </h3>
            <p className="mt-2.5 flex-1 text-[0.94rem] leading-relaxed text-ink-600">
              {service.blurb}
            </p>
            <span className="mt-5 inline-flex items-center gap-2 font-display text-[0.88rem] font-bold text-accent">
              Learn more
              <span
                className="transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              >
                →
              </span>
            </span>
          </Link>
        </FadeUp>
      ))}
    </ul>
  );
}

/** "Related services" row used at the bottom of every sub-service page. */
export function RelatedServices({
  services,
  title = 'Related Services',
}: {
  services: ServiceLink[];
  title?: string;
}) {
  return (
    <section className="border-t border-ink-900/10 bg-white py-16 md:py-20">
      <div className="container-x">
        <FadeUp>
          <p className="eyebrow mb-3">Keep Exploring</p>
          <h2 className="text-[1.6rem] leading-tight sm:text-[1.9rem]">{title}</h2>
        </FadeUp>
        <div className="mt-9">
          <SubServiceGrid services={services} />
        </div>
      </div>
    </section>
  );
}
