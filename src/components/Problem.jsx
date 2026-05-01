import { AlertTriangle, FileSpreadsheet } from 'lucide-react';
import { PROBLEMS } from '../data/content.js';

export default function Problem() {
  return (
    <section className="section bg-brand-bg">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-tag">
            <AlertTriangle className="h-3.5 w-3.5" />
            The problem
          </span>
          <h2 className="heading-section mt-4 text-balance">
            Still managing your college with{' '}
            <span className="text-rose-600">Excel, registers,</span> and
            scattered records?
          </h2>
          <p className="mt-4 text-base text-navy-600">
            College administration in India is drowning in paperwork and
            disconnected files. Trustees ask for reports — and 3 staff members
            spend a week pulling them together.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PROBLEMS.map((problem) => (
            <div
              key={problem.title}
              className="card-base p-6 hover:border-rose-200"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-rose-50 text-rose-600">
                  <FileSpreadsheet className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-navy-900">
                    {problem.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-navy-600">
                    {problem.description}
                  </p>
                </div>
              </div>
            </div>
          ))}

          <div className="card-base flex flex-col items-start justify-center bg-gradient-to-br from-navy-900 to-navy-800 p-6 text-white">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-teal">
              The good news
            </span>
            <p className="mt-2 font-display text-xl font-bold leading-snug">
              You don’t have to live like this anymore.
            </p>
            <p className="mt-2 text-sm text-navy-200">
              MyCollegeERP brings every college workflow into one secure
              dashboard — purpose-built for Indian colleges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
