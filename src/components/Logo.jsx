import { useState } from 'react';

/**
 * Logo image with PNG-first, SVG-fallback strategy.
 *
 * Tries to load `<name>.png` first (e.g. brand-logo.png).
 * If user hasn't uploaded the PNG yet, falls back to the SVG placeholder
 * shipped in /public so the site never shows a broken image.
 *
 * Usage:
 *   <Logo name="brand-logo" alt="MyCollegeERP" className="h-9 w-9 ..." />
 */
export default function Logo({ name, alt, className, ...rest }) {
  const [src, setSrc] = useState(`/${name}.png`);

  return (
    <img
      src={src}
      alt={alt}
      onError={() => {
        if (!src.endsWith('.svg')) setSrc(`/${name}.svg`);
      }}
      className={className}
      {...rest}
    />
  );
}
