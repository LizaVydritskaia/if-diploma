import { createUseStyles } from 'react-jss';

const productStyles = {
  productBlock: {
    width: 590,
  },
  imageBlock: {
    position: 'relative',
    marginBottom: 24,
  },
  productImage: {
    width: 590,
  },
  likeIcon: {
    width: 62,
    height: 56,
    position: 'absolute',
    top: 24,
    right: 24,
    zIndex: 1,

    '&:hover': {
      cursor: 'pointer',
    },
  },
  likeIconFilled: {
    width: 80,
    height: 72,
    position: 'absolute',
    top: 14,
    right: 16,
    zIndex: 1,
    fill: 'var(--general-white)',
  },
  price: {
    fontSize: 40,
    fontWeight: 700,
    color: 'var(--general-black)',
  },
  '@media (max-width: 1600px)': {
    productBlock: {
      width: 320,
    },
    imageBlock: {
      marginBottom: 20,
    },
    productImage: {
      width: 320,
    },
    likeIcon: {
      width: 32,
      height: 56,
      top: 0,
      right: 16,
    },
    likeIconFilled: {
      width: 40,
      top: '-8px',
      right: 12,
    },
    price: {
      fontSize: 24,
    },
  },
};

export const useProductStyles = createUseStyles(productStyles, {
  name: 'Product',
});
