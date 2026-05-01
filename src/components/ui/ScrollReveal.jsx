import { useInView } from '../../hooks/useInView.js';

/**
 * Wraps children with a scroll-triggered entrance animation.
 *
 * variant: 'up' (default) | 'right' | 'left' | 'scale' | 'fade'
 * delay:   ms before animation starts after entering viewport
 */
export default function ScrollReveal({
  children,
  variant = 'up',
  delay = 0,
  threshold = 0.12,
  className = '',
  as: Tag = 'div',
}) {
  const [ref, inView] = useInView({ threshold });

  const initialClass = {
    up: 'opacity-0 translate-y-8',
    right: 'opacity-0 -translate-x-8',
    left: 'opacity-0 translate-x-8',
    scale: 'opacity-0 scale-95',
    fade: 'opacity-0',
  }[variant];

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: inView ? `${delay}ms` : '0ms' }}
      className={`transition-all duration-[800ms] ease-out will-change-transform ${
        inView ? 'opacity-100 translate-y-0 translate-x-0 scale-100' : initialClass
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
