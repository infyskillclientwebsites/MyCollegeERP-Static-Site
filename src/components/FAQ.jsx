import { useState } from 'react';
import { HelpCircle, Plus, Minus } from 'lucide-react';
import { FAQS } from '../data/content.js';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="section bg-brand-bg">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-tag">
            <HelpCircle className="h-3.5 w-3.5" />
            Common questions
          </span>
          <h2 className="heading-section mt-4 text-balance">
            Questions, answered
          </h2>
          <p className="mt-4 text-base text-navy-600">
            Everything you need to know before you book a demo. Don’t see
            your question? Email us — we respond within 1 business hour.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={faq.q}
                className={`overflow-hidden rounded-2xl border bg-white transition ${
                  isOpen
                    ? 'border-brand-blue/30 shadow-card'
                    : 'border-navy-100'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-navy-50/50"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base font-bold text-navy-900 sm:text-lg">
                    {faq.q}
                  </span>
                  <span
                    className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full transition ${
                      isOpen
                        ? 'bg-brand-blue text-white'
                        : 'bg-navy-100 text-navy-600'
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="h-4 w-4" />
                    ) : (
                      <Plus className="h-4 w-4" />
                    )}
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-navy-600">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
