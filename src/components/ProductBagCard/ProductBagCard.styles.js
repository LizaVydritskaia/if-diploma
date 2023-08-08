import { createUseStyles } from 'react-jss';

const productBagCardStyles = {
  cardBlock: {
    maxWidth: 1056,
    width: '100%',
    margin: '0 auto',
    position: 'relative',
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    fontSize: 24,
    fontWeight: 400,
    color: 'var(--general-black)',
    backgroundColor: 'transparent',
    border: 'none',
    position: 'absolute',
    bottom: 60,
    right: 10,

    '&:hover': {
      cursor: 'pointer',
    },
  },
  removeIcon: {
    width: 24,
    height: 24,
  },
  '@media (max-width: 1600px)': {
    cardBlock: {
      maxWidth: 600,
    },
    button: {
      gap: 8,
      fontSize: 14,
      bottom: 20,
      right: 5,
    },
    removeIcon: {
      width: 16,
    },
  },
};

export const useProductBagCardStyles = createUseStyles(productBagCardStyles, {
  name: 'Product Bag Card',
});
