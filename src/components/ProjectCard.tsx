import React from 'react';
import { ArrowUpRight, Package } from 'lucide-react';

const GithubIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

export interface ProjectLink {
  label: string;
  url: string;
  type: 'website' | 'package' | 'source';
}

export interface ProjectCardProps {
  title: string;
  description?: string;
  tags: string[];
  links: ProjectLink[];
  cover: 'graph' | 'agents' | 'map';
}

const linkIcon = {
  website: ArrowUpRight,
  package: Package,
  source: GithubIcon,
};

/** Abstract cover motif per project — no external images required. */
const covers: Record<ProjectCardProps['cover'], React.ReactNode> = {
  // Centralized Exchange — connected nodes / graph
  graph: (
    <svg viewBox="0 0 400 200" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="gGraph" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#78716c" stopOpacity="0.12" />
          <stop offset="100%" stopColor="var(--accent-motif)" stopOpacity="0.10" />
        </linearGradient>
      </defs>
      <g stroke="var(--accent-motif)" strokeOpacity="0.35" strokeWidth="1.5">
        <line x1="70" y1="60" x2="150" y2="40" />
        <line x1="150" y1="40" x2="230" y2="90" />
        <line x1="150" y1="40" x2="120" y2="130" />
        <line x1="230" y1="90" x2="310" y2="60" />
        <line x1="230" y1="90" x2="270" y2="150" />
        <line x1="120" y1="130" x2="270" y2="150" />
        <line x1="70" y1="60" x2="120" y2="130" />
      </g>
      <g fill="var(--accent-motif)">
        <circle cx="70" cy="60" r="5" opacity="0.9" />
        <circle cx="150" cy="40" r="7" opacity="0.95" />
        <circle cx="230" cy="90" r="6" opacity="0.9" />
        <circle cx="120" cy="130" r="4.5" opacity="0.8" />
        <circle cx="310" cy="60" r="4.5" opacity="0.8" />
        <circle cx="270" cy="150" r="5.5" opacity="0.85" />
      </g>
    </svg>
  ),
  // Contest Platform — orchestrated service flow
  agents: (
    <svg viewBox="0 0 400 200" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="gAgents" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--accent-motif)" stopOpacity="0.10" />
          <stop offset="100%" stopColor="#78716c" stopOpacity="0.12" />
        </linearGradient>
      </defs>
      <g fill="none" stroke="var(--accent-motif)" strokeOpacity="0.4" strokeWidth="1.5">
        <path d="M60 100 H150" />
        <path d="M150 100 H190 M150 60 H190 M150 140 H190" />
        <path d="M60 100 V60 M60 100 V140" strokeOpacity="0.25" />
      </g>
      <rect x="20" y="82" width="40" height="36" rx="6" fill="var(--accent-motif)" opacity="0.9" />
      <rect x="190" y="42" width="40" height="36" rx="6" fill="var(--accent-motif)" opacity="0.55" />
      <rect x="190" y="82" width="40" height="36" rx="6" fill="var(--accent-motif)" opacity="0.75" />
      <rect x="190" y="122" width="40" height="36" rx="6" fill="var(--accent-motif)" opacity="0.55" />
      <g stroke="var(--accent-motif)" strokeOpacity="0.35" strokeWidth="1.5">
        <path d="M230 60 H300" />
        <path d="M230 100 H300" />
        <path d="M230 140 H300" />
        <path d="M300 60 V140" />
      </g>
      <rect x="300" y="82" width="42" height="36" rx="6" fill="#78716c" opacity="0.6" />
    </svg>
  ),
  // NextUp — nodes and trend lines
  map: (
    <svg viewBox="0 0 400 200" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="gMap" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#78716c" stopOpacity="0.12" />
          <stop offset="100%" stopColor="var(--accent-motif)" stopOpacity="0.10" />
        </linearGradient>
      </defs>
      <g stroke="#78716c" strokeOpacity="0.25" strokeWidth="1">
        <line x1="0" y1="50" x2="400" y2="50" />
        <line x1="0" y1="100" x2="400" y2="100" />
        <line x1="0" y1="150" x2="400" y2="150" />
        <line x1="100" y1="0" x2="100" y2="200" />
        <line x1="200" y1="0" x2="200" y2="200" />
        <line x1="300" y1="0" x2="300" y2="200" />
      </g>
      <path d="M40 150 L120 90 L200 120 L280 60 L360 80" fill="none" stroke="var(--accent-motif)" strokeOpacity="0.5" strokeWidth="2" />
      <g fill="var(--accent-motif)">
        <circle cx="120" cy="90" r="6" opacity="0.9" />
        <circle cx="280" cy="60" r="7" opacity="0.95" />
        <circle cx="200" cy="120" r="5" opacity="0.8" />
      </g>
    </svg>
  ),
};

/** A squared project row: inset motif thumbnail + content, separated from
    siblings by grooves in the parent. No rounded cards, no pill tags. */
export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tags,
  links,
  cover,
}) => {
  return (
    <div className="group grid grid-cols-1 gap-5 sm:grid-cols-[180px_1fr] sm:gap-6">
      {/* Motif pressed into an inset well — lifts subtly with the row on hover */}
      <div className="glass-soft relative h-28 overflow-hidden rounded-md transition-[transform,border-color] duration-300 group-hover:-translate-y-0.5 group-hover:border-(--glass-border) sm:h-full">
        {covers[cover]}
      </div>

      {/* Content */}
      <div className="flex flex-col">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-base font-semibold leading-tight text-slate-900 dark:text-slate-50 transition-colors group-hover:text-accent">
            {title}
          </h3>
          <div className="flex items-center gap-1.5">
            {links.map((link) => {
              const Icon = linkIcon[link.type];
              return (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${title} — ${link.label}`}
                  title={link.label}
                  className="glass-soft glass-interactive flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 dark:text-slate-400 hover:text-accent"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              );
            })}
          </div>
        </div>

        {description && (
          <p className="mt-2 text-[14px] leading-relaxed text-slate-600 dark:text-slate-400">
            {description}
          </p>
        )}

        <div className="mt-3 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="glass-soft rounded-md px-2 py-0.5 font-mono text-[11px] text-slate-500 dark:text-slate-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
