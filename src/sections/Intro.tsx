import { Row, RowGroup } from '../components/Row'
import { bio, identity, mailto } from '../content'

export function Intro() {
  return (
    <section>
      <RowGroup className="mb-16">
        <Row label="name" tone="bright">
          {identity.name}
        </Row>
        <Row label="role">{identity.role}</Row>
        <Row label="location">{identity.location}</Row>
        <Row label="status" tone="accent">
          {identity.status}
        </Row>
        <Row label="contact">
          <a href={mailto}>{identity.email}</a>
        </Row>
      </RowGroup>

      <p className="mb-[76px] max-w-[66ch] text-body">{bio}</p>
    </section>
  )
}
