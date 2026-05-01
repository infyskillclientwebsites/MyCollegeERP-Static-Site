import { ShieldCheck } from 'lucide-react';
import { SECURITY } from '../data/content.js';

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
            'radial-gradient(circle at 30% 20%, rgba(20, 184, 166, 0.25), transparent 40%), radial-gradient(circle at 70% 80%, rgba(37, 99, 235, 0.25), transparent 40%)',
        }}
        aria-hidden="true"
      />

      <div className="container-page relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-teal/30 bg-brand-teal/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-teal">
            <ShieldCheck className="h-3.5 w-3.5" />
            Security & compliance
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-white sm:text-4xl text-balance">
            Your college data is{' '}
            <span className="text-brand-teal">safer here</span> than on
            spreadsheets
          </h2>
          <p className="mt-4 text-base text-navy-300">
            Bank-grade infrastructure with database-level isolation. Every
            action audited, every login secured, every export traceable.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SECURITY.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-brand-teal/40 hover:bg-white/10"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-teal to-brand-blue text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-300">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur">
          <p className="text-sm text-navy-200">
            <span className="font-bold text-white">RLS · Encrypted at Rest · OTP Auth · Audit Logged</span>
            <span className="mx-3 text-navy-500">·</span>
            Compliance-ready architecture for Indian education institutions
          </p>
        </div>
      </div>
    </section>
  );
}
