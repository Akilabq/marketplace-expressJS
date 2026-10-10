import { useEffect, useRef, useState } from 'react'
import Logo from '../microcomps/Logo'
import SearchBar from '../microcomps/SearchBar'
import IconButton from '../microcomps/IconButton'

const cartItems = [
  { id: 1, name: 'Game Console Pro, 1 TB', price: 499, quantity: 1 },
  { id: 4, name: 'Wireless Game Controller', price: 59, quantity: 1 },
]

export default function MainHeader({ onAccountClick }) {
  const [cartOpen, setCartOpen] = useState(false)
  const cartRef = useRef(null)

  useEffect(() => {
    if (!cartOpen) return undefined

    function closeOnOutsideClick(event) {
      if (!cartRef.current?.contains(event.target)) setCartOpen(false)
    }

    function closeOnEscape(event) {
      if (event.key === 'Escape') setCartOpen(false)
    }

    document.addEventListener('mousedown', closeOnOutsideClick)
    document.addEventListener('keydown', closeOnEscape)
    return () => {
      document.removeEventListener('mousedown', closeOnOutsideClick)
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [cartOpen])

  const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)

  return (
    <header className="header">
      <div className="container">
        <Logo />
        <SearchBar />
        <div className="header__actions">
          <div className="header__cart" ref={cartRef}>
            <IconButton
              icon="cart"
              label="Cart"
              count={2}
              onClick={() => setCartOpen(!cartOpen)}
              aria-expanded={cartOpen}
              aria-haspopup="dialog"
            />
            {cartOpen && (
              <section className="cart-popover" role="dialog" aria-label="Your shopping cart">
                <div className="cart-popover__heading">
                  <h2>Your cart <span>({cartItems.length} items)</span></h2>
                  <button type="button" aria-label="Close cart" onClick={() => setCartOpen(false)}>×</button>
                </div>
                <div className="cart-popover__items">
                  {cartItems.map((item) => (
                    <div className="cart-popover__item" key={item.id}>
                      <span className="cart-popover__image" aria-hidden="true">PRODUCT</span>
                      <span className="cart-popover__details">
                        <strong>{item.name}</strong>
                        <span>Qty: {item.quantity}</span>
                      </span>
                      <strong className="cart-popover__price">${item.price.toFixed(2)}</strong>
                    </div>
                  ))}
                </div>
                <div className="cart-popover__total">
                  <span>Subtotal</span>
                  <strong>${cartTotal.toFixed(2)}</strong>
                </div>
                <button
                  className="cart-popover__continue"
                  type="button"
                  onClick={() => setCartOpen(false)}
                >
                  Continue shopping
                </button>
              </section>
            )}
          </div>
          <IconButton icon="heart" label="Wishlist" />
          <IconButton icon="user" label="Account" onClick={onAccountClick} />
        </div>
      </div>
    </header>
  )
}
