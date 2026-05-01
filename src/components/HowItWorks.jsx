import { Rocket, ArrowRight } from 'lucide-react';
import { CONTACT, STEPS } from '../data/content.js';

export default function HowItWorks() {
  return (
    <section className="section bg-white">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-tag">
            <Rocket className="h-3.5 w-3.5" />
            How it works
          </span>
          <h2 className="heading-section mt-4 text-balance">
            Get started in <span className="text-brand-blue">24 hours</span>
          </h2>
          <p className="mt-4 text-base text-navy-600">
            No long sales cycles. No multi-month implementations. Tell us
            about your college today, sign in tomorrow.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {STEPS.map((step, idx) => (
            <div
              key={step.number}
              className="relative card-base p-7 lg:p-8"
            >
              {idx < STEPS.length - 1 && (
                <div
                  className="absolute -right-3 top-1/2 hidden h-px w-6 -translate-y-1/2 bg-navy-200 lg:block"
                  aria-hidden="true"
                />
              )}
              <div className="flex items-baseline gap-3">
                <span className="font-display text-5xl font-bold leading-none bg-gradient-to-br from-brand-blue to-brand-teal bg-clip-text text-transparent">
                  {step.number}
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-navy-400">
                  Step
                </span>
              </div>
              <h3 className="mt-4 font-display text-xl font-bold text-navy-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a href={CONTACT.demoMailto} className="btn-accent">
            Talk to our team
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
