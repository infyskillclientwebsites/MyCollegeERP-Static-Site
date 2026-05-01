import { Mail, Phone, MessageCircle, MapPin } from 'lucide-react';
import { CONTACT } from '../data/content.js';
import Logo from './Logo.jsx';

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-navy-200">
      <div className="accent-strip" />
      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <Logo
                name="brand-logo"
                alt="MyCollegeERP"
                className="h-10 w-10 rounded-md bg-white/95 p-1 object-contain"
              />
              <div>
                <div className="font-display text-xl font-bold text-white">
                  MyCollege<span className="text-brand-teal">ERP</span>
                </div>
                <div className="text-xs uppercase tracking-wider text-navy-400">
                  Admission to Alumni, All in One
                </div>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-navy-300">
              The complete multi-tenant ERP for Indian junior and intermediate
              colleges. Manage admissions, fees, exams, payroll, hostel and
              alumni from one secure dashboard.
            </p>

            <div className="mt-6 space-y-2.5 text-sm">
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-2.5 text-navy-200 hover:text-white"
              >
                <Mail className="h-4 w-4 text-brand-teal" />
                {CONTACT.email}
              </a>
              <a
                href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-2.5 text-navy-200 hover:text-white"
              >
                <Phone className="h-4 w-4 text-brand-teal" />
                {CONTACT.phone}
              </a>
              <a
                href={CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-navy-200 hover:text-white"
              >
                <MessageCircle className="h-4 w-4 text-brand-teal" />
                WhatsApp us
              </a>
              <div className="flex items-center gap-2.5 text-navy-300">
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
              {
                label: 'Sign in',
                href: CONTACT.appUrl,
                external: true,
              },
            ]}
          />
          <FooterColumn
            title="Support"
            links={[
              { label: 'Contact', href: '#contact' },
              { label: 'Request demo', href: CONTACT.demoMailto },
              {
                label: 'WhatsApp',
                href: CONTACT.whatsappUrl,
                external: true,
              },
              { label: 'Support hours', href: '#contact' },
            ]}
          />
          <FooterColumn
            title="Company"
            links={[
              { label: 'About', href: '#about' },
              { label: 'Privacy Policy', href: '#' },
              { label: 'Terms of Service', href: '#' },
              { label: 'Refund Policy', href: '#' },
            ]}
          />
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-navy-700 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-navy-400">
            © {new Date().getFullYear()} MyCollegeERP. All rights reserved.
          </p>
          <p className="text-xs text-navy-400">
            A product by{' '}
            <span className="font-semibold text-navy-200">Infyskill</span> ·
            Made in India
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-white">
        {title}
      </h4>
      <ul className="space-y-2.5 text-sm">
        {links.map((link) => (
          <li key={link.label}>
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
          </li>
        ))}
      </ul>
    </div>
  );
}
