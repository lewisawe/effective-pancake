import React from 'react';

const SectionTitle: React.FC<{ title: string }> = ({ title }) => (
  <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink-primary tracking-tight">
    {title}
  </h2>
);

export default SectionTitle;
