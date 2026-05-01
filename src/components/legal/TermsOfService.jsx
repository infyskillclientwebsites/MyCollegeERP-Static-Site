import LegalModal from '../ui/LegalModal.jsx';
import { CONTACT } from '../../data/content.js';

export default function TermsOfService({ open, onClose }) {
  return (
    <LegalModal
      open={open}
      onClose={onClose}
      title="Terms of Service"
      lastUpdated="01 May 2026"
    >
      <Section title="1. Acceptance of Terms">
        By signing up for MyCollegeERP ("Service"), you ("Institution") agree
        to these Terms of Service. The Service is operated by Infyskill
        ("Provider") from Andhra Pradesh, India. These terms are governed by
        Indian law including the <Strong>Indian Contract Act, 1872</Strong>,
        the <Strong>Information Technology Act, 2000</Strong>, and the{' '}
        <Strong>Digital Personal Data Protection Act, 2023</Strong>.
      </Section>

      <Section title="2. Eligibility">
        <P>
          The Service is offered exclusively to recognized educational
          institutions in India, including:
        </P>
        <ul>
          <li>Junior Colleges (Class XI–XII)</li>
          <li>Intermediate Colleges affiliated with State Boards of Intermediate Education</li>
          <li>+2 Colleges, CBSE/ICSE-affiliated senior secondary schools</li>
          <li>UGC-recognized Degree Colleges (with Provider's prior written approval)</li>
        </ul>
        <P>
          The signing authority must be authorized to bind the Institution
          contractually (e.g., Principal, Correspondent, Trust Secretary).
        </P>
      </Section>

      <Section title="3. Subscription & Billing">
        <ul>
          <li>
            <Strong>Model:</Strong> Per-student per-month, billed monthly or
            annually as agreed in the Service Agreement.
          </li>
          <li>
            <Strong>Currency:</Strong> Indian Rupees (INR) with applicable GST
            as per current rates.
          </li>
          <li>
            <Strong>Invoicing:</Strong> GST-compliant tax invoice issued to the
            Institution's registered name and GSTIN (if provided).
          </li>
          <li>
            <Strong>Payment terms:</Strong> Net 7 days from invoice date via
            UPI, NEFT/RTGS, or cheque.
          </li>
          <li>
            <Strong>Late payment:</Strong> 30 days past due triggers a
            suspension banner; 60 days triggers read-only access; 90 days
            triggers full suspension.
          </li>
          <li>
            <Strong>Founding member rate:</Strong> First 10 Institutions get
            their initial pricing locked for 24 months from go-live, regardless
            of subsequent rate changes.
          </li>
        </ul>
      </Section>

      <Section title="4. Acceptable Use">
        <P>The Institution agrees not to:</P>
        <ul>
          <li>
            Upload data not required for the educational and administrative
            purposes of the Institution
          </li>
          <li>
            Reverse-engineer, decompile, or attempt to extract source code from
            the Service
          </li>
          <li>
            Use the Service to violate any Indian law, including the IT Act
            2000 §66, §67, or DPDP Act provisions
          </li>
          <li>
            Share login credentials with unauthorized parties or sub-license
            access
          </li>
          <li>
            Use the Service to harass, defame, or harm any individual including
            students, parents, or staff
          </li>
        </ul>
      </Section>

      <Section title="5. Data Ownership">
        <P>
          The Institution retains <Strong>full ownership</Strong> of all data
          uploaded to the Service. The Provider acts only as a Data Processor
          under the DPDP Act. The Institution may export its data at any time
          via in-app CSV/PDF tools or by written request.
        </P>
      </Section>

      <Section title="6. Service Availability">
        <ul>
          <li>
            <Strong>Target uptime:</Strong> 99.5% measured monthly, excluding
            scheduled maintenance windows
          </li>
          <li>
            <Strong>Maintenance:</Strong> Communicated at least 48 hours in
            advance, typically scheduled outside business hours (10 PM–6 AM
            IST)
          </li>
          <li>
            <Strong>Backup:</Strong> Daily encrypted backups retained for 30
            days
          </li>
          <li>
            <Strong>Disaster recovery:</Strong> RPO 24 hours, RTO 8 hours
          </li>
        </ul>
      </Section>

      <Section title="7. Support">
        <ul>
          <li>
            <Strong>Channels:</Strong> Email ({CONTACT.email}), phone (
            {CONTACT.phone}), WhatsApp during {CONTACT.supportHours}
          </li>
          <li>
            <Strong>Response:</Strong> First response within 1 business hour
          </li>
          <li>
            <Strong>Resolution:</Strong> Critical issues within 4 business
            hours; non-critical within 2 business days
          </li>
          <li>
            <Strong>Onboarding:</Strong> Free 1-hour video onboarding session
            included with every plan
          </li>
        </ul>
      </Section>

      <Section title="8. Intellectual Property">
        The Service, including software, design, branding, and documentation,
        is the intellectual property of the Provider. The Institution receives
        a non-exclusive, non-transferable license to use the Service solely for
        its administrative purposes during the active subscription period.
      </Section>

      <Section title="9. Limitation of Liability">
        <P>
          To the maximum extent permitted by Indian law, the Provider's
          aggregate liability for any claim arising from or related to this
          Service shall not exceed the total subscription fees paid by the
          Institution in the 12 months preceding the event giving rise to the
          claim. The Provider is not liable for indirect, incidental, or
          consequential damages.
        </P>
      </Section>

      <Section title="10. Termination">
        <ul>
          <li>
            <Strong>By Institution:</Strong> Anytime with 30 days written
            notice. Pro-rated refund issued per Section 11 of Refund Policy.
          </li>
          <li>
            <Strong>By Provider:</Strong> With 30 days notice for non-payment
            or breach of acceptable use; immediate for fraud or legal violation.
          </li>
          <li>
            <Strong>Data on termination:</Strong> Full data export provided.
            Data retained for 90 days then permanently deleted (Section 6 of
            Privacy Policy).
          </li>
        </ul>
      </Section>

      <Section title="11. Governing Law & Jurisdiction">
        These terms are governed by Indian law. Any disputes shall be subject
        to the exclusive jurisdiction of the courts in <Strong>Vijayawada, Andhra Pradesh, India</Strong>.
        Parties agree to attempt mediation before litigation.
      </Section>

      <Section title="12. Force Majeure">
        Neither party is liable for delays caused by events beyond reasonable
        control: natural disasters, government actions, internet outages,
        pandemics, or war. Service obligations resume once the event ends.
      </Section>

      <Section title="13. Amendments">
        The Provider may update these terms with 30 days' written notice.
        Continued use after the effective date constitutes acceptance. Material
        commercial changes (e.g., pricing structure) require Institution's
        written acceptance.
      </Section>

      <Section title="14. Contact">
        <Card>
          <P>
            <Strong>Service Provider:</Strong> Infyskill (proprietorship)
            <br />
            <Strong>Product:</Strong> MyCollegeERP
            <br />
            <Strong>Email:</Strong>{' '}
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            <br />
            <Strong>Phone:</Strong> {CONTACT.phone}
            <br />
            <Strong>Address:</Strong> {CONTACT.location}
          </P>
        </Card>
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
function Card({ children }) {
  return (
    <div className="rounded-xl border border-navy-100 bg-navy-50 p-5">
      {children}
    </div>
  );
}
