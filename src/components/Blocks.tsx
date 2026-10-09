import type { CSSProperties } from 'react'
import type { Block } from '../data'

/** Renders paragraphs, subheadings, pull quotes and bullet lists from content data. */
export default function Blocks({ blocks, listClass, k }: { blocks: Block[]; listClass: string; k?: boolean }) {
  return (
    <>
      {blocks.map((b, i) => {
        const style = k ? ({ '--k': i + 1 } as CSSProperties) : undefined
        switch (b.t) {
          case 'p': return <p key={i} style={style}>{b.text}</p>
          case 'q': return <p key={i} className="pj-close">{b.text}</p>
          case 'h': return <h4 key={i}>{b.text}</h4>
          case 'ul': return (
            <ul key={i} className={listClass} style={style}>
              {b.items.map((it, j) => typeof it === 'string'
                ? <li key={j}>{it}</li>
                : <li key={j}><strong>{it.label}</strong>{it.text}</li>)}
            </ul>
          )
        }
      })}
    </>
  )
}
