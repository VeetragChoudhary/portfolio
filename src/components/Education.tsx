import React from 'react';
import { TileLabel } from './Tile';

export const Education: React.FC = () => {
  return (
    <section id="education" className="scroll-mt-20">
      <TileLabel>Education</TileLabel>

      <div className="mt-4 flex items-start gap-3">
        <div className="glass-soft flex h-10 w-10 shrink-0 items-center justify-center rounded-md">
          <svg viewBox="0 0 100 100" className="h-5 w-5" aria-hidden>
            <circle cx="50" cy="50" r="40" fill="none" stroke="#ef4444" strokeWidth="4" />
            <polygon points="50,20 75,45 60,45 60,75 40,75 40,45 25,45" fill="#ef4444" />
          </svg>
        </div>
        <div>
          <h3 className="text-[15px] font-semibold leading-tight text-slate-900 dark:text-slate-100">
            Maharshi Dayanand Saraswati University
          </h3>
          <p className="mt-1 text-[14px] text-slate-600 dark:text-slate-400">
            Bachelor of Computer Applications · Ajmer
          </p>
          <p className="mt-2 font-mono text-[11px] text-slate-400 dark:text-slate-500">
            2022 — 2025
          </p>
        </div>
      </div>
    </section>
  );
};
