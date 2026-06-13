import React, { useState, useEffect } from 'react';
import { MenuIcon, XIcon } from './ui/Icons';

const navLinks = [
  { href: '#about', label: 'ABOUT' },
  { href: '#skills', label: 'SKILLS' },
  { href: '#projects', label: 'PROJECTS' },
  { href: '#experience', label: 'EXPERIENCE' },
  { href: '#certifications', label: 'CERTS' },
  { href: '#blog', label: 'WRITING' },
  { href: '#contact', label: 'CONTACT' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-void/95 backdrop-blur-sm shadow-subtle' : 'bg-transparent'}`}>
        <div className="max-w-page mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            <a
              href="#home"
              onClick={(e) => handleClick(e, '#home')}
              className="font-sans font-bold text-bone-white text-lg tracking-tight hover:text-iris transition-colors"
            >
              LEWIS SAWE
            </a>

            <div className="hidden md:flex items-center gap-1">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className={`px-3 py-1.5 text-sm font-medium transition-colors duration-150 ${
                    activeSection === link.href.substring(1)
                      ? 'text-bone-white border-b border-plum'
                      : 'text-smoke hover:text-bone-white'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-3">
              <a href="#contact" onClick={(e) => handleClick(e, '#contact')} className="ghost-btn text-sm">
                GET IN TOUCH
              </a>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-bone-white"
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
        <div className="md:hidden fixed inset-0 z-40 bg-void pt-14" id="mobile-menu">
          <div className="px-6 pt-6 pb-8 space-y-1">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`block px-3 py-3 text-base font-medium transition-colors ${
                  activeSection === link.href.substring(1)
                    ? 'text-bone-white border-l-2 border-plum pl-4'
                    : 'text-smoke hover:text-bone-white'
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
