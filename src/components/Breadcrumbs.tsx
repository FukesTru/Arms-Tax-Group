import Link from 'next/link';

export type Crumb = { name: string; href: string };

/** Visual breadcrumb trail. The matching BreadcrumbList JSON-LD is emitted
 *  separately by each page via breadcrumbSchema(). */
export default function Breadcrumbs({ trail }: { trail: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.82rem] text-white/50">
        {trail.map((crumb, index) => {
          const isLast = index === trail.length - 1;
          return (
            <li key={crumb.href} className="flex items-center gap-2">
              {isLast ? (
                <span aria-current="page" className="text-white/80">
                  {crumb.name}
                </span>
              ) : (
                <>
                  <Link
                    href={crumb.href}
                    className="transition-colors hover:text-accent"
                  >
                    {crumb.name}
                  </Link>
                  <span aria-hidden="true" className="text-white/25">
                    /
                  </span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
