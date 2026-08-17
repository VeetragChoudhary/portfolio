import { footerLinks } from '../content'
import { linkProps } from '../lib/links'

export function Footer() {
  return (
    <footer className="flex flex-wrap gap-x-7 gap-y-3 border-t border-rule pt-7 pb-16 text-muted">
      {footerLinks.map((link) => (
        <a key={link.label} href={link.href} {...linkProps(link.href)}>
          {link.label}
        </a>
      ))}
      <span className="ml-auto">veetrag.dev</span>
    </footer>
  )
}
