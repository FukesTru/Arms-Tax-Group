'use client';

import { useState } from 'react';
import FadeUp from './FadeUp';

export type FaqItem = { question: string; answer: string };

/**
 * Accordion FAQ. Pairs with faqSchema() on the same page — keep the questions
 * and answers passed here identical to the ones fed into the JSON-LD.
 */
export default function FAQ({
  faqs,
  title = 'Frequently Asked Questions',
  intro,
}: {
  faqs: FaqItem[];
  title?: string;
  intro?: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <FadeUp>
            <p className="eyebrow mb-3">FAQ</p>
            <h2 className="text-[1.75rem] leading-tight sm:text-[2.1rem]">
              {title}
            </h2>
            {intro && (
              <p className="mt-5 text-[1.02rem] leading-[1.75] text-ink-600">
                {intro}
              </p>
            )}
          </FadeUp>

          <FadeUp delay={0.08}>
            <ul className="divide-y divide-ink-900/10 border-y border-ink-900/10">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <li key={faq.question}>
                    <h3>
                      <button
                        type="button"
                        className="flex w-full items-start justify-between gap-6 py-5 text-left"
                        aria-expanded={isOpen}
                        aria-controls={`faq-panel-${index}`}
                        id={`faq-button-${index}`}
                        onClick={() => setOpenIndex(isOpen ? null : index)}
                      >
                        <span className="font-display text-[1.02rem] font-semibold leading-snug text-ink-900">
                          {faq.question}
                        </span>
                        <span
                          className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-colors ${
                            isOpen ? 'bg-accent text-white' : 'bg-accent-50 text-accent'
                          }`}
                          aria-hidden="true"
                        >
                          <svg
                            viewBox="0 0 14 14"
                            className="h-3 w-3"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2.2}
                            strokeLinecap="round"
                          >
                            <path d="M2 7h10" />
                            {!isOpen && <path d="M7 2v10" />}
                          </svg>
                        </span>
                      </button>
                    </h3>
                    <div
                      id={`faq-panel-${index}`}
                      role="region"
                      aria-labelledby={`faq-button-${index}`}
                      hidden={!isOpen}
                      className="pb-6 pr-12"
                    >
                      <p className="text-[0.98rem] leading-[1.75] text-ink-600">
                        {faq.answer}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
