import { createUseStyles } from 'react-jss';

const headerStyles = {
  root: {
    maxWidth: 2440,
    width: '100%',
    margin: '0 auto',
    padding: {
      top: 32,
      bottom: 32,
    },
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    width: 470,
    height: 50,
    fill: 'var(--general-white)',
  },
  logoBlack: {
    width: 470,
    height: 50,
    fill: 'var(--general-black)',
  },
  burgerMenuIcon: {
    display: 'none',
  },
  burgerMenuIconBlack: {
    display: 'none',
  },
  menu: {
    display: 'flex',
    alignItems: 'center',
    gap: 80,
  },
  text: {
    fontSize: 24,
    fontWeight: 400,
    color: 'var(--general-white)',

    '&:hover': {
      cursor: 'pointer',
      textDecoration: 'underline',
    },
  },
  textBlack: {
    fontSize: 24,
    fontWeight: 400,
    color: 'var(--general-black)',

    '&:hover': {
      cursor: 'pointer',
      textDecoration: 'underline',
    },
  },
  search: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
  },
  searchIcon: {
    width: 24,
    height: 24,
    fill: 'var(--general-white)',
  },
  searchIconBlack: {
    width: 24,
    height: 24,
    fill: 'var(--general-black)',
  },
  cart: {
    display: 'none',
  },
  cartBlack: {
    display: 'none',
  },
  wishListIcon: {
    width: 27,
    height: 24,
    fill: 'var(--general-white)',

    '&:hover': {
      cursor: 'pointer',
    },
  },
  wishListIconBlack: {
    width: 27,
    height: 24,
    fill: 'var(--general-black)',

    '&:hover': {
      cursor: 'pointer',
    },
  },
  wishListFilled: {
    width: 40,
    height: 36,
  },
  '@media (max-width: 1600px)': {
    root: {
      maxWidth: 1330,
      padding: {
        top: 8,
        bottom: 8,
      },
    },
    logo: {
      width: 230,
    },
    logoBlack: {
      width: 220,
    },
    menu: {
      gap: 40,
    },
    text: {
      fontSize: 14,
    },
    textBlack: {
      fontSize: 14,
    },
    search: {
      gap: 5,
    },
    searchIcon: {
      width: 12,
      height: 12,
    },
    searchIconBlack: {
      width: 12,
      height: 12,
    },
    wishListIcon: {
      width: 16,
    },
    wishListIconBlack: {
      width: 16,
    },
    wishListFilled: {
      width: 20,
    },
  },
  '@media (max-width: 864px)': {
    root: {
      maxWidth: 756,
      padding: {
        top: 20,
        bottom: 20,
      },
    },
    logo: {
      width: 284,
      height: 30,
    },
    logoBlack: {
      width: 284,
      height: 30,
    },
    burgerMenuIcon: {
      display: 'block',
      fill: 'var(--general-white)',
      width: 44,
      height: 32,
    },
    burgerMenuIconBlack: {
      display: 'block',
      fill: 'var(--general-black)',
      width: 44,
      height: 32,
    },
    text: {
      display: 'none',
    },
    textBlack: {
      display: 'none',
    },
    search: {
      gap: 5,
    },
    searchIcon: {
      width: 32,
      height: 32,
    },
    searchIconBlack: {
      width: 32,
      height: 32,
    },
    cart: {
      display: 'block',
      fill: 'var(--general-white)',
      width: 28,
      height: 32,
    },
    cartBlack: {
      display: 'block',
      fill: 'var(--general-black)',
      width: 28,
      height: 32,
    },
    wishListIcon: {
      width: 36,
      height: 32,
    },
    wishListIconBlack: {
      width: 36,
      height: 32,
    },
    wishListFilled: {
      width: 48,
      height: 48,
    },
  },
};

export const useHeaderStyles = createUseStyles(headerStyles, {
  name: 'Header',
});
