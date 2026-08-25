import type { ReactNode } from 'react';
import FadeUp from './FadeUp';

type SectionProps = {
  children: ReactNode;
  id?: string;
  tone?: 'light' | 'tint' | 'dark';
  className?: string;
};

const tones = {
  light: 'bg-white',
  tint: 'bg-accent-50',
  dark: 'on-dark bg-ink-900 text-white/70',
};

export default function Section({
  children,
  id,
  tone = 'light',
  className = '',
}: SectionProps) {
  return (
    <section id={id} className={`${tones[tone]} py-16 md:py-24 ${className}`}>
      <div className="container-x">{children}</div>
    </section>
  );
}

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: 'left' | 'center';
  tone?: 'light' | 'dark';
};

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'left',
  tone = 'light',
}: SectionHeadingProps) {
  return (
    <FadeUp
      className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}
    >
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2
        className={`text-[1.75rem] leading-tight sm:text-[2.1rem] ${
          tone === 'dark' ? '!text-white' : ''
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-5 text-[1.02rem] leading-[1.75] ${
            tone === 'dark' ? 'text-white/65' : 'text-ink-600'
          }`}
        >
          {intro}
        </p>
      )}
    </FadeUp>
  );
}
