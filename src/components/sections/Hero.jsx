import {
  ArrowRight,
  LogIn,
  CheckCircle2,
  Sparkles,
  TrendingUp,
  Users,
  Wallet,
  GraduationCap,
} from 'lucide-react';
import { CONTACT } from '../../data/content.js';
import { HERO_STATS, SAMPLE_STUDENTS } from '../../data/sampleData.js';
import Counter from '../ui/Counter.jsx';
import ScrollReveal from '../ui/ScrollReveal.jsx';
import AnimatedHeroBackground from '../ui/AnimatedHeroBackground.jsx';
import Logo from '../Logo.jsx';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white pt-12 pb-16 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28"
    >
      {/* Background layers — order: grid → gradient → animated icons → blobs */}
      <div className="absolute inset-0 grid-bg opacity-60" aria-hidden="true" />
      <div className="absolute inset-0 bg-hero-gradient" aria-hidden="true" />
      <AnimatedHeroBackground />
      <div
        className="absolute -top-32 -right-24 h-96 w-96 rounded-full bg-brand-teal/15 blur-3xl animate-pulse-slow"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-brand-blue/15 blur-3xl animate-pulse-slow"
        aria-hidden="true"
      />

      <div className="container-page relative grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <ScrollReveal variant="fade">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-teal/30 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-navy-700 shadow-sm backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-brand-teal" />
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Founding members onboarding now
            </span>
          </ScrollReveal>

          <ScrollReveal variant="up" delay={100}>
            <h1 className="heading-hero mt-6">
              One Platform.
              <br />
              Every Student.
              <br />
              <span className="text-gradient">From Admission</span>
              <br />
              <span className="text-gradient">to Alumni.</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal variant="up" delay={200}>
            <p className="lead-lg mt-7 max-w-xl">
              The complete multi-tenant ERP built for Indian junior and
              intermediate colleges. Manage admissions, fees, exams, payroll,
              hostel and alumni — all from one dashboard.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="up" delay={280}>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href={CONTACT.demoMailto} className="btn-accent btn-lg">
                Request a Free Demo
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href={CONTACT.appUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline btn-lg"
              >
                <LogIn className="h-5 w-5" />
                Sign in to Dashboard
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade" delay={400}>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium text-navy-700">
              <TrustItem text="Built for Indian Colleges" />
              <TrustItem text="Live in 24 hours" />
              <TrustItem text="Mobile-friendly" />
              <TrustItem text="₹0 setup" />
            </div>
          </ScrollReveal>

          {/* Inline animated stats strip */}
          <ScrollReveal variant="up" delay={500}>
            <div className="mt-12 grid grid-cols-2 gap-4 border-t border-navy-100 pt-8 sm:grid-cols-4 sm:gap-6">
              {HERO_STATS.map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-3xl font-bold text-navy-900 sm:text-4xl">
                    <Counter
                      end={stat.value}
                      prefix={stat.prefix || ''}
                      suffix={stat.suffix || ''}
                    />
                  </div>
                  <div className="mt-1 text-xs font-medium uppercase tracking-wider text-navy-500">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        <div className="lg:col-span-5">
          <ScrollReveal variant="left" delay={300}>
            <DashboardMockup />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function TrustItem({ text }) {
  return (
    <div className="flex items-center gap-2">
      <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-brand-teal" />
      <span>{text}</span>
    </div>
  );
}

function DashboardMockup() {
  return (
    <div className="relative">
      {/* Floating accent cards — both fully ABOVE the dashboard
          (bottom-full + mb-4) so neither overlaps any dashboard data.
          Hidden on mobile so they don't crowd the layout. */}
      <div className="absolute bottom-full left-2 z-20 mb-4 hidden animate-float whitespace-nowrap rounded-xl border border-navy-100 bg-white p-2.5 shadow-card-xl sm:block lg:left-4">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
            <TrendingUp className="h-4 w-4" />
          </div>
          <div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-navy-500">
              Sample · Fees today
            </div>
            <div className="text-base font-bold text-emerald-600">
              <Counter end={84200} prefix="+₹" suffix="" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-full right-2 z-20 mb-4 hidden animate-float-delayed whitespace-nowrap rounded-xl border border-navy-100 bg-white p-2.5 shadow-card-xl sm:block lg:right-4">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue">
            <Users className="h-4 w-4" />
          </div>
          <div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-navy-500">
              Sample · New admits
            </div>
            <div className="text-base font-bold text-brand-blue">
              +<Counter end={12} /> this week
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-brand-blue/25 via-brand-teal/15 to-amber-200/25 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative rounded-2xl border border-navy-200 bg-white p-4 shadow-card-xl sm:p-5">
        <div className="mb-4 flex items-center justify-between gap-3 border-b border-navy-100 pb-3">
          <div className="flex min-w-0 items-center gap-2.5">
            <Logo
              name="brand-logo"
              alt=""
              className="h-8 w-8 flex-shrink-0 rounded object-contain"
            />
            <div className="min-w-0">
              <div className="truncate text-sm font-bold text-navy-900">
                Vinitha Junior College
              </div>
              <div className="text-[11px] text-navy-500">
                AY 2025–2026 · Admin Dashboard
              </div>
            </div>
          </div>
          <div className="flex flex-shrink-0 items-center gap-2">
            <span className="hidden whitespace-nowrap rounded-md bg-amber-100 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-amber-800 ring-1 ring-amber-300 sm:inline-block">
              Demo
            </span>
            <div className="flex gap-1.5">
              <span className="h-2 w-2 rounded-full bg-rose-400" />
              <span className="h-2 w-2 rounded-full bg-amber-400" />
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
            </div>
          </div>
        </div>

        {/* Top stats */}
        <div className="grid grid-cols-2 gap-3">
          <StatCard
            icon={GraduationCap}
            label="Students"
            value={847}
            change="+24"
            tone="blue"
          />
          <StatCard
            icon={Wallet}
            label="Fees"
            value={3840000}
            prefix="₹"
            change="+12%"
            tone="teal"
            short
          />
        </div>

        {/* Live student list */}
        <div className="mt-4">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-navy-500">
              Recent admissions
            </span>
            <span className="text-[10px] font-semibold text-brand-teal">LIVE</span>
          </div>
          <div className="space-y-1.5">
            {SAMPLE_STUDENTS.slice(0, 3).map((s) => (
              <div
                key={s.id}
                className="flex items-center gap-2.5 rounded-lg bg-navy-50 px-2.5 py-2"
              >
                <div
                  className={`flex h-7 w-7 items-center justify-center rounded-full ${s.avatarColor} text-[10px] font-bold text-white`}
                >
                  {s.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>
                <div className="flex-1 leading-tight">
                  <div className="text-xs font-bold text-navy-900">{s.name}</div>
                  <div className="text-[10px] text-navy-500">
                    {s.id} · {s.stream}
                  </div>
                </div>
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
                    s.feeStatus === 'Paid'
                      ? 'bg-emerald-100 text-emerald-700'
                      : s.feeStatus === 'Partial'
                        ? 'bg-amber-100 text-amber-700'
                        : 'bg-rose-100 text-rose-700'
                  }`}
                >
                  {s.feeStatus}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Mini bar chart */}
        <div className="mt-4 rounded-xl bg-gradient-to-br from-navy-50 to-brand-blue/5 p-3">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-xs font-bold text-navy-700">
              Fee Collection · This Month
            </span>
            <span className="text-xs font-bold text-emerald-600">+12%</span>
          </div>
          <div className="flex h-14 items-end gap-1">
            {[40, 65, 50, 75, 90, 70, 95, 60, 85, 80, 100, 70].map((h, i) => (
              <div
                key={i}
                style={{ height: `${h}%` }}
                className="flex-1 rounded-t bg-gradient-to-t from-brand-blue to-brand-teal transition-all hover:opacity-80"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Caption clarifying this is sample data */}
      <p className="mt-3 text-center text-[11px] font-medium text-navy-500">
        ✦ Sample preview · Your college's real dashboard will look like this
      </p>
    </div>
  );
}

function StatCard({ icon: Icon, label, value, prefix = '', change, tone, short }) {
  const tones = {
    blue: 'bg-brand-blue/10 text-brand-blue',
    teal: 'bg-brand-teal/10 text-brand-teal',
  };
  return (
    <div className="rounded-xl border border-navy-100 bg-white p-3">
      <div className="flex items-start justify-between">
        <div className={`rounded-lg p-1.5 ${tones[tone]}`}>
          <Icon className="h-4 w-4" />
        </div>
        <span className="text-[11px] font-semibold text-emerald-600">{change}</span>
      </div>
      <div className="mt-2 text-xl font-bold text-navy-900">
        {short ? (
          <>
            {prefix}
            <Counter end={value / 100000} decimals={1} suffix="L" />
          </>
        ) : (
          <Counter end={value} prefix={prefix} />
        )}
      </div>
      <div className="text-[11px] text-navy-500">{label}</div>
    </div>
  );
}
