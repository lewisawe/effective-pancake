import React from 'react';
import SectionTitle from './ui/SectionTitle';

const CERTIFICATIONS = [
  { name: 'Security Specialty', issuer: 'AWS', year: '2023' },
  { name: 'Solutions Architect Associate', issuer: 'AWS', year: '2023' },
  { name: 'Developer Associate', issuer: 'AWS', year: '2023' },
  { name: 'Data Engineer Associate', issuer: 'AWS', year: '2024' },
  { name: 'CloudOps Engineer Associate', issuer: 'AWS', year: '2024' },
  { name: 'Cloud Engineer Associate', issuer: 'Google', year: '2023' },
  { name: 'Project Management Professional', issuer: 'Google', year: '2024' },
  { name: 'CCNA', issuer: 'Cisco', year: '2022' },
  { name: 'Kubernetes & Cloud Native Associate', issuer: 'CNCF', year: '2023' },
  { name: 'AI Practitioner', issuer: 'AWS', year: '2024' },
];

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 md:py-32">
      <SectionTitle title="Certifications" />
      <p className="mt-4 text-sm text-smoke">
        <a href="https://www.credly.com/users/lewisawe" target="_blank" rel="noopener noreferrer" className="text-iris hover:text-lavender-wash underline underline-offset-2 transition-colors">
          Verify on Credly
        </a>
      </p>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {CERTIFICATIONS.map((cert) => (
          <div
            key={cert.name}
            className="flex items-center justify-between gap-3 px-5 py-4 border border-graphite/60 rounded-card hover:border-iris/30 transition-colors"
          >
            <div className="min-w-0">
              <p className="font-sans font-medium text-sm text-bone-white truncate">{cert.name}</p>
              <p className="text-xs text-smoke mt-0.5">{cert.issuer}</p>
            </div>
            <span className="text-xs font-mono text-slate shrink-0">{cert.year}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
