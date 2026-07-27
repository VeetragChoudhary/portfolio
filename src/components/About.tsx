import React from 'react';
import { TileLabel } from './Tile';

export const About: React.FC = () => {
  return (
    <section id="about" className="scroll-mt-20">
      <TileLabel>About</TileLabel>
      <p className="mt-4 text-[15px] sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
        I build backends — APIs, data models, the stuff that has to actually
        stay up. I can do the full stack when a project needs it, but I'm
        happiest closer to the server. Lately I've been wiring in applied AI:
        retrieval, agents, memory systems — using it to make things work, not
        to chase the hype.
      </p>
    </section>
  );
};
