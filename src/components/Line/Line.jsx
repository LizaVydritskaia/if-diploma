import React from 'react';

//styles
import { useLineStyles } from './Line.styles';

export const Line = () => {
  const classes = useLineStyles();

  return <hr className={classes.line} />;
};
