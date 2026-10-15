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
          <div>
            <p className="creds-intro">I am an advanced degree candidate pursuing both an MBA and a DBA in Applied AI Management at The University of Digital &amp; AI Management (UniDAIM), building upon my Bachelor of Business Administration (BBA) from the same institution. Dedicated to continuous professional growth, I have earned certifications from a wide array of prestigious institutions—including Harvard, Stanford, Oxford, Duke, and more—through targeted online programs, specialized coursework, and technical seminars.</p>
            <ul className="registry">
              {creds.map((c) => <CredItem key={c.title} {...c} />)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
