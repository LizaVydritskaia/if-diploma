import { createUseStyles } from 'react-jss';

const saleStyles = {
  productsSaleList: {
    maxWidth: 2466,
    display: 'flex',
    justifyContent: 'space-between',
    gap: 24,
    position: 'relative',
  },
  arrow: {
    width: 140,
    height: 140,
    position: 'absolute',
    top: '30%',
    right: '-90px',
    zIndex: 1,

    '&:hover': {
      cursor: 'pointer',
    },
  },
  '@media (max-width: 1600px)': {
    productsSaleList: {
      maxWidth: 1364,
      gap: 10,
    },
    arrow: {
      width: 60,
      height: 60,
      top: '25%',
      right: '-30px',
    },
  },
};

export const useSaleStyles = createUseStyles(saleStyles, { name: 'Sale' });
