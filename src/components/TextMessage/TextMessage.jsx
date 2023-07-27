import React from 'react';
import classNames from 'classnames';

//styles
import { useTextMessageStyles } from './TextMessage.styles';

export const TextMessage = ({ contentText, className }) => {
  const classes = useTextMessageStyles();

  return (
    <div className={classNames(classes.root, className)}>{contentText}</div>
  );
};
