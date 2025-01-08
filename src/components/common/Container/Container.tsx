import React from 'react';
import type { ContainerProps } from './Container.types';

const Container = ({ children, className, id }: ContainerProps) => {
  return (
    <div
      id={id}
      className={`${
        className ? className : ''
      } flex flex-col items-center justify-center min-h-screen py-32 w-4/5 lg:w-3/4`}
    >
      {children}
    </div>
  );
};

export default Container;
