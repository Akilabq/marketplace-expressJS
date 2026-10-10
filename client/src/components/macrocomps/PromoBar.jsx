import Button from '../microcomps/Button'

const promoMessages = [
  <>Black Friday <span aria-hidden="true">✦</span> Up to <b>59% off</b></>,
  <>Limited time <span aria-hidden="true">✦</span> Deals that hit different</>,
  <>Black Friday <span aria-hidden="true">✦</span> Your next upgrade costs less</>,
]

export default function PromoBar() {
  return (
    <div className="promobar">
      <div className="promobar__inner">
        <div className="promobar__marquee" aria-label="Black Friday: up to 59% off. Limited time deals.">
          <div className="promobar__track" aria-hidden="true">
            {[0, 1].map((copy) => (
              <span className="promobar__group" key={copy}>
                {promoMessages.map((message, index) => (
                  <span className="promobar__text" key={index}>{message}</span>
                ))}
              </span>
            ))}
          </div>
        </div>
        <Button variant="gold" small className="promobar__button">Shop now</Button>
      </div>
    </div>
  )
}
