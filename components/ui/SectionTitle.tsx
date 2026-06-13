import React from 'react';

const SectionTitle: React.FC<{ title: string }> = ({ title }) => (
  <h2 className="font-sans text-2xl sm:text-3xl font-bold text-bone-white tracking-tight flex items-center gap-3">
    <span className="w-2 h-2 rounded-full bg-iris shrink-0" aria-hidden="true" />
    {title}
  </h2>
);

export default SectionTitle;
