import LegalModal from '../ui/LegalModal.jsx';
import { CONTACT } from '../../data/content.js';

export default function RefundPolicy({ open, onClose }) {
  return (
    <LegalModal
      open={open}
      onClose={onClose}
      title="Refund & Cancellation Policy"
      lastUpdated="01 May 2026"
    >
      <Section title="1. Our Commitment">
        We want you to be confident in choosing MyCollegeERP. This policy
        explains how and when refunds are issued. It is drafted in line with
        the <Strong>Consumer Protection Act, 2019</Strong> and standard SaaS
        industry practices applicable to Indian educational institutions.
      </Section>

      <Section title="2. Free Trial / Pilot Period">
        <P>
          Every new Institution gets a <Strong>14-day pilot period</Strong>{' '}
          during which:
        </P>
        <ul>
          <li>No charges are billed</li>
          <li>Full access to all subscribed modules</li>
          <li>Onboarding and training included</li>
          <li>Cancel any time during pilot — no questions asked</li>
        </ul>
        <P>
          If you cancel during the pilot, no invoice is generated and no payment
          is required.
        </P>
      </Section>

      <Section title="3. Annual Subscription Refunds">
        <P>
          For Institutions that pay annually upfront, refunds are issued on a{' '}
          <Strong>pro-rated basis</Strong>:
        </P>
        <ul>
          <li>
            <Strong>Within 30 days of go-live:</Strong> Full refund of unused
            months, minus the cost of the months used
          </li>
          <li>
            <Strong>Between 31–90 days of go-live:</Strong> Pro-rated refund of
            unused months, minus a 10% administrative fee
          </li>
          <li>
            <Strong>After 90 days:</Strong> No refund. Subscription continues
            until end of paid term, after which it can be terminated.
          </li>
        </ul>
      </Section>

      <Section title="4. Monthly Subscription Refunds">
        <P>
          For monthly billing, the Institution may cancel at any time. The
          current month's charges are non-refundable but no further charges
          will be raised. Service continues until the end of the paid month.
        </P>
      </Section>

      <Section title="5. Service Failure Refunds">
        <P>
          If the Service fails to meet our committed availability targets (see
          Terms of Service §6) due to issues entirely on our side:
        </P>
        <ul>
          <li>
            <Strong>Below 99.5% but above 95% monthly uptime:</Strong> 5%
            credit applied to next month's invoice
          </li>
          <li>
            <Strong>Below 95% monthly uptime:</Strong> 25% credit applied to
            next month's invoice
          </li>
          <li>
            <Strong>Below 90% monthly uptime:</Strong> 50% credit + Institution
            may terminate with full refund of remaining term
          </li>
        </ul>
        <P>
          Outages caused by Institution-side issues (e.g., internet, browser,
          incorrect configuration) or Force Majeure events do not qualify for
          credit.
        </P>
      </Section>

      <Section title="6. Founding Member Protection">
        <P>
          Institutions enrolled in our Founding Member program enjoy enhanced
          refund terms:
        </P>
        <ul>
          <li>
            <Strong>Full refund within first 60 days</Strong> if the Service
            does not meet documented expectations
          </li>
          <li>
            Direct escalation to the founder for any refund dispute
          </li>
          <li>
            Free data migration assistance if you choose to leave for any reason
          </li>
        </ul>
      </Section>

      <Section title="7. Non-Refundable Items">
        <P>The following are non-refundable under any circumstance:</P>
        <ul>
          <li>One-time custom development or integration work</li>
          <li>Third-party costs incurred on Institution's behalf (e.g., SMS gateway top-ups)</li>
          <li>On-site training expenses already incurred (travel, accommodation)</li>
          <li>GST already remitted to the Government of India</li>
        </ul>
      </Section>

      <Section title="8. Refund Process">
        <P>To request a refund:</P>
        <ol>
          <li>
            Email{' '}
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> from the
            Institution's registered email address
          </li>
          <li>Include reason for refund and original invoice number</li>
          <li>
            Provide bank account details (for NEFT) or UPI ID for refund
            disbursement
          </li>
        </ol>
        <P>
          <Strong>Processing time:</Strong> Approved refunds are processed
          within <Strong>10 business days</Strong> via the original payment
          method where possible, or NEFT/UPI to the registered Institution
          account. Refunds always go back to the Institution's official bank
          account, never to individuals.
        </P>
      </Section>

      <Section title="9. Data Export Before Cancellation">
        <P>
          Before terminating, we strongly recommend exporting all your data via
          the in-app CSV/PDF export tools or by emailing{' '}
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> to request a
          full database dump. After cancellation, data is retained for 90 days
          (during which restoration is possible) and then permanently deleted.
        </P>
      </Section>

      <Section title="10. Dispute Resolution">
        <P>
          If you disagree with a refund decision, you may escalate as follows:
        </P>
        <ol>
          <li>
            Initial review: <Strong>Customer Success</Strong> ({CONTACT.email})
          </li>
          <li>
            Escalation 1: <Strong>Founder / Director, Infyskill</Strong>{' '}
            (response within 5 business days)
          </li>
          <li>
            Escalation 2: <Strong>Mediation</Strong> via mutual agreement
          </li>
          <li>
            Final: <Strong>Courts of Vijayawada, Andhra Pradesh</Strong>{' '}
            (per Terms of Service §11)
          </li>
        </ol>
      </Section>

      <Section title="11. Contact">
        <Card>
          <P>
            <Strong>Refund Coordinator</Strong>
            <br />
            <Strong>Email:</Strong>{' '}
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            <br />
            <Strong>Phone / WhatsApp:</Strong> {CONTACT.phone}
            <br />
            <Strong>Hours:</Strong> {CONTACT.supportHours}
            <br />
            <Strong>Response:</Strong> within 2 business days for refund
            queries
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
