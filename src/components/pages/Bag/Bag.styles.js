import { createUseStyles } from 'react-jss';

const bagStyles = {
  successMessage: {
    fontSize: 40,
    fontWeight: 400,
    color: '#000f08',
    textAlign: 'center',
    margin: '200px auto 200px',
  },
  emptyBag: {
    fontSize: 40,
    fontWeight: 400,
    color: '#8c8c8c',
    margin: '200px auto 200px',
  },
  productsList: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  titleBlock: {
    maxWidth: 1056,
    width: '100%',
    margin: '60px auto 20px',
    display: 'flex',
    alignItems: 'center',
    gap: 40,
  },
  title: {
    fontSize: 40,
    fontWeight: 400,
    color: '#000f08',
  },
  count: {
    fontSize: 24,
    fontWeight: 400,
    color: '#8c8c8c',
  },
  paymentBlock: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  totalPrice: {
    fontSize: 40,
    fontWeight: 400,
    color: '#000f08',
    margin: '80px auto 48px',
  },
  button: {
    maxWidth: 480,
    width: '100%',
    height: 100,
    backgroundColor: '#000f08',
    fontSize: 32,
    fontWeight: 400,
    color: '#fff',
    margin: '0 auto 40px',

    '&:hover': {
      cursor: 'pointer',
      backgroundColor: '#181818',
    },
    '&:disabled': {
      backgroundColor: '#8c8c8c',
    },
  },
  backButton: {
    display: 'block',
    marginBottom: 240,

    '&:hover': {
      cursor: 'pointer',
      backgroundColor: '#181818',
    },
  },
  paymentIcon: {
    display: 'block',
    width: 170,
    height: 48,
    marginBottom: 240,
  },
  '@media (max-width: 1600px)': {
    successMessage: {
      fontSize: 24,
      margin: '100px auto 120px',
    },
    emptyBag: {
      fontSize: 24,
      margin: '100px auto 120px',
    },
    titleBlock: {
      maxWidth: 600,
      gap: 20,
    },
    title: {
      fontSize: 28,
    },
    count: {
      fontSize: 18,
    },
    totalPrice: {
      fontSize: 24,
      margin: '80px auto 32px',
    },
    button: {
      maxWidth: 280,
      height: 60,
      fontSize: 18,
    },
    backButton: {
      marginBottom: 240,
    },
    paymentIcon: {
      width: 120,
      height: 48,
      marginBottom: 180,
    },
  },
};

export const useBagStyles = createUseStyles(bagStyles, { name: 'Bag' });
