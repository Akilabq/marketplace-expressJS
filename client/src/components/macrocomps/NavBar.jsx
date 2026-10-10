import { useEffect, useRef, useState } from 'react'
import { navLinks } from '../../data/mock'

const categories = [
  { name: 'Laptops', subcategories: ['Windows laptops', 'MacBooks', 'Chromebooks', 'Laptop accessories'] },
  { name: 'Phones', subcategories: ['iPhone', 'Samsung', 'Google Pixel', 'Phone accessories'] },
  { name: 'Gaming', subcategories: ['Consoles', 'Video games', 'Controllers', 'Gaming accessories'] },
  { name: 'Audio', subcategories: ['Headphones', 'Wireless earbuds', 'Speakers', 'Microphones'] },
  { name: 'TV & Home', subcategories: ['Televisions', 'Smart home', 'Cameras', 'Home appliances'] },
]

const featuredProducts = [
  { name: 'Samsung Galaxy S21 5G', category: 'Phones', price: '$160' },
  { name: 'Wireless gaming headset', category: 'Gaming', price: '$79' },
  { name: 'Studio headphones X8', category: 'Audio', price: '$129' },
]

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState(categories[0])
  const menuRef = useRef(null)
  const currentProducts = featuredProducts.filter((product) => product.category === activeCategory.name)
  const productsToShow = currentProducts.length ? currentProducts : featuredProducts.slice(0, 2)

  useEffect(() => {
    if (!menuOpen) return undefined

    function closeOnOutsideClick(event) {
      if (!menuRef.current?.contains(event.target)) setMenuOpen(false)
    }

    function closeOnEscape(event) {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    document.addEventListener('mousedown', closeOnOutsideClick)
    document.addEventListener('keydown', closeOnEscape)
    return () => {
      document.removeEventListener('mousedown', closeOnOutsideClick)
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [menuOpen])

  return (
    <nav className="nav">
      <div className="container" ref={menuRef}>
        <button
          className="nav__cat"
          type="button"
          aria-expanded={menuOpen}
          aria-haspopup="true"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          All categories <span className={`arrow-icon arrow-icon--down${menuOpen ? ' is-open' : ''}`} aria-hidden="true" />
        </button>
        <div className="nav__links">
          {navLinks.map((l) => <a key={l} href="#">{l}</a>)}
        </div>
        <a className="nav__phone" href="tel:+12025550104">+1 202 555 0104</a>
        {menuOpen && (
          <div className="mega-menu" aria-label="Product categories">
            <div className="mega-menu__categories" aria-label="Categories">
              {categories.map((category) => (
                <button
                  className={`mega-menu__category${activeCategory.name === category.name ? ' is-active' : ''}`}
                  type="button"
                  key={category.name}
                  onClick={() => setActiveCategory(category)}
                >
                  {category.name}
                  <span className="arrow-icon arrow-icon--right" aria-hidden="true" />
                </button>
              ))}
            </div>
            <div className="mega-menu__subcategories">
              <p className="mega-menu__eyebrow">Explore {activeCategory.name}</p>
              {activeCategory.subcategories.map((subcategory) => (
                <a href="#" key={subcategory} onClick={() => setMenuOpen(false)}>{subcategory}</a>
              ))}
            </div>
            <div className="mega-menu__featured">
              <p className="mega-menu__eyebrow">Featured {activeCategory.name}</p>
              <div className="mega-menu__products">
                {productsToShow.map((product) => (
                  <a className="mega-menu__product" href="#" key={product.name} onClick={() => setMenuOpen(false)}>
                    <span className="mega-menu__product-image" aria-hidden="true">PRODUCT</span>
                    <span className="mega-menu__product-info">
                      <strong>{product.name}</strong>
                      <span>{product.price}</span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
            <a className="mega-menu__promo" href="#" onClick={() => setMenuOpen(false)}>
              <span className="mega-menu__promo-tag">LIMITED OFFER</span>
              <strong>Gear up<br />for less.</strong>
              <span>Save up to 30% on selected tech.</span>
              <span className="mega-menu__promo-link">Shop deals <span className="arrow-icon arrow-icon--right" aria-hidden="true" /></span>
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
