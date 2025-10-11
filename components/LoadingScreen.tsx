import React, { useState, useEffect } from 'react';

const LoadingScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState('');
  
  const loadingTexts = [
    'Initializing cloud infrastructure...',
    'Connecting to AWS services...',
    'Loading serverless functions...',
    'Establishing secure connections...',
    'Deploying portfolio assets...',
    'System ready. Welcome!'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 15 + 5;
        const textIndex = Math.floor((newProgress / 100) * loadingTexts.length);
        setCurrentText(loadingTexts[Math.min(textIndex, loadingTexts.length - 1)]);
        
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return newProgress;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      {/* Matrix-style background */}
      <div className="absolute inset-0 opacity-10">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-cyan-400 text-xs animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          >
            {Math.random().toString(36).substring(7)}
          </div>
        ))}
      </div>

      <div className="text-center z-10">
        {/* Main logo/name */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-cyan-400 tracking-wider glitch-text">
            LEWIS SAWE
          </h1>
          <p className="text-gray-400 mt-2 tracking-widest">CLOUD ENGINEER</p>
        </div>

        {/* Progress bar */}
        <div className="w-80 mx-auto mb-6">
          <div className="bg-gray-800 h-2 rounded-full overflow-hidden border border-cyan-400/30">
            <div 
              className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="text-cyan-400 text-sm mt-2 font-mono">
            {Math.floor(progress)}%
          </div>
        </div>

        {/* Loading text */}
        <div className="text-gray-300 font-mono text-sm h-6">
          <span className="animate-pulse">{currentText}</span>
          <span className="animate-ping ml-1">_</span>
        </div>

        {/* Spinning loader */}
        <div className="mt-8">
          <div className="w-8 h-8 border-2 border-cyan-400/30 border-t-cyan-400 rounded-full animate-spin mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
