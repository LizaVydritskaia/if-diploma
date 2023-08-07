import React from 'react';

export const Icon = ({ className, hrefIconName, ...props }) => {
  return (
    <svg className={className} {...props}>
      <use href={hrefIconName} />
    </svg>
  );
};
