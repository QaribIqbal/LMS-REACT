/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RotatingText = ({
  texts,
  mainClassName,
  staggerFrom,
  initial,
  animate,
  exit,
  staggerDuration,
  splitLevelClassName,
  transition,
  rotationInterval = 2000,
  textStyle
}) => {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsAnimating(false);
      }, 500); // Match this with animation duration
    }, rotationInterval);
    
    return () => clearInterval(interval);
  }, [texts.length, rotationInterval]);

  return (
    <div className={mainClassName} style={{ display: 'inline-block' }}>
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={initial}
          animate={animate}
          exit={exit}
          transition={transition}
          style={{ 
            display: 'inline-block', 
            ...textStyle 
          }}
        >
          {texts[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default RotatingText;