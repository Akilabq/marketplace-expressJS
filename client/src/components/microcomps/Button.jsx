export default function Button({ variant = 'red', small, className = '', children, ...props }) {
  return <button className={`btn btn--${variant}${small ? ' btn--sm' : ''}${className ? ` ${className}` : ''}`} {...props}>{children}</button>
}
