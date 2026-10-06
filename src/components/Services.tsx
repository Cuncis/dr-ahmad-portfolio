import { useCallback, useEffect, useLayoutEffect, useRef, useState, type KeyboardEvent } from 'react'
import SecHead from './SecHead'
import SplitText from './SplitText'
import { useInView } from '../hooks/useInView'
import { services } from '../data'

export default function Services() {
  const [selected, setSelected] = useState(0)
  const [tabsRef, tabsIn] = useInView()
  const [winRef, winIn] = useInView()
  const tabEls = useRef<(HTMLButtonElement | null)[]>([])
  const marker = useRef<HTMLSpanElement>(null)

  const placeMarker = useCallback(() => {
    const cur = tabEls.current[selected]
    if (!cur || !marker.current) return
    marker.current.style.setProperty('--my', cur.offsetTop + 'px')
    marker.current.style.setProperty('--mh', cur.offsetHeight + 'px')
  }, [selected])

  useLayoutEffect(placeMarker, [placeMarker])

  useEffect(() => {
    window.addEventListener('resize', placeMarker)
    window.addEventListener('load', placeMarker)
    document.fonts?.ready.then(placeMarker)
    return () => {
      window.removeEventListener('resize', placeMarker)
      window.removeEventListener('load', placeMarker)
    }
  }, [placeMarker])

  const onKeyDown = (e: KeyboardEvent, i: number) => {
    const n = services.length
    let k: number | null = null
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') k = (i + 1) % n
    else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') k = (i - 1 + n) % n
    else if (e.key === 'Home') k = 0
    else if (e.key === 'End') k = n - 1
    if (k !== null) {
      e.preventDefault()
      setSelected(k)
      tabEls.current[k]?.focus()
    }
  }

  return (
    <section className="block svc" id="services">
      <div className="wrap">
        <SecHead label="Services" />
        <SplitText as="h2" mode="mask">My Professional Services</SplitText>
        <div className="console">
          <div className={'tabs' + (tabsIn ? ' in' : '')} id="tabs" ref={tabsRef} role="tablist" aria-label="Professional services" aria-orientation="vertical">
            <span className="marker" id="marker" ref={marker} aria-hidden="true"></span>
            {services.map((s, i) => (
              <button
                key={s.tab}
                ref={(el) => { tabEls.current[i] = el }}
                className="tab"
                role="tab"
                id={`tab-${i}`}
                aria-controls={`svc-${i}`}
                aria-selected={i === selected}
                tabIndex={i === selected ? 0 : -1}
                style={{ '--i': i } as React.CSSProperties}
                onClick={() => setSelected(i)}
                onKeyDown={(e) => onKeyDown(e, i)}
              >{s.tab}</button>
            ))}
          </div>
          <div className={'panel win' + (winIn ? ' in' : '')} ref={winRef}>
            <div className="bar"><div className="stripes"></div><div className="winctl" aria-hidden="true"><b></b><b></b><b></b></div></div>
            <div className="in-body">
              {services.map((s, i) => (
                <div key={s.tab} className={'svc-panel' + (i === selected ? ' active' : '')} role="tabpanel" id={`svc-${i}`} aria-labelledby={`tab-${i}`}>
                  <h3>{s.tab}</h3>
                  <ul className="svc-list">
                    {s.items.map((t) => <li key={t}>{t}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
