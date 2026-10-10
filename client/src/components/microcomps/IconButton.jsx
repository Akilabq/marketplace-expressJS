import Icon from './Icon'
export default function IconButton({ icon, label, count, onClick, ...buttonProps }) {
  return (
    <button className="iconbtn" aria-label={label} onClick={onClick} {...buttonProps}>
      <Icon name={icon} />
      {count > 0 && <span className="badge-dot">{count}</span>}
    </button>
  )
}
