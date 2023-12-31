import { createUseStyles } from 'react-jss';

const titleStyles = {
  title: {
    fontSize: 68,
    fontWeight: 400,
    color: 'var(--general-black)',
    textAlign: 'center',
    padding: {
      top: 180,
      bottom: 160,
    },
  },
  boldText: {
    fontWeight: 500,
  },
  '@media (max-width: 1600px)': {
    title: {
      fontSize: 48,
      padding: {
        top: 120,
        bottom: 100,
      },
    },
  },
  '@media (max-width: 864px)': {
    title: {
      fontSize: 40,
      padding: {
        top: 80,
        bottom: 80,
      },
    },
  },
};

export const useTitleStyles = createUseStyles(titleStyles, { name: 'Title' });
