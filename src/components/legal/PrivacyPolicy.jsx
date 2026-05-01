import LegalModal from '../ui/LegalModal.jsx';
import { CONTACT } from '../../data/content.js';

export default function PrivacyPolicy({ open, onClose }) {
  return (
    <LegalModal
      open={open}
      onClose={onClose}
      title="Privacy Policy"
      lastUpdated="01 May 2026"
    >
      <Section title="1. Introduction">
        MyCollegeERP ("we", "our", "us") is a multi-tenant ERP service operated
        by Infyskill, located in Andhra Pradesh, India. This Privacy Policy
        explains how we collect, use, disclose, and safeguard information
        provided by educational institutions ("Institution") and their authorized
        users when they use our platform at <Mono>app.infycollegeerp.com</Mono>.
        This policy is drafted in compliance with the{' '}
        <Strong>Digital Personal Data Protection Act, 2023 (DPDP Act)</Strong>,
        the <Strong>Information Technology Act, 2000</Strong>, and applicable
        Indian education regulatory frameworks.
      </Section>

      <Section title="2. Data We Collect">
        <P>
          On behalf of the Institution, we process the following categories of
          personal data:
        </P>
        <ul>
          <li>
            <Strong>Student records:</Strong> name, roll number, date of birth,
            stream, year of admission, parent/guardian contact, address, photo
          </li>
          <li>
            <Strong>Academic records:</Strong> exam marks, attendance, grades,
            scorecards
          </li>
          <li>
            <Strong>Financial records:</Strong> fee dues, payments,
            scholarship status (no card or banking details are stored on our
            servers)
          </li>
          <li>
            <Strong>Employee records:</Strong> faculty/staff profile,
            designation, salary, joining date
          </li>
          <li>
            <Strong>System telemetry:</Strong> login times, IP addresses,
            user-agent, audit-log entries (used for security only)
          </li>
        </ul>
      </Section>

      <Section title="3. Purpose of Processing (DPDP §6)">
        <P>Personal data is processed exclusively to:</P>
        <ul>
          <li>Provide and operate the ERP service for the Institution</li>
          <li>
            Generate operational outputs (fee receipts, scorecards, payslips,
            reports)
          </li>
          <li>Maintain audit trails for regulatory and trustee oversight</li>
          <li>Provide customer support to authorized Institution staff</li>
          <li>Improve service quality, in fully aggregated and anonymized form</li>
        </ul>
        <P>
          We <Strong>do not</Strong> use personal data for advertising,
          profiling, or any third-party marketing.
        </P>
      </Section>

      <Section title="4. Lawful Basis & Consent">
        The Institution acts as the <Strong>Data Fiduciary</Strong> under the
        DPDP Act and obtains lawful consent from students, parents, and
        employees prior to data submission. MyCollegeERP acts as a{' '}
        <Strong>Data Processor</Strong> on behalf of the Institution. For
        students under 18, the Institution is responsible for obtaining verified
        parental consent in accordance with DPDP §9.
      </Section>

      <Section title="5. Data Storage & Security">
        <ul>
          <li>
            <Strong>Hosting:</Strong> Data is stored on encrypted Postgres
            databases hosted within India-region data centers.
          </li>
          <li>
            <Strong>Encryption:</Strong> AES-256 encryption at rest, TLS 1.3 in
            transit.
          </li>
          <li>
            <Strong>Tenant isolation:</Strong> Postgres Row-Level Security (RLS)
            ensures one Institution's data cannot be queried by another.
          </li>
          <li>
            <Strong>Access control:</Strong> Role-based, OTP-secured login. Our
            engineers cannot access tenant data without explicit Institution
            authorization.
          </li>
          <li>
            <Strong>Audit logging:</Strong> Every login, view, edit, and export
            is timestamped with user + IP and retained for 24 months.
          </li>
        </ul>
      </Section>

      <Section title="6. Data Retention">
        <P>
          Personal data is retained for the duration of the active subscription
          and for <Strong>90 days</Strong> after termination, unless a longer
          retention period is mandated by law (e.g., financial records under
          Indian accounting standards). After this period, data is permanently
          deleted from production systems and encrypted backups within 180 days.
        </P>
      </Section>

      <Section title="7. Data Subject Rights (DPDP §11–14)">
        <P>
          Students, parents, and employees may exercise the following rights by
          submitting a request to their Institution administrator:
        </P>
        <ul>
          <li>Right to access personal data held about them</li>
          <li>Right to correction or completion of inaccurate data</li>
          <li>
            Right to erasure (subject to retention obligations under Indian law)
          </li>
          <li>Right to grievance redressal (see Section 11)</li>
          <li>Right to nominate a representative (DPDP §14)</li>
        </ul>
      </Section>

      <Section title="8. Disclosure to Third Parties">
        <P>We do not sell or rent personal data. We share data only with:</P>
        <ul>
          <li>
            <Strong>Sub-processors</Strong> strictly necessary for service
            delivery (cloud hosting, transactional email gateway). All
            sub-processors are bound by data-protection agreements.
          </li>
          <li>
            <Strong>Indian regulatory authorities</Strong> when compelled by
            valid legal process under the IT Act 2000 or applicable education
            statutes.
          </li>
        </ul>
      </Section>

      <Section title="9. Cookies & Tracking">
        Our marketing website (<Mono>infycollegeerp.com</Mono>) uses only
        strictly-necessary functional cookies. We do not deploy advertising,
        cross-site tracking, or behavioral analytics. The application
        (<Mono>app.infycollegeerp.com</Mono>) uses session cookies for
        authentication only.
      </Section>

      <Section title="10. International Transfers">
        Personal data is stored within India. We do not transfer Institution
        data outside India unless explicitly authorized in writing by the
        Institution.
      </Section>

      <Section title="11. Grievance Officer (DPDP §10)">
        <P>For privacy-related queries or grievances, contact:</P>
        <Card>
          <P>
            <Strong>Name:</Strong> Grievance Officer, MyCollegeERP
            <br />
            <Strong>Email:</Strong>{' '}
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            <br />
            <Strong>Phone:</Strong> {CONTACT.phone}
            <br />
            <Strong>Hours:</Strong> {CONTACT.supportHours}
            <br />
            <Strong>Response:</Strong> within 7 working days
          </P>
        </Card>
      </Section>

      <Section title="12. Changes to this Policy">
        We may update this policy to reflect changes in law, technology, or
        service. Material changes will be notified to Institution administrators
        via email at least 30 days before they take effect. The "Last updated"
        date at the top of this document indicates the current version.
      </Section>
    </LegalModal>
  );
}

function Section({ title, children }) {
  return (
    <section className="mb-7">
      <h3 className="font-display text-xl font-bold text-navy-900 sm:text-2xl">
        {title}
      </h3>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}
function P({ children }) {
  return <p className="leading-relaxed">{children}</p>;
}
function Strong({ children }) {
  return <strong className="font-bold text-navy-900">{children}</strong>;
}
function Mono({ children }) {
  return (
    <code className="rounded bg-navy-100 px-1.5 py-0.5 font-mono text-sm text-navy-800">
      {children}
    </code>
  );
}
function Card({ children }) {
  return (
    <div className="rounded-xl border border-navy-100 bg-navy-50 p-5">
      {children}
    </div>
  );
}
