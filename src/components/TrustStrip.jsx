import { TRUST_ITEMS } from '../data/content.js';

export default function TrustStrip() {
  return (
    <section className="border-y border-navy-100 bg-white">
      <div className="container-page py-10">
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-navy-500">
          Trusted by colleges. Built for India.
        </p>
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {TRUST_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex items-start gap-3 rounded-xl border border-navy-100 bg-brand-bg p-4 transition hover:border-brand-blue/30 hover:bg-white"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-brand-blue to-brand-teal text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-navy-900">
                    {item.title}
                  </div>
                  <div className="mt-0.5 text-xs leading-relaxed text-navy-600">
                    {item.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
