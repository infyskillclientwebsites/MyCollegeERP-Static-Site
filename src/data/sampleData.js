/**
 * Sample data for showcase sections — uses authentic Indian college names,
 * INR amounts, IPE/JEE marks, and realistic fee structures.
 *
 * IMPORTANT: All numbers in HERO_STATS and HONEST_PROMISES are real product
 * commitments (modules count, setup time, data isolation, cost) — NOT fake
 * usage numbers. The product is in startup phase with founding clients.
 *
 * Used by: DashboardShowcase, Features (interactive tabs), Hero stat card.
 */

export const SAMPLE_STUDENTS = [
  {
    id: 'VJC2025001',
    name: 'Aarav Reddy',
    stream: 'MPC',
    year: '2nd Year',
    feeStatus: 'Paid',
    avatarColor: 'bg-blue-500',
  },
  {
    id: 'VJC2025002',
    name: 'Priya Sharma',
    stream: 'BiPC',
    year: '1st Year',
    feeStatus: 'Partial',
    avatarColor: 'bg-rose-500',
  },
  {
    id: 'VJC2025003',
    name: 'Karthik Naidu',
    stream: 'MPC',
    year: '2nd Year',
    feeStatus: 'Paid',
    avatarColor: 'bg-amber-500',
  },
  {
    id: 'VJC2025004',
    name: 'Sneha Lakshmi',
    stream: 'CEC',
    year: '1st Year',
    feeStatus: 'Pending',
    avatarColor: 'bg-emerald-500',
  },
  {
    id: 'VJC2025005',
    name: 'Vikram Singh',
    stream: 'MPC',
    year: '2nd Year',
    feeStatus: 'Paid',
    avatarColor: 'bg-purple-500',
  },
];

export const SAMPLE_FEES = [
  { type: 'Tuition Fee', total: 45000, paid: 45000, status: 'Paid' },
  { type: 'Hostel Fee', total: 38000, paid: 38000, status: 'Paid' },
  { type: 'Transport', total: 12000, paid: 6000, status: 'Partial' },
  { type: 'Lab Fee', total: 5000, paid: 0, status: 'Pending' },
  { type: 'Exam Fee', total: 3500, paid: 3500, status: 'Paid' },
];

export const SAMPLE_EXAM_RESULTS = [
  { subject: 'Mathematics', max: 100, scored: 92, grade: 'A+' },
  { subject: 'Physics', max: 100, scored: 87, grade: 'A' },
  { subject: 'Chemistry', max: 100, scored: 84, grade: 'A' },
  { subject: 'English', max: 100, scored: 78, grade: 'B+' },
  { subject: 'Sanskrit', max: 100, scored: 95, grade: 'A+' },
];

export const SAMPLE_AUDIT_LOG = [
  {
    time: '10:42 AM',
    user: 'admin@vjc',
    action: 'CREATED',
    target: 'Student VJC2025089',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
  },
  {
    time: '10:38 AM',
    user: 'accounts@vjc',
    action: 'UPDATED',
    target: 'Fee record · Aarav Reddy',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    time: '10:31 AM',
    user: 'admin@vjc',
    action: 'EXPORTED',
    target: 'Fee report Q2 2025',
    color: 'text-amber-700',
    bg: 'bg-amber-50',
  },
  {
    time: '10:15 AM',
    user: 'accounts@vjc',
    action: 'LOGIN',
    target: 'IP 49.207.x.x',
    color: 'text-navy-600',
    bg: 'bg-navy-50',
  },
];

/**
 * Inline hero stats — REAL product commitments (not user metrics).
 * These are honest from day one of the product.
 */
export const HERO_STATS = [
  { label: 'Modules included', value: 9, suffix: '' },
  { label: 'Hours to live', value: 24, suffix: '' },
  { label: 'Setup cost', value: 0, prefix: '₹' },
  { label: 'Data isolation', value: 100, suffix: '%' },
];

/**
 * "Why MyCollegeERP" section — replaces vanity metrics with real promises.
 * All four are guarantees the product enforces today.
 */
export const HONEST_PROMISES = [
  {
    value: 9,
    suffix: '',
    label: 'Integrated modules',
    description:
      'Admissions, Fees, Exams, Hostel, Payroll, Expenses, Alumni, Reports, Custom Fields',
    color: 'from-brand-blue to-blue-700',
  },
  {
    value: 24,
    suffix: ' hrs',
    label: 'From signup to live',
    description: 'Dashboard provisioned, admin login emailed, ready to use',
    color: 'from-brand-teal to-emerald-600',
  },
  {
    value: 100,
    suffix: '%',
    label: 'Data isolation',
    description: 'Postgres row-level security — no cross-tenant leaks possible',
    color: 'from-amber-500 to-orange-600',
  },
  {
    value: 0,
    prefix: '₹',
    suffix: '',
    label: 'Setup fee',
    description: 'No onboarding charge. No platform fee. Pay only for usage.',
    color: 'from-purple-500 to-rose-500',
  },
];

/**
 * Services that scroll across the hero — what the product DOES today.
 * Each is a real, shipped capability.
 */
export const SERVICES_LIST = [
  '🎓 Admissions',
  '💰 Fee Management',
  '📝 Exams & Marks',
  '🏠 Hostel Management',
  '👨‍🏫 Payroll',
  '💸 Expense Tracking',
  '🎯 Alumni Records',
  '📊 PDF Reports',
  '⚙️ Custom Fields',
  '🛡️ Audit Logs',
  '🔐 OTP Login',
  '📱 Mobile-friendly',
  '🇮🇳 INR + GST Billing',
  '📤 CSV/PDF Export',
  '🔄 Multi-tenant Isolation',
  '⏱️ Real-time Updates',
];

/**
 * Roadmap — what's coming next. Helpful for a startup-phase site to show
 * direction and momentum.
 */
export const ROADMAP = [
  {
    quarter: 'Q1 2026',
    status: 'shipped',
    title: 'Core ERP Launched',
    items: [
      'Admissions, Fees, Exams modules',
      'Multi-tenant architecture',
      'Audit log + RLS',
      'PDF receipts & scorecards',
    ],
  },
  {
    quarter: 'Q2 2026',
    status: 'in-progress',
    title: 'Mobile + SMS',
    items: [
      'Native mobile app (iOS + Android)',
      'SMS gateway for fee reminders',
      'Parent portal',
      'Telugu language UI',
    ],
  },
  {
    quarter: 'Q3 2026',
    status: 'planned',
    title: 'Smart Insights',
    items: [
      'AI-powered fee defaulter prediction',
      'Attendance via QR / face recognition',
      'Auto-generated trustee reports',
      'WhatsApp Business integration',
    ],
  },
  {
    quarter: 'Q4 2026',
    status: 'planned',
    title: 'Scale & Enterprise',
    items: [
      'Multi-campus management',
      'Online admission portal',
      'Razorpay / PhonePe gateway',
      'Public API for integrations',
    ],
  },
];

export const COLLEGE_NAMES = [
  'Vinitha Junior College',
  'Sri Chaitanya Junior College',
  'Narayana Junior College',
  'Andhra Loyola College',
  'Kalams Junior College',
  'Sai Vidya Junior College',
  "St. Joseph's Junior College",
  'Government Junior College',
  'Sri Sai Junior College',
  'Aditya Junior College',
  'Bhashyam Junior College',
  'Vignan Junior College',
];

export const COMPARISON_ROWS = [
  {
    label: "Find one student's record",
    excel: '15–20 minutes searching files',
    erp: '< 2 seconds (filter + search)',
  },
  {
    label: 'Generate fee receipt',
    excel: 'Manual Word template, print, sign',
    erp: 'One click → branded PDF',
  },
  {
    label: 'Pending fees report',
    excel: '3–4 hours of formula work',
    erp: 'Auto-generated, filter by stream/year',
  },
  {
    label: 'Multi-user editing',
    excel: 'File conflicts, lost changes',
    erp: 'Row-level security, audit logs',
  },
  {
    label: 'Audit who changed what',
    excel: 'Impossible',
    erp: 'Every action timestamped + IP logged',
  },
  {
    label: 'Export full data anytime',
    excel: 'Already in Excel — but messy',
    erp: 'CSV / PDF on demand, clean format',
  },
  {
    label: 'Mobile access',
    excel: 'No (or broken on phone)',
    erp: 'Full responsive dashboard',
  },
  {
    label: 'Data lost if laptop crashes',
    excel: 'Yes',
    erp: 'Never — encrypted cloud backups',
  },
];
