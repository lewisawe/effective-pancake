import React, { useRef } from 'react';
import SectionTitle from './ui/SectionTitle';
import Card from './ui/Card';
import { CERTIFICATIONS } from '../constants';
import { ExternalLinkIcon } from './ui/Icons';
import useOnScreen from '../hooks/useOnScreen';

const Certifications: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useOnScreen(sectionRef, { threshold: 0.1, triggerOnce: true });

  return (
    <section id="certifications" ref={sectionRef} className="py-16 md:py-24">
       <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
         <SectionTitle title="[ Certifications ]" />
       </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {CERTIFICATIONS.map((cert, index) => (
          <div
            key={cert.name}
            className={`transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: `${isVisible ? index * 150 : 0}ms` }}
          >
            <Card>
              <a href={cert.url} target="_blank" rel="noopener noreferrer" className="p-6 h-full flex flex-col items-center text-center group">
                <div className="w-16 h-16 mb-4 text-cyan-400">{cert.icon}</div>
                <h3 className="text-lg font-bold text-gray-200 flex-grow">{cert.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{cert.issuer}</p>
                <div className="mt-4 text-cyan-400 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Verify Credential <ExternalLinkIcon />
                </div>
              </a>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
