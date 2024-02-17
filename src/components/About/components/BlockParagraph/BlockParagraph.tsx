import React from 'react';
import type { BlockParagraphProps } from './BlockParagraph.types';

const BlockParagraph = ({
  step,
  title,
  children,
  className,
}: BlockParagraphProps) => (
  <div className={`${className} relative flex flex-col rounded-lg `}>
    <h3 className="absolute -left-5 font-medium text-700">
      <span className="font-medium text-700 italic">{step}</span> {title}
    </h3>
    <p className="font-light font-700 mt-10 md:w-3/4">{children}</p>
    <div className="absolute -z-10 -bottom-12 -right-4 rounded-lg rounded-tl-lg bg-primary w-full h-full md:left-4 md:w-3/4" />
  </div>
);

export default BlockParagraph;
