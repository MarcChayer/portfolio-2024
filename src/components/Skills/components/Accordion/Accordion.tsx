import React from 'react';
import ToggleAccordion from '_svgs/ToggleAccordion';
import { motion, AnimatePresence } from 'framer-motion';
import type { AccordionProps } from './Accordion.types';

const Accordion = ({
  id,
  title,
  children,
  isOpen,
  setExpanded,
}: AccordionProps) => {
  const handleClick = () => {
    if (isOpen) {
      setExpanded(false);
    } else {
      setExpanded(id);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="border-secondary border-b-2 w-full"
    >
      <div
        className={`flex items-center justify-between font-medium h-28  ${
          isOpen ? 'text-secondary shadow-3xl' : ''
        }`}
      >
        <span>{title}</span>
        <ToggleAccordion isOpen={isOpen} />
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="flex flex-wrap items-center justify-around text-center"
          >
            {React.Children.toArray(children).map((child, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="px-4 py-8"
              >
                {child}
              </motion.div>
            ))}
          </motion.section>
        )}
      </AnimatePresence>
    </button>
  );
};

export default Accordion;
