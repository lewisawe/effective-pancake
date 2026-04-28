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
    <div className="text-ink-primary font-body leading-normal tracking-normal">
      <Navbar />
      <main id="main-content" className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <Header />
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
      <footer className="py-12 text-center text-ink-muted text-sm border-t border-gray-700/50 mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-4 mb-3">
            <a href="https://github.com/lewisawe" target="_blank" rel="noopener noreferrer" className="hover:text-ink-primary transition-colors">GitHub</a>
            <span className="text-ink-faint">·</span>
            <a href="https://linkedin.com/in/lewisawe" target="_blank" rel="noopener noreferrer" className="hover:text-ink-primary transition-colors">LinkedIn</a>
            <span className="text-ink-faint">·</span>
            <a href="https://dev.to/lewisawe" target="_blank" rel="noopener noreferrer" className="hover:text-ink-primary transition-colors">dev.to</a>
            <span className="text-ink-faint">·</span>
            <a href="https://lewisawe.hashnode.dev" target="_blank" rel="noopener noreferrer" className="hover:text-ink-primary transition-colors">Hashnode</a>
          </div>
          <p>&copy; {new Date().getFullYear()} Lewis Sawe</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
