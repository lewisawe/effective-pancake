import React from 'react';
import SectionTitle from './ui/SectionTitle';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32">
      <SectionTitle title="About" />
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12 items-start">
        <div className="text-smoke text-base sm:text-lg leading-relaxed space-y-5">
          <p className="text-bone-white text-xl font-medium leading-relaxed">
            I secure cloud infrastructure and automate the stuff that shouldn't be done by hand.
          </p>
          <p>
            AWS Security Specialty certified with five additional AWS certs, plus Google Cloud, Cisco CCNA, and Kubernetes. I build security frameworks, automate provisioning with Terraform, containerize workloads with Docker, and set up observability stacks that catch problems before users notice them. My focus is making infrastructure repeatable, secure by default, and cost-efficient.
          </p>
          <p>
            I cut AWS costs by 35% through right-sizing and Terraform automation. Built CI/CD pipelines that reduced release cycles by 40%. Deployed monitoring with Prometheus and Grafana across production environments. Zero major security breaches across every environment I've managed, backed by monthly assessments and incident response procedures I wrote myself.
          </p>
          <p>
            AWS Community Builder in the DevTools category. I publish technical content on dev.to and Hashnode covering cloud security, cost optimization, and DevOps patterns. When I'm not building infrastructure, I'm breaking into boxes on TryHackMe and HackTheBox to sharpen the offensive side.
          </p>
        </div>

        {/* Stats card */}
        <div className="glass p-6 space-y-4">
          <div className="border-b border-white/10 pb-3">
            <p className="text-xs font-mono text-smoke uppercase tracking-wider">Focus</p>
            <p className="text-bone-white font-medium mt-1">Cloud · DevOps · Security</p>
          </div>
          <div className="border-b border-white/10 pb-3">
            <p className="text-xs font-mono text-smoke uppercase tracking-wider">Base</p>
            <p className="text-bone-white font-medium mt-1">Kenya (UTC+3)</p>
          </div>
          <div className="border-b border-white/10 pb-3">
            <p className="text-xs font-mono text-smoke uppercase tracking-wider">Certs</p>
            <p className="text-bone-white font-medium mt-1">10 active</p>
          </div>
          <div>
            <p className="text-xs font-mono text-smoke uppercase tracking-wider">Community</p>
            <p className="text-bone-white font-medium mt-1">AWS Community Builder</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
