import { createUseStyles } from 'react-jss';

import checkboxIcon from '../../../assets/images/checkbox-icon.svg';

const signUpStyles = {
  root: {
    width: '100%',
    backgroundColor: '#bdbdbd',
    padding: '275px 0',
  },
  signUp: {
    width: 996,
    height: 1125,
    backgroundColor: '#fff',
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
      color: '#000f08',
    },
  },
  iconClose: {
    width: 32,
    height: 32,
    fill: '#000f08',

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
    borderBottom: '2px solid #d8d8d8',
    fontSize: 24,
    fontWeight: 400,
    marginBottom: 50,

    '&:last-child': {
      marginBottom: 60,
    },
    '&::placeholder': {
      fontSize: 24,
      fontWeight: 400,
      color: '#8c8c8c',
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
      backgroundColor: '#000f08',
    },
    '&:checked + $checkboxLabel::after': {
      opacity: 1,
    },
  },
  checkboxLabel: {
    fontSize: 24,
    fontWeight: 400,
    color: '#000f08',
    display: 'inline-block',
    paddingLeft: 52,
    cursor: 'pointer',

    '&::before': {
      content: '""',
      display: 'block',
      width: 32,
      height: 32,
      border: '2px solid #000f08',
      backgroundColor: '#fff',
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: 1,
      transition: 'background .1s linear',
    },
    '&:hover::before': {
      cursor: 'pointer',
      backgroundColor: '#eaeaea',
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
    color: '#8c8c8c',
    marginBottom: 60,

    '& span': {
      color: '#000f08',
      textDecoration: 'underline',

      '&:hover': {
        cursor: 'pointer',
      },
    },
  },
  button: {
    width: 480,
    height: 100,
    backgroundColor: '#000f08',
    fontSize: 32,
    fontWeight: 400,
    color: '#fff',
    margin: '0 auto 60px',

    '&:hover': {
      cursor: 'pointer',
      backgroundColor: '#181818',
    },
  },
  signInLink: {
    fontSize: 24,
    fontWeight: 400,
    color: '#000f08',
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
      borderBottom: '2px solid #d8d8d8',
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
        border: '1px solid #000f08',
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
