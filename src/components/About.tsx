import SecHead from './SecHead'
import SplitText from './SplitText'
import { useInView } from '../hooks/useInView'

export default function About() {
  const [frameRef, frameIn] = useInView()
  return (
    <section className="block" id="about">
      <div className="wrap">
        <SecHead label="About" />
        <div className="about">
          <SplitText as="h2" mode="mask">Welcome to My Digital Portfolio</SplitText>
          <div ref={frameRef} className={'frame' + (frameIn ? ' in' : '')} id="aboutFrame">
            <div className="body">
              <SplitText as="p" mode="fade">Hello, and welcome. I am Dr. Ahmad Mateen Ishanzai—an innovative technologist, researcher, and leader dedicated to pushing the boundaries of artificial intelligence, virtual reality, and advanced automotive engineering.</SplitText>
              <SplitText as="p" mode="fade">Throughout my career, I have focused on bridging complex theoretical research with high-impact, real-world applications. Whether I am architecting next-generation AI platforms, designing immersive VR maintenance simulations, or optimizing industrial automation and connected vehicle infrastructure, my goal is always the same: to create scalable, intelligent solutions that redefine what is possible.</SplitText>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
