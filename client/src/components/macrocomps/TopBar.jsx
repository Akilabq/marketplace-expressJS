import { useEffect, useRef, useState } from 'react'

const locales = [
  { name: 'English', short: 'Eng', flag: '🇺🇸' },
  { name: 'Mandarin', short: '中文', flag: '🇨🇳' },
  { name: 'Russian', short: 'Рус', flag: '🇷🇺' },
]

const currencies = [
  { name: 'Dollar (USD)', short: 'USD' },
  { name: 'Euro (EUR)', short: 'EUR' },
]

export default function TopBar() {
  const [openMenu, setOpenMenu] = useState(null)
  const [locale, setLocale] = useState(locales[0])
  const [currency, setCurrency] = useState(currencies[0])
  const menuRef = useRef(null)

  useEffect(() => {
    if (!openMenu) return undefined

    function closeOnOutsideClick(event) {
      if (!menuRef.current?.contains(event.target)) setOpenMenu(null)
    }

    function closeOnEscape(event) {
      if (event.key === 'Escape') setOpenMenu(null)
    }

    document.addEventListener('mousedown', closeOnOutsideClick)
    document.addEventListener('keydown', closeOnEscape)
    return () => {
      document.removeEventListener('mousedown', closeOnOutsideClick)
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [openMenu])

  return (
    <div className="topbar">
      <div className="container">
        <span>Welcome to Marketo online store.</span>
        <div className="topbar__right" ref={menuRef}>
          <div className="topbar__selector">
            <button
              className="topbar__trigger"
              type="button"
              aria-expanded={openMenu === 'locale'}
              aria-haspopup="true"
              onClick={() => setOpenMenu(openMenu === 'locale' ? null : 'locale')}
            >
              {locale.short}
              <span className="arrow-icon arrow-icon--down" aria-hidden="true" />
            </button>
            {openMenu === 'locale' && (
              <div className="topbar__menu" role="menu" aria-label="Choose language">
                {locales.map((option) => (
                  <button
                    className="topbar__option"
                    type="button"
                    role="menuitemradio"
                    aria-checked={locale.name === option.name}
                    key={option.name}
                    onClick={() => {
                      setLocale(option)
                      setOpenMenu(null)
                    }}
                  >
                    <span className="topbar__flag" aria-hidden="true">{option.flag}</span>
                    {option.name}
                    {locale.name === option.name && <span className="topbar__check" aria-hidden="true">✓</span>}
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="topbar__selector">
            <button
              className="topbar__trigger"
              type="button"
              aria-expanded={openMenu === 'currency'}
              aria-haspopup="true"
              onClick={() => setOpenMenu(openMenu === 'currency' ? null : 'currency')}
            >
              {currency.short}
              <span className="arrow-icon arrow-icon--down" aria-hidden="true" />
            </button>
            {openMenu === 'currency' && (
              <div className="topbar__menu" role="menu" aria-label="Choose currency">
                {currencies.map((option) => (
                  <button
                    className="topbar__option"
                    type="button"
                    role="menuitemradio"
                    aria-checked={currency.name === option.name}
                    key={option.name}
                    onClick={() => {
                      setCurrency(option)
                      setOpenMenu(null)
                    }}
                  >
                    {option.name}
                    {currency.name === option.name && <span className="topbar__check" aria-hidden="true">✓</span>}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
