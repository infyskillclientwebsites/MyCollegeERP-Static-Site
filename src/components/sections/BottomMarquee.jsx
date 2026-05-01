import { ArrowRight, MessageCircle } from 'lucide-react';
import { CONTACT } from '../../data/content.js';
import Marquee from '../ui/Marquee.jsx';

const BENEFITS = [
  '⚡ Live in 24 hours',
  '₹0 setup fee',
  '🛡️ 100% data isolation',
  '📱 Works on any device',
  '🇮🇳 Made in India',
  '🌱 Founding-member pricing',
  '📤 Export your data anytime',
  '🔒 OTP-secured login',
  '📊 Audit trail on every action',
  '💬 WhatsApp support',
];

/**
 * Final attention strip before footer — emphasizes commitments + CTA.
 * Bold gradient background to stand out from the section above.
 */
export default function BottomMarquee() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-navy-900 via-brand-blue to-navy-900 py-10 text-white">
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage:
          'radial-gradient(circle at 50% 50%, rgba(20, 184, 166, 0.4), transparent 50%)',
      }} aria-hidden="true" />

      <div className="relative">
        <div className="container-page mb-5 flex flex-wrap items-center justify-center gap-4 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-teal">
            ✨ Why colleges pick MyCollegeERP
          </p>
        </div>

        <div className="gradient-mask-r">
          <Marquee speed={22} reverse>
            {BENEFITS.map((item) => (
              <div
                key={item}
                className="mx-3 flex items-center whitespace-nowrap rounded-full border border-white/20 bg-white/5 px-6 py-3 text-base font-bold text-white shadow-sm backdrop-blur-sm transition hover:bg-white/10 sm:mx-4 sm:px-7 sm:py-3.5 sm:text-lg"
              >
                {item}
              </div>
            ))}
          </Marquee>
        </div>

        <div className="container-page mt-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href={CONTACT.demoMailto}
            className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-navy-900 shadow-card-xl transition hover:-translate-y-0.5 hover:bg-brand-bg sm:text-base"
          >
            Book a free demo
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href={CONTACT.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border-2 border-white/30 bg-transparent px-6 py-3 text-sm font-bold text-white transition hover:border-white hover:bg-white/10 sm:text-base"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp us
          </a>
        </div>
      </div>
    </section>
  );
}
