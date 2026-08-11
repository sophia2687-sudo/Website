import { useEffect, useState } from 'react'
import AnalogScene from './AnalogScene.jsx'

const screenContent = {
  write: {
    title: <>The Hollow Men — draft 2</>,
    body: (
      <p>
        What is more terrifying than a shadow, is the space where a shadow should
        fall and does not. Eliot understood this better than most, and it's why the
        poem still<span className="caret"></span>
      </p>
    ),
    meta: 'The Hollow Men — 214 words',
  },
  outline: {
    title: <>The Hollow Men — essay outline</>,
    body: (
      <p>
        <strong>I.</strong> Eliot's central image: the shadow that falls between idea and reality<br />
        <strong>II.</strong> How the poem's fragmented structure mirrors its subject<br />
        <strong>III.</strong> The whimper, not the bang<span className="caret"></span>
      </p>
    ),
    meta: 'Outline — 3 sections',
  },
  lookup: {
    title: (
      <>
        melancholy{' '}
        <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: 'var(--ink-soft)' }}>
          /ˈmelənˌkälē/
        </span>
      </>
    ),
    body: (
      <>
        <p style={{ marginBottom: 6 }}><em>noun</em> — a pensive sadness, typically with no obvious cause.</p>
        <p style={{ marginBottom: 6 }}><strong>Synonyms:</strong> wistfulness, sorrow, gloom, pensiveness</p>
        <p><strong>Antonyms:</strong> cheerfulness, jubilance</p>
      </>
    ),
    meta: 'Dictionary & thesaurus',
  },
}

const tabs = [
  { mode: 'write', label: 'Write' },
  { mode: 'outline', label: 'Outline' },
  { mode: 'lookup', label: 'Look up' },
]

/*
 * Lid animation runs as a four-phase cycle:
 *   open -> closing (lid folds down) -> closed (analog scene showing)
 *        -> opening (analog fades out) -> unfolding (laptop remounted, lid still down)
 *        -> open (lid unfolds)
 * `unfolding` exists so the browser paints the visible-but-closed laptop before the
 * lid transition starts; without it the unfold snaps instead of animating.
 */
const LID_FOLD_MS = 750
const ANALOG_FADE_MS = 350
const PAINT_MS = 30

const phaseTimings = {
  closing: [LID_FOLD_MS, 'closed'],
  opening: [ANALOG_FADE_MS, 'unfolding'],
  unfolding: [PAINT_MS, 'open'],
}

function Keyboard() {
  const row = (n) => Array.from({ length: n }, (_, i) => <span key={i} className="key"></span>)
  return (
    <div className="keyboard-base">
      <div className="krow r1">{row(10)}</div>
      <div className="krow r2">{row(9)}</div>
      <div className="krow r3">{row(7)}</div>
      <div className="krow bottom">
        <span className="key mod"></span>
        <span className="key space"></span>
        <span className="key mod"></span>
      </div>
      <div className="trackpad"></div>
    </div>
  )
}

export default function DeviceStage() {
  const [mode, setMode] = useState('write')
  const [signalOn, setSignalOn] = useState(false)
  const [phase, setPhase] = useState('open')

  useEffect(() => {
    const timing = phaseTimings[phase]
    if (!timing) return
    const [delay, next] = timing
    const timer = setTimeout(() => setPhase(next), delay)
    return () => clearTimeout(timer)
  }, [phase])

  const content = screenContent[mode]
  const lidClosed = phase !== 'open'
  const wrapHidden = phase === 'closed' || phase === 'opening'
  const showingAnalog = phase === 'closing' || phase === 'closed'

  const toggleLid = () => {
    if (phase === 'open') setPhase('closing')
    else if (phase === 'closed') setPhase('opening')
  }

  return (
    <div className="device-stage">
      <div className="stage-inner">
        <div className={`laptop-wrap${wrapHidden ? ' hidden' : ''}`}>
          <div className={`laptop${lidClosed ? ' closed' : ''}`}>
            <div className="screen-lid">
              <div className="device-topbar">
                <span>THINK RITE</span>
                <span
                  className={`signal-chip${signalOn ? ' on' : ''}`}
                  title="Optional school add-on"
                  onClick={(e) => {
                    e.stopPropagation()
                    setSignalOn((on) => !on)
                  }}
                >
                  <span className="signal-dot"></span>
                  <span className="signal-label">{signalOn ? 'Signal: LMS' : 'Signal: Off'}</span>
                </span>
              </div>
              <div className="screen">
                <div className="screen-tabs">
                  {tabs.map((tab) => (
                    <div
                      key={tab.mode}
                      className={`screen-tab${mode === tab.mode ? ' active' : ''}`}
                      data-mode={tab.mode}
                      onClick={() => setMode(tab.mode)}
                    >
                      {tab.label}
                    </div>
                  ))}
                </div>
                <div className="screen-body">
                  <p className="line1">{content.title}</p>
                  {content.body}
                </div>
                <div className="screen-footer">
                  <span>{content.meta}</span>
                  <span>84% battery</span>
                </div>
              </div>
            </div>
            <div className="hinge"></div>
            <Keyboard />
            <div className="stand-foot"></div>
          </div>
        </div>

        <AnalogScene visible={phase === 'closed'} />
      </div>

      <button className={`laptop-toggle${showingAnalog ? ' closed' : ''}`} onClick={toggleLid}>
        <span>{showingAnalog ? 'Open lid' : 'Close lid'}</span> <span className="chevron">⌄</span>
      </button>
    </div>
  )
}
