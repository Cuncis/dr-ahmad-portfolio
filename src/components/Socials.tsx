import type { CSSProperties } from 'react'
import { useInView } from '../hooks/useInView'
import { socials } from '../data'

export default function Socials() {
  const [ref, inView] = useInView()
  return (
    <ul ref={ref} className={'socials' + (inView ? ' in' : '')} aria-label="Social media">
      {socials.map(({ name, href, path }, i) => (
        <li key={name} style={{ '--i': i } as CSSProperties}>
          <a href={href} target="_blank" rel="noopener noreferrer" aria-label={name} title={name}>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d={path} /></svg>
          </a>
        </li>
      ))}
    </ul>
  )
}
