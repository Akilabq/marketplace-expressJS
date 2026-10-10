export default function ErrorMessage() {
  function goBack() {
    if (window.history.length > 1) window.history.back()
    else window.location.assign('/')
  }

  return (
    <div className="error-copy">
      <p className="error-copy__eyebrow">Well, this is awkward.</p>
      <h1 id="error-title">404<span>!</span></h1>
      <h2>This page went missing.</h2>
      <p>The link may be broken, or the page may have pulled off a disappearing act. Let’s get you back in the action.</p>
      <div className="error-actions">
        <button className="btn btn--red" onClick={goBack} type="button">← Go back</button>
        <a className="btn btn--dark" href="/">Go to homepage <span aria-hidden="true">↗</span></a>
      </div>
    </div>
  )
}
