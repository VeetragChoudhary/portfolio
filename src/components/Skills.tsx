import React from 'react';
import { TileLabel } from './Tile';

const skillGroups = [
  { label: 'Backend', skills: ['Node.js', 'Express', 'REST APIs', 'Prisma', 'WebSockets'] },
  { label: 'Frontend', skills: ['React', 'Next.js', 'TypeScript', 'Tailwind'] },
  { label: 'Data & Infra', skills: ['PostgreSQL', 'Supabase', 'MongoDB', 'Docker', 'Git'] },
];

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="scroll-mt-20">
      <TileLabel>Toolkit</TileLabel>

      <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.label}>
            <p className="font-mono text-xs text-slate-400 dark:text-slate-500">
              {group.label}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="glass-soft rounded-md px-2.5 py-1 font-mono text-xs text-slate-600 dark:text-slate-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
