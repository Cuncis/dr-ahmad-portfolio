import { useState, type CSSProperties } from 'react'
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
  return (
    <section className="block prj" id="projects">
      <div className="wrap">
        <SecHead label="Projects" />
        <SplitText as="h2" mode="mask">Featured Projects</SplitText>
        <div className="pj-grid">
          {projects.map((p, n) => <ProjectCard key={p.title} p={p} n={n} />)}
        </div>
      </div>
    </section>
  )
}
