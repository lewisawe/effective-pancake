
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`
      relative bg-[#0d1421] border border-gray-800 rounded-sm
      transition-all duration-300 group
      ${className}
    `}>
      <div className="absolute -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 rounded-sm opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
      <div className="relative bg-[#0d1421] h-full rounded-sm">
        {children}
      </div>
    </div>
  );
};

export default Card;
