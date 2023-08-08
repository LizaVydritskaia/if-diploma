import { createUseStyles } from 'react-jss';

const productCardBlockStyles = {
  productBlock: {
    maxWidth: 1056,
    width: '100%',
    display: 'flex',
    gap: 40,
    marginTop: 60,
  },
  image: {
    maxWidth: 320,
    height: 460,
    marginBottom: 174,
  },
  productInfo: {
    display: 'flex',
    flexDirection: 'column',

    '& a': {
      textDecoration: 'none',
    },
  },
  name: {
    fontSize: 32,
    fontWeight: 400,
    color: 'var(--general-black)',
    marginBottom: 32,
  },
  price: {
    fontSize: 24,
    fontWeight: 400,
    color: 'var(--general-black)',
    marginBottom: 60,
  },
  selectBlock: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    marginBottom: 32,
  },
  selectText: {
    fontSize: 24,
    fontWeight: 400,
    color: 'var(--general-black)',
    textTransform: 'uppercase',
  },
  select: {
    border: 'none',
  },
  quantityBlock: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
  },
  numberBlock: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
  },
  arrowBlock: {
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
  },
  arrowButton: {
    width: 14,
    height: 14,
    backgroundColor: 'transparent',
    border: 'none',
    padding: 0,
  },
  arrow: {
    width: 10,
    height: 10,
    fill: 'var(--general-black)',

    '&:hover': {
      cursor: 'pointer',
    },
  },
  arrowUp: {
    transform: 'rotate(-90deg)',
  },
  arrowDown: {
    transform: 'rotate(90deg)',

    '&:disabled': {
      fill: 'var(--text-general-grey)',
    },
  },
  '@media (max-width: 1600px)': {
    productBlock: {
      maxWidth: 600,
      gap: 30,
      marginTop: 40,
    },
    image: {
      maxWidth: 160,
      height: 230,
      marginBottom: 100,
    },
    name: {
      fontSize: 20,
      marginBottom: 32,
    },
    price: {
      fontSize: 16,
      marginBottom: 40,
    },
    selectBlock: {
      gap: 5,
      marginBottom: 18,
    },
    selectText: {
      fontSize: 14,
    },
  },
};

export const useProductCardBlockStyles = createUseStyles(
  productCardBlockStyles,
  { name: 'Product Card Block' },
);
