import { Link } from 'react-router-dom'

/**
 * Unified button primitive.
 * variant: primary | secondary | whatsapp | ghost
 * Renders a <Link> when `to` is given, an <a> when `href` is given.
 */
export default function Button({
  children,
  variant = 'primary',
  size,
  to,
  href,
  onClick,
  className = '',
  type = 'button',
  ...rest
}) {
  const classes = [
    'btn',
    `btn--${variant}`,
    size ? `btn--${size}` : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick} {...rest}>
        {children}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} onClick={onClick} {...rest}>
        {children}
      </a>
    )
  }
  return (
    <button type={type} className={classes} onClick={onClick} {...rest}>
      {children}
    </button>
  )
}
