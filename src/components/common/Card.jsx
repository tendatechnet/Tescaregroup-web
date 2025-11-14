import React from 'react';
import clsx from 'clsx';

export const Card = ({ children, className, hover = true, variant = 'default' }) => {
  const baseStyles = 'rounded-2xl p-6 transition-all duration-500';
  
  const variants = {
    default: 'bg-white shadow-lg border border-gray-100',
    gradient: 'bg-gradient-to-br from-white to-powder-blue/40 shadow-lg border border-powder-blue/30',
    elevated: 'bg-white shadow-2xl border border-gray-100',
  };

  const hoverStyles = hover ? 'hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]' : '';

  return (
    <div
      className={clsx(
        baseStyles,
        variants[variant] || variants.default,
        hoverStyles,
        className
      )}
    >
      {children}
    </div>
  );
};
