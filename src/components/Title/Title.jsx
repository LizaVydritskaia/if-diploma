import React from 'react';

//styles
import { useTitleStyles } from './Title.styles';

export const Title = ({ contentText, boldText }) => {
  const classes = useTitleStyles();

  return (
    <h2 className={classes.title}>
      {contentText}
      <span className={classes.boldText}>{boldText}</span>
    </h2>
  );
};
