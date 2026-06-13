import React from 'react';

const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`bg-surface-raised border border-gray-700/50 rounded-lg hover:border-teal-500/50 hover:shadow-[0_0_20px_rgba(20,184,166,0.08)] hover:-translate-y-0.5 transition-all duration-200 ${className}`}>
    {children}
  </div>
);

export default Card;
