import Button from './Button'
import ImagePlaceholder from './ImagePlaceholder'
export default function PromoCard({ dark, tag, title, price }) {
  return (
    <div className={`promo promo--${dark ? 'dark' : 'light'}`}>
      {tag && <span className={`promo__tag${dark ? '' : ' promo__tag--red'}`}>{tag}</span>}
      <ImagePlaceholder label="IMG" light={!dark} className="" />
      <h3 className="promo__title">{title}</h3>
      {price && <b style={{ color: 'var(--red)' }}>{price}</b>}
      <div><Button small>Shop now</Button></div>
    </div>
  )
}
