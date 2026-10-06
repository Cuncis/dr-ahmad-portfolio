import SecHead from './SecHead'
import SplitText from './SplitText'
import { useInView } from '../hooks/useInView'

const societies = ['Artificial Intelligence', 'Computer Science', 'Information System Engineering', 'Software Engineering']

function Badge({ children }: { children: React.ReactNode }) {
  const [ref, inView] = useInView()
  return <article ref={ref} className={'badge' + (inView ? ' in' : '')}>{children}</article>
}

export default function Memberships() {
  return (
    <section className="block" id="memberships">
      <div className="wrap">
        <SecHead label="Memberships" />
        <div className="memb">
          <SplitText as="h2" mode="mask">Professional Memberships & Societies</SplitText>
          <div className="badges">
            <Badge>
              <h3>International Association of Engineers (IAENG)</h3>
              <p className="pill-row"><span className="when">Active Member since September 2023</span></p>
            </Badge>
            <Badge>
              <h3>Specialized IAENG Societies</h3>
              <p>Affiliated member across societies for Artificial Intelligence, Computer Science, Information System Engineering, and Software Engineering.</p>
              <ul className="tags" aria-label="Societies">
                {societies.map((t) => <li key={t}>{t}</li>)}
              </ul>
            </Badge>
          </div>
        </div>
      </div>
    </section>
  )
}
