import type { CSSProperties } from 'react'
import SecHead from './SecHead'
import SplitText from './SplitText'
import { useInView } from '../hooks/useInView'
import { skills, type SkillGroup } from '../data'

function Group({ title, label, items, size }: SkillGroup) {
  const [ref, inView] = useInView()
  const isLangs = size === 'full'
  return (
    <article ref={ref} className={['sk', size, inView && 'in'].filter(Boolean).join(' ')}>
      <div className="bar"><h3>{title}</h3><div className="winctl" aria-hidden="true"><b></b><b></b><b></b></div></div>
      <ul className={isLangs ? 'langs' : 'chips'} aria-label={label}>
        {items.map((t, i) => <li key={t} style={{ '--t': i } as CSSProperties}>{t}</li>)}
      </ul>
    </article>
  )
}

export default function Skills() {
  return (
    <section className="block skl" id="skills">
      <div className="wrap">
        <SecHead label="Skills" />
        <SplitText as="h2" mode="mask">Skills</SplitText>
        <div className="sk-grid">
          {skills.map((g) => <Group key={g.title} {...g} />)}
        </div>
      </div>
    </section>
  )
}
