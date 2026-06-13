import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import YouTube from './components/YouTube';
import Blog from './components/Blog';
import Speaking from './components/Speaking';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="bg-void text-bone-white font-sans">
      <Navbar />
      <Header />
      <main id="main-content" className="max-w-page mx-auto px-6 lg:px-8">
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <YouTube />
        <Blog />
        <Speaking />
        <Contact />
      </main>

      {/* Coordinate Footer */}
      <footer className="fixed bottom-0 left-0 right-0 z-40 border-t border-graphite/40 bg-void/95 backdrop-blur-sm px-6 py-2 flex items-center justify-between">
        <span className="text-xs font-mono text-slate">+ Fly Direct Cloud Engineer</span>
        <span className="text-xs font-mono text-slate flex items-center gap-2">
          1.2921° S, 36.8219° E
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-iris">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </span>
      </footer>

      {/* Spacer for fixed footer */}
      <div className="h-10" />
    </div>
  );
};

export default App;
