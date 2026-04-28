import React from 'react';
import SectionTitle from './ui/SectionTitle';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24">
      <SectionTitle title="About" />
      <div className="mt-8 text-ink-secondary text-base sm:text-lg leading-relaxed max-w-prose">
        <p>
          DevOps and security engineer. Right now I'm building security frameworks and automating cloud infrastructure at an IT solutions company in Kenya. Before that, two years supporting 15 enterprise sites, a DevOps internship where I cut AWS costs by 35% through Terraform automation, and three years at Kenya Red Cross where I learned to explain technical work to non-technical people. AWS Community Builder, and I write about cloud security and DevOps on dev.to and Hashnode.
        </p>
      </div>
    </section>
  );
};

export default About;
