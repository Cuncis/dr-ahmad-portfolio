import SecHead from './SecHead'
import SplitText from './SplitText'
import { useInView } from '../hooks/useInView'
import { panels, type Panel as PanelData } from '../data'

function Panel({ title, text, label, tags }: PanelData) {
  const [ref, inView] = useInView()
  return (
    <article ref={ref} className={'panel reveal' + (inView ? ' in' : '')}>
      <div className="bar"><div className="stripes"></div><div className="winctl" aria-hidden="true"><b></b><b></b><b></b></div></div>
      <div className="in-body">
        <h3>{title}</h3>
        <p>{text}</p>
        <ul className="tags" aria-label={label}>
          {tags.map((t) => <li key={t}>{t}</li>)}
        </ul>
      </div>
    </article>
  )
}

export default function Showcase() {
  return (
    <section className="block" id="showcase">
      <div className="wrap">
        <SecHead label="Showcase" />
        <SplitText as="p" mode="fade" className="lead">This space serves as a central hub for my professional journey, showcasing:</SplitText>
        <div className="panels">
          {panels.map((p) => <Panel key={p.title} {...p} />)}
        </div>
      </div>
    </section>
  )
}
