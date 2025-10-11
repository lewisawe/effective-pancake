import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import YouTube from './components/YouTube';
import Blog from './components/Blog';
import Contact from './components/Contact';
import InteractiveBackground from './components/InteractiveBackground';
import LoadingScreen from './components/LoadingScreen';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="text-gray-100 font-sans leading-normal tracking-normal">
      <InteractiveBackground />
      <Navbar />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Header />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <YouTube />
        <Blog />
        <Contact />
      </main>
      <footer className="py-8 text-center text-gray-500 text-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p>&copy; {new Date().getFullYear()} Lewis Sawe. All Rights Reserved.</p>
          <p className="mt-1">Designed &amp; Built by Lewis Sawe</p>
        </div>
      </footer>
    </div>
  );
};

export default App;