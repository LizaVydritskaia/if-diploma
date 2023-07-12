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
  },
  menu: {
    display: 'flex',
    gap: 80,
  },
  text: {
    fontSize: 24,
    fontWeight: 400,
    color: '#fff',

    '&:hover': {
      cursor: 'pointer',
      textDecoration: 'underline',
    }
  },
  search: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
  },
  searchIcon: {
    width: 24,
    height: 24,
  },
  wishListIcon: {
    width: 27,
    height: 24,
  },
};

export const useHeaderStyles = createUseStyles(headerStyles);
