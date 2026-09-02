/** Page content. Copy is final per the handoff. */

export const identity = {
  name: 'Veetrag Choudhary',
  role: 'backend focused fullstack engineer',
  location: 'remote',
  status: 'open to roles',
  email: 'veetragchoudhary@gmail.com',
} as const

/** The single source for the mailto href — used by the intro and the footer. */
export const mailto = `mailto:${identity.email}`

export const bio =
  "Backend engineer. I build APIs and data models, and I ship the whole thing myself when I need to — I've taken three projects from an idea to something running. I'm more comfortable on the server than in the browser."

/** A dated entry. Shared by experience and education — same shape, same rendering. */
export type TimelineEntry = {
  date: string
  title: string
  /** Continuation rows, rendered with an empty label cell. */
  notes?: string[]
}

export const experience: TimelineEntry[] = [
  {
    date: '2026.01—07',
    title: 'Krane apps — Fullstack Engineer',
    // TODO: placeholders inherited from the current site — replace with real
    // accomplishments before shipping (see README "Open items").
    notes: [
      'Built and shipped backend services in production.',
      'Designed APIs and data models for the products.',
      'Worked across the stack to take features end to end.',
    ],
  },
]

export type ProjectEntry = {
  title: string
  source: string
  /** Descriptive rows, rendered at #b4b1aa. */
  details: { label: string; value: string }[]
  /** The one line a recruiter scans for — rendered brighter, at #d9d7d2. */
  stack: string
}

export const projects: ProjectEntry[] = [
  {
    title: 'Centralized Exchange',
    source: 'https://github.com/VeetragChoudhary/CEX',
    details: [
      {
        label: 'what',
        value: 'A spot crypto exchange in TypeScript with an in-memory matching engine.',
      },
      { label: 'engine', value: 'Limit orders, price-time matching, balance settlement.' },
      { label: 'services', value: 'Four services coordinating over Redis pub/sub.' },
      { label: 'client', value: 'React terminal with a live orderbook over WebSockets.' },
    ],
    stack: 'TypeScript · Node · Express · Redis · PostgreSQL · Prisma · React',
  },
  {
    title: 'Contest Platform',
    source: 'https://github.com/VeetragChoudhary/Contest-Platform',
    details: [
      { label: 'what', value: 'A competitive programming platform with real-time leaderboards.' },
      { label: 'problems', value: 'MCQ and DSA, each with its own submission flow.' },
      { label: 'roles', value: 'Creator and contestant paths kept fully separate.' },
    ],
    stack: 'TypeScript · Node · Express · PostgreSQL · Prisma · React',
  },
  {
    title: 'NextUp',
    source: 'https://github.com/VeetragChoudhary/NextUp',
    details: [
      { label: 'what', value: 'Music streaming built around a collaborative, vote-driven queue.' },
      { label: 'realtime', value: 'Shared queue state pushed to every room over WebSockets.' },
    ],
    stack: 'Next.js · TypeScript · Express · PostgreSQL · Prisma',
  },
]

export const education: TimelineEntry[] = [
  {
    date: '2022—2025',
    title: 'BCA — MDS University, Ajmer',
  },
]

export type ToolkitGroup = {
  label: string
  value: string
}

export const toolkit: ToolkitGroup[] = [
  { label: 'backend', value: 'Node.js · Express · REST · Prisma · WebSockets' },
  { label: 'frontend', value: 'React · Next.js · TypeScript · Tailwind' },
  { label: 'data/infra', value: 'PostgreSQL · Supabase · MongoDB · Docker · Git' },
]

export type FooterLink = {
  label: string
  href: string
}

export const footerLinks: FooterLink[] = [
  { label: 'email', href: mailto },
  { label: 'github', href: 'https://github.com/VeetragChoudhary' },
  { label: 'linkedin', href: 'https://www.linkedin.com/in/veetrag-choudhary' },
  { label: 'x', href: 'https://x.com/veetrag_tw' },
]
