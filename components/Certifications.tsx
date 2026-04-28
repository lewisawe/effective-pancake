import React from 'react';
import SectionTitle from './ui/SectionTitle';

const CERTIFICATIONS = [
  { name: 'Security Specialty', issuer: 'AWS', year: '2023' },
  { name: 'Solutions Architect Associate', issuer: 'AWS', year: '2023' },
  { name: 'Developer Associate', issuer: 'AWS', year: '2023' },
  { name: 'Data Engineer Associate', issuer: 'AWS', year: '2024' },
  { name: 'CloudOps Engineer Associate', issuer: 'AWS', year: '2024' },
  { name: 'Cloud Engineer Associate', issuer: 'Google', year: '2023' },
  { name: 'Project Management Professional Certificate', issuer: 'Google', year: '2024' },
  { name: 'CCNA', issuer: 'Cisco', year: '2022' },
  { name: 'Kubernetes & Cloud Native Associate', issuer: 'CNCF', year: '2023' },
  { name: 'AI Practitioner', issuer: 'AWS', year: '2024' },
];

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-16 md:py-24">
      <SectionTitle title="Certifications" />
      <p className="mt-4 text-sm text-ink-muted">
        <a href="https://www.credly.com/users/lewisawe" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 underline underline-offset-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400 rounded">
          Verify on Credly
        </a>
      </p>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {CERTIFICATIONS.map((cert) => (
          <div
            key={cert.name}
            className="flex items-center justify-between gap-3 px-4 py-3 bg-surface-raised border border-gray-700/50 rounded-lg"
          >
            <div className="min-w-0">
              <p className="font-display font-medium text-sm text-ink-primary truncate">{cert.name}</p>
              <p className="text-xs text-ink-muted">{cert.issuer}</p>
            </div>
            <span className="text-xs text-ink-faint shrink-0">{cert.year}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
