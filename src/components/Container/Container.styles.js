import { createUseStyles } from 'react-jss';

export const containerStyles = {
  container: {
    maxWidth: 2466,
    padding: '0 16px',
    margin: '0 auto',
  },
  '@media (max-width: 1600px)': {
    container: {
      maxWidth: 1364,
    },
  },
};

export const useContainerStyles = createUseStyles(containerStyles, {
  name: 'Container',
});
