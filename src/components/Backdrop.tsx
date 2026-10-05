import { useEffect, useRef } from 'react'

export default function Backdrop() {
  const grid = useRef<HTMLDivElement>(null)

  /* soft pointer parallax on the grid */
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const onMove = (e: PointerEvent) => {
      const x = e.clientX / window.innerWidth - 0.5
      const y = e.clientY / window.innerHeight - 0.5
      if (grid.current) grid.current.style.transform = `translate(${x * -14}px,${y * -14}px)`
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  return (
    <div className="backdrop" aria-hidden="true">
      <div className="grid" id="grid" ref={grid}></div>
      <div className="grain"></div>
    </div>
  )
}
