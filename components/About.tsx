import React, { useRef } from 'react';
import SectionTitle from './ui/SectionTitle';
import useOnScreen from '../hooks/useOnScreen';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useOnScreen(sectionRef, { threshold: 0.2, triggerOnce: true });

  return (
    <section id="about" ref={sectionRef} className="py-16 md:py-24">
      <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <SectionTitle title="[ About Me ]" />
      </div>
      <div className="mt-8">
        <div 
            className={`w-full text-lg text-gray-400 space-y-4 leading-relaxed transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
            <p>
                Hey there! I'm Lewis, and my journey into cloud engineering started with a simple question: "Why do systems break at the worst possible moment?" Three years later, I'm still fascinated by that question, but now I know how to prevent those 3 AM wake-up calls.
            </p>
            <p>
                As a Cloud Engineer and AWS Solutions Architect, I believe infrastructure should be like a good friend – reliable, supportive, and there when you need it most. I spend my days crafting cloud solutions that work silently in the background, letting teams focus on building amazing things without worrying about the plumbing.
            </p>
            <p>
                Beyond the day job, I'm an AWS Community Builder who loves turning complex cloud concepts into digestible stories. Whether I'm building serverless games for fun, experimenting with chaos engineering, or sharing cost optimization tricks on YouTube, I'm always exploring the creative side of cloud technology. Because let's be honest – infrastructure can be pretty exciting when you're not fighting fires.
            </p>
        </div>
      </div>
    </section>
  );
};

export default About;
