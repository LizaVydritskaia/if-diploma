import { createUseStyles } from 'react-jss';

import checkboxIcon from '../../../assets/images/checkbox-icon.svg';

const signUpStyles = {
  root: {
    width: '100%',
    backgroundColor: 'var(--grey)',
    padding: '275px 0',
  },
  signUp: {
    width: 996,
    height: 1125,
    backgroundColor: 'var(--general-white)',
    margin: '0 auto',
    padding: 80,
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 100,

    '& h2': {
      fontSize: 32,
      fontWeight: 400,
      color: 'var(--general-black)',
    },
  },
  iconClose: {
    width: 32,
    height: 32,
    fill: 'var(--general-black)',

    '&:hover': {
      cursor: 'pointer',
    },
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    height: 60,
    border: 'none',
    borderBottom: '2px solid var(--light-grey)',
    fontSize: 24,
    fontWeight: 400,
    marginBottom: 50,

    '&:last-child': {
      marginBottom: 60,
    },
    '&::placeholder': {
      fontSize: 24,
      fontWeight: 400,
      color: 'var(--text-general-grey)',
    },
    '&:focus': {
      outline: 'none',
    },
  },
  checkboxWrapper: {
    marginBottom: 40,
    position: 'relative',
  },
  checkboxInput: {
    appearance: 'none',
    position: 'absolute',

    '&:checked + $checkboxLabel::before': {
      backgroundColor: 'var(--general-black)',
    },
    '&:checked + $checkboxLabel::after': {
      opacity: 1,
    },
  },
  checkboxLabel: {
    fontSize: 24,
    fontWeight: 400,
    color: 'var(--general-black)',
    display: 'inline-block',
    paddingLeft: 52,
    cursor: 'pointer',

    '&::before': {
      content: '""',
      display: 'block',
      width: 32,
      height: 32,
      border: '2px solid var(--general-black)',
      backgroundColor: 'var(--general-white)',
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: 1,
      transition: 'background .1s linear',
    },
    '&:hover::before': {
      cursor: 'pointer',
      backgroundColor: 'var(--general-white)',
    },
    '&::after': {
      content: '""',
      display: 'block',
      width: 24,
      height: 18,
      background: {
        image: `url(${checkboxIcon})`,
        repeat: 'no-repeat',
        size: '24px 18px',
      },
      position: 'absolute',
      top: 9,
      left: 6,
      zIndex: 2,
      opacity: 0,
      transition: 'opacity .1s linear',
    },
  },
  privacy: {
    fontSize: 24,
    fontWeight: 400,
    color: 'var(--text-general-grey)',
    marginBottom: 60,

    '& span': {
      color: 'var(--general-black)',
      textDecoration: 'underline',

      '&:hover': {
        cursor: 'pointer',
      },
    },
  },
  button: {
    width: 480,
    height: 100,
    backgroundColor: 'var(--general-black)',
    fontSize: 32,
    fontWeight: 400,
    color: 'var(--general-white)',
    margin: '0 auto 60px',

    '&:hover': {
      cursor: 'pointer',
      backgroundColor: 'var(--hover-button-black)',
    },
  },
  signInLink: {
    fontSize: 24,
    fontWeight: 400,
    color: 'var(--general-black)',
    textDecoration: 'underline',

    '&:hover': {
      cursor: 'pointer',
    },
  },
  '@media (max-width: 1600px)': {
    root: {
      height: '100vh',
      padding: '60px 0',
    },
    signUp: {
      width: 500,
      height: 580,
      padding: 40,
    },
    header: {
      marginBottom: 40,

      '& h2': {
        fontSize: 20,
      },
    },
    iconClose: {
      width: 16,
      height: 16,
    },
    input: {
      height: 30,
      borderBottom: '2px solid var(--light-grey)',
      fontSize: 16,
      marginBottom: 32,

      '&:last-child': {
        marginBottom: 32,
      },
      '&::placeholder': {
        fontSize: 16,
      },
    },
    checkboxWrapper: {
      marginBottom: 32,
    },
    checkboxLabel: {
      fontSize: 12,
      paddingLeft: 30,

      '&::before': {
        width: 14,
        height: 14,
        border: '1px solid var(--general-black)',
      },
      '&::after': {
        width: 12,
        height: 8,
        background: {
          size: '12px 8px',
        },
        top: 4,
        left: 2,
      },
    },
    privacy: {
      fontSize: 14,
      marginBottom: 30,
    },
    button: {
      width: 240,
      height: 50,
      fontSize: 18,
      margin: '0 auto 32px',
    },
    signInLink: {
      fontSize: 12,
    },
  },
};

export const useSignUpStyles = createUseStyles(signUpStyles, {
  name: 'Sign Up',
});
