import SecHead from './SecHead'
import SplitText from './SplitText'
import { useInView } from '../hooks/useInView'
import { repos, socials, type Repo } from '../data'

const github = socials.find((s) => s.name === 'GitHub')!

function GitHubLogo() {
  return <svg className="gh" viewBox="0 0 24 24" aria-hidden="true"><path d={github.path} /></svg>
}

function RepoCard({ r }: { r: Repo }) {
  const [ref, inView] = useInView()
  return (
    <article ref={ref} className={'pj repo' + (inView ? ' in' : '')}>
      <div className="bar"><div className="stripes"></div><div className="winctl" aria-hidden="true"><b></b><b></b><b></b></div></div>
      <div className="pj-body">
        <span className="src"><GitHubLogo />Infinite-Networker / {r.name}</span>
        <div>
          <h3>{r.title}</h3>
          <p className="pj-sub">{r.sub}</p>
        </div>
        <p>{r.text}</p>
        <a className="btn" href={r.url} target="_blank" rel="noopener noreferrer" aria-label={`View ${r.title} on GitHub`}>
          <GitHubLogo />View on GitHub
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9" /></svg>
        </a>
      </div>
    </article>
  )
}

export default function Repos() {
  return (
    <section className="block prj" id="repositories">
      <div className="wrap">
        <SecHead label="GitHub" />
        <SplitText as="h2" mode="mask">Featured Repositories</SplitText>
        <div className="pj-grid repo-grid">
          {repos.map((r) => <RepoCard key={r.url} r={r} />)}
        </div>
        <a className="btn repo-all" href={github.href} target="_blank" rel="noopener noreferrer">
          <GitHubLogo />See all repositories on GitHub
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9" /></svg>
        </a>
      </div>
    </section>
  )
}
