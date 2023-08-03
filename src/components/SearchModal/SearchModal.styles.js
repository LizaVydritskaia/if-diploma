import { createUseStyles } from 'react-jss';

const searchModalStyles = {
  modalMask: {
    width: '100%',
    height: '100vh',
    backgroundColor: '#e5e5e5',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1,
  },
  formWrapper: {
    display: 'flex',
    gap: 170,
    margin: {
      top: 362,
      left: 426,
    }
  },
  closeIcon: {
    width: 88,
    height: 88,
    fill: '#fff',

    '&:hover': {
      cursor: 'pointer',
    },
  },
  input: {
    width: 2074,
    height: 88,
    border: 'none',
    borderBottom: '6px solid #fff',
    fontSize: 64,
    fontWeight: 400,
    color: '#fff',
    backgroundColor: 'transparent',

    '&::placeholder': {
      fontSize: 64,
      fontWeight: 400,
      color: '#fff',
    },
    '&:focus': {
      outline: 'none',
    },
    '&:focus::placeholder': {
      opacity: 0,
      transition: 'opacity 0.3s ease',
    },
  },
};

export const useSearchModalStyles = createUseStyles(searchModalStyles, {
  name: 'Search Modal',
});
