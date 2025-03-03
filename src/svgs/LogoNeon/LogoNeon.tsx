import React from 'react';
import { motion } from 'framer-motion';

const LogoNeon = ({ className }: { className?: string }) => {
  const pathStyle = {
    fill: 'none',
    stroke: '#89AFC5',
    strokeWidth: 2,
  };

  const neonAnimation = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: () => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 2.75,
        ease: 'easeInOut',
      },
      filter: 'drop-shadow(0 0 5px #89AFC5) drop-shadow(0 0 5px #89AFC5)',
    }),
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 695 561"
      height="100%"
      className={className}
    >
      <motion.path
        d="M245.2,330.1l-18.3-37.2L226,291l-0.9,1.8L102.2,542H23.6L226,131.3l58.9,118.9L245.2,330.1z"
        style={pathStyle}
        initial="hidden"
        animate="visible"
        variants={neonAnimation}
      />
      <motion.path
        d="M412.2,181.7L234.1,542h-78.5L413.1,20.3L671.4,542h-79.3L414,181.7l-0.9-1.8L412.2,181.7z"
        style={pathStyle}
        initial="hidden"
        animate="visible"
        variants={neonAnimation}
      />
      <motion.path
        d="M458.9,382.1l-30,61.1l-15-29.9l-0.9-1.8l-0.9,1.8L377,485.7l-0.7,1.4h1.6h71h0.6l0.3-0.6L480,425l57.4,117 H288.6L413,289.3L458.9,382.1z"
        style={pathStyle}
        initial="hidden"
        animate="visible"
        variants={neonAnimation}
      />
    </svg>
  );
};

export default LogoNeon;
