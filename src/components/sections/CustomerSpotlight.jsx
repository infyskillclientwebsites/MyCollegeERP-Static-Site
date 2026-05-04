import { ExternalLink, Star, MapPin, Sparkles, ArrowUpRight } from 'lucide-react';
import { CUSTOMER_SPOTLIGHT } from '../../data/content.js';
import ScrollReveal from '../ui/ScrollReveal.jsx';

/**
 * Founding-customer spotlight section. Highlights the first real college
 * running on MyCollegeERP — strongest social signal a startup-phase
 * product can show, and far more credible than fake testimonial counts.
 */
export default function CustomerSpotlight() {
  const c = CUSTOMER_SPOTLIGHT;

  return (
    <section className="section relative overflow-hidden bg-white">
      <div className="absolute inset-0 dot-bg opacity-40" aria-hidden="true" />

      <div className="container-page relative">
        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal variant="fade">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-amber-800">
              <Sparkles className="h-3.5 w-3.5" />
              {c.badge}
            </span>
          </ScrollReveal>
          <ScrollReveal variant="up" delay={80}>
            <h2 className="heading-section mt-5">
              The first college trusting us with{' '}
              <span className="text-gradient">their everyday operations</span>
            </h2>
          </ScrollReveal>
        </div>

        <ScrollReveal variant="up" delay={160}>
          <div className="mx-auto mt-14 max-w-5xl">
            <div className="relative overflow-hidden rounded-3xl border-2 border-amber-200 bg-gradient-to-br from-amber-50 via-white to-brand-blue/5 shadow-card-xl">
              {/* Decorative gradient accent */}
              <div
                className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br from-amber-300/20 to-brand-blue/15 blur-3xl"
                aria-hidden="true"
              />

              <div className="relative grid gap-0 sm:grid-cols-[auto_1fr]">
                {/* Identity card */}
                <div className="flex flex-col items-center justify-center gap-4 border-b border-amber-200 bg-gradient-to-br from-amber-100 to-amber-50 p-8 text-center sm:border-b-0 sm:border-r sm:p-10">
                  <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 via-orange-500 to-rose-500 font-display text-3xl font-bold text-white shadow-card-xl">
                    {c.initials}
                  </div>
                  <div className="flex gap-0.5 text-amber-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <div className="text-xs font-bold uppercase tracking-[0.18em] text-amber-700">
                    Live customer
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 sm:p-10">
                  <h3 className="font-display text-2xl font-bold leading-tight text-navy-900 sm:text-3xl">
                    {c.collegeName}
                  </h3>
                  <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-navy-600">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-4 w-4 text-amber-600" />
                      {c.location}
                    </span>
                    <a
                      href={c.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-bold text-brand-blue transition hover:text-blue-700"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      {c.websiteDisplay}
                    </a>
                  </div>

                  <p className="mt-5 text-base leading-relaxed text-navy-700 sm:text-lg">
                    {c.description}
                  </p>

                  <ul className="mt-6 space-y-2.5">
                    {c.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2.5 text-sm text-navy-700 sm:text-base"
                      >
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <a
                      href={c.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-navy-900 px-5 py-3 text-sm font-bold text-white shadow-card transition hover:-translate-y-0.5 hover:bg-navy-800"
                    >
                      Visit {c.shortName}
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 rounded-xl border-2 border-amber-300 bg-white px-5 py-3 text-sm font-bold text-amber-800 transition hover:border-amber-500"
                    >
                      🌱 Become our next founding partner
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fade" delay={300}>
          <p className="mt-8 text-center text-sm text-navy-500">
            We're transparent about being early. One real college, one real
            partnership — and ten more founding spots open before pricing
            settles.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
