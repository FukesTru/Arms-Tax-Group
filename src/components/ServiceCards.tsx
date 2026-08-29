import Link from 'next/link';
import { images } from '@/lib/images';
import type { ServiceCategory, ServiceLink } from '@/lib/services';
import SiteImage from './SiteImage';
import FadeUp from './FadeUp';
import Icon from './Icon';

/**
 * Category cards used on the homepage and the services hub.
 *
 * Two or more categories stack as vertical cards side by side. A single
 * category turns the card on its side instead — artwork panel left, service
 * list right — so it fills the section. Centring one narrow vertical card in a
 * full-width slot left the row looking half empty.
 */
export function CategoryCards({ categories }: { categories: ServiceCategory[] }) {
  const solo = categories.length === 1;

  return (
    <div className={solo ? '' : 'grid gap-6 lg:grid-cols-2'}>
      {categories.map((category, index) => (
        <FadeUp
          as="article"
          key={category.key}
          delay={index * 0.1}
          className={`group overflow-hidden rounded-2xl border border-ink-900/10 bg-white shadow-card transition-shadow duration-300 hover:shadow-card-hover ${
            solo ? 'flex flex-col lg:grid lg:grid-cols-[0.95fr_1.05fr]' : 'flex flex-col'
          }`}
        >
          <div className="relative overflow-hidden bg-ink-900">
            {/* Artwork sits behind the card header. Swap the manifest entry
                for a photograph and this becomes a photo card. */}
            <SiteImage
              asset={images.taxAccounting}
              className="absolute inset-0 h-full w-full object-cover opacity-90"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/80 to-ink-900/25"
              aria-hidden="true"
            />
            <div
              className={`relative px-7 pb-9 pt-40 ${
                solo ? 'lg:flex lg:h-full lg:flex-col lg:justify-end lg:px-9 lg:pb-11 lg:pt-14' : ''
              }`}
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent text-white">
                <Icon name={category.services[0].icon} className="h-5 w-5" />
              </span>
              <h3
                className={`mt-5 !text-white leading-snug ${
                  solo ? 'text-[1.35rem] lg:text-[1.7rem]' : 'text-[1.35rem]'
                }`}
              >
                {category.title}
              </h3>
              <p
                className={`mt-3 leading-relaxed text-white/70 ${
                  solo ? 'text-[0.96rem] lg:max-w-sm lg:text-[1.02rem]' : 'text-[0.96rem]'
                }`}
              >
                {category.blurb}
              </p>
            </div>
          </div>

          <div className={`flex flex-1 flex-col p-7 ${solo ? 'lg:p-9' : ''}`}>
            <ul className={`flex-1 ${solo ? 'divide-y divide-ink-900/[0.07]' : 'space-y-3'}`}>
              {category.services.map((service) => (
                <li key={service.href} className={solo ? 'py-3.5 first:pt-0 last:pb-0' : ''}>
                  <Link
                    href={service.href}
                    className={`group/item flex gap-3 text-ink-700 transition-colors hover:text-accent ${
                      solo ? 'items-start' : 'items-center'
                    }`}
                  >
                    <svg
                      viewBox="0 0 16 16"
                      className={`h-3.5 w-3.5 shrink-0 text-accent ${solo ? 'mt-[0.42rem]' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="m3 8.5 3.2 3.2L13 5" />
                    </svg>
                    {/* The solo layout has a full column to fill, so each
                        service carries its blurb. Two side-by-side cards do
                        not, and the blurbs would overflow them. */}
                    {solo ? (
                      <span>
                        <span className="block font-medium text-[0.96rem] leading-snug lg:text-[1.02rem]">
                          {service.title}
                        </span>
                        <span className="mt-1 block text-[0.9rem] leading-relaxed text-ink-600">
                          {service.blurb}
                        </span>
                      </span>
                    ) : (
                      <span className="font-medium text-[0.96rem]">{service.title}</span>
                    )}
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
