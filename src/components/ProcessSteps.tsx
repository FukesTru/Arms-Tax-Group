import FadeUp from './FadeUp';
import { SectionHeading } from './Section';

export type ProcessStep = { title: string; body: string };

export default function ProcessSteps({
  steps,
  eyebrow = 'How We Work',
  title = 'A clear process, start to finish',
  intro,
  tone = 'tint',
}: {
  steps: ProcessStep[];
  eyebrow?: string;
  title?: string;
  intro?: string;
  tone?: 'light' | 'tint' | 'dark';
}) {
  const isDark = tone === 'dark';
  const background =
    tone === 'dark' ? 'on-dark bg-ink-900' : tone === 'tint' ? 'bg-accent-50' : 'bg-white';

  return (
    <section className={`${background} py-16 md:py-24`}>
      <div className="container-x">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          intro={intro}
          tone={isDark ? 'dark' : 'light'}
        />

        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <FadeUp
              as="li"
              key={step.title}
              delay={index * 0.07}
              className={`relative rounded-xl border p-6 ${
                isDark
                  ? 'border-white/10 bg-white/[0.03]'
                  : 'border-ink-900/10 bg-white shadow-card'
              }`}
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent font-display text-[0.95rem] font-bold text-white">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3
                className={`mt-5 font-display text-[1.05rem] font-bold leading-snug ${
                  isDark ? '!text-white' : ''
                }`}
              >
                {step.title}
              </h3>
              <p
                className={`mt-2.5 text-[0.94rem] leading-relaxed ${
                  isDark ? 'text-white/65' : 'text-ink-600'
                }`}
              >
                {step.body}
              </p>
            </FadeUp>
          ))}
        </ol>
      </div>
    </section>
  );
}
