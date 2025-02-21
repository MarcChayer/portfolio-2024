import React from 'react';
import type { ButtonProps } from './Button.types';

const Button = ({
  title,
  type = 'button',
  className,
  onClick,
  children,
  isActive,
}: ButtonProps) => (
  <button
    type={type}
    className={`${className} 
      ${isActive ? 'text-primary border-secondary bg-secondary' : ''} 
      font-medium px-3 py-2 border border-secondary border-solid rounded-full transition duration-300 md:px-4 md:py-3 
      hover:border-secondary hover:bg-secondary hover:text-primary active:border-secondary-dark active:bg-secondary-dark `}
    onClick={onClick}
    title={title}
  >
    {children}
  </button>
);

export default Button;
