import FeatureItem from '../microcomps/FeatureItem'
import { features } from '../../data/mock'
export default function FeaturesStrip() {
  return (
    <section className="container features">
      {features.map((f) => <FeatureItem key={f.title} {...f} />)}
    </section>
  )
}
