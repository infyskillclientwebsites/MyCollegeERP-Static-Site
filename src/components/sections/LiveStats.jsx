import { Sparkles } from 'lucide-react';
import { HONEST_PROMISES } from '../../data/sampleData.js';
import Counter from '../ui/Counter.jsx';
import ScrollReveal from '../ui/ScrollReveal.jsx';

/**
 * Replaces vanity metrics with real product commitments — appropriate for a
 * startup-phase site where we don't have thousands of users yet, but every
 * promise here is enforced by the product on day one.
 */
export default function LiveStats() {
  return (
    <section className="section relative overflow-hidden bg-brand-bg">
      <div className="absolute inset-0 dot-bg opacity-50" aria-hidden="true" />
      <div className="container-page relative">
        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal variant="fade">
            <span className="section-tag">
              <Sparkles className="h-3.5 w-3.5" />
              Founding-phase commitments
            </span>
          </ScrollReveal>
          <ScrollReveal variant="up" delay={80}>
            <h2 className="heading-section mt-5">
              Real promises, not{' '}
              <span className="text-gradient">vanity metrics</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal variant="up" delay={160}>
            <p className="lead mt-5">
              We're early. Instead of inflating user counts, here's what every
              college signing up today gets — guaranteed by the product
              architecture, not the marketing department.
            </p>
          </ScrollReveal>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {HONEST_PROMISES.map((stat, idx) => (
            <ScrollReveal
              key={stat.label}
              variant="up"
              delay={idx * 80}
              className="h-full"
            >
              <div className="group relative h-full overflow-hidden rounded-2xl border border-navy-100 bg-white p-7 shadow-card transition hover:-translate-y-1 hover:shadow-card-xl">
                <div
                  className={`absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br ${stat.color} opacity-10 blur-2xl transition group-hover:opacity-25`}
                  aria-hidden="true"
                />
                <div className="relative">
                  <div
                    className={`inline-flex h-1.5 w-12 rounded-full bg-gradient-to-r ${stat.color}`}
                  />
                  <div className="mt-5 font-display text-5xl font-bold text-navy-900 sm:text-6xl">
                    <Counter
                      end={stat.value}
                      prefix={stat.prefix || ''}
                      suffix={stat.suffix || ''}
                      decimals={stat.decimals || 0}
                    />
                  </div>
                  <div className="mt-3 text-base font-bold text-navy-900">
                    {stat.label}
                  </div>
                  <div className="mt-2 text-sm leading-relaxed text-navy-600">
                    {stat.description}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal variant="up" delay={400}>
          <div className="mt-12 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-center sm:p-6">
            <p className="text-sm font-medium text-amber-900 sm:text-base">
              <span className="font-bold">🌱 Founding member offer:</span>{' '}
              Colleges that onboard in our founding phase get locked-in pricing
              for the first 2 years and a direct line to our founder. Limited
              spots.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
