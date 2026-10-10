import DeadpoolMascot from '../microcomps/DeadpoolMascot'

export default function ErrorIllustration() {
  return (
    <div className="error-art">
      <div className="error-art__burst" aria-hidden="true">404</div>
      <DeadpoolMascot />
      <span className="error-art__caption">THE PAGE WENT OFF SCRIPT</span>
    </div>
  )
}
