import { LayoutGrid, ArrowUpRight } from 'lucide-react';
import { FEATURES } from '../../data/content.js';
import ScrollReveal from '../ui/ScrollReveal.jsx';

export default function Features() {
  return (
    <section id="features" className="section bg-white">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal variant="fade">
            <span className="section-tag">
              <LayoutGrid className="h-3.5 w-3.5" />
              Core modules
            </span>
          </ScrollReveal>
          <ScrollReveal variant="up" delay={80}>
            <h2 className="heading-section mt-5">
              Everything your college needs.{' '}
              <span className="text-gradient">Nothing you don't.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal variant="up" delay={160}>
            <p className="lead mt-5">
              Nine deeply integrated modules covering every operational
              workflow — from a student's first admission form to their alumni
              placement record decades later.
            </p>
          </ScrollReveal>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <ScrollReveal
                key={feature.title}
                variant="up"
                delay={(idx % 3) * 80}
              >
                <article className="group relative h-full overflow-hidden rounded-2xl border border-navy-100 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-blue/30 hover:shadow-card-xl">
                  <div
                    className={`inline-flex h-14 w-14 items-center justify-center rounded-xl ${feature.bg} ${feature.color} transition group-hover:scale-110`}
                  >
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="heading-card mt-6">{feature.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-navy-600">
                    {feature.description}
                  </p>
                  <div
                    className="absolute right-0 top-0 -z-0 h-32 w-32 -translate-y-16 translate-x-16 rounded-full bg-gradient-to-br from-brand-blue/0 to-brand-teal/0 transition-all duration-500 group-hover:from-brand-blue/10 group-hover:to-brand-teal/15"
                    aria-hidden="true"
                  />
                  <div className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-brand-blue opacity-0 transition group-hover:opacity-100">
                    Learn more
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
