import React from 'react';
import clsx from 'clsx';

export const Card = ({ children, className, hover = true }) => {
  return (
    <div
      className={clsx(
        'bg-white rounded-lg shadow-md p-6',
        hover && 'transition-all duration-300 hover:shadow-xl hover:-translate-y-1',
        className
      )}
    >
      {children}
    </div>
  );
};
