import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

/**
 * Floating "back to top" button. Appears once the user has scrolled past
 * 600px. Positioned bottom-LEFT to avoid clashing with the chat widget on
 * the bottom-right.
 */
export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      onClick={goTop}
      aria-label="Back to top"
      className={`fixed bottom-5 left-4 z-[70] flex h-12 w-12 items-center justify-center rounded-full border border-navy-200 bg-white text-navy-700 shadow-card-xl transition-all hover:-translate-y-0.5 hover:border-brand-blue hover:bg-brand-blue hover:text-white sm:bottom-6 sm:left-6 sm:h-14 sm:w-14 ${
        show
          ? 'translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <ArrowUp className="h-5 w-5 transition group-hover:-translate-y-0.5" />
    </button>
  );
}
