import { ProjectEntry } from '../components/ProjectEntry'
import { SectionHeader } from '../components/SectionHeader'
import { projects } from '../content'

export function Projects() {
  return (
    <section>
      <SectionHeader title="projects" count={`${projects.length} entries`} />
      {projects.map((entry, i) => (
        // The last entry takes the larger break before the next section.
        <div key={entry.title} className={i === projects.length - 1 ? 'mb-[76px]' : 'mb-[52px]'}>
          <ProjectEntry entry={entry} />
        </div>
      ))}
    </section>
  )
}
