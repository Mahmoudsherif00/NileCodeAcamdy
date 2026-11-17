/**
 * Section container with the shared eyebrow / title / subtitle header.
 */
export default function Section({ eyebrow, title, subtitle, children, className = '', wide = false, ...rest }) {
  const Comp = wide ? 'div' : 'div'
  return (
    <section className={`section ${className}`.trim()} {...rest}>
      <div className={wide ? 'container-wide' : 'container'}>
        {(eyebrow || title) && (
          <header className="section-head">
            {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
            {title && <h2 className="section-title">{title}</h2>}
            {subtitle && <p className="section-subtitle">{subtitle}</p>}
          </header>
        )}
        {children}
      </div>
    </section>
  )
}
