import React, { useEffect, useRef, useState } from 'react';
import type { ContainerProps } from './Container.types';
import LogoMc from '_svgs/LogoMc';

const Container = ({ children, className, title, id }: ContainerProps) => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  return (
    <div className={`Container flex flex-col ${className}`}>
      {title && (
        <div
          id={id}
          ref={titleRef}
          className="flex justify-center xs:justify-start gap-4 mb-36"
        >
          <div className="hidden xs:inline">
            <LogoMc />
          </div>
          <div className="Container-title">{title}</div>
        </div>
      )}
      <div className="flex flex-col items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default Container;
