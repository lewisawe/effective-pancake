import React, { useRef } from 'react';
import { PROJECTS } from '../constants';
import SectionTitle from './ui/SectionTitle';
import Card from './ui/Card';
import Tag from './ui/Tag';
import { GithubIcon, ExternalLinkIcon } from './ui/Icons';
import useOnScreen from '../hooks/useOnScreen';

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useOnScreen(sectionRef, { threshold: 0.1, triggerOnce: true });

  return (
    <section id="projects" ref={sectionRef} className="py-16 md:py-24">
      <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <SectionTitle title="[ Featured Projects ]" />
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className={`transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: `${isVisible ? index * 150 : 0}ms` }}
          >
            <Card>
              <div className="p-6 h-full flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-cyan-400">{project.title}</h3>
                  <div className="flex space-x-3 text-gray-400">
                      {project.repoUrl && (
                          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                              <GithubIcon />
                          </a>
                      )}
                      {project.liveUrl && (
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                              <ExternalLinkIcon />
                          </a>
                      )}
                  </div>
                </div>
                <p className="text-gray-400 flex-grow">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
