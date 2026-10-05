import { useEffect, useRef, useState } from 'react'
import { NAME, navLinks } from '../data'

export default function Nav() {
  const [solid, setSolid] = useState(false)
  const [active, setActive] = useState<string | null>(null)
  const progress = useRef<HTMLDivElement>(null)

  /* nav background once scrolled + reading progress */
  useEffect(() => {
    const onScroll = () => {
      setSolid(window.scrollY > 24)
      const max = document.documentElement.scrollHeight - window.innerHeight
      progress.current?.style.setProperty('--p', String(max > 0 ? Math.min(1, window.scrollY / max) : 0))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* active nav link */
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id) }),
      { rootMargin: '-45% 0px -45% 0px' },
    )
    navLinks.forEach(({ id }) => {
      const s = document.getElementById(id)
      if (s) obs.observe(s)
    })
    return () => obs.disconnect()
  }, [])

  return (
    <header className={'nav' + (solid ? ' solid' : '')} id="nav">
      <div className="nav-in">
        <a className="brand" href="#top" aria-label={`${NAME}, home`}><i></i><span>{NAME}</span></a>
        <nav className="links" aria-label="Primary">
          {navLinks.map(({ id, label }) => (
            <a key={id} href={`#${id}`} className={active === id ? 'active' : undefined}>{label}</a>
          ))}
          <a className="btn" href="#connect">Collaborate</a>
        </nav>
      </div>
      <div className="progress" id="progress" aria-hidden="true" ref={progress}></div>
    </header>
  )
}
