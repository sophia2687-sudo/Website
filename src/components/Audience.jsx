export default function Audience() {
  return (
    <section id="audience">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">Built for both</div>
          <h2>For the school, and the student.</h2>
        </div>
        <div className="audience-grid">
          <div className="audience-card blue">
            <div className="eyebrow">For schools</div>
            <h3>Convenient to hand out. Nothing to police.</h3>
            <p>
              No filtering software, no monitoring dashboards, no IT tickets about
              students finding a way around the lock. The restriction is built into
              the hardware. Turn on Classroom Signal if you want syncing, leave it
              off if you don't.
            </p>
            <a href="#signup">Talk to us about a classroom set →</a>
          </div>
          <div className="audience-card">
            <div className="eyebrow">For students</div>
            <h3>A place to think that isn't also a place to scroll.</h3>
            <p>
              Handwriting is slow and messy, and a laptop is loud with constant
              distractions. ThinkRite gives them a third option: quiet enough to
              actually finish a thought, honest enough that nothing writes it for
              them.
            </p>
            <a href="#signup">Join the waitlist →</a>
          </div>
        </div>
      </div>
    </section>
  )
}
