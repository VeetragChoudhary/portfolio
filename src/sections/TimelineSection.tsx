import { SectionHeader } from '../components/SectionHeader'
import { TimelineEntry } from '../components/TimelineEntry'
import type { TimelineEntry as Entry } from '../content'

type TimelineSectionProps = {
  title: string
  entries: Entry[]
  /** Bottom margin on the final entry, carrying the gap to whatever follows. */
  trailingClassName: string
}

/**
 * A section of dated entries. Experience and education render identically —
 * they differ only in heading, data, and the trailing gap.
 */
export function TimelineSection({ title, entries, trailingClassName }: TimelineSectionProps) {
  return (
    <section>
      <SectionHeader title={title} count={`${entries.length} entries`} />
      {entries.map((entry, i) => (
        <TimelineEntry
          key={entry.title}
          entry={entry}
          className={i === entries.length - 1 ? trailingClassName : 'mb-11'}
        />
      ))}
    </section>
  )
}
