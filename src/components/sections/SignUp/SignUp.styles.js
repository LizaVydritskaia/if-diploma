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
    },
  },
  signInLink: {
    fontSize: 24,
    fontWeight: 400,
    color: '#000f08',
    textDecoration: 'underline',
  },
};

export const useSignUpStyles = createUseStyles(signUpStyles, {
  name: 'Sign Up',
});
