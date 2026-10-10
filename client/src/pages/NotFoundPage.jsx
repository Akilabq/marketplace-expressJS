import ErrorIllustration from '../components/macrocomps/ErrorIllustration'
import ErrorMessage from '../components/macrocomps/ErrorMessage'

export default function NotFoundPage() {
  return (
    <main className="error-page">
      <div className="error-page__grid" aria-hidden="true" />
      <section className="error-card" aria-labelledby="error-title">
        <div className="error-card__topline"><span>MARKETPLACE // ISSUE 404</span><span>ERROR • PAGE NOT FOUND</span></div>
        <div className="error-card__content">
          <ErrorIllustration />
          <ErrorMessage />
        </div>
        <div className="error-card__bottom"><span>NO PANIC. JUST A LITTLE PLOT TWIST.</span><span>EST. IN THE MULTIVERSE</span></div>
      </section>
    </main>
  )
}
