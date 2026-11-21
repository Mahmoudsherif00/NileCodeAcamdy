export default function Container({ wide = false, className = '', children, ...rest }) {
  return (
    <div className={`${wide ? 'container-wide' : 'container'} ${className}`.trim()} {...rest}>
      {children}
    </div>
  )
}
