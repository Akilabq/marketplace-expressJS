import { useEffect, useState } from 'react'

export default function LoginModal({ onClose }) {
  const [mode, setMode] = useState('login')
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    function closeOnEscape(event) {
      if (event.key === 'Escape') onClose()
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', closeOnEscape)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [onClose])

  const titles = {
    login: 'Sign in to your account',
    register: 'Create your account',
    reset: 'Reset your password',
  }

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  function changeMode(nextMode) {
    setMode(nextMode)
    setSubmitted(false)
  }

  return (
    <div
      className="login-overlay"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <section className="login-modal" role="dialog" aria-modal="true" aria-labelledby="login-title">
        <button className="login-modal__close" type="button" aria-label="Close sign in" onClick={onClose}>×</button>
        <div className="login-modal__brand" aria-hidden="true">M</div>
        <h2 id="login-title">{titles[mode]}</h2>
        {submitted ? (
          <p className="login-modal__success" role="status">
            {mode === 'reset'
              ? 'If an account exists for that email, password reset instructions are on their way.'
              : 'Thanks! This form is ready to connect to your account service.'}
          </p>
        ) : (
          <form className="login-form" onSubmit={handleSubmit}>
            {mode === 'register' && (
              <label>
                Full Name
                <input type="text" name="name" autoComplete="name" placeholder="Your name" required />
              </label>
            )}
            <label>
              Email Address
              <input type="email" name="email" autoComplete="email" placeholder="you@example.com" required />
            </label>
            {mode !== 'reset' && (
              <label>
                <span className="login-form__password-label">
                  Password
                  {mode === 'login' && (
                    <button type="button" className="login-form__text-button" onClick={() => changeMode('reset')}>
                      Forgot Password
                    </button>
                  )}
                </span>
                <span className="login-form__password">
                  <input
                    type={passwordVisible ? 'text' : 'password'}
                    name="password"
                    autoComplete={mode === 'register' ? 'new-password' : 'current-password'}
                    placeholder="Enter your password"
                    minLength="8"
                    required
                  />
                  <button
                    type="button"
                    className="login-form__visibility"
                    aria-label={passwordVisible ? 'Hide password' : 'Show password'}
                    onClick={() => setPasswordVisible(!passwordVisible)}
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M2 12s3.6-6 10-6 10 6 10 6-3.6 6-10 6-10-6-10-6Z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </button>
                </span>
              </label>
            )}
            <button className="login-form__submit" type="submit">
              {mode === 'login' ? 'Login' : mode === 'register' ? 'Create Account' : 'Send Reset Link'}
              <span aria-hidden="true">→</span>
            </button>
          </form>
        )}
        <div className="login-modal__footer">
          {mode === 'login' ? (
            <>
              <span>Don't have an account?</span>
              <button type="button" onClick={() => changeMode('register')}>Create Account</button>
            </>
          ) : (
            <>
              <span>Already have an account?</span>
              <button type="button" onClick={() => changeMode('login')}>Back to Login</button>
            </>
          )}
        </div>
      </section>
    </div>
  )
}
