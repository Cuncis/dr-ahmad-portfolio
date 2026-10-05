import { Fragment, type CSSProperties } from 'react'
import { useInView } from '../hooks/useInView'

interface Props {
  as: 'h2' | 'p'
  mode: 'mask' | 'fade'
  className?: string
  children: string
}

/** Splits text into words that animate in when scrolled into view. */
export default function SplitText({ as: Tag, mode, className, children }: Props) {
  const [ref, inView] = useInView()
  const cls = [className, inView && 'in'].filter(Boolean).join(' ') || undefined
  const words = children.trim().split(/\s+/)

  return (
    <Tag ref={ref} className={cls} data-split={mode}>
      {words.map((w, i) => (
        <Fragment key={i}>
          <span className={`sw ${mode}`} style={{ '--i': i } as CSSProperties}>
            {mode === 'mask' ? <span>{w}</span> : w}
          </span>{' '}
        </Fragment>
      ))}
    </Tag>
  )
}
