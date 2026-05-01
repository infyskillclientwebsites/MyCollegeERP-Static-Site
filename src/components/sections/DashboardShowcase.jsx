import { useState } from 'react';
import {
  LayoutDashboard,
  GraduationCap,
  Wallet,
  ClipboardCheck,
  ScrollText,
  Search,
  Filter,
  Download,
  Plus,
  Eye,
  Edit3,
  CheckCircle2,
  Clock,
  AlertCircle,
} from 'lucide-react';
import {
  SAMPLE_STUDENTS,
  SAMPLE_FEES,
  SAMPLE_EXAM_RESULTS,
  SAMPLE_AUDIT_LOG,
} from '../../data/sampleData.js';
import ScrollReveal from '../ui/ScrollReveal.jsx';

const TABS = [
  { id: 'students', label: 'Students', icon: GraduationCap },
  { id: 'fees', label: 'Fees', icon: Wallet },
  { id: 'exams', label: 'Exams', icon: ClipboardCheck },
  { id: 'audit', label: 'Audit Log', icon: ScrollText },
];

export default function DashboardShowcase() {
  const [activeTab, setActiveTab] = useState('students');

  return (
    <section className="section relative overflow-hidden bg-white">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal variant="fade">
            <span className="section-tag">
              <LayoutDashboard className="h-3.5 w-3.5" />
              Live preview
            </span>
          </ScrollReveal>
          <ScrollReveal variant="up" delay={80}>
            <h2 className="heading-section mt-5">
              See your dashboard{' '}
              <span className="text-gradient">working with real data</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal variant="up" delay={160}>
            <p className="lead mt-5">
              This is exactly what your admin team will see — students, fees,
              exam scorecards, and a tamper-proof audit log. Click between tabs
              to explore.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal variant="up" delay={200}>
          <div className="mx-auto mt-14 max-w-5xl">
            {/* Window chrome */}
            <div className="overflow-hidden rounded-2xl border border-navy-200 bg-white shadow-card-xl">
              {/* Title bar */}
              <div className="flex items-center justify-between border-b border-navy-100 bg-navy-50 px-5 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-rose-400" />
                  <span className="h-3 w-3 rounded-full bg-amber-400" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400" />
                </div>
                <div className="rounded-md bg-white px-3 py-1 text-xs font-medium text-navy-600 shadow-sm">
                  app.infycollegeerp.com / vinitha-jc
                </div>
                <div className="w-12" />
              </div>

              {/* Tabs */}
              <div className="flex overflow-x-auto border-b border-navy-100 bg-white">
                {TABS.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTab(tab.id)}
                      className={`relative flex items-center gap-2 whitespace-nowrap px-5 py-4 text-sm font-bold transition sm:px-7 ${
                        isActive
                          ? 'text-brand-blue'
                          : 'text-navy-500 hover:text-navy-900'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      {tab.label}
                      {isActive && (
                        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-brand-blue to-brand-teal" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Tab content */}
              <div className="bg-gradient-to-br from-white to-brand-bg p-5 sm:p-7">
                {activeTab === 'students' && <StudentsView />}
                {activeTab === 'fees' && <FeesView />}
                {activeTab === 'exams' && <ExamsView />}
                {activeTab === 'audit' && <AuditView />}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function ToolBar({ title, count, ctaLabel = 'Add new' }) {
  return (
    <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
      <div>
        <h3 className="font-display text-xl font-bold text-navy-900 sm:text-2xl">
          {title}
        </h3>
        <p className="text-sm text-navy-500">
          Showing <strong className="text-navy-900">{count}</strong> records ·
          AY 2025–2026
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <div className="flex items-center gap-2 rounded-lg border border-navy-200 bg-white px-3 py-2 text-sm text-navy-600">
          <Search className="h-4 w-4" />
          <span className="hidden sm:inline">Search...</span>
        </div>
        <button
          type="button"
          className="flex items-center gap-1.5 rounded-lg border border-navy-200 bg-white px-3 py-2 text-sm font-semibold text-navy-700 hover:border-navy-900"
        >
          <Filter className="h-4 w-4" />
          Filter
        </button>
        <button
          type="button"
          className="flex items-center gap-1.5 rounded-lg border border-navy-200 bg-white px-3 py-2 text-sm font-semibold text-navy-700 hover:border-navy-900"
        >
          <Download className="h-4 w-4" />
          <span className="hidden sm:inline">Export</span>
        </button>
        <button
          type="button"
          className="flex items-center gap-1.5 rounded-lg bg-brand-blue px-3 py-2 text-sm font-semibold text-white hover:bg-blue-700"
        >
          <Plus className="h-4 w-4" />
          <span className="hidden sm:inline">{ctaLabel}</span>
        </button>
      </div>
    </div>
  );
}

function StudentsView() {
  return (
    <div>
      <ToolBar title="Students" count="847" ctaLabel="Add student" />
      <div className="overflow-hidden rounded-xl border border-navy-100 bg-white">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-navy-100 bg-navy-50 text-xs font-bold uppercase tracking-wider text-navy-600">
              <th className="px-4 py-3">Roll No</th>
              <th className="px-4 py-3">Name</th>
              <th className="hidden px-4 py-3 sm:table-cell">Stream</th>
              <th className="hidden px-4 py-3 md:table-cell">Year</th>
              <th className="px-4 py-3">Fees</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-navy-100">
            {SAMPLE_STUDENTS.map((s) => (
              <tr key={s.id} className="text-sm transition hover:bg-brand-bg">
                <td className="px-4 py-3 font-mono text-xs text-navy-600">
                  {s.id}
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-full ${s.avatarColor} text-[11px] font-bold text-white`}
                    >
                      {s.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </div>
                    <span className="font-bold text-navy-900">{s.name}</span>
                  </div>
                </td>
                <td className="hidden px-4 py-3 text-navy-600 sm:table-cell">
                  {s.stream}
                </td>
                <td className="hidden px-4 py-3 text-navy-600 md:table-cell">
                  {s.year}
                </td>
                <td className="px-4 py-3">
                  <FeeStatusBadge status={s.feeStatus} />
                </td>
                <td className="px-4 py-3 text-right">
                  <div className="inline-flex gap-1">
                    <button className="rounded p-1.5 text-navy-500 hover:bg-navy-100 hover:text-navy-900">
                      <Eye className="h-4 w-4" />
                    </button>
                    <button className="rounded p-1.5 text-navy-500 hover:bg-navy-100 hover:text-navy-900">
                      <Edit3 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function FeesView() {
  const totalDue = SAMPLE_FEES.reduce((s, f) => s + f.total, 0);
  const totalPaid = SAMPLE_FEES.reduce((s, f) => s + f.paid, 0);
  const balance = totalDue - totalPaid;
  const pct = (totalPaid / totalDue) * 100;

  return (
    <div>
      <ToolBar title="Fee record · Aarav Reddy (VJC2025001)" count="5" ctaLabel="Receipt" />

      <div className="mb-5 grid gap-4 sm:grid-cols-3">
        <SummaryCard label="Total Due" value={`₹${totalDue.toLocaleString('en-IN')}`} tone="navy" />
        <SummaryCard label="Paid" value={`₹${totalPaid.toLocaleString('en-IN')}`} tone="emerald" />
        <SummaryCard
          label="Balance"
          value={`₹${balance.toLocaleString('en-IN')}`}
          tone={balance > 0 ? 'rose' : 'emerald'}
        />
      </div>

      <div className="mb-5 rounded-xl border border-navy-100 bg-white p-4">
        <div className="mb-2 flex items-center justify-between text-sm">
          <span className="font-bold text-navy-900">Collection progress</span>
          <span className="font-bold text-brand-blue">{pct.toFixed(1)}%</span>
        </div>
        <div className="h-3 overflow-hidden rounded-full bg-navy-100">
          <div
            className="h-full rounded-full bg-gradient-to-r from-brand-blue to-brand-teal transition-all duration-1000"
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-navy-100 bg-white">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-navy-100 bg-navy-50 text-xs font-bold uppercase tracking-wider text-navy-600">
              <th className="px-4 py-3">Fee Type</th>
              <th className="px-4 py-3 text-right">Total</th>
              <th className="px-4 py-3 text-right">Paid</th>
              <th className="px-4 py-3 text-right">Balance</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-navy-100">
            {SAMPLE_FEES.map((fee) => (
              <tr key={fee.type} className="transition hover:bg-brand-bg">
                <td className="px-4 py-3 font-bold text-navy-900">{fee.type}</td>
                <td className="px-4 py-3 text-right font-mono text-navy-700">
                  ₹{fee.total.toLocaleString('en-IN')}
                </td>
                <td className="px-4 py-3 text-right font-mono text-emerald-600">
                  ₹{fee.paid.toLocaleString('en-IN')}
                </td>
                <td className="px-4 py-3 text-right font-mono text-navy-700">
                  ₹{(fee.total - fee.paid).toLocaleString('en-IN')}
                </td>
                <td className="px-4 py-3">
                  <FeeStatusBadge status={fee.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ExamsView() {
  const total = SAMPLE_EXAM_RESULTS.reduce((s, e) => s + e.scored, 0);
  const max = SAMPLE_EXAM_RESULTS.reduce((s, e) => s + e.max, 0);
  const pct = ((total / max) * 100).toFixed(1);

  return (
    <div>
      <ToolBar title="Quarterly Exam · Aarav Reddy" count="5" ctaLabel="Generate scorecard" />

      <div className="mb-5 grid gap-4 sm:grid-cols-3">
        <SummaryCard label="Total Marks" value={`${total} / ${max}`} tone="navy" />
        <SummaryCard label="Percentage" value={`${pct}%`} tone="emerald" />
        <SummaryCard label="Overall Grade" value="A+" tone="blue" />
      </div>

      <div className="overflow-hidden rounded-xl border border-navy-100 bg-white">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-navy-100 bg-navy-50 text-xs font-bold uppercase tracking-wider text-navy-600">
              <th className="px-4 py-3">Subject</th>
              <th className="px-4 py-3 text-right">Max</th>
              <th className="px-4 py-3 text-right">Scored</th>
              <th className="px-4 py-3">Progress</th>
              <th className="px-4 py-3">Grade</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-navy-100">
            {SAMPLE_EXAM_RESULTS.map((r) => {
              const percent = (r.scored / r.max) * 100;
              return (
                <tr key={r.subject} className="transition hover:bg-brand-bg">
                  <td className="px-4 py-3 font-bold text-navy-900">{r.subject}</td>
                  <td className="px-4 py-3 text-right font-mono text-navy-600">{r.max}</td>
                  <td className="px-4 py-3 text-right font-mono font-bold text-navy-900">
                    {r.scored}
                  </td>
                  <td className="px-4 py-3">
                    <div className="h-2 overflow-hidden rounded-full bg-navy-100">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-brand-blue to-brand-teal"
                        style={{ width: `${percent}%` }}
                      />
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-block rounded-md px-2 py-0.5 text-xs font-bold ${
                        r.grade.startsWith('A')
                          ? 'bg-emerald-100 text-emerald-700'
                          : 'bg-amber-100 text-amber-700'
                      }`}
                    >
                      {r.grade}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function AuditView() {
  return (
    <div>
      <ToolBar title="Audit Log · Today" count="284" ctaLabel="Filter" />

      <div className="overflow-hidden rounded-xl border border-navy-100 bg-white">
        <ul className="divide-y divide-navy-100">
          {SAMPLE_AUDIT_LOG.map((log, idx) => (
            <li
              key={idx}
              className="flex items-center gap-4 px-4 py-3 transition hover:bg-brand-bg"
            >
              <div className="font-mono text-xs text-navy-500">{log.time}</div>
              <span
                className={`rounded-md px-2 py-1 text-[11px] font-bold uppercase tracking-wider ${log.bg} ${log.color}`}
              >
                {log.action}
              </span>
              <span className="flex-1 truncate text-sm text-navy-700">
                <strong className="text-navy-900">{log.user}</strong> ·{' '}
                {log.target}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-4 text-center text-xs text-navy-500">
        All actions logged with timestamp + IP. Retained for compliance.
      </p>
    </div>
  );
}

function FeeStatusBadge({ status }) {
  const map = {
    Paid: { icon: CheckCircle2, cls: 'bg-emerald-100 text-emerald-700' },
    Partial: { icon: Clock, cls: 'bg-amber-100 text-amber-700' },
    Pending: { icon: AlertCircle, cls: 'bg-rose-100 text-rose-700' },
  };
  const { icon: Icon, cls } = map[status];
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-bold ${cls}`}
    >
      <Icon className="h-3 w-3" />
      {status}
    </span>
  );
}

function SummaryCard({ label, value, tone }) {
  const tones = {
    navy: 'border-navy-100 bg-navy-50',
    emerald: 'border-emerald-200 bg-emerald-50',
    rose: 'border-rose-200 bg-rose-50',
    blue: 'border-blue-200 bg-blue-50',
  };
  return (
    <div className={`rounded-xl border ${tones[tone]} p-4`}>
      <div className="text-xs font-bold uppercase tracking-wider text-navy-500">
        {label}
      </div>
      <div className="mt-1 text-2xl font-bold text-navy-900">{value}</div>
    </div>
  );
}
