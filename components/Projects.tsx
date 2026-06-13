import React from 'react';
import SectionTitle from './ui/SectionTitle';

const PROJECTS = [
  {
    title: 'Kadi URL Shortener',
    description: 'URL shortener that won the MLH Production Hackathon Incident Response category. Flask, Redis, PostgreSQL. Full observability with Prometheus, Grafana, Alertmanager. 0% error rate at 500 concurrent users.',
    tags: ['Flask', 'Docker', 'Prometheus', 'Grafana', 'CI/CD'],
    repoUrl: 'https://github.com/lewisawe/PE-URL-Shortner',
    highlight: 'MLH Winner',
    gradient: 'from-purple-900/60 to-iris/20',
  },
  {
    title: 'Guardian',
    description: 'Security monitoring tool built in Python. Watches for suspicious activity and sends alerts when something looks wrong.',
    tags: ['Python', 'Security', 'Threat Detection'],
    repoUrl: 'https://github.com/lewisawe/Guardian-',
    gradient: 'from-aubergine to-plum/30',
  },
  {
    title: 'Agent Containment Protocol',
    description: 'Agent containment system that tests how AI agents behave under restricted permissions and sandboxed environments.',
    tags: ['TypeScript', 'Security', 'AI Agents'],
    repoUrl: 'https://github.com/lewisawe/agent-containment-protocol',
    gradient: 'from-iris/30 to-aubergine',
  },
  {
    title: 'AWS Bootcamp Cruddur',
    description: 'Full-stack cloud-native application. 190 commits across 13 weeks of documented architecture decisions with Flask, React, AWS infra, Docker.',
    tags: ['Python', 'AWS', 'Docker', 'CDK'],
    repoUrl: 'https://github.com/lewisawe/aws-bootcamp-cruddur-2023',
    gradient: 'from-plum/40 to-void',
  },
  {
    title: 'Terraform Projects',
    description: 'IaC modules for provisioning AWS resources. VPCs, EC2 instances, S3 buckets, IAM policies managed through reusable Terraform configs.',
    tags: ['Terraform', 'AWS', 'IaC'],
    repoUrl: 'https://github.com/lewisawe/Terraform_Projects',
    gradient: 'from-aubergine to-purple-900/40',
  },
  {
    title: 'ETL Pipeline with Bash',
    description: 'Automated ETL pipeline using Bash and PostgreSQL. Extracts, transforms, and loads data on a cron schedule, runs end-to-end in 2 minutes.',
    tags: ['Bash', 'PostgreSQL', 'ETL'],
    repoUrl: 'https://github.com/lewisawe/ETL_with_bash',
    gradient: 'from-iris/20 to-void',
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 md:py-32">
      <SectionTitle title="Projects" />
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS.map((project, i) => (
          <a
            key={project.title}
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative p-6 rounded-card border border-white/10 bg-gradient-to-br ${project.gradient} hover:border-iris/40 transition-all duration-200`}
          >
            {/* Decorative number */}
            <span className="absolute top-4 right-6 font-serif italic text-6xl font-light text-white/10 leading-none">
              {String(i + 1).padStart(2, '0')}
            </span>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-3">
                <h3 className="font-sans font-bold text-lg text-bone-white">{project.title}</h3>
                {project.highlight && (
                  <span className="text-xs font-mono text-iris border border-iris/40 px-2 py-0.5 rounded-pill">
                    {project.highlight}
                  </span>
                )}
              </div>
              <p className="text-sm text-smoke leading-relaxed mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs font-mono text-bone-white/70 border border-white/15 px-2 py-0.5 rounded-pill">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <span className="absolute bottom-6 right-6 text-smoke group-hover:text-iris transition-colors" aria-hidden="true">→</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
