import React, { useState, useEffect } from 'react';
import { MenuIcon, XIcon } from './ui/Icons';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#certifications', label: 'Certs' },
  { href: '#youtube', label: 'Videos' },
  { href: '#blog', label: 'Writing' },
  { href: '#speaking', label: 'Speaking' },
  { href: '#contact', label: 'Contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = document.querySelectorAll('header[id], section[id]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    }, { root: null, rootMargin: '-56px 0px -50% 0px', threshold: 0 });
    sections.forEach(s => observer.observe(s));
    return () => sections.forEach(s => observer.unobserve(s));
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-surface-base/90 backdrop-blur-sm border-b border-gray-700/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            <a
              href="#home"
              onClick={(e) => handleClick(e, '#home')}
              className="font-display font-bold text-ink-primary text-lg tracking-tight hover:text-teal-400 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 rounded"
            >
              Lewis Sawe
            </a>
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 ${
                    activeSection === link.href.substring(1)
                      ? 'text-teal-400 bg-teal-900/30'
                      : 'text-ink-secondary hover:text-ink-primary hover:bg-surface-sunken'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-md text-ink-secondary hover:text-ink-primary hover:bg-surface-sunken focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-surface-base pt-14" id="mobile-menu">
          <div className="px-4 pt-4 pb-6 space-y-1">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`block px-3 py-2.5 rounded-md text-base font-medium transition-colors ${
                  activeSection === link.href.substring(1)
                    ? 'text-teal-400 bg-teal-900/30'
                    : 'text-ink-secondary hover:text-ink-primary hover:bg-surface-sunken'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
