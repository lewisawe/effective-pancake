import React from 'react';

const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`bg-surface-raised border border-gray-700/50 rounded-lg hover:border-teal-500/50 transition-colors duration-200 ${className}`}>
    {children}
  </div>
);

export default Card;
