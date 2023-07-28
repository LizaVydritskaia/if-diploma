import { createUseStyles } from 'react-jss';

export const headerStyles = {
  root: {
    maxWidth: 2440,
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
    fill: '#fff',
  },
  logoBlack: {
    width: 470,
    height: 50,
    fill: '#000f08',
  },
  menu: {
    display: 'flex',
    alignItems: 'center',
    gap: 80,
  },
  text: {
    fontSize: 24,
    fontWeight: 400,
    color: '#fff',

    '&:hover': {
      cursor: 'pointer',
      textDecoration: 'underline',
    },
  },
  textBlack: {
    fontSize: 24,
    fontWeight: 400,
    color: '#000f08',

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
    fill: '#fff',
  },
  searchIconBlack: {
    width: 24,
    height: 24,
    fill: '#000f08',
  },
  wishListIcon: {
    width: 27,
    height: 24,
    fill: '#fff',

    '&:hover': {
      cursor: 'pointer',
    },
  },
  wishListIconBlack: {
    width: 27,
    height: 24,
    fill: '#000f08',

    '&:hover': {
      cursor: 'pointer',
    },
  },
  wishListFilled: {
    width: 40,
    height: 36,
  },
};

export const useHeaderStyles = createUseStyles(headerStyles);
