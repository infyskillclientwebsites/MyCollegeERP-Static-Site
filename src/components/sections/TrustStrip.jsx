import { TRUST_ITEMS } from '../../data/content.js';
import ScrollReveal from '../ui/ScrollReveal.jsx';

export default function TrustStrip() {
  return (
    <section className="border-b border-navy-100 bg-brand-bg py-14">
      <div className="container-page">
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {TRUST_ITEMS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={item.title} variant="up" delay={idx * 80}>
                <div className="group flex h-full items-start gap-4 rounded-2xl border border-navy-100 bg-white p-5 transition hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-card-hover sm:p-6">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue to-brand-teal text-white shadow-glow transition group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-base font-bold text-navy-900">
                      {item.title}
                    </div>
                    <div className="mt-1 text-sm leading-relaxed text-navy-600">
                      {item.description}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
