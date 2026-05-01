import ScrollReveal from './ScrollReveal.jsx';

/**
 * Standard section heading layout: pill tag → big heading → lead paragraph.
 * Use `dark` variant for the dark Security/CTA sections.
 */
export default function SectionHeading({
  tag,
  tagIcon: Icon,
  title,
  description,
  dark = false,
  align = 'center',
  className = '',
}) {
  const alignClass = align === 'left' ? 'text-left' : 'mx-auto text-center';

  return (
    <div className={`max-w-3xl ${alignClass} ${className}`}>
      {tag && (
        <ScrollReveal variant="fade">
          <span className={dark ? 'section-tag-dark' : 'section-tag'}>
            {Icon && <Icon className="h-3.5 w-3.5" />}
            {tag}
          </span>
        </ScrollReveal>
      )}
      <ScrollReveal variant="up" delay={80}>
        <h2
          className={`heading-section mt-5 ${dark ? 'text-white' : ''}`}
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </ScrollReveal>
      {description && (
        <ScrollReveal variant="up" delay={160}>
          <p className={`lead mt-5 ${dark ? '!text-navy-300' : ''}`}>
            {description}
          </p>
        </ScrollReveal>
      )}
    </div>
  );
}
