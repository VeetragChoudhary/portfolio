/*
  Direction contract (see DESIGN.md):
  THESIS — an engineered control surface, not a résumé: a few large soft-extruded
  panels with internal structure, not a grid of little cards. No pills, low radii.
  OWN-WORLD — minimal glass on a quiet ground; one accent (tokenized in index.css);
  structure via inset grooves; squared top navbar for wayfinding.
*/
import { useState, useEffect, useRef } from 'react';
import { flushSync } from 'react-dom';
import { Navbar } from './components/Navbar';
import { Identity } from './components/Identity';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Tile, Groove } from './components/Tile';
import { useScrollAnimation } from './hooks/useScrollAnimation';

/** Wraps a zone so it settles in on scroll (motion-safe, once). */
function Reveal({
  children,
  index = 0,
}: {
  children: React.ReactNode;
  index?: number;
}) {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div
      ref={ref}
      style={{
        transitionDelay: isVisible ? `${index * 80}ms` : '0ms',
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
      }}
      className={`transition-[opacity,transform] duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      {children}
    </div>
  );
}

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true;
  });

  // Apply the theme class + persist whenever darkMode changes.
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  // Guards against overlapping toggles while a reveal is mid-flight.
  const revealing = useRef(false);

  /**
   * Toggle theme with a circular reveal that GROWS from the toggle button and
   * spreads across the whole page — with content visible the entire time.
   *
   * Uses the View Transitions API, which is built for exactly this: it snapshots
   * the OLD page, renders the NEW page, and lets us reveal the new one over the
   * old. Both layers are the REAL page (content on both sides), so nothing ever
   * goes blank — unlike a flat-colour overlay.
   *
   * The earlier "Chrome reveals from centre" bug came from HOW the reveal was
   * driven (a WAAPI clip on the pseudo-element, and CSS custom properties that
   * don't inherit into the ::view-transition tree — Chrome ignored both and fell
   * back to its default centre effect). The fix: drive the reveal with a plain
   * CSS @keyframes whose circle coordinates are baked in as literal px values via
   * a <style> element injected per toggle. No WAAPI-on-pseudo, no CSS variables —
   * so Chrome and Brave behave identically, growing from the button.
   */
  const toggleTheme = (origin?: { x: number; y: number }) => {
    if (revealing.current) return;

    const nextDark = !darkMode;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const startVT = (
      document as Document & {
        startViewTransition?: (cb: () => void) => { ready: Promise<void>; finished: Promise<void> };
      }
    ).startViewTransition;

    // No API support or reduced motion → just flip, no animation.
    if (!startVT || prefersReduced) {
      setDarkMode(nextDark);
      return;
    }

    const vw = document.documentElement.clientWidth;
    const vh = document.documentElement.clientHeight;
    const x = origin?.x ?? vw - 44;
    const y = origin?.y ?? 44;
    const radius = Math.hypot(Math.max(x, vw - x), Math.max(y, vh - y));

    // Express the origin as a PERCENTAGE of the viewport, and the radius as a
    // percentage of the diagonal. Chrome mis-anchors a pixel `at Xpx Ypx`
    // position inside the ::view-transition-new(root) pseudo (it lands at
    // top-centre) while Brave/Edge honour it — using percentages makes Chrome
    // anchor to the snapshot box correctly, so all three browsers match.
    const xPct = (x / vw) * 100;
    const yPct = (y / vh) * 100;
    // A `%` radius in circle() resolves against diagonal / √2, so scale the
    // target px radius accordingly (and add a little headroom to guarantee the
    // farthest corner is fully covered).
    const diagonal = Math.hypot(vw, vh);
    const rPct = ((radius * Math.SQRT2) / diagonal) * 100 * 1.05;

    // Inject a per-toggle stylesheet: the NEW theme's snapshot is clipped by a
    // circle that grows from the button (0 → full).
    const style = document.createElement('style');
    style.textContent = `
      ::view-transition-old(root) { animation: none; }
      ::view-transition-new(root) {
        animation: vt-theme-grow 600ms cubic-bezier(0.65, 0, 0.35, 1) forwards;
      }
      @keyframes vt-theme-grow {
        from { clip-path: circle(0% at ${xPct}% ${yPct}%); }
        to   { clip-path: circle(${rPct}% at ${xPct}% ${yPct}%); }
      }
    `;
    document.head.appendChild(style);

    revealing.current = true;
    const transition = startVT.call(document, () => {
      flushSync(() => setDarkMode(nextDark));
    });

    transition.finished
      .catch(() => {})
      .finally(() => {
        style.remove();
        revealing.current = false;
      });
  };

  return (
    <div id="top" className="min-h-screen text-slate-700 dark:text-slate-300 font-sans pb-20 selection-accent">
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:rounded-md focus:bg-slate-900 focus:px-3 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
      >
        Skip to content
      </a>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-3">
        <Navbar darkMode={darkMode} onToggleTheme={toggleTheme} />

        <div className="space-y-5">
          {/* Zone 1 — Identity */}
          <Identity />

          {/* Zone 2 — Profile: About | Experience, then Skills, grooves inside */}
          <Reveal index={0}>
            <Tile className="p-6 sm:p-8">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-[1fr_2px_1fr] sm:gap-8">
                <About />
                <div className="hairline-v hidden h-full sm:block" aria-hidden />
                <Experience />
              </div>
              <Groove className="my-7" />
              <Skills />
            </Tile>
          </Reveal>

          {/* Zone 3 — Work */}
          <Reveal index={0}>
            <Tile className="p-6 sm:p-8">
              <Projects />
            </Tile>
          </Reveal>

          {/* Zone 4 — Footer: Education | Contact */}
          <Reveal index={0}>
            <Tile className="p-6 sm:p-8">
              <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 sm:gap-10">
                <Education />
                <Contact />
              </div>
            </Tile>
          </Reveal>
        </div>
      </main>
    </div>
  );
}
