import { createUseStyles } from 'react-jss';

const bagStyles = {
  successMessage: {
    fontSize: 40,
    fontWeight: 400,
    color: 'var(--general-black)',
    textAlign: 'center',
    margin: '200px auto 200px',
  },
  emptyBag: {
    fontSize: 40,
    fontWeight: 400,
    color: 'var(--text-general-grey)',
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
    color: 'var(--general-black)',
  },
  count: {
    fontSize: 24,
    fontWeight: 400,
    color: 'var(--text-general-grey)',
  },
  paymentBlock: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  totalPrice: {
    fontSize: 40,
    fontWeight: 400,
    color: 'var(--general-black)',
    margin: '80px auto 48px',
  },
  button: {
    maxWidth: 480,
    width: '100%',
    height: 100,
    backgroundColor: 'var(--general-black)',
    fontSize: 32,
    fontWeight: 400,
    color: 'var(--general-white)',
    margin: '0 auto 40px',

    '&:hover': {
      cursor: 'pointer',
      backgroundColor: 'var(--hover-button-black)',
    },
    '&:disabled': {
      backgroundColor: 'var(--text-general-grey)',
    },
  },
  backButton: {
    display: 'block',
    marginBottom: 240,

    '&:hover': {
      cursor: 'pointer',
      backgroundColor: 'var(--hover-button-black)',
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
  '@media (max-width: 864px)': {
    successMessage: {
      fontSize: 28,
      margin: '80px auto 100px',
    },
    emptyBag: {
      fontSize: 28,
      margin: '80px auto 100px',
    },
    titleBlock: {
      maxWidth: 810,
      gap: 20,
    },
    title: {
      fontSize: 40,
    },
    count: {
      fontSize: 24,
    },
    totalPrice: {
      fontSize: 32,
      margin: '80px auto 60px',
    },
    button: {
      maxWidth: 440,
      height: 80,
      fontSize: 28,
    },
    backButton: {
      marginBottom: 440,
    },
    paymentIcon: {
      width: 170,
      height: 48,
      marginBottom: 80,
    },
  },
};

export const useBagStyles = createUseStyles(bagStyles, { name: 'Bag' });
