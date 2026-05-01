import { ShieldCheck } from 'lucide-react';
import { SECURITY } from '../../data/content.js';
import ScrollReveal from '../ui/ScrollReveal.jsx';

export default function Security() {
  return (
    <section
      id="security"
      className="section relative overflow-hidden bg-navy-900 text-white"
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(circle at 30% 20%, rgba(20, 184, 166, 0.3), transparent 40%), radial-gradient(circle at 70% 80%, rgba(37, 99, 235, 0.3), transparent 40%)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
        aria-hidden="true"
      />

      <div className="container-page relative">
        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal variant="fade">
            <span className="section-tag-dark">
              <ShieldCheck className="h-3.5 w-3.5" />
              Security & compliance
            </span>
          </ScrollReveal>
          <ScrollReveal variant="up" delay={80}>
            <h2 className="heading-section mt-5 !text-white">
              Your college data is{' '}
              <span className="bg-gradient-to-r from-brand-teal to-brand-blue bg-clip-text text-transparent">
                safer here
              </span>{' '}
              than on spreadsheets
            </h2>
          </ScrollReveal>
          <ScrollReveal variant="up" delay={160}>
            <p className="lead mt-5 !text-navy-300">
              Bank-grade infrastructure with database-level isolation. Every
              action audited, every login secured, every export traceable.
            </p>
          </ScrollReveal>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SECURITY.map((item, idx) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={item.title} variant="up" delay={idx * 80}>
                <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur transition hover:-translate-y-1 hover:border-brand-teal/40 hover:bg-white/[0.06]">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-teal to-brand-blue text-white shadow-glow-teal transition group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-white sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-navy-300">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal variant="up" delay={400}>
          <div className="mt-14 rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center backdrop-blur sm:p-7">
            <p className="text-sm text-navy-200 sm:text-base">
              <span className="font-bold text-white">
                RLS · Encrypted at Rest · OTP Auth · Audit Logged
              </span>
              <span className="mx-3 text-navy-500">·</span>
              Compliance-ready architecture for Indian education institutions
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
