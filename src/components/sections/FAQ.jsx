import { useState } from 'react';
import { HelpCircle, Plus, Minus } from 'lucide-react';
import { FAQS } from '../../data/content.js';
import ScrollReveal from '../ui/ScrollReveal.jsx';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="section bg-brand-bg">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal variant="fade">
            <span className="section-tag">
              <HelpCircle className="h-3.5 w-3.5" />
              Common questions
            </span>
          </ScrollReveal>
          <ScrollReveal variant="up" delay={80}>
            <h2 className="heading-section mt-5">
              Questions, <span className="text-gradient">answered</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal variant="up" delay={160}>
            <p className="lead mt-5">
              Everything you need to know before you book a demo. Don't see
              your question? Email us — we respond within 1 business hour.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal variant="up" delay={200}>
          <div className="mx-auto mt-14 max-w-3xl space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={faq.q}
                  className={`overflow-hidden rounded-2xl border bg-white transition ${
                    isOpen
                      ? 'border-brand-blue/40 shadow-card'
                      : 'border-navy-100 hover:border-navy-200'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition hover:bg-navy-50/50"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-lg font-bold text-navy-900 sm:text-xl">
                      {faq.q}
                    </span>
                    <span
                      className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full transition ${
                        isOpen
                          ? 'bg-gradient-to-br from-brand-blue to-brand-teal text-white shadow-glow'
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
                      <p className="px-6 pb-5 text-base leading-relaxed text-navy-600">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
