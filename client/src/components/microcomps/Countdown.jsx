import { useEffect, useState } from 'react'
const pad = (n) => String(n).padStart(2, '0')
export default function Countdown({ days = 16 }) {
  const [end] = useState(() => Date.now() + days * 864e5)
  const [left, setLeft] = useState(end - Date.now())
  useEffect(() => {
    const t = setInterval(() => setLeft(end - Date.now()), 1000)
    return () => clearInterval(t)
  }, [end])
  const s = Math.max(0, Math.floor(left / 1000))
  return (
    <div className="countdown">
      <span>Deals end in</span>
      <b>{Math.floor(s / 86400)}d {pad(Math.floor(s / 3600) % 24)}h {pad(Math.floor(s / 60) % 60)}m {pad(s % 60)}s</b>
    </div>
  )
}
