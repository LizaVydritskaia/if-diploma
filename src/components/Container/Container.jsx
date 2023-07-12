import React from 'react';

//styles
import { useContainerStyles } from './Container.styles';

export const Container = ({ children }) => {
  const classes = useContainerStyles();

  return <div className={classes.container}>{children}</div>;
};
