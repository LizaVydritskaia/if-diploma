import { createUseStyles } from 'react-jss';

const productSaleBlockStyles = {
  productSaleBlock: {
    width: 600,
  },
  imageBlock: {
    height: 800,
    position: 'relative',
    marginBottom: 32,
  },
  productSaleImage: {
    width: 600,
    height: 800,
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
  discount: {
    width: 88,
    height: 48,
    backgroundColor: '#d7302d',
    position: 'absolute',
    bottom: 0,
    left: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  discountText: {
    fontSize: 28,
    fontWeight: 400,
    color: '#fff',
  },
  prices: {
    display: 'flex',
    alignItems: 'center',
    gap: 24,
    marginBottom: 264,
  },
  oldPrice: {
    fontSize: 36,
    fontWeight: 400,
    color: '#000f08',
    textDecoration: 'line-through',
  },
  newPrice: {
    fontSize: 40,
    fontWeight: 700,
    color: '#d7302d',
  },
};

export const useProductSaleBlockStyles = createUseStyles(
  productSaleBlockStyles,
  { name: 'Product Sale Block' },
);
