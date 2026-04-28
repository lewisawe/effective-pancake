import React from 'react';
import SectionTitle from './ui/SectionTitle';

const SKILL_GROUPS = [
  {
    label: 'DevOps & Automation',
    skills: ['Docker', 'Kubernetes', 'Terraform', 'Ansible', 'CI/CD Pipelines', 'GitHub Actions', 'Jenkins', 'Infrastructure as Code', 'Prometheus', 'Grafana', 'Alertmanager', 'Linux', 'Bash', 'Python'],
  },
  {
    label: 'Security & SOC',
    skills: ['SIEM', 'Incident Response', 'Threat Detection', 'Vulnerability Assessment', 'Security Auditing', 'Endpoint Protection', 'Network Security', 'Firewall Configuration', 'Compliance', 'TryHackMe / HackTheBox'],
  },
  {
    label: 'Cloud Platforms',
    skills: ['AWS (EC2, S3, Lambda, RDS, EKS, VPC, IAM, CloudFormation, CloudWatch)', 'Google Cloud Platform', 'Serverless Architecture', 'Cost Optimization', 'Cloud Migration'],
  },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-16 md:py-24">
      <SectionTitle title="Skills" />
      <div className="mt-10 space-y-8">
        {SKILL_GROUPS.map((group) => (
          <div key={group.label}>
            <h3 className="font-display font-medium text-sm text-ink-muted uppercase tracking-wide mb-3">{group.label}</h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-block px-3 py-1.5 text-sm font-medium text-teal-300 bg-teal-900/30 border border-teal-700/50 rounded-md"
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

export default Skills;
