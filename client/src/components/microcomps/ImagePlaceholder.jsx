export default function ImagePlaceholder({ label = 'IMG', light, className = '' }) {
  return <div className={`ph${light ? ' ph--light' : ''} ${className}`}>{label}</div>
}
