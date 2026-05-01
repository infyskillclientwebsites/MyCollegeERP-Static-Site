import { ArrowRight, MessageCircle, Mail, Phone, MapPin } from 'lucide-react';
import { CONTACT } from '../../data/content.js';
import ScrollReveal from '../ui/ScrollReveal.jsx';

export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-cta-gradient py-24 text-white sm:py-28"
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 30%, rgba(20, 184, 166, 0.5), transparent 50%), radial-gradient(circle at 80% 70%, rgba(251, 191, 36, 0.35), transparent 50%)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
        aria-hidden="true"
      />

      <div className="container-page relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <ScrollReveal variant="fade">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-amber/30 bg-brand-amber/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-brand-amber">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-amber" />
                Get started today
              </span>
            </ScrollReveal>

            <ScrollReveal variant="up" delay={80}>
              <h2 className="mt-6 font-display text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-6xl xl:text-7xl text-balance">
                Ready to retire spreadsheets?
              </h2>
            </ScrollReveal>

            <ScrollReveal variant="up" delay={160}>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-navy-200 sm:text-xl">
                Book a free 30-minute demo and see how MyCollegeERP can work
                for your college — with your real data. No commitment, no
                credit card.
              </p>
            </ScrollReveal>

            <ScrollReveal variant="up" delay={240}>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href={CONTACT.demoMailto}
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 text-base font-bold text-navy-900 shadow-card-xl transition hover:-translate-y-0.5 hover:bg-brand-bg sm:text-lg"
                >
                  Request Demo
                  <ArrowRight className="h-5 w-5" />
                </a>
                <a
                  href={CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp btn-lg"
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp Us
                </a>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal variant="left" delay={200}>
            <div className="rounded-2xl border border-white/15 bg-white/[0.05] p-8 shadow-card-xl backdrop-blur sm:p-10">
              <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
                Talk to us directly
              </h3>
              <p className="mt-2 text-base text-navy-300">
                {CONTACT.supportHours} · Response within 1 business hour
              </p>

              <div className="mt-7 space-y-4">
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
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ icon: Icon, label, value, href, external }) {
  const content = (
    <>
      <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white/10 text-brand-teal transition group-hover:bg-brand-teal/20 group-hover:scale-110">
        <Icon className="h-5 w-5" />
      </span>
      <span className="flex flex-col">
        <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-navy-400">
          {label}
        </span>
        <span className="text-base font-bold text-white">{value}</span>
      </span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
        className="group flex items-center gap-4 rounded-xl p-2 -m-2 transition hover:bg-white/5"
      >
        {content}
      </a>
    );
  }
  return <div className="group flex items-center gap-4">{content}</div>;
}
