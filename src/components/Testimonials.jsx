import { Quote, Star } from 'lucide-react';
import { TESTIMONIALS } from '../data/content.js';

export default function Testimonials() {
  return (
    <section className="section bg-white">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-tag">
            <Quote className="h-3.5 w-3.5" />
            Trusted by college leaders
          </span>
          <h2 className="heading-section mt-4 text-balance">
            What principals and administrators are saying
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name + t.role}
              className="card-hover flex flex-col p-6"
            >
              <div className="flex gap-0.5 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <Quote className="mt-3 h-6 w-6 text-brand-teal/40" />
              <blockquote className="mt-2 flex-1 text-sm leading-relaxed text-navy-700">
                {t.quote}
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-navy-100 pt-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-brand-teal font-display text-sm font-bold text-white">
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-bold text-navy-900">
                    {t.name}
                  </div>
                  <div className="text-xs text-navy-500">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
