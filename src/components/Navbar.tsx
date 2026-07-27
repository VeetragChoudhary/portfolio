import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  onToggleTheme: (origin?: { x: number; y: number }) => void;
}

const sections = [
  { label: 'Work', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

/** Squared, extruded top navbar: mark left, section anchors + theme toggle right. */
export const Navbar: React.FC<NavbarProps> = ({ darkMode, onToggleTheme }) => {
  return (
    <div className="sticky top-3 z-50 mb-5">
      <nav className="glass flex items-center justify-between rounded-[10px] px-3 py-2 sm:px-4">
        {/* Mark */}
        <a
          href="#top"
          aria-label="Home"
          className="flex h-8 w-8 items-center justify-center rounded-md font-mono text-[12px] font-semibold tracking-tight text-slate-700 dark:text-slate-200 select-none"
        >
          VC
        </a>

        {/* Section anchors */}
        <div className="flex items-center gap-1">
          {sections.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="rounded-md px-2.5 py-1.5 font-mono text-[12px] text-slate-500 dark:text-slate-400 transition-colors hover:text-accent"
            >
              {s.label}
            </a>
          ))}
          {/* groove separator */}
          <div className="hairline-v mx-1.5 h-5" aria-hidden />
          <button
            onClick={(e) => {
              // Button center in layout-viewport space (matches the snapshot box
              // used by the reveal). getBoundingClientRect is already relative to
              // the layout viewport for non-pinch-zoomed pages.
              const r = e.currentTarget.getBoundingClientRect();
              onToggleTheme({ x: r.left + r.width / 2, y: r.top + r.height / 2 });
            }}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            className="glass-soft glass-interactive flex h-8 w-8 items-center justify-center rounded-md text-slate-600 dark:text-slate-400 hover:text-accent"
          >
            {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </div>
      </nav>
    </div>
  );
};
