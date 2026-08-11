const laptopItems = [
  "A tab open to something that isn't the assignment",
  'A chat window, minimized but blinking',
  'Autocorrect and AI tools finishing the sentence for them',
  'A backlit screen bright enough to strain eyes by third period',
  'Notifications, always one buzz away',
]

const thinkriteItems = [
  'One document, no tabs to leave it for',
  'No chat, no accounts, nothing pulling their attention elsewhere',
  'A dictionary and thesaurus, nothing that writes for them',
  'A paper-like screen, easy on the eyes for hours',
  'No signal in, no signal out, unless a school turns one on',
]

export default function Problem() {
  return (
    <section id="problem">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">What a decade of EdTech cost the classroom</div>
          <h2>Every tool promised <span className="mark blue">focus.</span> Most delivered a browser.</h2>
          <p>
            Sustained attention is a skill, built the same way any other skill is,
            through practice without interruption. Chat, tabs, games, and a dozen
            other things compete for a student's attention, all one click away from
            the essay they're supposed to be writing. The device meant to help
            students do their work became the easiest way to do anything but.
          </p>
        </div>

        <div className="contrast-grid">
          <div className="contrast-col no">
            <span className="contrast-label">A school laptop, mid-essay</span>
            <ul>
              {laptopItems.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
          <div className="contrast-col yes">
            <span className="contrast-label">ThinkRite, mid-essay</span>
            <ul>
              {thinkriteItems.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
