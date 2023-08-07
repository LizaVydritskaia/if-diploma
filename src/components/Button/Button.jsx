import React from 'react';

export const Button = ({
  className,
  type,
  children,
  onClick,
  isDisabledButton,
  ...props
}) => (
  <button
    className={className}
    type={type}
    onClick={onClick}
    disabled={isDisabledButton}
    {...props}
  >
    {children}
  </button>
);
