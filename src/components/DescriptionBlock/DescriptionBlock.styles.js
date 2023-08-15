import { createUseStyles } from 'react-jss';

const descriptionBlockStyles = {
  titleBlock: {
    display: 'flex',
    alignItems: 'center',
    gap: 32,
    marginBottom: 40,
  },
  expandCollapseIcon: {
    width: 14,
    height: 14,

    '&:hover': {
      cursor: 'pointer',
    },
  },
  title: {
    fontSize: 24,
    fontWeight: 400,
    color: 'var(--general-black)',

    '&:hover': {
      cursor: 'pointer',
    },
  },
  description: {
    maxWidth: 450,
    fontSize: 24,
    fontWeight: 400,
    color: 'var(--text-general-grey)',
    margin: {
      bottom: 60,
      left: 45,
    },
  },
  '@media (max-width: 1600px)': {
    titleBlock: {
      gap: 18,
      marginBottom: 20,
    },
    expandCollapseIcon: {
      width: 10,
    },
    title: {
      fontSize: 16,
    },
    description: {
      maxWidth: 305,
      fontSize: 16,
      margin: {
        bottom: 50,
        left: 28,
      },
    },
  },
};

export const useDescriptionBlockStyles = createUseStyles(
  descriptionBlockStyles,
  { name: 'Description Block' },
);
