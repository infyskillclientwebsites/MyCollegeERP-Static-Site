import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { CONTACT } from '../../data/content.js';
import ScrollReveal from '../ui/ScrollReveal.jsx';
import Logo from '../Logo.jsx';

const HIGHLIGHTS = [
  'Multi-tenant by design — each college has fully isolated data',
  'Audit-trail logs for every CREATE, UPDATE, DELETE, EXPORT action',
  "Custom fields without code — adapt to your college's workflow",
  'Premium PDF outputs on letterhead — receipts, payslips, scorecards',
  'OTP-secured login + plan suspension safeguards',
];

export default function Solution() {
  return (
    <section id="about" className="section relative overflow-hidden bg-brand-bg">
      <div className="absolute inset-0 dot-bg opacity-40" aria-hidden="true" />

      <div className="container-page relative">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal variant="right" className="order-2 lg:order-1">
            <div className="relative">
              <div
                className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-brand-blue/20 to-brand-teal/20 blur-3xl"
                aria-hidden="true"
              />
              <div className="relative">
                <Logo
                  name="brand-full"
                  alt="MyCollegeERP — Admission to Alumni, All in One"
                  className="mx-auto w-full max-w-md rounded-2xl border border-navy-100 bg-white p-8 shadow-card-xl"
                />
              </div>
            </div>
          </ScrollReveal>

          <div className="order-1 lg:order-2">
            <ScrollReveal variant="fade">
              <span className="section-tag">
                <Sparkles className="h-3.5 w-3.5" />
                The solution
              </span>
            </ScrollReveal>

            <ScrollReveal variant="up" delay={80}>
              <h2 className="heading-section mt-5">
                Bring your entire college workflow into{' '}
                <span className="text-gradient">one secure ERP</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal variant="up" delay={160}>
              <p className="lead mt-5">
                MyCollegeERP connects students, admissions, fees, academics,
                hostel, payroll, expenses, reports and alumni — in one
                dashboard. Built specifically for Indian junior, intermediate
                and +2 colleges.
              </p>
            </ScrollReveal>

            <ul className="mt-8 space-y-4">
              {HIGHLIGHTS.map((item, idx) => (
                <ScrollReveal key={item} variant="left" delay={idx * 80}>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-6 w-6 flex-shrink-0 text-brand-teal" />
                    <span className="text-base leading-relaxed text-navy-700 sm:text-lg">
                      {item}
                    </span>
                  </li>
                </ScrollReveal>
              ))}
            </ul>

            <ScrollReveal variant="up" delay={400}>
              <div className="mt-10 flex flex-wrap gap-3">
                <a href="#features" className="btn-primary btn-lg">
                  Explore features
                  <ArrowRight className="h-5 w-5" />
                </a>
                <a href={CONTACT.demoMailto} className="btn-outline btn-lg">
                  Book a demo
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
