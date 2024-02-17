import type { ReactNode } from 'react';

export type ContainerProps = {
  children: ReactNode;
  title?: string;
  id?: string;
  className?: string;
};
