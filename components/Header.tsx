import React from 'react';
import { GithubIcon, LinkedinIcon } from './ui/Icons';

const Header: React.FC = () => {
  return (
    <header id="home" className="min-h-[70vh] sm:min-h-[85vh] flex items-center pt-20 sm:pt-0">
      <div className="w-full max-w-3xl">
        <p className="text-sm font-medium tracking-wide text-teal-400 uppercase mb-4">DevOps · Cloud Security · SOC</p>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-900 text-ink-primary leading-[1.05] tracking-tight">
          Lewis Sawe
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-ink-secondary max-w-xl leading-relaxed">
          DevOps and security engineer. AWS Security Specialty certified with additional certs across GCP, Cisco, and CNCF. I build automated infrastructure and security systems.
        </p>
        <div className="mt-8 flex items-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-teal-600 text-white font-display font-medium text-sm rounded-md hover:bg-teal-500 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400"
          >
            Get in touch
          </a>
          <a
            href="https://github.com/lewisawe"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center text-ink-muted hover:text-ink-primary transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400 rounded-md"
            aria-label="GitHub profile"
          >
            <GithubIcon />
          </a>
          <a
            href="https://linkedin.com/in/lewisawe"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center text-ink-muted hover:text-ink-primary transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400 rounded-md"
            aria-label="LinkedIn profile"
          >
            <LinkedinIcon />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
