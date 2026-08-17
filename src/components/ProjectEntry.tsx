import type { ProjectEntry as Entry } from '../content'
import { externalLinkProps } from '../lib/links'
import { Row, RowGroup } from './Row'

export function ProjectEntry({ entry }: { entry: Entry }) {
  return (
    <article>
      <div className="mb-[18px] flex flex-wrap items-baseline gap-4">
        <span className="text-accent">›</span>
        <span className="text-title tracking-[-0.01em] text-bright">{entry.title}</span>
        <a
          href={entry.source}
          {...externalLinkProps}
          className="text-source text-muted hover:text-accent-hover"
        >
          source ↗
        </a>
      </div>
      {/* Indent is retained on mobile — only the row columns collapse. */}
      <RowGroup className="pl-8">
        {entry.details.map((detail) => (
          <Row key={detail.label} label={detail.label} tone="body">
            {detail.value}
          </Row>
        ))}
        <Row label="stack">{entry.stack}</Row>
      </RowGroup>
    </article>
  )
}
