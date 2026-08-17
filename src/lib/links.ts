/** Anything that isn't a mailto: leaves the site and opens in a new tab. */
export function isExternal(href: string) {
  return !href.startsWith('mailto:')
}

/**
 * Attributes for a link that opens in a new tab. `noreferrer` accompanies
 * `noopener` so the target page gets no referrer either.
 */
export const externalLinkProps = {
  target: '_blank',
  rel: 'noopener noreferrer',
} as const

/** Spreads the new-tab attributes only when the href actually leaves the site. */
export function linkProps(href: string) {
  return isExternal(href) ? externalLinkProps : {}
}
