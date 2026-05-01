/**
 * Infinite horizontal scrolling track. Children render twice for seamless loop.
 *
 * The inner track carries `motion-continuous` — a class that is intentionally
 * exempt from the global `prefers-reduced-motion` reset in index.css. We do
 * this because marquees are *decorative ambient motion* (no flashing, no
 * sudden movement) and matter for the site's liveliness. Entrance animations
 * and transitions are still respectful of the reduced-motion preference.
 *
 * Use the `gradient-mask-r` utility on parent for fade edges.
 */
export default function Marquee({
  children,
  reverse = false,
  speed = 40,
  pauseOnHover = true,
  className = '',
}) {
  return (
    <div className={`flex w-full overflow-hidden ${className}`}>
      <div
        className={`motion-continuous flex shrink-0 items-center ${pauseOnHover ? 'hover:[animation-play-state:paused]' : ''}`}
        style={{
          animation: `${reverse ? 'marquee-reverse' : 'marquee'} ${speed}s linear infinite`,
        }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
