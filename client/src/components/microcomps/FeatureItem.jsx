export default function FeatureItem({ mark, title, text }) {
  return (
    <div className="feature">
      <div className="feature__mark">{mark}</div>
      <div><strong>{title}</strong><span>{text}</span></div>
    </div>
  )
}
