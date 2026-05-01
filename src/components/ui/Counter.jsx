import { useInView } from '../../hooks/useInView.js';
import { useCountUp } from '../../hooks/useCountUp.js';

/**
 * Animated counter that counts up from 0 → end when scrolled into view.
 *
 * Props:
 *   end       — final number (e.g., 847)
 *   prefix    — string before the number (e.g., "₹")
 *   suffix    — string after the number (e.g., "+", "%", "L")
 *   decimals  — decimal places to display
 *   duration  — animation length in ms
 *   className — pass-through styles
 */
export default function Counter({
  end,
  prefix = '',
  suffix = '',
  decimals = 0,
  duration = 1800,
  className = '',
  formatThousands = true,
}) {
  const [ref, inView] = useInView({ threshold: 0.4 });
  const value = useCountUp({ end, duration, start: inView, decimals });

  const formatted = formatThousands
    ? value.toLocaleString('en-IN', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })
    : value.toFixed(decimals);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
