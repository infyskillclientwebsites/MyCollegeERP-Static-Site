import { ArrowRight, MessageCircle, Mail, Phone, MapPin } from 'lucide-react';
import { CONTACT } from '../data/content.js';

export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-cta-gradient py-20 text-white sm:py-24"
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 30%, rgba(20, 184, 166, 0.4), transparent 50%), radial-gradient(circle at 80% 70%, rgba(251, 191, 36, 0.3), transparent 50%)',
        }}
        aria-hidden="true"
      />

      <div className="container-page relative">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-amber/30 bg-brand-amber/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-amber">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-amber" />
              Get started today
            </span>

            <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl text-balance">
              Ready to retire spreadsheets?
            </h2>

            <p className="mt-5 max-w-lg text-base leading-relaxed text-navy-200 sm:text-lg">
              Book a free 30-minute demo and see how MyCollegeERP can work for
              your college — with your real data. No commitment, no credit
              card.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={CONTACT.demoMailto}
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-navy-900 shadow-card-hover transition hover:-translate-y-0.5 hover:bg-brand-bg"
              >
                Request Demo
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Us
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur sm:p-8">
            <h3 className="font-display text-xl font-bold text-white">
              Talk to us directly
            </h3>
            <p className="mt-2 text-sm text-navy-300">
              {CONTACT.supportHours} · Response within 1 business hour
            </p>

            <div className="mt-6 space-y-4">
              <ContactRow
                icon={Mail}
                label="Email"
                value={CONTACT.email}
                href={`mailto:${CONTACT.email}`}
              />
              <ContactRow
                icon={Phone}
                label="Phone"
                value={CONTACT.phone}
                href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}
              />
              <ContactRow
                icon={MessageCircle}
                label="WhatsApp"
                value={CONTACT.phone}
                href={CONTACT.whatsappUrl}
                external
              />
              <ContactRow
                icon={MapPin}
                label="Location"
                value={CONTACT.location}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ icon: Icon, label, value, href, external }) {
  const content = (
    <>
      <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-white/10 text-brand-teal">
        <Icon className="h-5 w-5" />
      </span>
      <span className="flex flex-col">
        <span className="text-[11px] font-semibold uppercase tracking-wider text-navy-400">
          {label}
        </span>
        <span className="text-sm font-medium text-white">{value}</span>
      </span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
        className="flex items-center gap-3 rounded-lg p-2 -m-2 transition hover:bg-white/5"
      >
        {content}
      </a>
    );
  }
  return <div className="flex items-center gap-3">{content}</div>;
}
