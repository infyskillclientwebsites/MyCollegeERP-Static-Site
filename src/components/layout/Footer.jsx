import { Mail, Phone, MessageCircle, MapPin, ExternalLink } from 'lucide-react';
import { CONTACT } from '../../data/content.js';
import Logo from '../Logo.jsx';

/**
 * Footer dispatches `legal:open` events that App.jsx listens for to open
 * Privacy / Terms / Refund modals. This avoids prop-drilling state through
 * many layers.
 */
function openLegal(name) {
  window.dispatchEvent(new CustomEvent('legal:open', { detail: name }));
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-900 text-navy-200">
      <div className="accent-strip" />

      {/* Brand watermark — huge "MyCollegeERP" rendered in display font as a
          subtle shade behind all content. Uses fluid font-size so it scales
          responsively from phone to ultrawide. Sits below content via z-0
          while the rest of the footer carries z-10. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 flex select-none items-end justify-center"
      >
        <span
          className="block whitespace-nowrap bg-gradient-to-r from-white via-brand-teal to-brand-blue bg-clip-text text-center font-display font-extrabold leading-[0.85] tracking-tighter text-transparent"
          style={{
            fontSize: 'clamp(4rem, 19vw, 17rem)',
            opacity: 0.07,
            transform: 'translateY(18%)',
          }}
        >
          MyCollegeERP
        </span>
      </div>

      <div className="container-page relative z-10 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <Logo
                name="brand-logo"
                alt="MyCollegeERP"
                className="h-14 w-14 rounded-lg bg-white/95 p-1 object-contain"
              />
              <div>
                <div className="font-display text-2xl font-bold text-white">
                  MyCollege<span className="text-brand-teal">ERP</span>
                </div>
                <div className="text-xs font-bold uppercase tracking-[0.18em] text-navy-400">
                  Admission to Alumni, All in One
                </div>
              </div>
            </div>
            <p className="mt-6 max-w-md text-base leading-relaxed text-navy-300">
              The complete multi-tenant ERP for Indian junior and intermediate
              colleges. Manage admissions, fees, exams, payroll, hostel and
              alumni from one secure dashboard.
            </p>

            <div className="mt-7 space-y-3 text-sm">
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-3 text-navy-200 transition hover:text-white"
              >
                <Mail className="h-4 w-4 text-brand-teal" />
                {CONTACT.email}
              </a>
              <a
                href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-3 text-navy-200 transition hover:text-white"
              >
                <Phone className="h-4 w-4 text-brand-teal" />
                {CONTACT.phone}
              </a>
              <a
                href={CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-navy-200 transition hover:text-white"
              >
                <MessageCircle className="h-4 w-4 text-brand-teal" />
                WhatsApp us
              </a>
              <div className="flex items-center gap-3 text-navy-300">
                <MapPin className="h-4 w-4 text-brand-teal" />
                {CONTACT.location}
              </div>
            </div>
          </div>

          <FooterColumn
            title="Product"
            links={[
              { label: 'Features', href: '#features' },
              { label: 'Pricing', href: '#pricing' },
              { label: 'Security', href: '#security' },
              { label: 'Sign in', href: CONTACT.appUrl, external: true },
            ]}
          />
          <FooterColumn
            title="Support"
            links={[
              { label: 'Contact', href: '#contact' },
              { label: 'Request demo', href: CONTACT.demoMailto },
              { label: 'WhatsApp', href: CONTACT.whatsappUrl, external: true },
              { label: 'Support hours', href: '#contact' },
            ]}
          />
          <FooterColumn
            title="Legal"
            links={[
              {
                label: 'Privacy Policy',
                onClick: () => openLegal('privacy'),
              },
              {
                label: 'Terms of Service',
                onClick: () => openLegal('terms'),
              },
              {
                label: 'Refund Policy',
                onClick: () => openLegal('refund'),
              },
              { label: 'About us', href: '#about' },
            ]}
          />
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-navy-700 pt-7 sm:flex-row sm:items-center">
          <p className="text-sm text-navy-400">
            © {new Date().getFullYear()} MyCollegeERP. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 text-sm text-navy-400">
            A product by{' '}
            <a
              href={CONTACT.parentSite}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-bold text-brand-teal transition hover:text-white"
            >
              {CONTACT.parentName}
              <ExternalLink className="h-3 w-3" />
            </a>
            <span className="hidden sm:inline">·</span>
            <span>Made in India 🇮🇳</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <h4 className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-white">
        {title}
      </h4>
      <ul className="space-y-3 text-sm">
        {links.map((link) => (
          <li key={link.label}>
            {link.onClick ? (
              <button
                type="button"
                onClick={link.onClick}
                className="text-left text-navy-300 transition hover:text-white"
              >
                {link.label}
              </button>
            ) : (
              <a
                href={link.href}
                {...(link.external && {
                  target: '_blank',
                  rel: 'noopener noreferrer',
                })}
                className="text-navy-300 transition hover:text-white"
              >
                {link.label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
