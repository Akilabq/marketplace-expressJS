import SectionHeader from '../microcomps/SectionHeader'
import Countdown from '../microcomps/Countdown'
import ProductCard from '../microcomps/ProductCard'
import { deals } from '../../data/mock'
export default function BestDeals() {
  return (
    <section className="container">
      <SectionHeader title="Best deals" linkText="Browse all products">
        <Countdown />
      </SectionHeader>
      <div className="deals">
        {deals.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
    </section>
  )
}
