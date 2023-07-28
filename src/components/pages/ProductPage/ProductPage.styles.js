import { createUseStyles } from 'react-jss';

const productPageStyles = () => ({
  productContent: {
    display: 'flex',
    gap: 120,
    marginBottom: 180,
  },
  images: {
    display: 'flex',

    '& img': {
      width: 1000,
    },
  },
  productInfo: {
    marginTop: 80,
  },
  productName: {
    fontSize: 32,
    fontWeight: 400,
    color: '#000f08',
    marginBottom: 40,
  },
  productPrice: {
    fontSize: 24,
    fontWeight: 400,
    color: '#000f08',
    marginBottom: 20,
  },
  shoppingInfo: {
    fontSize: 24,
    fontWeight: 400,
    color: '#d8d8d8',
    marginBottom: 60,
  },
  colorSquare: {
    width: 64,
    height: 64,
    border: '2px solid #000f08',
    marginBottom: 60,
  },
  text: {
    fontSize: 24,
    fontWeight: 400,
    color: '#8c8c8c',
    marginBottom: 30,
  },
  sizeList: {
    display: 'flex',
    gap: 40,
    fontSize: 24,
    fontWeight: 400,
    color: '#000f08',
    marginBottom: 80,
  },
  buttons: {
    display: 'flex',
    gap: 2,
    marginBottom: 80,

    '& button': {
      height: 100,
      backgroundColor: '#000f08',
      fontSize: 32,
      fontWeight: 400,
      color: '#fff',

      '&:first-child': {
        width: 380,
      },
      '&:last-child': {
        width: 100,
      },
    },
  },
  icon: {
    width: 24,
    height: 24,
  },
  iconFilled: {
    width: 28,
    height: 28,
    fill: '#fff',
  },
});

export const useProductPageStyles = createUseStyles(productPageStyles, {
  name: 'Product Page',
});
