import React, { useState, useRef } from 'react';
import { SKILL_CATEGORIES } from '../constants';
import SectionTitle from './ui/SectionTitle';
import useOnScreen from '../hooks/useOnScreen';

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useOnScreen(sectionRef, { threshold: 0.1, triggerOnce: true });
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="skills" ref={sectionRef} className="py-16 md:py-24">
      <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <SectionTitle title="[ Technical Arsenal ]" />
      </div>
      
      <div className={`mt-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 border-b border-gray-700">
          {SKILL_CATEGORIES.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-4 py-2 text-sm font-medium transition-all duration-300 border-b-2 ${
                activeTab === index
                  ? 'text-cyan-400 border-cyan-400'
                  : 'text-gray-400 border-transparent hover:text-gray-300'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="min-h-[200px]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {SKILL_CATEGORIES[activeTab].skills.map((skill, index) => (
              <div
                key={skill.name}
                className={`group p-4 bg-gray-800/30 border border-gray-700 rounded-lg hover:border-cyan-400/50 hover:bg-gray-800/50 transition-all duration-300 transform hover:scale-105 ${
                  isVisible ? 'animate-fade-in' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <span className="text-sm text-gray-300 group-hover:text-cyan-400 transition-colors duration-300">
                    {skill.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
