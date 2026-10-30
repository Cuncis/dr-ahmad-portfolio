import SecHead from './SecHead'
import SplitText from './SplitText'
import { useInView } from '../hooks/useInView'
import { venture } from '../data'
import logo from '../assets/cherry-computer-logo.png'

export default function Venture() {
  const [ref, inView] = useInView()
  return (
    <section className="block vnt" id="venture">
      <div className="wrap">
        <SecHead label="Venture" />
        <div className="venture">
          <div ref={ref} className={'vnt-logo' + (inView ? ' in' : '')}>
            <img src={logo} alt={`${venture.name} logo`} width={490} height={509} />
          </div>
          <div className="vnt-body">
            <span className="status">{venture.status}</span>
            <SplitText as="h2" mode="mask">{venture.name}</SplitText>
            <div className="body">
              {venture.text.map((t) => <SplitText key={t} as="p" mode="fade">{t}</SplitText>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
