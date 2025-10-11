
import React from 'react';

interface TagProps {
  children: React.ReactNode;
}

const Tag: React.FC<TagProps> = ({ children }) => {
  return (
    <span className="bg-cyan-900/50 text-cyan-300 text-xs font-semibold px-2.5 py-1 rounded-sm">
      {children}
    </span>
  );
};

export default Tag;
