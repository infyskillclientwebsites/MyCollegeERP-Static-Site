import {
  ArrowRight,
  LogIn,
  CheckCircle2,
  GraduationCap,
  Wallet,
  ClipboardCheck,
  Building2,
  Users,
  FileBarChart,
  TrendingUp,
} from 'lucide-react';
import { CONTACT } from '../data/content.js';
import Logo from './Logo.jsx';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24"
    >
      <div className="absolute inset-0 bg-hero-gradient" aria-hidden="true" />
      <div
        className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-brand-teal/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-brand-blue/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-page relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="animate-fade-up">
          <span className="section-tag">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-teal" />
            Multi-tenant ERP for Indian Colleges
          </span>

          <h1 className="mt-5 font-display text-4xl font-bold leading-[1.1] text-navy-900 sm:text-5xl lg:text-6xl text-balance">
            One Platform.
            <br />
            Every Student.
            <br />
            <span className="bg-gradient-to-r from-brand-blue to-brand-teal bg-clip-text text-transparent">
              From Admission to Alumni.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-navy-600 sm:text-lg">
            The complete multi-tenant ERP built for Indian junior and
            intermediate colleges. Manage admissions, fees, exams, payroll,
            hostel and alumni — all from a single secure dashboard.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={CONTACT.demoMailto} className="btn-accent">
              Request a Free Demo
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={CONTACT.appUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <LogIn className="h-4 w-4" />
              Sign in to Dashboard
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-navy-600">
            <TrustItem text="Built for Indian Junior & Intermediate Colleges" />
            <TrustItem text="Get live in 24 hours" />
            <TrustItem text="Works on mobile" />
          </div>
        </div>

        <div className="animate-fade-up lg:pl-6">
          <DashboardMockup />
        </div>
      </div>
    </section>
  );
}

function TrustItem({ text }) {
  return (
    <div className="flex items-center gap-1.5">
      <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-brand-teal" />
      <span className="font-medium">{text}</span>
    </div>
  );
}

function DashboardMockup() {
  return (
    <div className="relative">
      <div
        className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-brand-blue/20 via-brand-teal/10 to-amber-200/20 blur-2xl"
        aria-hidden="true"
      />
      <div className="relative rounded-2xl border border-navy-200 bg-white p-4 shadow-card-hover sm:p-5">
        <div className="mb-4 flex items-center justify-between border-b border-navy-100 pb-3">
          <div className="flex items-center gap-2">
            <Logo
              name="brand-logo"
              alt=""
              className="h-7 w-7 rounded object-contain"
            />
            <div>
              <div className="text-sm font-bold text-navy-900">
                Vinitha Junior College
              </div>
              <div className="text-[11px] text-navy-500">
                AY 2025–2026 · Admin Dashboard
              </div>
            </div>
          </div>
          <div className="flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-rose-400" />
            <span className="h-2 w-2 rounded-full bg-amber-400" />
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
          <StatCard
            icon={GraduationCap}
            label="Students"
            value="847"
            change="+24"
            tone="blue"
          />
          <StatCard
            icon={Wallet}
            label="Fees Collected"
            value="₹38.4L"
            change="+12%"
            tone="teal"
          />
          <StatCard
            icon={ClipboardCheck}
            label="Pending Fees"
            value="₹4.2L"
            change="-8%"
            tone="amber"
          />
          <StatCard
            icon={TrendingUp}
            label="Exams Done"
            value="12 / 14"
            change="86%"
            tone="indigo"
          />
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-3">
          <MiniTile icon={Building2} label="Hostel" count="142" />
          <MiniTile icon={Users} label="Payroll" count="38" />
          <MiniTile icon={FileBarChart} label="Reports" count="6" />
        </div>

        <div className="mt-4 rounded-xl bg-navy-50 p-3">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-xs font-semibold text-navy-700">
              Fee Collection — This Month
            </span>
            <span className="text-xs font-bold text-brand-teal">+12%</span>
          </div>
          <div className="flex items-end gap-1 h-14">
            {[40, 65, 50, 75, 90, 70, 95, 60, 85, 80, 100, 70].map(
              (h, i) => (
                <div
                  key={i}
                  style={{ height: `${h}%` }}
                  className="flex-1 rounded-t bg-gradient-to-t from-brand-blue to-brand-teal"
                />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon: Icon, label, value, change, tone }) {
  const tones = {
    blue: 'bg-brand-blue/10 text-brand-blue',
    teal: 'bg-brand-teal/10 text-brand-teal',
    amber: 'bg-amber-100 text-amber-700',
    indigo: 'bg-indigo-100 text-indigo-700',
  };
  return (
    <div className="rounded-xl border border-navy-100 bg-white p-3">
      <div className="flex items-start justify-between">
        <div className={`rounded-lg p-1.5 ${tones[tone]}`}>
          <Icon className="h-4 w-4" />
        </div>
        <span className="text-[11px] font-semibold text-emerald-600">
          {change}
        </span>
      </div>
      <div className="mt-2 text-lg font-bold text-navy-900">{value}</div>
      <div className="text-[11px] text-navy-500">{label}</div>
    </div>
  );
}

function MiniTile({ icon: Icon, label, count }) {
  return (
    <div className="flex items-center gap-2 rounded-lg bg-white border border-navy-100 px-2.5 py-2">
      <Icon className="h-3.5 w-3.5 text-navy-500" />
      <div className="leading-none">
        <div className="text-[11px] font-semibold text-navy-900">{count}</div>
        <div className="text-[10px] text-navy-500">{label}</div>
      </div>
    </div>
  );
}
