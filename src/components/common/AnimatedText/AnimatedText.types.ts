import type { Variant } from 'framer-motion';

export type AnimatedTextProps = {
  text: string | string[];
  el?: keyof JSX.IntrinsicElements;
  className?: string;
  once?: boolean;
  animation?: {
    hidden: Variant;
    visible: Variant;
  };
};
