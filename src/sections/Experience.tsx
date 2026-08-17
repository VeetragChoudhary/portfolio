import { experience } from '../content'
import { TimelineSection } from './TimelineSection'

export function Experience() {
  // The last entry takes the larger break before the next section.
  return <TimelineSection title="experience" entries={experience} trailingClassName="mb-[76px]" />
}
