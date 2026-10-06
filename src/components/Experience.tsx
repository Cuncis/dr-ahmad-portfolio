import { useEffect, useRef, type CSSProperties } from 'react'
import SecHead from './SecHead'
import SplitText from './SplitText'
import { useInView } from '../hooks/useInView'
import { jobs, type Job } from '../data'

function JobItem({ title, org, text, subs }: Job) {
  const [ref, inView] = useInView()
  return (
    <li ref={ref} className={'job' + (inView ? ' in' : '')}>
      <div className="job-head"><h3>{title}</h3>{org && <p className="org">{org}</p>}</div>
      <div className="job-body">
        {text && <p>{text}</p>}
        {subs && (
          <ul className="sub-jobs">
            {subs.map((s, i) => (
              <li key={s.title} className="sub" style={{ '--s': i } as CSSProperties}>
                <h4>{s.title}</h4>
                <p className="org">{s.org}</p>
                {s.metas && <div className="metas">{s.metas.map((m) => <span key={m} className="when">{m}</span>)}</div>}
                <p>{s.text}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </li>
  )
}

export default function Experience() {
  const timeline = useRef<HTMLOListElement>(null)

  /* timeline line draws as you scroll */
  useEffect(() => {
    const onScroll = () => {
      const tl = timeline.current
      if (!tl) return
      const r = tl.getBoundingClientRect()
      tl.style.setProperty('--tp', String(Math.max(0, Math.min(1, (window.innerHeight * 0.62 - r.top) / r.height))))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className="block exp" id="experience">
      <div className="wrap">
        <SecHead label="Experience" />
        <SplitText as="h2" mode="mask">Professional Experience</SplitText>
        <ol className="timeline" id="timeline" ref={timeline}>
          {jobs.map((j) => <JobItem key={j.title} {...j} />)}
        </ol>
      </div>
    </section>
  )
}
