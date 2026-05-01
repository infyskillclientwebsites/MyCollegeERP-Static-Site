import { Rocket, ArrowRight } from 'lucide-react';
import { CONTACT, STEPS } from '../../data/content.js';
import ScrollReveal from '../ui/ScrollReveal.jsx';

export default function HowItWorks() {
  return (
    <section className="section bg-white">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal variant="fade">
            <span className="section-tag">
              <Rocket className="h-3.5 w-3.5" />
              How it works
            </span>
          </ScrollReveal>
          <ScrollReveal variant="up" delay={80}>
            <h2 className="heading-section mt-5">
              Get started in <span className="text-gradient">24 hours</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal variant="up" delay={160}>
            <p className="lead mt-5">
              No long sales cycles. No multi-month implementations. Tell us
              about your college today, sign in tomorrow.
            </p>
          </ScrollReveal>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {STEPS.map((step, idx) => (
            <ScrollReveal key={step.number} variant="up" delay={idx * 100}>
              <div className="relative h-full overflow-hidden rounded-2xl border border-navy-100 bg-gradient-to-br from-white to-brand-bg p-8 shadow-card transition hover:-translate-y-1 hover:shadow-card-xl lg:p-10">
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-7xl font-bold leading-none bg-gradient-to-br from-brand-blue to-brand-teal bg-clip-text text-transparent sm:text-8xl">
                    {step.number}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-navy-400">
                    Step
                  </span>
                </div>
                <h3 className="heading-card mt-6">{step.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-navy-600">
                  {step.description}
                </p>
                {idx < STEPS.length - 1 && (
                  <div
                    className="absolute -right-4 top-1/2 hidden h-0.5 w-8 -translate-y-1/2 bg-gradient-to-r from-brand-blue to-transparent lg:block"
                    aria-hidden="true"
                  />
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal variant="up" delay={300}>
          <div className="mt-14 flex justify-center">
            <a href={CONTACT.demoMailto} className="btn-accent btn-lg">
              Talk to our team
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
