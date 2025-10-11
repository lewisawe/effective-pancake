import { useState, useEffect } from 'react';

interface TypingOptions {
  start?: boolean;
  speed?: number;
  delay?: number;
}

/**
 * A custom hook for creating a typing effect.
 * @param text The string to be typed out.
 * @param options Configuration for the typing effect.
 * @returns A tuple containing the currently displayed text and a boolean indicating if the typing is finished.
 */
const useTypingEffect = (text: string, options: TypingOptions = {}): [string, boolean] => {
  const { start = true, speed = 50, delay = 0 } = options;
  const [displayedText, setDisplayedText] = useState('');
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (!start) {
      // If the start condition is false, reset and do nothing.
      setDisplayedText('');
      setIsFinished(false);
      return;
    }

    const startTyping = () => {
      setDisplayedText('');
      setIsFinished(false);

      if (!text) {
        setIsFinished(true);
        return;
      }

      let i = 0;
      const typingInterval = setInterval(() => {
        if (i < text.length) {
          setDisplayedText(text.substring(0, i + 1));
          i++;
        } else {
          clearInterval(typingInterval);
          setIsFinished(true);
        }
      }, speed);

      return () => clearInterval(typingInterval);
    };

    const timeoutId = setTimeout(startTyping, delay);
    return () => clearTimeout(timeoutId);

  }, [text, speed, delay, start]);

  return [displayedText, isFinished];
};

export default useTypingEffect;
