import React from 'react';

const Tag: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="text-xs font-medium text-ink-muted bg-surface-sunken px-2 py-1 rounded">
    {children}
  </span>
);

export default Tag;
