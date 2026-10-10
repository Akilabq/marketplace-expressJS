import Button from './Button'
import Pill from './Pill'
import ImagePlaceholder from './ImagePlaceholder'
export default function ProductCard({ product }) {
  const { title, price, oldPrice, badges } = product
  return (
    <article className="card">
      <div className="card__badges">
        {badges.map((b) => <Pill key={b.text} red={b.red} gray={b.gray}>{b.text}</Pill>)}
      </div>
      <ImagePlaceholder light />
      <h3 className="card__title">{title}</h3>
      <div>
        <span className="card__price">${price}</span>
        {oldPrice && <span className="card__old">${oldPrice}</span>}
      </div>
      <Button variant="dark" small>Add to cart</Button>
    </article>
  )
}
