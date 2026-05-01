import { useEffect, useState } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../../data/content.js';
import ScrollReveal from '../ui/ScrollReveal.jsx';

export default function Testimonials() {
  const [active, setActive] = useState(0);

  // Auto-rotate every 6s
  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  const next = () => setActive((p) => (p + 1) % TESTIMONIALS.length);
  const prev = () =>
    setActive((p) => (p - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section className="section bg-white">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal variant="fade">
            <span className="section-tag">
              <Quote className="h-3.5 w-3.5" />
              Trusted by college leaders
            </span>
          </ScrollReveal>
          <ScrollReveal variant="up" delay={80}>
            <h2 className="heading-section mt-5">
              What principals and{' '}
              <span className="text-gradient">administrators</span> are saying
            </h2>
          </ScrollReveal>
        </div>

        <ScrollReveal variant="up" delay={200}>
          <div className="relative mx-auto mt-14 max-w-4xl">
            <div className="relative overflow-hidden rounded-2xl border border-navy-100 bg-gradient-to-br from-white to-brand-bg p-8 shadow-card-xl sm:p-12">
              <Quote
                className="absolute right-6 top-6 h-24 w-24 text-brand-blue/5 sm:h-32 sm:w-32"
                aria-hidden="true"
              />

              <div className="relative">
                <div className="flex gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>

                <blockquote
                  key={active}
                  className="animate-fade-up mt-6 font-display text-xl font-medium leading-relaxed text-navy-900 sm:text-2xl lg:text-3xl"
                >
                  "{TESTIMONIALS[active].quote}"
                </blockquote>

                <figcaption className="mt-8 flex items-center gap-4 border-t border-navy-100 pt-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-brand-teal font-display text-lg font-bold text-white shadow-glow">
                    {TESTIMONIALS[active].initials}
                  </div>
                  <div>
                    <div className="text-base font-bold text-navy-900 sm:text-lg">
                      {TESTIMONIALS[active].name}
                    </div>
                    <div className="text-sm text-navy-500">
                      {TESTIMONIALS[active].role}
                    </div>
                  </div>
                </figcaption>
              </div>
            </div>

            {/* Controls */}
            <div className="mt-6 flex items-center justify-between">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous testimonial"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-navy-200 bg-white text-navy-700 transition hover:border-navy-900 hover:bg-navy-900 hover:text-white"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <div className="flex gap-2">
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActive(idx)}
                    aria-label={`Go to testimonial ${idx + 1}`}
                    className={`h-2 rounded-full transition-all ${
                      idx === active
                        ? 'w-8 bg-brand-blue'
                        : 'w-2 bg-navy-300 hover:bg-navy-500'
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={next}
                aria-label="Next testimonial"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-navy-200 bg-white text-navy-700 transition hover:border-navy-900 hover:bg-navy-900 hover:text-white"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
