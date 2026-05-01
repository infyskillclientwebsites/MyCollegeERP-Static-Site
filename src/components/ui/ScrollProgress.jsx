import { useEffect, useState } from 'react';

/**
 * Thin progress bar at the very top of the page that fills as the user
 * scrolls down. Subtle but adds polish — visitors get a sense of how much
 * content remains.
 */
export default function ScrollProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setPct(Math.min(100, Math.max(0, progress)));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-1 bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-brand-blue via-brand-teal to-brand-amber transition-[width] duration-100"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}
