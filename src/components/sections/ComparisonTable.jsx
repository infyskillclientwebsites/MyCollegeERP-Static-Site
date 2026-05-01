import { Scale, X, Check } from 'lucide-react';
import { COMPARISON_ROWS } from '../../data/sampleData.js';
import ScrollReveal from '../ui/ScrollReveal.jsx';

export default function ComparisonTable() {
  return (
    <section className="section bg-brand-bg">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal variant="fade">
            <span className="section-tag">
              <Scale className="h-3.5 w-3.5" />
              Side-by-side
            </span>
          </ScrollReveal>
          <ScrollReveal variant="up" delay={80}>
            <h2 className="heading-section mt-5">
              Excel chaos vs.{' '}
              <span className="text-gradient">MyCollegeERP clarity</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal variant="up" delay={160}>
            <p className="lead mt-5">
              Same task, two worlds. See exactly what changes when you stop
              maintaining 14 spreadsheets.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal variant="up" delay={200}>
          <div className="mx-auto mt-14 max-w-5xl overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-card-xl">
            {/* Header */}
            <div className="grid grid-cols-1 sm:grid-cols-[1.2fr_1fr_1fr]">
              <div className="hidden sm:block" />
              <div className="border-b border-navy-100 bg-rose-50 px-5 py-5 sm:border-l">
                <div className="flex items-center gap-2 text-rose-700">
                  <X className="h-5 w-5" />
                  <span className="font-display text-xl font-bold">
                    Excel + Paper
                  </span>
                </div>
                <p className="mt-1 text-xs text-rose-600">The old way</p>
              </div>
              <div className="border-b border-navy-100 bg-gradient-to-br from-brand-blue/5 to-brand-teal/5 px-5 py-5 sm:border-l">
                <div className="flex items-center gap-2 text-brand-blue">
                  <Check className="h-5 w-5" />
                  <span className="font-display text-xl font-bold">
                    MyCollegeERP
                  </span>
                </div>
                <p className="mt-1 text-xs text-brand-blue">The new way</p>
              </div>
            </div>

            {/* Rows */}
            {COMPARISON_ROWS.map((row, idx) => (
              <div
                key={row.label}
                className={`grid grid-cols-1 sm:grid-cols-[1.2fr_1fr_1fr] ${
                  idx % 2 === 0 ? 'bg-white' : 'bg-navy-50/50'
                }`}
              >
                <div className="border-b border-navy-100 px-5 py-4">
                  <span className="text-sm font-bold text-navy-900">
                    {row.label}
                  </span>
                </div>
                <div className="flex items-start gap-2 border-b border-navy-100 px-5 py-4 sm:border-l">
                  <X className="mt-0.5 h-4 w-4 flex-shrink-0 text-rose-500" />
                  <span className="text-sm text-navy-600">{row.excel}</span>
                </div>
                <div className="flex items-start gap-2 border-b border-navy-100 px-5 py-4 sm:border-l">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600" />
                  <span className="text-sm font-medium text-navy-900">
                    {row.erp}
                  </span>
                </div>
              </div>
            ))}

            {/* CTA row */}
            <div className="bg-gradient-to-r from-brand-blue to-brand-teal px-5 py-6 text-center text-white">
              <p className="font-display text-lg font-bold sm:text-xl">
                Ready to leave the spreadsheet era behind?
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
