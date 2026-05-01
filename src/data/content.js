import {
  GraduationCap,
  Wallet,
  ClipboardCheck,
  Building2,
  Users,
  Receipt,
  Award,
  FileBarChart,
  Settings,
  Shield,
  ScrollText,
  KeyRound,
  Download,
  Building,
  Smartphone,
  IndianRupee,
  Lock,
} from 'lucide-react';

export const CONTACT = {
  email: 'infyclgerp@gmail.com',
  phone: '+91 9080087187',
  whatsapp: '919080087187',
  whatsappUrl: 'https://wa.me/919080087187',
  appUrl: 'https://app.infycollegeerp.com/auth',
  marketingUrl: 'https://infycollegeerp.com',
  location: 'Andhra Pradesh, India',
  supportHours: 'Mon–Sat, 9 AM – 6 PM IST',
  demoMailto:
    'mailto:infyclgerp@gmail.com?subject=MyCollegeERP%20Demo%20Request&body=Hello%2C%20I%27d%20like%20to%20book%20a%20free%20demo%20for%20my%20college.%0A%0ACollege%20Name%3A%20%0AStudent%20Strength%3A%20%0AContact%20Person%3A%20%0APhone%3A%20%0A%0AThank%20you.',
};

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const TRUST_ITEMS = [
  {
    icon: Building,
    title: 'Multi-college ready',
    description:
      'One platform, multiple campuses, fully isolated tenant data',
  },
  {
    icon: Lock,
    title: 'Secure data isolation',
    description: 'Row-level security and audit logs on every action',
  },
  {
    icon: Smartphone,
    title: 'Works on any device',
    description: 'Responsive dashboard — no app install required',
  },
  {
    icon: IndianRupee,
    title: 'Made for India',
    description: 'INR billing, IST timezone, IPE & JEE workflows built-in',
  },
];

export const PROBLEMS = [
  {
    title: 'Admission data scattered',
    description:
      'Excel files on multiple laptops, paper registers in cabinets — finding one student takes 20 minutes',
  },
  {
    title: 'Fee follow-ups never end',
    description:
      'Calculating who paid, who owes, who got partial — by hand, every month',
  },
  {
    title: 'Exam reports done manually',
    description:
      'Mark sheets typed in Word, scorecards printed one by one, errors caught after distribution',
  },
  {
    title: 'Payroll & expenses disconnected',
    description:
      'Salaries on one ledger, expenses on another, no unified view for trustees',
  },
  {
    title: 'Alumni records lost forever',
    description:
      'Once students graduate, contact details disappear. No way to reach back for placements or events',
  },
];

export const FEATURES = [
  {
    icon: GraduationCap,
    title: 'Admission Management',
    description:
      'Onboard students with custom fields, photo, parent contacts, admission year. Filter by stream, year, status. CSV export anytime.',
    color: 'text-brand-blue',
    bg: 'bg-brand-blue/10',
  },
  {
    icon: Wallet,
    title: 'Fee Management',
    description:
      'Define fee types, raise per-student fees per academic year, accept partial payments, generate printable receipts.',
    color: 'text-brand-teal',
    bg: 'bg-brand-teal/10',
  },
  {
    icon: ClipboardCheck,
    title: 'Exams & Marks',
    description:
      'Create exam cycles, define subjects with max marks, record scores, generate scorecards on letterhead.',
    color: 'text-amber-600',
    bg: 'bg-amber-100',
  },
  {
    icon: Building2,
    title: 'Hostel Management',
    description:
      'Assign students to rooms, track hostel fees, manage check-in/check-out — linked to student records.',
    color: 'text-purple-600',
    bg: 'bg-purple-100',
  },
  {
    icon: Users,
    title: 'Employees & Payroll',
    description:
      'Faculty + staff records, designations, base salaries. Generate monthly payroll, download payslips as PDF.',
    color: 'text-rose-600',
    bg: 'bg-rose-100',
  },
  {
    icon: Receipt,
    title: 'Expense Tracking',
    description:
      'Track every operational expense — utilities, supplies, vendor payments — with payee, date, remarks.',
    color: 'text-emerald-600',
    bg: 'bg-emerald-100',
  },
  {
    icon: Award,
    title: 'Alumni Network',
    description:
      'Lifelong records of graduates — JEE/IPE marks, placements, achievements. Custom fields supported.',
    color: 'text-indigo-600',
    bg: 'bg-indigo-100',
  },
  {
    icon: FileBarChart,
    title: 'Reports & Exports',
    description:
      'One-click PDF reports on letterhead — student lists, fee collection, payroll, expense ledgers.',
    color: 'text-cyan-600',
    bg: 'bg-cyan-100',
  },
  {
    icon: Settings,
    title: 'Custom Fields',
    description:
      'Define extra student or alumni fields without code — caste, scholarship status, anything specific to your college.',
    color: 'text-orange-600',
    bg: 'bg-orange-100',
  },
];

export const STEPS = [
  {
    number: '01',
    title: 'Tell us about your college',
    description:
      'A short call. We learn about your size, streams, and existing data formats.',
  },
  {
    number: '02',
    title: 'We set up your dedicated dashboard',
    description:
      'Your data is fully isolated with row-level encryption. Admin login emailed within 24 hours.',
  },
  {
    number: '03',
    title: 'Start managing — we support you',
    description:
      'Import existing students, customize fields, train your team. Email + WhatsApp support, 6 days a week.',
  },
];

export const SECURITY = [
  {
    icon: Shield,
    title: 'Row-Level Security (RLS)',
    description:
      'One college can never see another college’s data — enforced at the database level by Postgres.',
  },
  {
    icon: ScrollText,
    title: 'Complete Audit Trail',
    description:
      'Every login, edit, and export is logged with timestamp + IP. Investigate any change, anytime.',
  },
  {
    icon: KeyRound,
    title: 'OTP Password Reset',
    description:
      '6-digit code via email — no risky magic links. Your accounts stay yours.',
  },
  {
    icon: Download,
    title: 'Data Export Anytime',
    description:
      'One-click CSV/PDF exports. Full database dumps on request. No vendor lock-in, ever.',
  },
];

export const PLANS = [
  {
    name: 'Basic',
    tagline: 'For small colleges starting digital',
    price: 'Contact for pricing',
    cta: 'Request quote',
    highlighted: false,
    features: [
      'Up to 200 students',
      'Admissions, Fees, Exams modules',
      'PDF receipts and scorecards',
      'Email support',
      '5 admin users',
      'CSV exports',
    ],
  },
  {
    name: 'Pro',
    badge: 'Most Popular',
    tagline: 'For growing institutions',
    price: 'Contact for pricing',
    cta: 'Start with Pro',
    highlighted: true,
    features: [
      'Up to 1,000 students',
      'Everything in Basic',
      'Hostel + Payroll + Expenses',
      'Custom fields',
      'Priority WhatsApp support',
      'Unlimited admin users',
    ],
  },
  {
    name: 'Enterprise',
    tagline: 'For multi-campus groups',
    price: 'Custom pricing',
    cta: 'Contact sales',
    highlighted: false,
    features: [
      'Unlimited students',
      'Multi-college dashboard',
      'Dedicated account manager',
      'Custom integrations',
      'White-labeled receipts/payslips',
      'Priority support',
    ],
  },
];

export const TESTIMONIALS = [
  {
    quote:
      'We moved from Excel sheets to MyCollegeERP and saved 15 hours a week on fee reconciliation. The audit log gave our trustees the transparency they wanted.',
    name: 'Principal',
    role: 'Junior College, Andhra Pradesh',
    initials: 'JC',
  },
  {
    quote:
      'Setup was done in a day. The team actually picks up the phone — that’s what made us choose them over the bigger players.',
    name: 'Administrator',
    role: 'Intermediate College, Vijayawada',
    initials: 'VC',
  },
  {
    quote:
      'My alumni records were on paper for 30 years. Now they’re searchable, exportable, and connected to placement data. Our students reach out to seniors directly.',
    name: 'Alumni Coordinator',
    role: '+2 College, Visakhapatnam',
    initials: 'AC',
  },
];

export const FAQS = [
  {
    q: 'How long does setup take?',
    a: 'We provision your dedicated dashboard within 24 business hours. You’ll receive your admin login by email — sign in, customize your fields, and you’re live.',
  },
  {
    q: 'Can I import my existing student data?',
    a: 'Yes. We accept CSV, Excel, or even old database exports. Our team handles the import as part of onboarding — no extra cost.',
  },
  {
    q: 'Is my college data isolated from others?',
    a: 'Absolutely. We use row-level security at the Postgres database level. Your data is invisible to any other college on the platform — even our own admins cannot view it without explicit permission.',
  },
  {
    q: 'Can I export all my data?',
    a: 'Yes — one-click CSV exports for any list, and full database dumps on request. Your data is yours, always. No vendor lock-in.',
  },
  {
    q: 'Do you provide training?',
    a: 'Every plan includes a 1-hour onboarding video call. Pro plans get monthly check-ins, and Enterprise customers get a dedicated account manager.',
  },
  {
    q: 'Can we use it on mobile?',
    a: 'Yes — the entire dashboard is mobile responsive. No app install required. Works on any modern browser, phone, tablet, or desktop.',
  },
  {
    q: 'What if my plan expires?',
    a: 'You’ll see a 30-day-out warning banner inside the app. If a payment is missed, the dashboard pauses (data is preserved, never deleted). Reactivation is within 1 business hour after renewal.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Yes — no contracts, no cancellation fees. Export your data, sign out, done. We archive your data for 90 days in case you change your mind.',
  },
];
