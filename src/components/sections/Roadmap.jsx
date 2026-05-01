import { Map, CheckCircle2, Loader2, Circle } from 'lucide-react';
import { ROADMAP } from '../../data/sampleData.js';
import ScrollReveal from '../ui/ScrollReveal.jsx';

const STATUS_META = {
  shipped: {
    label: 'Shipped',
    icon: CheckCircle2,
    pillBg: 'bg-emerald-100',
    pillText: 'text-emerald-700',
    cardBorder: 'border-emerald-200',
    accent: 'from-emerald-400 to-emerald-600',
  },
  'in-progress': {
    label: 'In progress',
    icon: Loader2,
    pillBg: 'bg-brand-blue/10',
    pillText: 'text-brand-blue',
    cardBorder: 'border-brand-blue/30',
    accent: 'from-brand-blue to-blue-700',
  },
  planned: {
    label: 'Planned',
    icon: Circle,
    pillBg: 'bg-navy-100',
    pillText: 'text-navy-600',
    cardBorder: 'border-navy-200',
    accent: 'from-navy-400 to-navy-600',
  },
};

export default function Roadmap() {
  return (
    <section className="section relative overflow-hidden bg-white">
      <div className="absolute inset-0 grid-bg opacity-40" aria-hidden="true" />

      <div className="container-page relative">
        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal variant="fade">
            <span className="section-tag">
              <Map className="h-3.5 w-3.5" />
              Product roadmap
            </span>
          </ScrollReveal>
          <ScrollReveal variant="up" delay={80}>
            <h2 className="heading-section mt-5">
              Where we're <span className="text-gradient">heading next</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal variant="up" delay={160}>
            <p className="lead mt-5">
              Transparent, public, updated quarterly. Founding members get a
              direct vote on what we build next.
            </p>
          </ScrollReveal>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-4">
          {ROADMAP.map((item, idx) => {
            const meta = STATUS_META[item.status];
            const Icon = meta.icon;
            return (
              <ScrollReveal key={item.quarter} variant="up" delay={idx * 80}>
                <article
                  className={`relative h-full overflow-hidden rounded-2xl border-2 ${meta.cardBorder} bg-white p-6 shadow-card transition hover:-translate-y-1 hover:shadow-card-xl`}
                >
                  <div
                    className={`absolute left-0 top-0 h-1 w-full bg-gradient-to-r ${meta.accent}`}
                  />
                  <div className="flex items-center justify-between">
                    <span className="font-display text-xl font-bold text-navy-900">
                      {item.quarter}
                    </span>
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider ${meta.pillBg} ${meta.pillText}`}
                    >
                      <Icon
                        className={`h-3.5 w-3.5 ${item.status === 'in-progress' ? 'animate-spin' : ''}`}
                      />
                      {meta.label}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-lg font-bold text-navy-900 sm:text-xl">
                    {item.title}
                  </h3>

                  <ul className="mt-4 space-y-2.5">
                    {item.items.map((entry) => (
                      <li
                        key={entry}
                        className="flex items-start gap-2 text-sm leading-relaxed text-navy-600"
                      >
                        <span
                          className={`mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-r ${meta.accent}`}
                        />
                        {entry}
                      </li>
                    ))}
                  </ul>
                </article>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal variant="fade" delay={400}>
          <p className="mt-10 text-center text-sm text-navy-500">
            🗳️ Have a feature request? Email it to us — we read every one.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
