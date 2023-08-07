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
  },
  name: {
    fontSize: 32,
    fontWeight: 400,
    color: '#000f08',
    marginBottom: 32,
  },
  price: {
    fontSize: 24,
    fontWeight: 400,
    color: '#000f08',
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
    color: '#000f08',
    textTransform: 'uppercase',
  },
  select: {
    border: 'none',
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
