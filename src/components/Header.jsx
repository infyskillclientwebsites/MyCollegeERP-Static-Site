import { useEffect, useState } from 'react';
import { Menu, X, LogIn } from 'lucide-react';
import { CONTACT, NAV_LINKS } from '../data/content.js';
import Logo from './Logo.jsx';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full backdrop-blur transition-all ${
        scrolled
          ? 'bg-white/85 border-b border-navy-100 shadow-sm'
          : 'bg-white/60'
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <a href="#home" className="flex items-center gap-2.5">
          <Logo
            name="brand-logo"
            alt="MyCollegeERP"
            className="h-9 w-9 rounded-md object-contain"
          />
          <div className="flex flex-col leading-none">
            <span className="font-display text-lg font-bold text-navy-900">
              MyCollege<span className="text-brand-teal">ERP</span>
            </span>
            <span className="hidden text-[10px] font-medium uppercase tracking-wider text-navy-500 sm:block">
              Admission to Alumni
            </span>
          </div>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-navy-700 transition hover:bg-navy-100 hover:text-navy-900"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={CONTACT.appUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            <LogIn className="h-4 w-4" />
            Sign in
          </a>
          <a href={CONTACT.demoMailto} className="btn-accent">
            Request Demo
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2 text-navy-900 hover:bg-navy-100 lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-navy-100 bg-white lg:hidden">
          <nav className="container-page flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-navy-700 hover:bg-navy-100"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 flex flex-col gap-2 border-t border-navy-100 pt-3">
              <a
                href={CONTACT.appUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <LogIn className="h-4 w-4" />
                Sign in to Dashboard
              </a>
              <a href={CONTACT.demoMailto} className="btn-accent">
                Request Demo
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
