
import React from 'react';

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <h2 className="text-3xl md:text-4xl font-bold text-center text-cyan-400 tracking-widest">
      {title}
    </h2>
  );
};

export default SectionTitle;
