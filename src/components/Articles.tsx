import type { CSSProperties } from 'react'
import SecHead from './SecHead'
import SplitText from './SplitText'
import Blocks from './Blocks'
import { useInView } from '../hooks/useInView'
import { articles, socials, type Article } from '../data'

const stackPath = socials.find((s) => s.name === 'Stack Overflow')!.path

function ArticleItem({ a, n }: { a: Article; n: number }) {
  const [ref, inView] = useInView()
  return (
    <li ref={ref} className={'article' + (inView ? ' in' : '')}>
      <div className="art-meta">
        <span className="art-no" aria-hidden="true">{String(n + 1).padStart(2, '0')}</span>
        <span className="src"><svg viewBox="0 0 24 24" aria-hidden="true"><path d={stackPath} /></svg>{a.source}</span>
        <span className="when">{a.date}</span>
      </div>
      <div className="art-body">
        <h3 style={{ '--k': 0 } as CSSProperties}>{a.title}</h3>
        <Blocks blocks={a.body} listClass="art-points" k />
        <a className="btn" style={{ '--k': a.body.length + 1 } as CSSProperties} href={a.url} target="_blank" rel="noopener noreferrer">
          Read the full article
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9" /></svg>
        </a>
      </div>
    </li>
  )
}

export default function Articles() {
  return (
    <section className="block art" id="articles">
      <div className="wrap">
        <SecHead label="Articles" />
        <SplitText as="h2" mode="mask">Featured Articles</SplitText>
        <ol className="art-list">
          {articles.map((a, n) => <ArticleItem key={a.url} a={a} n={n} />)}
        </ol>
      </div>
    </section>
  )
}
