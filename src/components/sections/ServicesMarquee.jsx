import { SERVICES_LIST } from '../../data/sampleData.js';
import Marquee from '../ui/Marquee.jsx';
import ScrollReveal from '../ui/ScrollReveal.jsx';

/**
 * Single-row infinite-scrolling band of every module the product offers.
 * Replaces the (misleading) college-names marquee — every chip here is a
 * real shipped feature.
 */
export default function ServicesMarquee() {
  return (
    <section className="border-y border-navy-100 bg-white py-12">
      <ScrollReveal variant="fade">
        <p className="text-center text-xs font-bold uppercase tracking-[0.22em] text-navy-500">
          Everything your college needs · all in one platform
        </p>
      </ScrollReveal>

      {/* Single row — scrolls left-to-right (rightward) at a lively pace */}
      <div className="relative mt-7 gradient-mask-r">
        <Marquee speed={28} reverse>
          {SERVICES_LIST.map((service) => (
            <div
              key={service}
              className="mx-3 flex items-center whitespace-nowrap rounded-full border border-navy-100 bg-gradient-to-br from-white to-brand-bg px-6 py-3 text-base font-bold text-navy-800 shadow-sm transition hover:border-brand-blue/30 hover:shadow-card sm:mx-4 sm:px-7 sm:py-3.5 sm:text-lg"
            >
              {service}
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
