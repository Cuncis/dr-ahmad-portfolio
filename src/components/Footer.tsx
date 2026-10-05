import { useInView } from '../hooks/useInView'
import { NAME } from '../data'

export default function Footer() {
  const [ref, inView] = useInView({ threshold: 0 })
  return (
    <footer>
      <div ref={ref} className={'wrap' + (inView ? ' in' : '')} data-anim="fade">
        <span>{NAME} · Digital Portfolio</span>
        <span><a href="#top">Back to top</a></span>
      </div>
    </footer>
  )
}
