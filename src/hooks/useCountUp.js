import { useEffect, useState } from 'react';

/**
 * Animate a number from 0 → end when `start` flips true.
 * Uses requestAnimationFrame and an ease-out curve so the number
 * decelerates as it approaches the target — feels more natural.
 */
export function useCountUp({ end, duration = 1800, start = true, decimals = 0 }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    let rafId;
    const startTime = performance.now();

    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic: 1 - (1 - p)^3
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(eased * end);
      if (progress < 1) rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [end, duration, start]);

  const factor = Math.pow(10, decimals);
  return Math.round(value * factor) / factor;
}
