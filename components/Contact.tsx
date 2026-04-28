import React, { useState, useRef, useEffect } from 'react';
import SectionTitle from './ui/SectionTitle';

const escapeHtml = (text: string): string =>
  text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const Contact: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalBodyRef = useRef<HTMLDivElement>(null);

  const [history, setHistory] = useState<string[]>([
    'Type <span class="text-teal-600">contact</span> to send a message, or <span class="text-teal-600">help</span> for commands.',
  ]);
  const [command, setCommand] = useState('');
  const [step, setStep] = useState<'prompt' | 'name' | 'email' | 'message' | 'confirm' | 'sending' | 'sent'>('prompt');
  const storedContactInfo = useRef({ name: '', email: '', message: '' });

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history]);

  const getPrompt = () => {
    switch (step) {
      case 'name': return 'name › ';
      case 'email': return 'email › ';
      case 'message': return 'message › ';
      case 'confirm': return 'confirm › ';
      default: return '$ ';
    }
  };

  const getAriaLabel = () => {
    switch (step) {
      case 'name': return 'Enter your name';
      case 'email': return 'Enter your email address';
      case 'message': return 'Enter your message';
      case 'confirm': return 'Type send to confirm or reset to start over';
      default: return 'Terminal command input. Type help for available commands.';
    }
  };

  const resetForm = (currentHistory: string[]) => {
    setHistory([...currentHistory, 'Form reset. Type <span class="text-teal-600">contact</span> to start over.']);
    storedContactInfo.current = { name: '', email: '', message: '' };
    setStep('prompt');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newHistory = [...history, `<span class="text-ink-faint">${escapeHtml(getPrompt())}</span>${escapeHtml(command)}`];

    if (step !== 'prompt') {
      processContactStep(command, newHistory);
      return;
    }

    switch (command.toLowerCase().trim()) {
      case 'help':
        setHistory([...newHistory,
          'Commands:',
          '  <span class="text-teal-600">contact</span>  Start the contact form',
          '  <span class="text-teal-600">clear</span>    Clear the terminal',
          '  <span class="text-teal-600">reset</span>    Reset the form',
        ]);
        break;
      case 'contact':
        setHistory([...newHistory, 'Starting contact form. Type <span class="text-teal-600">reset</span> at any step to start over.', '', 'Enter your name:']);
        setStep('name');
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
        setHistory([...newHistory, `Unknown command: ${escapeHtml(command)}. Type <span class="text-teal-600">help</span> for options.`]);
        break;
    }
    setCommand('');
  };

  const processContactStep = async (value: string, currentHistory: string[]) => {
    const trimmed = value.trim();
    if (trimmed.toLowerCase() === 'reset') { resetForm(currentHistory); setCommand(''); return; }
    if (trimmed === '') { setHistory(currentHistory); setCommand(''); return; }

    switch (step) {
      case 'name':
        storedContactInfo.current.name = trimmed;
        setHistory([...currentHistory, 'Enter your email:']);
        setStep('email');
        break;
      case 'email':
        if (!trimmed.includes('@')) {
          setHistory([...currentHistory, '<span class="text-amber-600">Please enter a valid email address.</span>']);
          setCommand('');
          return;
        }
        storedContactInfo.current.email = trimmed;
        setHistory([...currentHistory, 'Enter your message:']);
        setStep('message');
        break;
      case 'message':
        storedContactInfo.current.message = trimmed;
        setHistory([...currentHistory,
          '',
          `Name: ${escapeHtml(storedContactInfo.current.name)}`,
          `Email: ${escapeHtml(storedContactInfo.current.email)}`,
          `Message: ${escapeHtml(trimmed)}`,
          '',
          'Type <span class="text-teal-600">send</span> to submit or <span class="text-teal-600">reset</span> to start over.',
        ]);
        setStep('confirm');
        break;
      case 'confirm':
        if (trimmed.toLowerCase() === 'send') {
          setHistory([...currentHistory, 'Sending...']);
          setStep('sending');
          try {
            const response = await fetch('https://derzekt4zpgaxew7eqbjljgnt40kdztv.lambda-url.eu-west-1.on.aws/', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(storedContactInfo.current),
            });
            if (response.ok) {
              setHistory(prev => [...prev, '<span class="text-teal-600">Message sent.</span> I\'ll get back to you shortly.']);
            } else {
              setHistory(prev => [...prev, '<span class="text-red-600">Failed to send. Please try again or reach out directly.</span>']);
            }
          } catch {
            setHistory(prev => [...prev, '<span class="text-red-600">Network error. Please try again.</span>']);
          }
          setStep('sent');
        } else {
          setHistory([...currentHistory, 'Type <span class="text-teal-600">send</span> or <span class="text-teal-600">reset</span>.']);
        }
        break;
    }
    setCommand('');
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <SectionTitle title="Contact" />
      <p className="mt-4 text-sm text-ink-muted max-w-md">
        Send me a message through the terminal below. Type <code className="font-mono text-teal-400 bg-teal-900/30 px-1 rounded">contact</code> to start.
      </p>
      <div
        className="mt-8 w-full max-w-2xl h-72 sm:h-96 cursor-text"
        onClick={() => inputRef.current?.focus()}
        role="application"
        aria-label="Terminal contact form"
      >
        <div className="bg-surface-sunken border border-gray-700/50 rounded-lg h-full flex flex-col font-mono text-sm shadow-sm overflow-hidden">
          <div className="bg-gray-800 px-4 py-2 flex items-center gap-2 text-xs">
            <span className="w-3 h-3 bg-red-400 rounded-full"></span>
            <span className="w-3 h-3 bg-amber-400 rounded-full"></span>
            <span className="w-3 h-3 bg-green-400 rounded-full"></span>
            <span className="ml-auto text-gray-400 hidden sm:inline">contact — terminal</span>
          </div>
          <div ref={terminalBodyRef} className="flex-grow p-4 overflow-y-auto text-gray-300 leading-relaxed text-sm bg-gray-900">
            {history.map((line, i) => (
              <div key={i} dangerouslySetInnerHTML={{ __html: line }} />
            ))}
            {step !== 'sending' && (
              <form onSubmit={handleSubmit} className="flex mt-1">
                <label htmlFor="terminal-input" className="text-teal-400 shrink-0">
                  {getPrompt().replace(/ /g, '\u00a0')}
                </label>
                <input
                  ref={inputRef}
                  id="terminal-input"
                  type="text"
                  className="flex-grow bg-transparent border-none outline-none text-gray-200 pl-1 caret-teal-400 text-sm"
                  value={command}
                  onChange={(e) => setCommand(e.target.value)}
                  autoComplete="off"
                  autoCapitalize="off"
                  autoCorrect="off"
                  spellCheck={false}
                  aria-label={getAriaLabel()}
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
