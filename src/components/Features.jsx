const features = [
  {
    num: '01',
    title: 'A paper-like screen',
    body: 'Reflective, not backlit. No glow, no glare, no blue light by the end of a school day, and none of the pull of a bright screen designed to keep you looking at it.',
  },
  {
    num: '02',
    title: 'Dictionary & thesaurus, built in',
    body: 'Look up a word without leaving the page. No browser tab required, no search history to speak of.',
  },
  {
    num: '03',
    title: 'No browser. No apps. No chat.',
    body: "Not hidden, not locked behind admin settings. It was never built. There's nothing to disable, because there's nothing there.",
  },
  {
    num: '04',
    title: 'An outline mode',
    body: 'For structuring an essay before writing the draft. Same quiet screen, built for organizing ideas instead of finishing sentences.',
  },
  {
    num: '05',
    title: 'Designed for posture, not just typing',
    body: "An ergonomic keyboard with comfortably spaced keys, on a stand that angles the whole device up so there's no hunching over a flat screen.",
  },
  {
    num: '06',
    title: 'Classroom Signal',
    body: 'Off by default. A school can turn on one connection, and only one: to whatever the school already uses, Google Classroom, Canvas, or similar, for turning in finished work. Nothing else gets through.',
    addon: true,
  },
]

export default function Features() {
  return (
    <section id="features">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">What's actually on the device</div>
          <h2>Everything a writer needs. <span className="mark orange">Nothing</span> more.</h2>
          <p>
            Every feature here is built to help a student write, think, or focus more
            clearly. Nothing extra made it onto the device.
          </p>
        </div>

        <div className="feature-grid">
          {features.map(({ num, title, body, addon }) => (
            <div key={num} className={`feature${addon ? ' addon' : ''}`}>
              {addon && <span className="addon-tag">School add-on</span>}
              <span className="fnum">{num}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
