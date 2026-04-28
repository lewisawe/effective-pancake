import React from 'react';
import SectionTitle from './ui/SectionTitle';

const TALKS = [
  { event: 'AWS Community Day Kenya', type: 'Conference' },
  { event: 'DevOps Days Kenya', type: 'Conference' },
  { event: 're:Invent@Home', type: 'Virtual' },
  { event: 'MOAR Serverless', type: 'Virtual' },
];

const Speaking: React.FC = () => {
  return (
    <section id="speaking" className="py-16 md:py-24">
      <SectionTitle title="Speaking" />
      <div className="mt-8 flex flex-wrap gap-3">
        {TALKS.map((talk) => (
          <div
            key={talk.event}
            className="flex items-center gap-2 px-4 py-2.5 bg-surface-raised border border-gray-700/50 rounded-lg"
          >
            <span className="font-display font-medium text-sm text-ink-primary">{talk.event}</span>
            <span className="text-xs text-ink-faint">{talk.type}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Speaking;
