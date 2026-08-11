export default function AnalogScene({ visible }) {
  return (
    <div className={`analog-scene${visible ? ' visible' : ''}`}>
      <svg width="220" height="220" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="26" y="18" width="150" height="184" rx="6" style={{ fill: 'var(--white)', stroke: 'var(--rule)', strokeWidth: 1.5 }} />
        {[34, 56, 78, 100, 122, 144, 166, 188].map((cy) => (
          <circle key={cy} cx="38" cy={cy} r="3" style={{ fill: 'var(--tan-deep)' }} />
        ))}
        <line x1="56" y1="44" x2="160" y2="44" style={{ stroke: 'var(--ink-soft)', strokeWidth: 2.5, opacity: 0.3 }} />
        <line x1="56" y1="66" x2="160" y2="66" style={{ stroke: 'var(--ink-soft)', strokeWidth: 2.5, opacity: 0.3 }} />
        <line x1="56" y1="88" x2="140" y2="88" style={{ stroke: 'var(--ink-soft)', strokeWidth: 2.5, opacity: 0.3 }} />
        <line x1="56" y1="110" x2="160" y2="110" style={{ stroke: 'var(--green)', strokeWidth: 2.5, opacity: 0.55 }} />
        <line x1="56" y1="132" x2="120" y2="132" style={{ stroke: 'var(--ink)', strokeWidth: 2.5, opacity: 0.6 }} />
        <g transform="rotate(-38 150 150)">
          <rect x="90" y="145" width="120" height="11" rx="5.5" style={{ fill: 'var(--orange)' }} />
          <rect x="90" y="145" width="34" height="11" rx="5.5" style={{ fill: 'var(--ink)' }} />
          <polygon points="210,145 224,150.5 210,156" style={{ fill: 'var(--ink-soft)' }} />
        </g>
      </svg>
      <div className="analog-caption">
        <p className="line1">Some thinking doesn't need a screen.</p>
        <p className="line2">Closed for focus</p>
      </div>
    </div>
  )
}
