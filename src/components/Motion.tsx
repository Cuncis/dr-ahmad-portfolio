import SecHead from './SecHead'
import SplitText from './SplitText'
import { useInView } from '../hooks/useInView'
import { motion } from '../data'

function Point({ title, text }: { title: string; text: string }) {
  const [ref, inView] = useInView()
  return (
    <article ref={ref} className={'panel' + (inView ? ' in' : '')}>
      <div className="bar"><div className="stripes"></div><div className="winctl" aria-hidden="true"><b></b><b></b><b></b></div></div>
      <div className="in-body">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </article>
  )
}

export default function Motion() {
  const [ref, inView] = useInView()
  return (
    <section className="block mtn" id="engineering">
      <div className="wrap">
        <SecHead label={motion.label} />
        <SplitText as="h2" mode="mask">{motion.title}</SplitText>
        <SplitText as="p" mode="fade" className="mtn-intro">{motion.intro}</SplitText>
        <div className="panels mtn-panels">
          {motion.points.map((p) => <Point key={p.title} {...p} />)}
        </div>
        <p ref={ref} className={'mtn-close' + (inView ? ' in' : '')}>{motion.close}</p>
      </div>
    </section>
  )
}
