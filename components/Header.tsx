import React, { useState, useEffect } from 'react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './ui/Icons';
import useMagneticEffect from '../hooks/useMagneticEffect';
import useTypingEffect from '../hooks/useTypingEffect';

const GLITCH_CHARS = '`¡™£¢∞§¶•ªº–≠`åß∂ƒ©˙∆˚¬…æ`Ω≈ç√∫˜µ≤≥÷`¡™£¢∞§¶•ªº–≠`';

const useGlitch = (text: string, enabled: boolean) => {
  const [glitchedText, setGlitchedText] = useState(text);

  useEffect(() => {
    if (!enabled) {
      setGlitchedText(text);
      return;
    }

    let iteration = 0;
    const interval = setInterval(() => {
      const newText = text
        .split("")
        .map((_letter, index) => {
          if(index < iteration) {
            return text[index];
          }
          return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
        })
        .join("");
      
      setGlitchedText(newText);
      
      if(iteration >= text.length){
        clearInterval(interval);
      }
      
      iteration += 1 / 3;
    }, 30);

    return () => clearInterval(interval);
  }, [text, enabled]);

  return glitchedText;
};

const SocialLink: React.FC<{ href: string, children: React.ReactNode }> = ({ href, children }) => {
  const magneticRef = useMagneticEffect<HTMLAnchorElement>();
  return (
    <a 
      ref={magneticRef}
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="block w-12 h-12 transition-colors duration-300 text-gray-400 hover:text-cyan-400"
    >
      {children}
    </a>
  );
};

const BlinkingCursor: React.FC = () => (
    <span className="bg-cyan-400 w-3 h-7 sm:w-4 sm:h-9 md:w-5 md:h-10 inline-block animate-pulse ml-1" aria-hidden="true"></span>
);

const Header: React.FC = () => {
  const [typedName, nameFinished] = useTypingEffect("LEWIS SAWE", { speed: 150, delay: 500 });
  const [typedTitle, titleFinished] = useTypingEffect("Cloud Engineer & AWS Solutions Architect", {
    speed: 80,
    start: nameFinished,
    delay: 500
  });
  const [typedSubtitle, subtitleFinished] = useTypingEffect("Building Scalable Cloud Infrastructure | DevOps Automation | AWS Community Builder", {
    speed: 50,
    start: titleFinished,
    delay: 500
  });
  
  const [showRest, setShowRest] = useState(false);
  const [glitchEnabled, setGlitchEnabled] = useState(false);
  const glitchedName = useGlitch(typedName, glitchEnabled);
  
  useEffect(() => {
    if (subtitleFinished) {
        const timer = setTimeout(() => setShowRest(true), 300);
        return () => clearTimeout(timer);
    }
  }, [subtitleFinished]);

  return (
    <header id="home" className="h-screen flex flex-col justify-center items-center text-center relative">
      <div className="w-full">
        <h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-wider min-h-[5rem] sm:min-h-[6rem] md:min-h-[7rem] cursor-pointer"
          onMouseEnter={() => setGlitchEnabled(true)}
          onMouseLeave={() => setGlitchEnabled(false)}
        >
          <span>{glitchedName.substring(0, 6)}</span>
          <span className="text-cyan-400">{glitchedName.substring(6)}</span>
          {!nameFinished && <BlinkingCursor />}
        </h1>
        
        <p className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-300 font-light tracking-widest min-h-[2rem] sm:min-h-[2.5rem]">
          {typedTitle}
          {nameFinished && !titleFinished && <BlinkingCursor />}
        </p>

        <div className={`transition-opacity duration-1000 ${titleFinished ? 'opacity-100' : 'opacity-0'}`}>
            <p className="mt-2 text-md text-gray-500 max-w-2xl mx-auto min-h-[1.5rem]">
              {typedSubtitle}
              {titleFinished && !subtitleFinished && <BlinkingCursor />}
            </p>
        </div>
      </div>

      <div 
        className={`absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-6 transition-opacity duration-1000 ${showRest ? 'opacity-100' : 'opacity-0'}`}
      >
        <SocialLink href="https://github.com/lewisawe">
          <GithubIcon />
        </SocialLink>
        <SocialLink href="https://linkedin.com/in/lewisawe">
          <LinkedinIcon />
        </SocialLink>
      </div>
       <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-opacity duration-1000 ${showRest ? 'opacity-100' : 'opacity-0'}`}>
          <a href="#about" className="text-cyan-400 animate-bounce">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
          </a>
      </div>
    </header>
  );
};

export default Header;
