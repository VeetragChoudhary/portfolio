import { Row, RowGroup } from '../components/Row'
import { SectionHeader } from '../components/SectionHeader'
import { toolkit } from '../content'

export function Toolkit() {
  return (
    <section>
      <SectionHeader title="toolkit" count={`${toolkit.length} groups`} />
      <RowGroup className="mb-[76px]">
        {toolkit.map((group) => (
          <Row key={group.label} label={group.label}>
            {group.value}
          </Row>
        ))}
      </RowGroup>
    </section>
  )
}
