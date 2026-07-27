import { useEffect, useRef, useState } from 'react';

/**
 * Returns a ref to attach to a container and a boolean `isVisible`
 * that becomes true once the element enters the viewport (once only).
 * Content is styled to be readable even before JS runs; the hook only
 * adds a gentle settle-in, and honors prefers-reduced-motion.
 */
const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  // Reduced-motion users start visible (no reveal); everyone else starts
  // hidden and reveals on scroll. Seeding the initial state here avoids a
  // synchronous setState inside the effect.
  const [isVisible, setIsVisible] = useState(prefersReducedMotion);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el); // fire once only
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}
