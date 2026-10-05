import SecHead from './SecHead'
import SplitText from './SplitText'
import { useInView } from '../hooks/useInView'
import { creds, type Cred } from '../data'

function CredItem({ title, text, issuer }: Cred) {
  const [ref, inView] = useInView()
  return (
    <li ref={ref} className={'cred' + (inView ? ' in' : '')}>
      <span className="seal" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg></span>
      <div>
        <h3>{title}</h3>{issuer && <span className="issuer">{issuer}</span>}
        <p>{text}</p>
      </div>
    </li>
  )
}

export default function Credentials() {
  return (
    <section className="block" id="credentials">
      <div className="wrap">
        <SecHead label="Credentials" />
        <div className="creds">
          <SplitText as="h2" mode="mask">Professional Certifications & Credentials</SplitText>
          <ul className="registry">
            {creds.map((c) => <CredItem key={c.title} {...c} />)}
          </ul>
        </div>
      </div>
    </section>
  )
}
