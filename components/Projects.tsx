import React from 'react';
import SectionTitle from './ui/SectionTitle';
import { GithubIcon } from './ui/Icons';

const PROJECTS = [
  {
    title: 'Kadi URL Shortener',
    description: 'URL shortener that won the MLH Production Hackathon Incident Response category. Built with Flask, Redis, and PostgreSQL. Full observability stack with Prometheus, Grafana, and Alertmanager. 0% error rate at 500 concurrent users.',
    tags: ['Flask', 'Docker', 'Prometheus', 'Grafana', 'CI/CD', 'Incident Response'],
    repoUrl: 'https://github.com/lewisawe/PE-URL-Shortner',
    highlight: 'MLH Hackathon Winner',
  },
  {
    title: 'Guardian',
    description: 'Security monitoring tool built in Python. Watches for suspicious activity and sends alerts when something looks wrong.',
    tags: ['Python', 'Security', 'Threat Detection', 'Monitoring'],
    repoUrl: 'https://github.com/lewisawe/Guardian-',
  },
  {
    title: 'Agent Containment Protocol',
    description: 'Agent containment system that tests how AI agents behave under restricted permissions and sandboxed environments.',
    tags: ['TypeScript', 'Security', 'AI Agents'],
    repoUrl: 'https://github.com/lewisawe/agent-containment-protocol',
  },
  {
    title: 'AWS Bootcamp Cruddur',
    description: 'Full-stack cloud-native application. 190 commits across 13 weeks of documented architecture decisions with Flask, React, AWS infra, and Docker.',
    tags: ['Python', 'AWS', 'Docker', 'CDK', 'CI/CD'],
    repoUrl: 'https://github.com/lewisawe/aws-bootcamp-cruddur-2023',
  },
  {
    title: 'Terraform Projects',
    description: 'IaC modules for provisioning AWS resources. VPCs, EC2 instances, S3 buckets, and IAM policies managed through reusable Terraform configs.',
    tags: ['Terraform', 'AWS', 'IaC', 'Automation'],
    repoUrl: 'https://github.com/lewisawe/Terraform_Projects',
  },
  {
    title: 'ETL Pipeline with Bash',
    description: 'Automated ETL pipeline using Bash and PostgreSQL. Extracts, transforms, and loads data on a cron schedule, runs end-to-end in 2 minutes.',
    tags: ['Bash', 'PostgreSQL', 'ETL', 'Automation'],
    repoUrl: 'https://github.com/lewisawe/ETL_with_bash',
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 md:py-24">
      <SectionTitle title="Projects" />
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS.map((project) => (
          <article
            key={project.title}
            className="group p-6 bg-surface-raised border border-gray-700/50 rounded-lg hover:border-teal-500/50 transition-colors duration-200"
          >
            <div className="flex items-start justify-between gap-3 mb-3">
              <h3 className="font-display font-bold text-lg text-ink-primary">{project.title}</h3>
              <div className="flex items-center gap-2 shrink-0">
                {project.highlight && (
                  <span className="text-xs font-medium text-teal-300 bg-teal-900/30 border border-teal-700/50 px-2 py-0.5 rounded">
                    {project.highlight}
                  </span>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 -m-2 text-ink-muted hover:text-ink-primary transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400 rounded"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <GithubIcon />
                  </a>
                )}
              </div>
            </div>
            <p className="text-ink-secondary text-sm leading-relaxed mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span key={tag} className="text-xs font-medium text-ink-muted bg-surface-sunken px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
