import { useLayoutEffect, useRef, useState, type CSSProperties } from 'react'
import SecHead from './SecHead'
import SplitText from './SplitText'
import Blocks from './Blocks'
import { useInView } from '../hooks/useInView'
import { projects, type Project } from '../data'

function ProjectCard({ p, n }: { p: Project; n: number }) {
  const [ref, inView] = useInView()
  const [open, setOpen] = useState(false)
  const id = `pj-more-${n}`

  return (
    <article ref={ref} className={['pj', inView && 'in', open && 'open'].filter(Boolean).join(' ')}>
      <div className="bar"><div className="stripes"></div><div className="winctl" aria-hidden="true"><b></b><b></b><b></b></div></div>
      <div className="pj-body">
        <div>
          <h3>{p.title}</h3>
          {p.sub && <p className="pj-sub">{p.sub}</p>}
        </div>
        <div className="metas">
          <span className="when">{p.date}</span>
          {p.org && <span className="when">{p.org}</span>}
          {p.status && <span className="status">{p.status}</span>}
        </div>
        <p>{p.summary}</p>
        <div className="more" id={id} inert={!open}>
          <div className="more-in">
            <Blocks blocks={p.more} listClass="pj-list" />
            {p.contributors && <p className="contrib"><b>Contributors:</b> {p.contributors}</p>}
          </div>
        </div>
        {p.skills.length > 0 && (
          <ul className="tags" aria-label="Skills">
            {p.skills.map((t, i) => <li key={t} style={{ '--t': i } as CSSProperties}>{t}</li>)}
          </ul>
        )}
        <button className="toggle" type="button" aria-expanded={open} aria-controls={id} onClick={() => setOpen((o) => !o)}>
          <i aria-hidden="true"></i><span>{open ? 'Show less' : 'Read more'}</span>
        </button>
      </div>
    </article>
  )
}

export default function Projects() {
  const grid = useRef<HTMLDivElement>(null)

  /* equal card heights per row, measured while collapsed so opening one card never stretches its neighbour */
  useLayoutEffect(() => {
    const equalise = () => {
      const el = grid.current
      if (!el) return
      const cards = Array.from(el.children) as HTMLElement[]
      const open = cards.filter((c) => c.classList.contains('open'))
      el.classList.add('measuring')
      open.forEach((c) => c.classList.remove('open'))
      cards.forEach((c) => { c.style.minHeight = '' })
      const rows = new Map<number, HTMLElement[]>()
      cards.forEach((c) => rows.set(c.offsetTop, [...(rows.get(c.offsetTop) ?? []), c]))
      rows.forEach((row) => {
        const h = Math.max(...row.map((c) => c.offsetHeight))
        row.forEach((c) => { c.style.minHeight = h + 'px' })
      })
      open.forEach((c) => c.classList.add('open'))
      el.classList.remove('measuring')
    }
    equalise()
    window.addEventListener('resize', equalise)
    window.addEventListener('load', equalise)
    document.fonts?.ready.then(equalise)
    return () => {
      window.removeEventListener('resize', equalise)
      window.removeEventListener('load', equalise)
    }
  }, [])

  return (
    <section className="block prj" id="projects">
      <div className="wrap">
        <SecHead label="Projects" />
        <SplitText as="h2" mode="mask">Featured Projects</SplitText>
        <div className="pj-grid" ref={grid}>
          {projects.map((p, n) => <ProjectCard key={p.title} p={p} n={n} />)}
        </div>
      </div>
    </section>
  )
}
