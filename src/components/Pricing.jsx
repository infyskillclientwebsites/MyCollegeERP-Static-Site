import { Check, Tag, ArrowRight } from 'lucide-react';
import { CONTACT, PLANS } from '../data/content.js';

export default function Pricing() {
  return (
    <section id="pricing" className="section bg-brand-bg">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-tag">
            <Tag className="h-3.5 w-3.5" />
            Simple pricing
          </span>
          <h2 className="heading-section mt-4 text-balance">
            Transparent pricing for{' '}
            <span className="text-brand-blue">every college size</span>
          </h2>
          <p className="mt-4 text-base text-navy-600">
            No setup fees. No long-term contracts. Pay annually for a 2-month
            discount. GST-compliant invoicing in INR.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <article
              key={plan.name}
              className={`relative rounded-2xl p-7 transition ${
                plan.highlighted
                  ? 'border-2 border-brand-blue bg-white shadow-card-hover lg:-translate-y-2'
                  : 'card-base hover:shadow-card-hover'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-gradient-to-r from-brand-blue to-brand-teal px-4 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-glow">
                    {plan.badge}
                  </span>
                </div>
              )}

              <h3 className="font-display text-2xl font-bold text-navy-900">
                {plan.name}
              </h3>
              <p className="mt-1 text-sm text-navy-600">{plan.tagline}</p>

              <div className="mt-6 border-y border-navy-100 py-5">
                <div className="text-2xl font-bold text-navy-900">
                  {plan.price}
                </div>
                <div className="mt-1 text-xs text-navy-500">
                  Final pricing tailored to your student count
                </div>
              </div>

              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-sm text-navy-700"
                  >
                    <span
                      className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full ${
                        plan.highlighted
                          ? 'bg-brand-blue text-white'
                          : 'bg-brand-teal/10 text-brand-teal'
                      }`}
                    >
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={CONTACT.demoMailto}
                className={`mt-8 flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition ${
                  plan.highlighted
                    ? 'bg-brand-blue text-white shadow-glow hover:bg-blue-700'
                    : 'border border-navy-200 bg-white text-navy-900 hover:border-navy-900'
                }`}
              >
                {plan.cta}
                <ArrowRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-navy-500">
          💡 No hidden fees · ₹0 setup · Cancel anytime · GST invoice provided
        </p>
      </div>
    </section>
  );
}
