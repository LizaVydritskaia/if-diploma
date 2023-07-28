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
    fill: '#fff',
  },
  price: {
    fontSize: 40,
    fontWeight: 700,
    color: '#000f08',
  },
};

export const useProductStyles = createUseStyles(productStyles, {
  name: 'Product',
});
