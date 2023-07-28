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
  },
  title: {
    fontSize: 24,
    fontWeight: 400,
    color: '#000f08',
  },
  description: {
    maxWidth: 450,
    fontSize: 24,
    fontWeight: 400,
    color: '#8c8c8c',
    margin: {
      bottom: 60,
      left: 45,
    },
  },
};

export const useDescriptionBlockStyles = createUseStyles(
  descriptionBlockStyles,
  { name: 'Description Block' },
);
