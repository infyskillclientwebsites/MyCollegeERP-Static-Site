import { AlertTriangle, FileSpreadsheet } from 'lucide-react';
import { PROBLEMS } from '../../data/content.js';
import ScrollReveal from '../ui/ScrollReveal.jsx';

export default function Problem() {
  return (
    <section className="section bg-white">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal variant="fade">
            <span className="section-tag">
              <AlertTriangle className="h-3.5 w-3.5" />
              The problem
            </span>
          </ScrollReveal>
          <ScrollReveal variant="up" delay={80}>
            <h2 className="heading-section mt-5">
              Still managing your college with{' '}
              <span className="text-rose-600">Excel, registers,</span> and
              scattered records?
            </h2>
          </ScrollReveal>
          <ScrollReveal variant="up" delay={160}>
            <p className="lead mt-5">
              College administration in India is drowning in paperwork and
              disconnected files. Trustees ask for reports — and 3 staff
              members spend a week pulling them together.
            </p>
          </ScrollReveal>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROBLEMS.map((problem, idx) => (
            <ScrollReveal key={problem.title} variant="up" delay={(idx % 3) * 80}>
              <div className="group h-full rounded-2xl border border-navy-100 bg-brand-bg p-7 transition hover:-translate-y-1 hover:border-rose-200 hover:bg-white hover:shadow-card-hover">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-50 text-rose-600 transition group-hover:scale-110">
                  <FileSpreadsheet className="h-6 w-6" />
                </div>
                <h3 className="heading-card mt-5">{problem.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-navy-600">
                  {problem.description}
                </p>
              </div>
            </ScrollReveal>
          ))}

          <ScrollReveal variant="up" delay={160}>
            <div className="flex h-full flex-col items-start justify-center rounded-2xl bg-gradient-to-br from-navy-900 to-navy-800 p-7 text-white shadow-card-xl">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand-teal">
                The good news
              </span>
              <p className="mt-3 font-display text-2xl font-bold leading-tight sm:text-3xl">
                You don't have to live like this anymore.
              </p>
              <p className="mt-3 text-base leading-relaxed text-navy-200">
                MyCollegeERP brings every workflow into one secure dashboard —
                purpose-built for Indian colleges.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
