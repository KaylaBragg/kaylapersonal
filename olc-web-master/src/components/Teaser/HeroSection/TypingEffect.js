import React, { useState, useEffect } from 'react';

const TypingEffect = ({ words, typingSpeed = 50, deletingSpeed = 50, delayBetweenWords = 800 }) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    let timeoutId;

    const handleTyping = () => {
      setText(current => words[currentWordIndex].slice(0, current.length + 1));
    };

    const handleDeleting = () => {
      setText(current => current.slice(0, current.length - 1));
    };

    if (isDeleting) {
      if (text === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      } else {
        timeoutId = setTimeout(handleDeleting, deletingSpeed);
      }
    } else if (text === words[currentWordIndex]) {
      timeoutId = setTimeout(() => {
        setIsDeleting(true);
      }, delayBetweenWords);
    } else {
      timeoutId = setTimeout(handleTyping, typingSpeed);
    }

    return () => clearTimeout(timeoutId);
  }, [text, currentWordIndex, isDeleting, words, typingSpeed, deletingSpeed, delayBetweenWords]);

  return (
    <span>
      {text}
      <span className="typing-cursor">|</span> {/* This cursor will now be static and not blink */}
    </span>
  );
};

export default TypingEffect;
