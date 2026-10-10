export default function SectionHeader({ title, children, linkText }) {
  return (
    <div className="sechead">
      <h2>{title}</h2>
      {children}
      {linkText && <a href="#" className="sechead__link">{linkText}</a>}
    </div>
  )
}
