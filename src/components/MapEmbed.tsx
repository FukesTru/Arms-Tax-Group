import { mapsDirectionsUrl, mapsEmbedSrc, site } from '@/lib/site';

export default function MapEmbed({ className = '' }: { className?: string }) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-ink-900/10 shadow-card ${className}`}
    >
      <iframe
        src={mapsEmbedSrc}
        title={`Map showing ${site.brandName} at ${site.address.full}`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        className="h-[340px] w-full border-0 md:h-full md:min-h-[420px]"
      />
      <a href={mapsDirectionsUrl} className="sr-only" target="_blank" rel="noopener noreferrer">
        Get directions to {site.address.full}
      </a>
    </div>
  );
}
