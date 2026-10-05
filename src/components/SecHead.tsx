import { useInView } from '../hooks/useInView'

export default function SecHead({ label }: { label: string }) {
  const [ref, inView] = useInView()
  return (
    <div ref={ref} className={'sec-head' + (inView ? ' in' : '')}>
      <i></i><u></u><span>{label}</span>
    </div>
  )
}
