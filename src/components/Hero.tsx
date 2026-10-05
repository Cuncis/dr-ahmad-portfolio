import { Fragment, useEffect, useLayoutEffect, useRef, useState, type CSSProperties } from 'react'
import { flushSync } from 'react-dom'
import portrait from '../assets/portrait.jpg'
import { NAME, hudWords, sayLines } from '../data'

const pad = () => (Math.random() * 99 | 0).toString().padStart(2, '0')
const line = (n: number) =>
  Array.from({ length: n }, () => `${hudWords[Math.floor(Math.random() * hudWords.length)]} ${pad()}`).join(' / ')
const rows = (n: number) => Array.from({ length: n }, () => line(5))

type IdentState = 'idle' | 'on' | 'off' | 'reset'
type SayState = 'idle' | 'on' | 'out'

class Cancelled extends Error {}

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const identRef = useRef<HTMLDivElement>(null)
  const sayRef = useRef<HTMLDivElement>(null)

  const [scale, setScale] = useState(1)
  const [tall, setTall] = useState(false)
  const [log, setLog] = useState(() => rows(4))
  const [log2, setLog2] = useState(() => rows(5))
  const [tick, setTick] = useState('00 · 00')
  const [ident, setIdent] = useState<IdentState>('idle')
  const [say, setSay] = useState<SayState>('idle')
  const [lineIdx, setLineIdx] = useState(-1)

  /* fit the fixed design stage inside the hero (below the nav) */
  useLayoutEffect(() => {
    const fit = () => {
      const hero = heroRef.current
      if (!hero) return
      const w = hero.clientWidth
      const h = hero.clientHeight - 60 - 36 /* nav + scroll cue */
      const isTall = w / h < 0.85
      const sw = isTall ? 720 : 1280
      const sh = isTall ? 1180 : 720
      setTall(isTall)
      setScale(Math.min(w / sw, h / sh))
    }
    fit()
    window.addEventListener('resize', fit)
    return () => window.removeEventListener('resize', fit)
  }, [])

  /* hero HUD micro-text */
  useEffect(() => {
    const id = setInterval(() => {
      setLog(rows(4))
      setLog2(rows(5))
      setTick(`${pad()} · ${pad()}`)
    }, 1800)
    return () => clearInterval(id)
  }, [])

  /* hero timeline: name -> three statements -> loop */
  useEffect(() => {
    let cancelled = false
    const wait = (ms: number) =>
      new Promise<void>((resolve, reject) =>
        setTimeout(() => (cancelled ? reject(new Cancelled()) : resolve()), ms))

    async function showIdent() {
      flushSync(() => setIdent('idle'))
      void identRef.current?.offsetWidth
      setIdent('on')
      await wait(4200)
      setIdent('off')
      await wait(700)
      flushSync(() => setIdent('reset'))
      await wait(60)
      setIdent('idle')
    }

    async function showLine(i: number) {
      flushSync(() => { setSay('idle'); setLineIdx(i) })
      void sayRef.current?.offsetWidth
      setSay('on')
      await wait(4100)
      setSay('out')
      await wait(800)
    }

    ;(async () => {
      try {
        await wait(900)
        while (true) {
          await showIdent()
          for (let i = 0; i < sayLines.length; i++) await showLine(i)
        }
      } catch (e) {
        if (!(e instanceof Cancelled)) throw e
      }
    })()

    return () => { cancelled = true }
  }, [])

  const words = lineIdx >= 0 ? sayLines[lineIdx].split(' ') : []

  return (
    <section className="hero" id="hero" ref={heroRef}>
      <div className={'stage' + (tall ? ' tall' : '')} id="stage" style={{ '--s': scale } as CSSProperties}>
        <section className="card" aria-label={`Portrait of ${NAME}`}>
          <div className="ticks"><i></i><i></i><i></i><i></i></div>
          <svg className="shell" viewBox="0 0 462 596" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <linearGradient id="gl" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#eef0f2" /><stop offset="1" stopColor="#d6dade" />
              </linearGradient>
            </defs>
            <path d="M18 8 H160 L172 14 H290 L302 8 H444 Q454 8 454 18 V220 L448 228 V380 L454 388 V578 Q454 588 444 588 H300 L290 582 H172 L162 588 H18 Q8 588 8 578 V388 L14 380 V228 L8 220 V18 Q8 8 18 8 Z" fill="url(#gl)" fillOpacity=".92" stroke="#868e96" strokeWidth="2.2" strokeLinejoin="round" />
            <path d="M18 14 H160 M302 14 H444" stroke="#fff" strokeOpacity=".9" strokeWidth="1" fill="none" />
          </svg>
          <div className="sideline"></div><div className="sidedots"></div><div className="rdots"></div>
          <div className="stripes"></div>
          <div className="winctl" aria-hidden="true"><b></b><b></b><b></b></div>
          <div className="brk tl"></div><div className="brk tr"></div><div className="brk bl"></div><div className="brk br"></div>
          <div className="photo"><img alt={NAME} src={portrait} /></div>
          <div className="chip">{NAME}</div>
        </section>

        <div className="topbar" aria-hidden="true"><i></i><u></u><em></em><small id="tick">{tick}</small></div>
        <div className="bracket-tr" aria-hidden="true"></div>
        <div className="hud" style={{ left: 1112, top: 64, width: 98, textAlign: 'right' }} aria-hidden="true">
          <div className="t">Connections</div><span>Link established across</span><span>nodes and active threads</span>
        </div>
        <div className="hud" id="log" style={{ left: 1048, top: 90, width: 150, height: 44, textAlign: 'right' }} aria-hidden="true">
          {log.map((r, i) => <span key={i}>{r}</span>)}
        </div>
        <div className="bracket-br" aria-hidden="true"></div>
        <div className="hud" id="log2" style={{ left: 601, top: 553, width: 150, height: 52 }} aria-hidden="true">
          <div className="t">Innovations</div>
          {log2.map((r, i) => <span key={i}>{r}</span>)}
        </div>

        <section className="copy" aria-live="off">
          <div
            className={'ident' + (ident === 'on' ? ' on' : ident === 'idle' ? '' : ' off')}
            id="ident"
            ref={identRef}
            style={ident === 'reset' ? { clipPath: 'inset(0 100% 0 0)' } : undefined}
          >
            <h1>{NAME}</h1>
            <p>Innovations in AI, VR &amp; Automotive Engineering</p>
          </div>
          <div className={'say' + (say === 'idle' ? '' : ` ${say === 'out' ? 'out' : 'on'}`)} id="say" ref={sayRef}>
            <i className="corner c1"></i><i className="corner c2"></i><i className="corner c3"></i><i className="corner c4"></i>
            <p id="sayText" key={lineIdx}>
              {words.map((w, i) => (
                <Fragment key={i}>
                  <span className="w" style={{ transitionDelay: `${i * 55}ms` }}>{w}</span>{' '}
                </Fragment>
              ))}
            </p>
          </div>
        </section>
      </div>
      <a className="cue" href="#about" aria-label="Scroll to About">Scroll<span></span></a>
    </section>
  )
}
