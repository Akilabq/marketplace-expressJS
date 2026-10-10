export default function Pill({ children, red, gray }) {
  return <span className={`pill${red ? ' pill--red' : ''}${gray ? ' pill--gray' : ''}`}>{children}</span>
}
