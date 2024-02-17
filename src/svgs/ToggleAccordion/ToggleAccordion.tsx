import React from 'react';
import type { ToggleAccordionType } from './ToggleAccordion.types';

const ToggleAccordion = ({ isOpen }: ToggleAccordionType) => (
  <svg
    className="fill-white shrink-0"
    width="24"
    height="24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      y="11"
      width="24"
      height="2"
      rx="1"
      className={`transform origin-center transition duration-200 ease-out ${
        isOpen && '!rotate-180'
      }`}
    />
    <rect
      y="11"
      width="24"
      height="2"
      rx="1"
      className={`transform origin-center rotate-90 transition duration-200 ease-out ${
        isOpen && '!rotate-180'
      }`}
    />
  </svg>
);

export default ToggleAccordion;
