import { Sparkles, ArrowRight } from 'lucide-react';
import { CONTACT } from '../data/content.js';
import Logo from './Logo.jsx';

export default function Solution() {
  return (
    <section id="about" className="section bg-white">
      <div className="container-page">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative order-2 lg:order-1">
            <div
              className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-brand-blue/10 to-brand-teal/10 blur-2xl"
              aria-hidden="true"
            />
            <div className="relative">
              <Logo
                name="brand-full"
                alt="MyCollegeERP — Admission to Alumni, All in One"
                className="mx-auto w-full max-w-md rounded-2xl bg-white p-6 shadow-card"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="section-tag">
              <Sparkles className="h-3.5 w-3.5" />
              The solution
            </span>
            <h2 className="heading-section mt-4 text-balance">
              Bring your entire college workflow into{' '}
              <span className="bg-gradient-to-r from-brand-blue to-brand-teal bg-clip-text text-transparent">
                one secure ERP
              </span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-navy-600">
              MyCollegeERP connects students, admissions, fees, academics,
              hostel, payroll, expenses, reports and alumni — in one
              dashboard. Built specifically for Indian junior, intermediate
              and +2 colleges.
            </p>

            <ul className="mt-6 space-y-3">
              {[
                'Multi-tenant by design — each college has fully isolated data',
                'Audit-trail logs for every CREATE, UPDATE, DELETE, EXPORT action',
                'Custom fields without code — adapt to your college\'s workflow',
                'Premium PDF outputs on letterhead — receipts, payslips, scorecards',
                'OTP-secured login + plan suspension safeguards',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-teal" />
                  <span className="text-sm leading-relaxed text-navy-700">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#features" className="btn-primary">
                Explore features
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href={CONTACT.demoMailto} className="btn-outline">
                Book a demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
