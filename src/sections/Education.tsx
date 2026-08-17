import { education } from '../content'
import { TimelineSection } from './TimelineSection'

export function Education() {
  // The last entry carries the larger gap down to the footer.
  return <TimelineSection title="education" entries={education} trailingClassName="mb-[88px]" />
}
