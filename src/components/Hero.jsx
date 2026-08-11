import DeviceStage from './DeviceStage.jsx'

export default function Hero() {
  return (
    <header className="hero">
      <div className="wrap hero-grid">
        <div>
          <div className="eyebrow">A device built to protect focus</div>
          <h1 className="headline">
            A quiet place<br />for the <span className="mark">mind to work.</span>
          </h1>
          <p className="sub">
            ThinkRite is a single-purpose writing device built to protect a student's
            focus and voice. A real keyboard, a paper-like display, and a dictionary
            and thesaurus within reach. No browser, no chat, no notifications.
          </p>
          <div className="hero-actions">
            <a href="#signup" className="btn btn-primary">Get early access</a>
            <a href="#how" className="btn btn-ghost">See how it works</a>
          </div>
          <div className="hero-note">Built for students recovering from a decade of EdTech.</div>
        </div>
        <DeviceStage />
      </div>
    </header>
  )
}
