import React, { useState, useEffect, useRef } from 'react';
import SectionTitle from './ui/SectionTitle';

const SKILLS = [
  'DEVOPS & AUTOMATION',
  'CLOUD SECURITY',
  'INFRASTRUCTURE AS CODE',
  'CONTAINER ORCHESTRATION',
  'CI/CD PIPELINES',
  'MONITORING & OBSERVABILITY',
];

const SKILL_DETAILS: Record<string, string[]> = {
  'DEVOPS & AUTOMATION': ['Docker', 'Kubernetes', 'Ansible', 'GitHub Actions', 'Jenkins', 'Bash', 'Python'],
  'CLOUD SECURITY': ['SIEM', 'Incident Response', 'Threat Detection', 'Vulnerability Assessment', 'Firewall Config', 'Compliance'],
  'INFRASTRUCTURE AS CODE': ['Terraform', 'CloudFormation', 'AWS CDK', 'Pulumi'],
  'CONTAINER ORCHESTRATION': ['Kubernetes', 'EKS', 'Docker Compose', 'Helm'],
  'CI/CD PIPELINES': ['GitHub Actions', 'Jenkins', 'ArgoCD', 'GitOps'],
  'MONITORING & OBSERVABILITY': ['Prometheus', 'Grafana', 'CloudWatch', 'Alertmanager', 'ELK Stack'],
};

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ&/ ';

const FlipText: React.FC<{ text: string; delay: number }> = ({ text, delay }) => {
  const [displayed, setDisplayed] = useState(text.split('').map(() => ' '));
  const [settled, setSettled] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true;
        let frame = 0;
        const totalFrames = 12;
        const interval = setInterval(() => {
          frame++;
          setDisplayed(text.split('').map((char, i) => {
            if (char === ' ') return ' ';
            if (frame >= totalFrames - 2 + (i % 3)) return char;
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          }));
          if (frame >= totalFrames + 3) {
            clearInterval(interval);
            setDisplayed(text.split(''));
            setSettled(true);
          }
        }, 60);
      }
    }, { threshold: 0.3 });

    observer.observe(el);
    return () => observer.disconnect();
  }, [text, delay]);

  return (
    <div ref={ref} className="font-mono text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-outlined tracking-[0.1em] sm:tracking-[0.15em] lg:tracking-[0.2em] leading-none">
      {displayed.map((char, i) => (
        <span
          key={i}
          className={`inline-block transition-transform duration-75 ${!settled && char !== text[i] ? 'scale-y-[0.8]' : ''}`}
          style={{ minWidth: char === ' ' ? '0.3em' : undefined }}
        >
          {char}
        </span>
      ))}
    </div>
  );
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 md:py-32">
      <SectionTitle title="Skills" />
      <div className="mt-12 space-y-4">
        {SKILLS.map((skill, i) => (
          <div
            key={skill}
            className="group border border-ash/20 rounded-card px-6 py-5 flex items-center justify-between hover:border-iris/40 transition-colors duration-200"
          >
            <div>
              <FlipText text={skill} delay={i * 200} />
              <div className="mt-3 flex flex-wrap gap-2">
                {SKILL_DETAILS[skill]?.map(tag => (
                  <span key={tag} className="text-xs font-mono text-smoke">{tag}</span>
                ))}
              </div>
            </div>
            <span className="text-ash text-2xl group-hover:text-iris transition-colors" aria-hidden="true">→</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
