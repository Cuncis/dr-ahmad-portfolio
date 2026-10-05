import { useCallback, useEffect, useState } from 'react'

/** One-shot reveal: flips to true the first time the element scrolls into view. */
export function useInView(
  options: IntersectionObserverInit = { threshold: 0.2, rootMargin: '0px 0px -6% 0px' },
): [(el: Element | null) => void, boolean] {
  const [el, setEl] = useState<Element | null>(null)
  const [inView, setInView] = useState(false)
  const ref = useCallback((node: Element | null) => setEl(node), [])

  useEffect(() => {
    if (!el || inView) return
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setInView(true)
          obs.disconnect()
        }
      },
      options,
    )
    obs.observe(el)
    return () => obs.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [el, inView])

  return [ref, inView]
}
