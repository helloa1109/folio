"use client";

import React from 'react';
import { motion, useScroll } from 'framer-motion';

const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div
      className="hidden md:block fixed top-1/2 left-0 -translate-y-1/2 h-40 w-8 z-50 pointer-events-none">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full mb-2">
        <p
          className="text-lg font-bold transform -rotate-90 whitespace-nowrap"
          style={{
            color: '#ffc400',
          }}>
          portfolio
        </p>
      </div>

      <motion.div
        className="absolute top-10 left-1/2 -translate-x-1/2 h-full w-2 origin-top bg-amber-400" style={{ scaleY: scrollYProgress }}/>
    </div>
  );
};

export default ScrollProgressBar;