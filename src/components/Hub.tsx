import type { CSSProperties } from 'react'
import SecHead from './SecHead'
import SplitText from './SplitText'
import { useInView } from '../hooks/useInView'
import { hub } from '../data'
import img1 from '../assets/img-1.png'
import img2 from '../assets/img-2.png'
import img3 from '../assets/img-3.png'
import img4 from '../assets/img-4.png'
import img5 from '../assets/img-5.png'

const images = [img1, img2, img3, img4, img5]

export default function Hub() {
  const [galleryRef, galleryIn] = useInView()
  const [pointsRef, pointsIn] = useInView()
  return (
    <section className="block hub" id="collaboration">
      <div className="wrap">
        <SecHead label={hub.label} />
        <div className="hub-head">
          <SplitText as="h2" mode="mask">{hub.title}</SplitText>
          <div className="body">
            {hub.intro.map((t) => <SplitText key={t} as="p" mode="fade">{t}</SplitText>)}
          </div>
        </div>
        <ul ref={galleryRef} className={'hub-gallery' + (galleryIn ? ' in' : '')} aria-label="Collaboration gallery">
          {images.map((src, i) => (
            <li key={src} style={{ '--i': i } as CSSProperties}>
              <img src={src} alt={hub.photos[i]} loading="lazy" decoding="async" />
            </li>
          ))}
        </ul>
        <div ref={pointsRef} className={'hub-points' + (pointsIn ? ' in' : '')}>
          <p className="hub-lead">{hub.pointsLead}</p>
          <ul className="art-points">
            {hub.points.map((p) => <li key={p.label}><strong>{p.label}</strong>{p.text}</li>)}
          </ul>
        </div>
        <p className="hub-close">{hub.close}</p>
      </div>
    </section>
  )
}
