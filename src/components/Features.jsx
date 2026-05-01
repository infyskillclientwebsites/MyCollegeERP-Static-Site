import { LayoutGrid } from 'lucide-react';
import { FEATURES } from '../data/content.js';

export default function Features() {
  return (
    <section id="features" className="section bg-brand-bg">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-tag">
            <LayoutGrid className="h-3.5 w-3.5" />
            Core modules
          </span>
          <h2 className="heading-section mt-4 text-balance">
            Everything your college needs.{' '}
            <span className="text-brand-teal">Nothing you don’t.</span>
          </h2>
          <p className="mt-4 text-base text-navy-600">
            Nine deeply integrated modules that cover every operational
            workflow — from a student’s first admission form to their alumni
            placement record, decades later.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <article
                key={feature.title}
                className="card-hover group relative overflow-hidden p-6"
              >
                <div
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${feature.bg} ${feature.color}`}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-navy-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">
                  {feature.description}
                </p>
                <div
                  className="absolute right-0 top-0 -z-0 h-24 w-24 -translate-y-12 translate-x-12 rounded-full bg-gradient-to-br from-brand-blue/0 to-brand-teal/0 transition-all duration-500 group-hover:from-brand-blue/5 group-hover:to-brand-teal/10"
                  aria-hidden="true"
                />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
