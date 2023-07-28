import { createUseStyles } from 'react-jss';

const productWishListCardStyles = {
  cardBlock: {
    maxWidth: 1056,
    width: '100%',
    margin: '0 auto',
    position: 'relative',
  },
  buttonsBlock: {
    display: 'flex',
    alignItems: 'center',
    gap: 50,
    position: 'absolute',
    bottom: 60,
    right: 10,
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    fontSize: 24,
    fontWeight: 400,
    color: '#000f08',
    backgroundColor: 'transparent',
    border: 'none',

    '&:hover': {
      cursor: 'pointer',
    },
  },
  shoppingCartIcon: {
    width: 27,
    height: 32,
  },
  removeIcon: {
    width: 24,
    height: 24,
  },
};

export const useProductsWishListCardStyles = createUseStyles(
  productWishListCardStyles,
  { name: 'Product WishList Card' },
);
