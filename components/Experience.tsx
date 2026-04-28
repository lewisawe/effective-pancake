import React from 'react';
import SectionTitle from './ui/SectionTitle';

const EXPERIENCE = [
  {
    role: 'Network & Systems Administrator',
    company: 'Eloho',
    period: 'Apr 2024 — Present',
    description: [
      'Built security frameworks from scratch across client sites, zero major breaches, monthly security assessments',
      'Manage AWS cloud infrastructure: EC2, S3, RDS, VPC, IAM, CloudFormation, CloudWatch',
      'Automated provisioning with Terraform and Ansible, deployed Prometheus and Grafana monitoring',
      'Set up endpoint protection, firewall policies, and IDS across client sites',
    ],
  },
  {
    role: 'IT Support Technician',
    company: 'Elpris Kenya',
    period: 'Jan 2022 — Mar 2024',
    description: [
      'Built automated monitoring systems that caught issues before users reported them',
      'Deployed security frameworks across 15 client sites, 100% compliance, zero breaches',
      '99% system availability, 95% issue resolution rate',
    ],
  },
  {
    role: 'DevOps Intern',
    company: 'HNG Internship (Remote)',
    period: 'Nov 2022 — Dec 2022',
    description: [
      'Reduced AWS infrastructure costs by 35% through right-sizing and Terraform automation',
      'Built CI/CD pipelines with Docker containerization, reducing release cycles by 40%',
      'Standardized dev, staging, and production environments with Docker. 99.9% uptime',
    ],
  },
  {
    role: 'M&E Assistant',
    company: 'Kenya Red Cross',
    period: 'Jun 2020 — Dec 2021',
    description: [
      'Designed digital data collection tools replacing paper processes, 40% reduction in processing time',
    ],
  },
  {
    role: 'IT Intern',
    company: 'United Nations Office at Nairobi',
    period: 'Jun 2017 — Dec 2017',
    description: [
      'Configured 300+ systems, assisted 500+ users, 100% network uptime for critical operations',
    ],
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 md:py-24">
      <SectionTitle title="Experience" />
      <div className="mt-10 space-y-10">
        {EXPERIENCE.map((item, index) => (
          <article key={index} className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-2 md:gap-8">
            <div className="text-sm text-ink-muted font-medium shrink-0 pt-0.5">
              {item.period}
            </div>
            <div>
              <h3 className="font-display font-bold text-ink-primary">{item.role}</h3>
              <p className="text-ink-secondary text-sm mt-0.5">{item.company}</p>
              <ul className="mt-3 space-y-1.5">
                {item.description.map((point, i) => (
                  <li key={i} className="text-sm text-ink-secondary leading-relaxed pl-4 relative before:content-['·'] before:absolute before:left-0 before:text-ink-faint">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
