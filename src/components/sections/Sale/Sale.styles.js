import { createUseStyles } from 'react-jss';

const saleStyles = {
  productsSaleList: {
    maxWidth: 2466,
    display: 'flex',
    justifyContent: 'center',
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
  },
};

export const useSaleStyles = createUseStyles(saleStyles, { name: 'Sale' });
