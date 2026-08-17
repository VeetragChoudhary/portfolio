import type { ReactNode } from 'react'

type RowProps = {
  /** Left column. Omit for continuation rows, which keep an empty label cell. */
  label?: string
  children: ReactNode
  /** Value color. Defaults to the inherited page color (#d9d7d2). */
  tone?: 'bright' | 'body' | 'accent'
}

const toneClass = {
  bright: 'text-bright',
  body: 'text-body',
  accent: 'text-accent',
} as const

/**
 * The page's one structural primitive: a label → value line.
 * Below 760px the two columns collapse to label stacked above value.
 */
export function Row({ label, children, tone }: RowProps) {
  return (
    <div className="grid grid-cols-[var(--label-col)_1fr] gap-x-[var(--label-gutter)] max-[760px]:grid-cols-1 max-[760px]:gap-0">
      <span className="text-muted">{label}</span>
      <span className={tone ? toneClass[tone] : undefined}>{children}</span>
    </div>
  )
}

/**
 * Rows sit as adjacent lines, not separated blocks — hence the 1px gap.
 * Below 760px rows stack their own label above their value, so the gap between
 * rows has to grow past that to keep each pair reading as one unit.
 */
export function RowGroup({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return <div className={`grid gap-px max-[760px]:gap-2 ${className ?? ''}`}>{children}</div>
}
