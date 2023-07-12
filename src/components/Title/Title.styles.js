import { createUseStyles } from 'react-jss';

const titleStyles = {
  title: {
    fontSize: 68,
    fontWeight: 400,
    color: '#000f08',
    textAlign: 'center',
    padding: {
      top: 180,
      bottom: 160,
    }
  },
  boldText: {
    fontWeight: 500,
  }
};

export const useTitleStyles = createUseStyles(titleStyles);
