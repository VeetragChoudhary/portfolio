import React from 'react';
import kraneLogo from '../assets/logo.png';
import { TileLabel } from './Tile';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="scroll-mt-20">
      <TileLabel>Experience</TileLabel>

      <div className="mt-4">
        <div className="flex items-center gap-3">
          <div className="glass-soft flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-white/70">
            <img src={kraneLogo} alt="Krane apps logo" className="h-5 w-5 object-contain" />
          </div>
          <div>
            <h3 className="text-[15px] font-semibold leading-tight text-slate-900 dark:text-slate-100">
              Krane apps
            </h3>
            <p className="font-mono text-[11px] text-slate-500 dark:text-slate-400">
              Backend Intern · Jan 2026 — May 2026
            </p>
          </div>
        </div>

        {/* 🔧 REPLACE with real responsibilities/impact at Krane */}
        <ul className="mt-4 space-y-2.5 text-[14px] leading-relaxed text-slate-600 dark:text-slate-300">
          <li className="flex gap-2.5">
            <span className="mt-1.5 h-1 w-1 shrink-0 bg-accent-soft" aria-hidden />
            Built and shipped backend services in production.
          </li>
          <li className="flex gap-2.5">
            <span className="mt-1.5 h-1 w-1 shrink-0 bg-accent-soft" aria-hidden />
            Designed APIs and data models for the product.
          </li>
          <li className="flex gap-2.5">
            <span className="mt-1.5 h-1 w-1 shrink-0 bg-accent-soft" aria-hidden />
            Collaborated across the stack to ship features end to end.
          </li>
        </ul>
      </div>
    </section>
  );
};
