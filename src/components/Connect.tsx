import SecHead from './SecHead'
import SplitText from './SplitText'
import { useInView } from '../hooks/useInView'

export default function Connect() {
  const [ctaRef, ctaIn] = useInView()
  return (
    <section className="block" id="connect">
      <div className="wrap">
        <SecHead label="Connect" />
        <div className="connect">
          <SplitText as="p" mode="fade" className="big">Take a look around to explore my work, and feel free to connect if you’d like to collaborate on shaping the future of technology together.</SplitText>
          <div ref={ctaRef} className={'cta-row' + (ctaIn ? ' in' : '')}>
            <a className="btn" href="mailto:your.email@example.com">Get in touch</a>
            <a className="btn ghost" href="#showcase">Explore my work</a>
          </div>
        </div>
      </div>
    </section>
  )
}
