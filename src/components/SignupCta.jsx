import { useState } from 'react'

export default function SignupCta() {
  const [submitted, setSubmitted] = useState(false)
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="cta-section" id="signup">
      <div className="wrap">
        <div className="cta-inner">
          <div className="section-head" style={{ marginBottom: 0 }}>
            <div className="eyebrow">Early access</div>
            <h2>Be first to know when ThinkRite ships.</h2>
            <p>
              We're building the first devices now. Leave your email and we'll reach
              out as pilots open up to schools.
            </p>
          </div>
          <div>
            <form className="signup" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="you@school.org"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="btn btn-primary" type="submit">
                {submitted ? "You're on the list" : 'Notify me'}
              </button>
            </form>
            <div className="cta-note">No spam. We'll write to you, and that's it.</div>
          </div>
        </div>
      </div>
    </section>
  )
}
