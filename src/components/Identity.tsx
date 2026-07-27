import React from 'react';
import { Mail } from 'lucide-react';
import { Tile } from './Tile';

const GithubIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);
const LinkedInIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);
const XIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const socials = [
  { label: 'GitHub', url: 'https://github.com/VeetragChoudhary', Icon: GithubIcon },
  { label: 'X', url: 'https://x.com/veetrag_twt', Icon: XIcon },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/veetrag-choudhary', Icon: LinkedInIcon },
];

/**
 * The identity zone — the first large panel. Establishes the person, the
 * positioning claim, and the primary action as a squared accent key, with an
 * inset status well on the right. Low radius, no pills.
 */
export const Identity: React.FC = () => {
  return (
    <Tile as="section" className="relative overflow-hidden p-6 sm:p-9">
      <div className="relative flex flex-col gap-7 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-xl">
          <div className="flex items-center gap-4">
            <div className="glass-soft flex h-14 w-14 shrink-0 items-center justify-center rounded-lg font-mono text-sm font-semibold tracking-tight text-slate-500 dark:text-slate-400 select-none">
              VC
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-[-0.03em] leading-none text-slate-900 dark:text-white">
                Veetrag Choudhary
              </h1>
              <p className="mt-2 font-mono text-[13px] tracking-tight text-slate-500 dark:text-slate-500">
                Backend Engineer <span className="text-accent">·</span> Fullstack <span className="text-accent">·</span> Applied AI
              </p>
            </div>
          </div>

          <p className="mt-7 text-lg sm:text-xl font-medium leading-snug tracking-[-0.01em] text-slate-700 dark:text-slate-200">
            I take an idea to a production system on my own — concept, build, and deploy.
          </p>

          {/* Email + social links */}
          <div className="mt-7 space-y-4">
            <a
              href="mailto:veetragchoudhary@gmail.com"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-opacity hover:opacity-80"
            >
              <Mail className="h-4 w-4" />
              veetragchoudhary@gmail.com
            </a>

            <div className="flex items-center gap-2">
              {socials.map(({ label, url, Icon }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="glass-soft glass-interactive flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 dark:text-slate-400 hover:text-accent"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Status — quiet, hairline-framed, not a nested glass box */}
        <div className="sm:w-56 sm:shrink-0 sm:border-l sm:border-(--glass-border) sm:pl-6">
          <div className="flex items-center gap-2.5 font-mono text-[12px] text-slate-500 dark:text-slate-400">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </span>
            currently building
          </div>
          <p className="mt-1.5 text-[13px] font-medium leading-snug text-slate-700 dark:text-slate-200">
            {/* 🔧 UPDATE with your current project */}
            A REST API service — Node.js &amp; Prisma
          </p>
        </div>
      </div>
    </Tile>
  );
};
