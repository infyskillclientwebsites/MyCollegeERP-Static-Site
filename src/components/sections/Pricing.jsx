import { Check, Tag, ArrowRight, Sparkles, Users, Gift, AlertTriangle } from 'lucide-react';
import { CONTACT, PLANS, WEBSITE_BONUS } from '../../data/content.js';
import ScrollReveal from '../ui/ScrollReveal.jsx';

export default function Pricing() {
  return (
    <section id="pricing" className="section bg-brand-bg">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal variant="fade">
            <span className="section-tag">
              <Tag className="h-3.5 w-3.5" />
              Founding-phase pricing
            </span>
          </ScrollReveal>
          <ScrollReveal variant="up" delay={80}>
            <h2 className="heading-section mt-5">
              Pay only for{' '}
              <span className="text-gradient">what you use</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal variant="up" delay={160}>
            <p className="lead mt-5">
              Per-student / month billing. No setup fees. No hidden charges.
              Pricing is intentionally tailored — the rate for a 200-student
              college is different from a 1,500-student one. Talk to us for an
              exact quote.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="up" delay={240}>
            <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-3 text-left">
              <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-amber-200 text-amber-800">
                🌱
              </span>
              <div>
                <div className="text-sm font-bold text-amber-900">
                  Founding Member offer
                </div>
                <div className="text-xs text-amber-800">
                  First 10 colleges get pricing locked for 2 years + direct
                  access to founder
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {PLANS.map((plan, idx) => (
            <ScrollReveal key={plan.name} variant="up" delay={idx * 100}>
              <article
                className={`relative h-full rounded-2xl p-8 transition lg:p-10 ${
                  plan.highlighted
                    ? 'border-2 border-brand-blue bg-white shadow-card-xl lg:-translate-y-2'
                    : 'border border-navy-100 bg-white shadow-card hover:-translate-y-1 hover:shadow-card-hover'
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-brand-blue to-brand-teal px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-white shadow-glow">
                      <Sparkles className="h-3.5 w-3.5" />
                      {plan.badge}
                    </span>
                  </div>
                )}

                <h3 className="font-display text-3xl font-bold text-navy-900 sm:text-4xl">
                  {plan.name}
                </h3>
                <p className="mt-2 text-base text-navy-600">{plan.tagline}</p>

                <div className="mt-5 flex items-center gap-2 rounded-lg bg-navy-50 px-3 py-2 text-sm">
                  <Users className="h-4 w-4 text-navy-500" />
                  <span className="font-bold text-navy-900">
                    {plan.studentBand}
                  </span>
                </div>

                {plan.websiteIncluded && (
                  <div className="mt-2 flex items-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm">
                    <Gift className="h-4 w-4 flex-shrink-0 text-emerald-600" />
                    <span className="font-bold text-emerald-800">
                      {plan.websiteIncluded}
                    </span>
                  </div>
                )}

                <div className="mt-6 border-y border-navy-100 py-6">
                  <div className="font-display text-2xl font-bold text-navy-900 sm:text-3xl">
                    {plan.priceLabel}
                  </div>
                  <div className="mt-2 text-sm text-navy-500">
                    {plan.priceSub}
                  </div>
                </div>

                <ul className="mt-7 space-y-4">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-base text-navy-700"
                    >
                      <span
                        className={`mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full ${
                          plan.highlighted
                            ? 'bg-brand-blue text-white'
                            : 'bg-brand-teal/10 text-brand-teal'
                        }`}
                      >
                        <Check className="h-3.5 w-3.5" strokeWidth={3} />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={CONTACT.pricingMailto}
                  className={`mt-9 flex w-full items-center justify-center gap-2 rounded-xl px-6 py-4 text-base font-bold transition ${
                    plan.highlighted
                      ? 'bg-gradient-to-r from-brand-blue to-blue-700 text-white shadow-glow hover:-translate-y-0.5 hover:shadow-card-xl'
                      : 'border-2 border-navy-200 bg-white text-navy-900 hover:border-navy-900'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="h-5 w-5" />
                </a>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal variant="up" delay={300}>
          <div className="mt-14 overflow-hidden rounded-2xl border-2 border-emerald-200 bg-gradient-to-br from-emerald-50 to-white shadow-card">
            <div className="flex flex-col gap-6 p-6 sm:flex-row sm:items-start sm:gap-8 sm:p-8">
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-brand-teal text-white shadow-glow-teal">
                <Gift className="h-7 w-7" />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-2xl font-bold text-navy-900 sm:text-3xl">
                  {WEBSITE_BONUS.title}
                </h3>
                <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                  {WEBSITE_BONUS.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2 text-sm leading-relaxed text-navy-700 sm:text-base"
                    >
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600" />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex items-start gap-2 rounded-xl border border-amber-200 bg-amber-50 p-3.5">
                  <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-700" />
                  <p className="text-sm leading-relaxed text-amber-900">
                    <span className="font-bold">⚠ 1-year commitment:</span>{' '}
                    {WEBSITE_BONUS.clause}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fade" delay={400}>
          <div className="mt-10 grid gap-3 text-center text-sm text-navy-600 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-navy-100 bg-white px-4 py-3">
              💡 <span className="font-bold text-navy-900">No setup fee</span>
            </div>
            <div className="rounded-xl border border-navy-100 bg-white px-4 py-3">
              📅 <span className="font-bold text-navy-900">Cancel anytime*</span>
            </div>
            <div className="rounded-xl border border-navy-100 bg-white px-4 py-3">
              🧾 <span className="font-bold text-navy-900">GST invoice</span>
            </div>
            <div className="rounded-xl border border-navy-100 bg-white px-4 py-3">
              💳 <span className="font-bold text-navy-900">UPI / NEFT / Card</span>
            </div>
          </div>
          <p className="mt-3 text-center text-xs text-navy-500">
            *Cancellations within first year of website inclusion incur the
            web development charge — see clause above.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
