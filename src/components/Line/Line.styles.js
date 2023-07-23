import { createUseStyles } from 'react-jss';

const lineStyles = {
  line: {
    maxWidth: 1056,
    width: '100%',
    height: 2,
    margin: '0 auto',
    backgroundColor: '#d8d8d8',
  },
};

export const useLineStyles = createUseStyles(lineStyles, { name: 'Line' });
