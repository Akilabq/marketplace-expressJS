import { useEffect, useState } from 'react'
import Button from '../microcomps/Button'
import ImagePlaceholder from '../microcomps/ImagePlaceholder'
import PromoCard from '../microcomps/PromoCard'

const slides = [
  {
    kicker: 'Game on, all month',
    title: <>Heroic <em>deals</em></>,
    description: 'Up to 50% off select consoles and games. Three months of game pass for $2.',
    price: '$299',
    image: 'GAME ON',
    button: 'Shop gaming',
  },
  {
    kicker: 'Upgrade your everyday',
    title: <>Next-gen <em>power</em></>,
    description: 'Big-screen brilliance and flagship performance. Save up to 40% on selected phones.',
    price: '$499',
    image: 'SMARTPHONE',
    button: 'Shop phones',
  },
  {
    kicker: 'Hear every detail',
    title: <>Sound <em>unleashed</em></>,
    description: 'Find your focus with immersive noise cancelling and up to 35% off premium audio.',
    price: '$129',
    image: 'HEADPHONES',
    button: 'Shop audio',
  },
]

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length)
    }, 5500)
    return () => window.clearInterval(timer)
  }, [isPaused])

  function showSlide(index) {
    setActiveSlide((index + slides.length) % slides.length)
  }

  const slide = slides[activeSlide]

  return (
    <section className="container hero">
      <div
        className={`hero__main hero__main--slide-${activeSlide + 1}`}
        role="region"
        aria-roledescription="carousel"
        aria-label="Featured promotions"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocusCapture={() => setIsPaused(true)}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false)
        }}
      >
        <div className="hero__slide" key={activeSlide}>
          <div className="hero__text">
            <p className="hero__kicker">{slide.kicker}</p>
            <h1 className="hero__title">{slide.title}</h1>
            <p className="hero__desc">{slide.description}</p>
            <Button>{slide.button}</Button>
          </div>
          <ImagePlaceholder label={slide.image} className="hero__art" />
          <div className="hero__price">{slide.price}</div>
        </div>
        <button
          className="hero__arrow hero__arrow--previous"
          type="button"
          aria-label="Previous promotion"
          onClick={() => showSlide(activeSlide - 1)}
        >
          ‹
        </button>
        <button
          className="hero__arrow hero__arrow--next"
          type="button"
          aria-label="Next promotion"
          onClick={() => showSlide(activeSlide + 1)}
        >
          ›
        </button>
        <div className="hero__dots" aria-label="Choose a promotion">
          {slides.map((item, index) => (
            <button
              type="button"
              key={item.kicker}
              className={index === activeSlide ? 'is-active' : ''}
              aria-label={`Show promotion ${index + 1}`}
              aria-current={index === activeSlide ? 'true' : undefined}
              onClick={() => showSlide(index)}
            />
          ))}
        </div>
      </div>
      <div className="hero__side">
        <PromoCard dark tag="29% OFF" title="New flagship phone" />
        <PromoCard title="Pro wireless earbuds" price="$299 USD" />
      </div>
    </section>
  )
}
