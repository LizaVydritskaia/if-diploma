import { createUseStyles } from 'react-jss';

const productPageStyles = {
  productContent: {
    display: 'flex',
    gap: 120,
    marginBottom: 180,
  },
  images: {
    display: 'flex',

    '& img': {
      width: 1000,
      height: 1500,
    },
  },
  productInfo: {
    marginTop: 80,
  },
  productName: {
    fontSize: 32,
    fontWeight: 400,
    color: 'var(--general-black)',
    marginBottom: 40,
  },
  productPrice: {
    fontSize: 24,
    fontWeight: 400,
    color: 'var(--general-black)',
    marginBottom: 20,
  },
  shoppingInfo: {
    fontSize: 24,
    fontWeight: 400,
    color: 'var(--light-grey)',
    marginBottom: 60,
  },
  colorSquare: {
    width: 64,
    height: 64,
    border: '2px solid var(--general-black)',
    marginBottom: 60,
  },
  text: {
    fontSize: 24,
    fontWeight: 400,
    color: 'var(--text-general-grey)',
    marginBottom: 30,
  },
  sizeList: {
    display: 'flex',
    gap: 40,
    fontSize: 24,
    fontWeight: 400,
    color: 'var(--general-black)',
    marginBottom: 80,
  },
  buttons: {
    display: 'flex',
    gap: 2,
    marginBottom: 80,

    '& button': {
      height: 100,
      backgroundColor: 'var(--general-black)',
      fontSize: 32,
      fontWeight: 400,
      color: 'var(--general-white)',

      '&:hover': {
        cursor: 'pointer',
        backgroundColor: 'var(--hover-button-black)',
      },
      '&:first-child': {
        width: 380,
      },
      '&:last-child': {
        width: 100,
        position: 'relative',
      },
    },
  },
  icon: {
    width: 24,
    height: 24,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  iconFilled: {
    width: 28,
    height: 28,
    fill: 'var(--general-white)',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  '@media (max-width: 1600px)': {
    productContent: {
      gap: 80,
      marginBottom: 180,
    },
    images: {
      '& img': {
        width: 500,
        height: 750,
      },
    },
    productInfo: {
      marginTop: 50,
    },
    productName: {
      fontSize: 22,
      marginBottom: 25,
    },
    productPrice: {
      fontSize: 18,
      marginBottom: 10,
    },
    shoppingInfo: {
      fontSize: 16,
      marginBottom: 40,
    },
    colorSquare: {
      width: 32,
      height: 32,
      marginBottom: 40,
    },
    text: {
      fontSize: 16,
      marginBottom: 12,
    },
    sizeList: {
      gap: 20,
      fontSize: 16,
      marginBottom: 60,
    },
    buttons: {
      gap: 2,
      marginBottom: 60,

      '& button': {
        height: 70,
        fontSize: 20,

        '&:first-child': {
          width: 250,
        },
        '&:last-child': {
          width: 70,
        },
      },
    },
    icon: {
      width: 20,
    },
    iconFilled: {
      width: 24,
    },
  },
  '@media (max-width: 864px)': {
    productContent: {
      flexDirection: 'column',
      gap: 130,
      marginBottom: 80,
    },
    images: {
      '& img': {
        width: '100%',
        height: 1200,
      },
      '& img:last-child': {
        display: 'none',
      },
    },
    productInfo: {
      marginTop: 0,
      marginLeft: 80,
    },
    productPrice: {
      marginBottom: 40,
    },
    buttons: {
      '& button': {
        height: 80,
        fontSize: 28,

        '&:first-child': {
          width: 360,
        },
        '&:last-child': {
          width: 78,
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
    },
  },
};

export const useProductPageStyles = createUseStyles(productPageStyles, {
  name: 'Product Page',
});
