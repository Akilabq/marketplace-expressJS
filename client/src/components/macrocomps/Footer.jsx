import Logo from '../microcomps/Logo'
const cols = {
  Shop: ['Laptops', 'Phones', 'Gaming', 'Audio'],
  Help: ['Track order', 'Returns', 'Support'],
  Company: ['About us', 'Sell with us', 'Contacts'],
}
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div><Logo /><p style={{ marginTop: 14, maxWidth: 280 }}>One marketplace for gear you actually want.</p></div>
        {Object.entries(cols).map(([title, items]) => (
          <div key={title}><h4>{title}</h4><ul>{items.map((i) => <li key={i}>{i}</li>)}</ul></div>
        ))}
        <p className="footer__copy">© 2026 Marketo. All rights reserved.</p>
      </div>
    </footer>
  )
}
