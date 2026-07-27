import React from 'react';
import { ProjectCard } from './ProjectCard';
import { TileLabel, Groove } from './Tile';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const projectData = [
  {
    title: 'ContextMemory',
    description: 'A memory system for AI apps that builds context graphs from interactions. Extracts facts as connected semantic and episodic memories for intelligent retrieval across conversations.',
    tags: ['Python', 'OpenAI', 'PostgreSQL', 'Vector DB', 'RAG', 'PyPI'],
    links: [
      { label: 'Website', url: 'https://contextmemory.ai', type: 'website' as const },
      { label: 'Package', url: 'https://pypi.org/project/contextmemory', type: 'package' as const }
    ],
    cover: 'graph' as const
  },
  {
    title: 'AIxAI',
    description: 'MCP-powered system that generates Pydantic AI agents via multi-agent LangGraph workflows. Crawls docs into Supabase with OpenAI embeddings for semantic, RAG-based answers.',
    tags: ['LangGraph', 'Pydantic AI', 'Supabase', 'Agentic RAG', 'MCP', 'Python'],
    links: [
      { label: 'Website', url: 'https://aixai.dev', type: 'website' as const },
      { label: 'Source', url: 'https://github.com/veetrag/aixai', type: 'source' as const }
    ],
    cover: 'agents' as const
  },
  {
    title: 'HomeSage',
    description: 'Smart companion for real estate transactions. Automates property valuation, aggregates market listings, and analyzes neighborhood trends with interactive map-based visualization.',
    tags: ['FastAPI', 'Machine Learning', 'Mapbox', 'Python', 'Data Science'],
    links: [
      { label: 'Website', url: 'https://homesage.ai', type: 'website' as const },
      { label: 'Source', url: 'https://github.com/veetrag/homesage', type: 'source' as const }
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
