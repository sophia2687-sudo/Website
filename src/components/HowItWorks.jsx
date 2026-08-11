const steps = [
  {
    title: 'Open to a blank page',
    body: 'The device turns on instantly, straight into the document a student was working on. No login screen, no loading spinner.',
  },
  {
    title: 'Type, and look things up as needed',
    body: 'The thesaurus and dictionary are a keystroke away, so a hard word never means putting the pen down.',
  },
  {
    title: 'Turn in when Classroom Signal is on',
    body: 'If a school has switched it on, the draft syncs to Google Classroom, Canvas, or whatever the school runs. Otherwise, the device stays fully offline, by design.',
    signal: true,
  },
]

export default function HowItWorks() {
  return (
    <section id="how">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">From blank page to finished draft</div>
          <h2>How a class period actually goes.</h2>
        </div>
        <div className="steps">
          {steps.map(({ title, body, signal }, i) => (
            <div key={title} className={`step${signal ? ' signal-step' : ''}`}>
              <span className="stepnum">{i + 1}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
