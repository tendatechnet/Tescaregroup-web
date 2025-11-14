import React from 'react';
import clsx from 'clsx';

export const Card = ({ children, className, hover = true }) => {
  return (
    <div
      className={clsx(
        'bg-gradient-to-br from-white to-powder-blue/40 rounded-xl shadow-md border border-powder-blue/30 p-6',
        hover && 'transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-royal-blue/30 hover:bg-gradient-to-br hover:from-powder-blue/20 hover:to-powder-blue/50',
        className
      )}
    >
      {children}
    </div>
  );
};
