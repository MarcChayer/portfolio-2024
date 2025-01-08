import type { ReactNode } from 'react';

export type ButtonProps = {
  title: string;
  type?: 'button' | 'submit';
  className?: string;
  onClick: () => void;
  children: ReactNode;
  isActive?: boolean;
};
