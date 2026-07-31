import React from 'react';
import { ProjectCard } from './ProjectCard';
import { TileLabel, Groove } from './Tile';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const projectData = [
  {
    title: 'Centralized Exchange',
    tags: ['React', 'TypeScript', 'Node.js', 'Express', 'Redis', 'WebSockets', 'PostgreSQL', 'Prisma'],
    links: [
      { label: 'Source', url: 'https://github.com/VeetragChoudhary/CEX', type: 'source' as const }
    ],
    cover: 'graph' as const
  },
  {
    title: 'Contest Platform',
    description: 'A competitive programming contest platform with real-time leaderboards, multi-type problem support (MCQ and DSA), and separate creator/contestant workflows.',
    tags: ['React', 'TypeScript', 'Express', 'Node.js', 'PostgreSQL', 'Prisma'],
    links: [
      { label: 'Source', url: 'https://github.com/VeetragChoudhary/Contest-Platform', type: 'source' as const }
    ],
    cover: 'agents' as const
  },
  {
    title: 'NextUp',
    description: 'A real-time collaborative music queue based music streaming platform. Built with Next.js frontend and a express.js backend with PostgreSQL + Prisma.',
    tags: ['TypeScript', 'Next.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Prisma', 'WebSockets'],
    links: [
      { label: 'Source', url: 'https://github.com/VeetragChoudhary/NextUp', type: 'source' as const }
    ],
    cover: 'map' as const
  }
];

function StaggeredRow({
  project,
  index,
}: {
  project: (typeof projectData)[number];
  index: number;
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
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
      }`}
    >
      <ProjectCard {...project} />
    </div>
  );
}

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="scroll-mt-20">
      <TileLabel>Selected Work</TileLabel>
      <div className="mt-6">
        {projectData.map((project, i) => (
          <React.Fragment key={project.title}>
            {i > 0 && <Groove className="my-7" />}
            <StaggeredRow project={project} index={i} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};
