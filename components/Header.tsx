import React from 'react';

const Header: React.FC = () => {
  return (
    <header id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Orchid radial ambient glow */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle closest-corner at 10% 50%, rgb(108, 75, 214), rgba(0, 0, 0, 0) 55%)' }} />

      <div className="w-full max-w-page mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 py-32">
        {/* Left: Headline stack */}
        <div>
          <p className="text-sm font-mono tracking-[0.2em] text-smoke uppercase mb-6">NBO → CLOUD</p>
          <h1>
            <span className="block font-serif italic font-light text-5xl sm:text-6xl md:text-7xl lg:text-[88px] text-bone-white leading-[0.9] tracking-tight">
              Your next
            </span>
            <span className="block font-sans font-bold text-5xl sm:text-6xl md:text-7xl lg:text-[88px] text-bone-white leading-[0.9] mt-2" style={{ letterSpacing: '-0.07em' }}>
              Cloud Engineer
            </span>
          </h1>
          <p className="mt-8 text-lg text-bone-white/80 max-w-md leading-relaxed">
            DevOps and security engineer. AWS Security Specialty certified. I build automated infrastructure and security systems.
          </p>
          <div className="mt-10 flex items-center gap-4">
            <a href="#contact" className="ghost-btn">BOOK A CALL</a>
            <a href="#projects" className="ghost-btn">VIEW WORK →</a>
          </div>
        </div>

        {/* Right: Glassmorphic boarding pass */}
        <div className="glass p-6 lg:p-8">
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs font-mono tracking-[0.2em] text-smoke uppercase">Boarding Pass</span>
            <span className="text-xs font-mono tracking-[0.2em] text-smoke">SEAT 1A</span>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <div>
              <p className="text-xs text-smoke uppercase mb-1">From</p>
              <p className="font-mono text-2xl font-bold text-bone-white">NBO</p>
              <p className="text-xs text-smoke">Nairobi</p>
            </div>
            <div className="flex items-center justify-center">
              <svg width="40" height="12" viewBox="0 0 40 12" fill="none" className="text-iris">
                <path d="M0 6h35m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="1.5"/>
                <circle cx="38" cy="6" r="2" fill="currentColor"/>
              </svg>
            </div>
            <div className="text-right">
              <p className="text-xs text-smoke uppercase mb-1">To</p>
              <p className="font-mono text-2xl font-bold text-bone-white">CLD</p>
              <p className="text-xs text-smoke">The Cloud</p>
            </div>
          </div>

          <div className="border-t border-white/10 pt-4 grid grid-cols-3 gap-4">
            <div>
              <p className="text-xs text-smoke uppercase mb-1">Gate</p>
              <p className="font-mono text-sm text-bone-white">AWS</p>
            </div>
            <div>
              <p className="text-xs text-smoke uppercase mb-1">Flight</p>
              <p className="font-mono text-sm text-bone-white">LS-2024</p>
            </div>
            <div>
              <p className="text-xs text-smoke uppercase mb-1">Class</p>
              <p className="font-mono text-sm text-bone-white">SECURITY</p>
            </div>
          </div>

          <div className="border-t border-white/10 pt-4 mt-4 flex flex-wrap gap-2">
            {['AWS', 'Terraform', 'K8s', 'Docker', 'Python', 'CI/CD'].map(tag => (
              <span key={tag} className="px-3 py-1 text-xs font-mono text-bone-white border border-white/20 rounded-pill">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
