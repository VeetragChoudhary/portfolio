import type { TimelineEntry as Entry } from '../content'
import { Row, RowGroup } from './Row'

type TimelineEntryProps = {
  entry: Entry
  className?: string
}

/**
 * A dated entry: title against its date, with optional continuation notes.
 * Shared by experience and education — both read as the same kind of line.
 */
export function TimelineEntry({ entry, className }: TimelineEntryProps) {
  return (
    <RowGroup className={className}>
      <Row label={entry.date} tone="bright">
        {entry.title}
      </Row>
      {entry.notes?.map((note) => (
        <Row key={note} tone="body">
          {note}
        </Row>
      ))}
    </RowGroup>
  )
}
