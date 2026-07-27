import React from 'react';

type TileProps = {
  children: React.ReactNode;
  className?: string;
  variant?: 'raised' | 'inset';
  interactive?: boolean;
  as?: 'div' | 'section' | 'article';
} & React.HTMLAttributes<HTMLElement>;

/**
 * A pane of glass: translucent, gently blurred, hairline-bordered, with a
 * subtle top catch-light. Low radius, no pills. Panes are few and large.
 */
export const Tile: React.FC<TileProps> = ({
  children,
  className = '',
  interactive = false,
  as = 'div',
  ...rest
}) => {
  const Comp = as as React.ElementType;
  const press = interactive ? 'glass-interactive' : '';
  return (
    <Comp className={`rounded-[10px] glass ${press} ${className}`} {...rest}>
      {children}
    </Comp>
  );
};

/** A small mono label naming a region inside a pane. */
export const TileLabel: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => (
  <p className={`font-mono text-[11px] uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500 ${className}`}>
    {children}
  </p>
);

/** A squared glass button — no pills. */
export const NmButton: React.FC<
  { href?: string; children: React.ReactNode; className?: string; accent?: boolean } & React.AnchorHTMLAttributes<HTMLAnchorElement>
> = ({ href, children, className = '', accent = false, ...rest }) => {
  const tone = accent
    ? 'text-accent font-semibold'
    : 'text-slate-600 dark:text-slate-300 font-medium';
  return (
    <a
      href={href}
      className={`glass-soft glass-interactive inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm ${tone} ${className}`}
      {...rest}
    >
      {children}
    </a>
  );
};

/** Horizontal hairline rule dividing regions inside a pane. */
export const Groove: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`hairline ${className}`} aria-hidden />
);
