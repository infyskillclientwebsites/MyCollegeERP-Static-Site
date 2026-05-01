import { useEffect, useState } from 'react';
import {
  MessageSquare,
  X,
  Mail,
  Phone,
  CalendarClock,
  Send,
  HelpCircle,
} from 'lucide-react';
import { CONTACT } from '../../data/content.js';

/**
 * Lightweight floating chat widget. No backend — buttons launch the user
 * into WhatsApp / email / phone with a pre-filled message. Perfect for a
 * startup site that wants a "we're available" presence without paying for
 * Crisp / Intercom.
 */
const QUICK_QUESTIONS = [
  {
    icon: CalendarClock,
    label: 'Book a demo',
    href: CONTACT.demoMailto,
    description: 'See it with your data — 30 min',
  },
  {
    icon: HelpCircle,
    label: 'Pricing question',
    href: CONTACT.pricingMailto,
    description: 'Get a custom quote',
  },
  {
    icon: Send,
    label: 'WhatsApp us now',
    href: CONTACT.whatsappUrl,
    external: true,
    description: 'Fastest way · usually under 10 min',
    accent: true,
  },
];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [poke, setPoke] = useState(false);

  // Show a subtle "poke" animation 8 seconds after mount, once
  useEffect(() => {
    const t = setTimeout(() => setPoke(true), 8000);
    const t2 = setTimeout(() => setPoke(false), 12000);
    return () => {
      clearTimeout(t);
      clearTimeout(t2);
    };
  }, []);

  return (
    <>
      {/* Panel */}
      {open && (
        <div className="fixed bottom-24 right-4 z-[70] w-[calc(100vw-2rem)] max-w-sm origin-bottom-right animate-scale-in overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-card-xl sm:right-6">
          {/* Header */}
          <div className="bg-gradient-to-br from-brand-blue to-brand-teal px-5 py-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 backdrop-blur">
                  <MessageSquare className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-sm font-bold">MyCollegeERP Support</div>
                  <div className="flex items-center gap-1.5 text-[11px] opacity-90">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-75" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-300" />
                    </span>
                    Online · {CONTACT.supportHours}
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="rounded-full p-1 hover:bg-white/10"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Messages area */}
          <div className="max-h-[60vh] overflow-y-auto bg-brand-bg p-5">
            <div className="rounded-2xl rounded-tl-md bg-white p-4 shadow-sm">
              <p className="text-sm leading-relaxed text-navy-800">
                Hi! 👋 Welcome to MyCollegeERP.
              </p>
              <p className="mt-2 text-sm leading-relaxed text-navy-700">
                We're a small team building this for Indian colleges. Pick a
                quick option below — or ping us on WhatsApp for the fastest
                reply.
              </p>
              <p className="mt-2 text-[11px] text-navy-500">
                Typical reply: under 10 minutes
              </p>
            </div>

            <div className="mt-4 space-y-2">
              {QUICK_QUESTIONS.map((q) => {
                const Icon = q.icon;
                return (
                  <a
                    key={q.label}
                    href={q.href}
                    {...(q.external && {
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    })}
                    className={`flex items-center gap-3 rounded-xl border px-4 py-3 transition ${
                      q.accent
                        ? 'border-emerald-300 bg-emerald-50 hover:border-emerald-500 hover:bg-emerald-100'
                        : 'border-navy-100 bg-white hover:border-brand-blue/30 hover:shadow-sm'
                    }`}
                  >
                    <span
                      className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg ${
                        q.accent
                          ? 'bg-emerald-500 text-white'
                          : 'bg-brand-blue/10 text-brand-blue'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                    <div className="flex-1">
                      <div className="text-sm font-bold text-navy-900">
                        {q.label}
                      </div>
                      <div className="text-[11px] text-navy-500">
                        {q.description}
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Direct contact */}
            <div className="mt-4 grid grid-cols-2 gap-2 border-t border-navy-100 pt-4">
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-2 rounded-lg border border-navy-100 bg-white px-3 py-2 text-xs font-semibold text-navy-700 transition hover:border-navy-900"
              >
                <Mail className="h-3.5 w-3.5" />
                Email
              </a>
              <a
                href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-2 rounded-lg border border-navy-100 bg-white px-3 py-2 text-xs font-semibold text-navy-700 transition hover:border-navy-900"
              >
                <Phone className="h-3.5 w-3.5" />
                Call
              </a>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-navy-100 bg-white px-5 py-3 text-center">
            <p className="text-[11px] text-navy-500">
              Powered by MyCollegeERP · Real humans, not bots
            </p>
          </div>
        </div>
      )}

      {/* Trigger button */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Close chat' : 'Open chat'}
        className={`fixed bottom-5 right-4 z-[70] flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-brand-teal text-white shadow-card-xl transition hover:-translate-y-0.5 hover:shadow-glow sm:bottom-6 sm:right-6 sm:h-16 sm:w-16 ${
          poke && !open ? 'animate-pulse' : ''
        }`}
      >
        {open ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageSquare className="h-6 w-6" />
        )}
        {!open && (
          <span className="absolute -right-1 -top-1 flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500 ring-2 ring-white" />
          </span>
        )}
      </button>
    </>
  );
}
