import type { ReactNode } from 'react';

export type AccordionProps = {
  id: number;
  title: string;
  children: ReactNode;
  isOpen: boolean;
  setExpanded: React.Dispatch<React.SetStateAction<number | false>>;
};
