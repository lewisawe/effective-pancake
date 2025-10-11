import React, { useRef } from 'react';
import { EXPERIENCE } from '../constants';
import SectionTitle from './ui/SectionTitle';
import type { ExperienceItem } from '../types';
import useOnScreen from '../hooks/useOnScreen';

const ExperienceCard: React.FC<{ item: ExperienceItem, isVisible: boolean }> = ({ item, isVisible }) => (
  <div className={`relative pl-8 sm:pl-12 py-6 group transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
    {/* The timeline line */}
    <div className="absolute top-0 left-0 h-full w-px bg-cyan-900/50"></div>
    {/* The timeline node */}
    <div className="absolute top-8 left-[-9px] w-5 h-5 rounded-full bg-gray-800 border-2 border-cyan-400 transition-all duration-300 group-hover:bg-cyan-400 group-hover:scale-110"></div>
    
    <div className="mb-2">
      <h3 className="text-xl font-bold text-cyan-400">{item.role}</h3>
      <p className="text-md text-gray-400">{item.company} // {item.period}</p>
    </div>
    <ul className="list-disc list-inside text-gray-400 space-y-2">
      {item.description.map((point, index) => (
        <li key={index}>{point}</li>
      ))}
    </ul>
  </div>
);

const Experience: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useOnScreen(sectionRef, { threshold: 0.1, triggerOnce: true });

  return (
    <section id="experience" ref={sectionRef} className="py-16 md:py-24">
      <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <SectionTitle title="[ Career Trajectory ]" />
      </div>
      <div className="mt-12 relative">
        {EXPERIENCE.map((item, index) => (
           <div 
             key={index} 
             style={{ transitionDelay: `${isVisible ? index * 200 : 0}ms` }}
           >
              <ExperienceCard item={item} isVisible={isVisible} />
           </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
