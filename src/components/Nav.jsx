import Brand from './Brand.jsx'

const links = [
  { href: '#problem', label: 'Why' },
  { href: '#features', label: 'Device' },
  { href: '#how', label: 'How it works' },
  { href: '#audience', label: 'For schools' },
]

export default function Nav() {
  return (
    <nav>
      <div className="wrap">
        <Brand />
        <div className="navlinks">
          {links.map(({ href, label }) => (
            <a key={href} href={href}>{label}</a>
          ))}
          <a href="#signup" className="nav-cta">Get updates</a>
        </div>
      </div>
    </nav>
  )
}
