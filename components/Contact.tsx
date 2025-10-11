import React, { useState, useRef, useEffect } from 'react';
import SectionTitle from './ui/SectionTitle';
import useOnScreen from '../hooks/useOnScreen';

const HELP_MESSAGE = [
  'Available commands:',
  '  <span class="text-cyan-400">contact</span>   - Initiate contact sequence.',
  '  <span class="text-cyan-400">help</span>      - Show this help message.',
  '  <span class="text-cyan-400">clear</span>     - Clear the terminal.',
  '  <span class="text-cyan-400">reset</span>     - Reset the contact form.',
];

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalBodyRef = useRef<HTMLDivElement>(null);

  const isVisible = useOnScreen(sectionRef, { threshold: 0.2, triggerOnce: true });

  const [history, setHistory] = useState<string[]>(['Welcome to my terminal. Type `help` for a list of commands.']);
  const [command, setCommand] = useState('');
  const [step, setStep] = useState<'prompt' | 'name' | 'email' | 'message' | 'confirm' | 'sending' | 'sent'>('prompt');
  const storedContactInfo = useRef({ name: '', email: '', message: '' });


  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    if(isVisible && step !== 'sending') {
      inputRef.current?.focus();
    }
  }, [isVisible, step, history]);
  
  const handleTerminalClick = () => {
    inputRef.current?.focus();
  }
  
  const resetForm = (currentHistory: string[] = history) => {
    setHistory([...currentHistory, 'Resetting contact sequence...', 'Type `contact` to start over.']);
    storedContactInfo.current = { name: '', email: '', message: '' };
    setStep('prompt');
  }

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newHistory = [...history, `${getPrompt()}${command}`];
    
    if (step !== 'prompt') {
      processContactStep(command, newHistory);
      return;
    }

    switch (command.toLowerCase().trim()) {
      case 'help':
        setHistory([...newHistory, ...HELP_MESSAGE]);
        break;
      case 'contact':
        setHistory([...newHistory, 'Initiating contact sequence...']);
        setStep('name');
        setTimeout(() => setHistory(prev => [...prev, 'Please enter your name:']), 100);
        break;
      case 'clear':
        setHistory([]);
        break;
      case 'reset':
        resetForm(newHistory);
        break;
      case '':
        setHistory(newHistory);
        break;
      default:
        setHistory([...newHistory, `Command not found: ${command}. Type 'help'.`]);
        break;
    }
    setCommand('');
  };

  const processContactStep = async (value: string, currentHistory: string[]) => {
    const trimmedValue = value.trim();
    if (trimmedValue.toLowerCase() === 'reset') {
        resetForm(currentHistory);
        setCommand('');
        return;
    }
    
    if (trimmedValue === '') {
        setHistory(currentHistory);
        setCommand('');
        return;
    }

    switch (step) {
      case 'name':
        storedContactInfo.current.name = trimmedValue;
        setHistory([...currentHistory, 'Please enter your email:']);
        setStep('email');
        break;
      case 'email':
        storedContactInfo.current.email = trimmedValue;
        setHistory([...currentHistory, 'Please enter your message:']);
        setStep('message');
        break;
      case 'message':
        storedContactInfo.current.message = trimmedValue;
        setHistory([
            ...currentHistory,
            '---',
            'Review your message:',
            `<span class="text-gray-400">Name:</span> ${storedContactInfo.current.name}`,
            `<span class="text-gray-400">Email:</span> ${storedContactInfo.current.email}`,
            `<span class="text-gray-400">Message:</span> ${trimmedValue}`,
            '---',
            'Type <span class="text-cyan-400">send</span> to transmit or <span class="text-cyan-400">reset</span> to start over.',
        ]);
        setStep('confirm');
        break;
      case 'confirm':
        if (trimmedValue.toLowerCase() === 'send') {
          setHistory([...currentHistory, 'Transmitting message...']);
          setStep('sending');
          
          // Send to Lambda Function URL
          try {
            const response = await fetch('https://derzekt4zpgaxew7eqbjljgnt40kdztv.lambda-url.eu-west-1.on.aws/', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                name: storedContactInfo.current.name,
                email: storedContactInfo.current.email,
                message: storedContactInfo.current.message
              })
            });

            if (response.ok) {
              setHistory(prev => [...prev, '<span class="text-green-400">Success!</span> Message transmitted via secure channel. I will get back to you shortly.', 'You can now type `reset` or `clear`.']);
            } else {
              setHistory(prev => [...prev, '<span class="text-red-400">Error:</span> Transmission failed. Please try again or contact directly.', 'You can now type `reset` or `clear`.']);
            }
          } catch (error) {
            setHistory(prev => [...prev, '<span class="text-red-400">Error:</span> Network transmission failed. Please try again.', 'You can now type `reset` or `clear`.']);
          }
          
          setStep('sent');
        } else {
             setHistory([...currentHistory, 'Invalid command. Type "send" or "reset".']);
        }
        break;
    }
    setCommand('');
  };

  const getPrompt = () => {
    switch (step) {
      case 'name': return 'name > ';
      case 'email': return 'email > ';
      case 'message': return 'message > ';
      case 'confirm': return 'confirm > ';
      default: return '$ ';
    }
  }

  return (
    <section id="contact" ref={sectionRef} className="py-16 md:py-24">
      <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <SectionTitle title="[ Initiate Contact ]" />
      </div>
      <div 
        className={`mt-12 w-full max-w-4xl mx-auto h-96 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        onClick={handleTerminalClick}
      >
        <div className="bg-[#0d1421] border-2 border-cyan-400/30 rounded-md h-full flex flex-col font-mono text-sm shadow-lg shadow-cyan-500/10">
          <div className="bg-gray-800/50 p-2 flex items-center rounded-t-md text-xs">
            <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="ml-auto text-gray-400">lewisksawe.dev -- -zsh</span>
          </div>
          <div ref={terminalBodyRef} className="flex-grow p-4 overflow-y-auto text-gray-300 leading-relaxed">
            {history.map((line, index) => (
              <div key={index} dangerouslySetInnerHTML={{ __html: line.replace(/ /g, '&nbsp;') }} />
            ))}
            {step !== 'sending' && (
              <form onSubmit={handleCommandSubmit} className="flex">
                <label htmlFor="terminal-input" className="text-cyan-400 shrink-0">
                  {getPrompt().replace(/ /g, '\u00a0')}
                </label>
                <input
                  ref={inputRef}
                  id="terminal-input"
                  type="text"
                  className="flex-grow bg-transparent border-none outline-none text-gray-200 pl-2 caret-cyan-400"
                  value={command}
                  onChange={(e) => setCommand(e.target.value)}
                  autoComplete="off"
                  autoCapitalize="off"
                  autoCorrect="off"
                  spellCheck="false"
                />
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;