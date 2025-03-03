import type { ReactNode, RefObject } from 'react';

export type SectionWrapperProps = {
  children: ReactNode;
  id: string;
  text?: string;
  direction?: string;
  left?: string;
  className?: string;
};
