/**
 * The only device that separates sections. There is no other heading style.
 */
export function SectionHeader({ title, count }: { title: string; count: string }) {
  return (
    <div className="mb-10 flex justify-between border-t border-rule pt-3 text-muted">
      <span>{title}</span>
      <span>{count}</span>
    </div>
  )
}
