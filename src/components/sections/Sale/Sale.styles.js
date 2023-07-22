import { createUseStyles } from 'react-jss';

const saleStyles = {
  productsSaleList: {
    maxWidth: 2466,
    display: 'flex',
    justifyContent: 'center',
    gap: 24,
    position: 'relative',
  },
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
  arrow: {
    width: 140,
    height: 140,
    position: 'absolute',
    top: '30%',
    right: '-90px',
    zIndex: 1,
  },
};

export const useSaleStyles = createUseStyles(saleStyles, { name: 'Sale' });
