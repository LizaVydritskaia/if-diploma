import { createUseStyles } from 'react-jss';

const containerStyles = {
  container: {
    maxWidth: 2466,
    width: '100%',
    padding: '0 16px',
    margin: '0 auto',
  },
  '@media (max-width: 1600px)': {
    container: {
      maxWidth: 1364,
    },
  },
  '@media (max-width: 864px)': {
    container: {
      maxWidth: 762,
    },
  },
};

export const useContainerStyles = createUseStyles(containerStyles, {
  name: 'Container',
});
