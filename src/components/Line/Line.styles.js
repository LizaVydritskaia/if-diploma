import { createUseStyles } from 'react-jss';

const lineStyles = {
  line: {
    maxWidth: 1056,
    width: '100%',
    height: 2,
    margin: '0 auto',
    backgroundColor: 'var(--light-grey)',
  },
  '@media (max-width: 1600px)': {
    line: {
      maxWidth: 600,
    },
  },
  '@media (max-width: 864px)': {
    line: {
      maxWidth: 810,
    },
  },
};

export const useLineStyles = createUseStyles(lineStyles, { name: 'Line' });
