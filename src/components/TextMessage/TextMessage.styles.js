import { createUseStyles } from 'react-jss';

const textMessageStyles = {
  root: {
    margin: '200px auto 200px',
  },
};

export const useTextMessageStyles = createUseStyles(textMessageStyles, {
  name: 'Text message',
});
