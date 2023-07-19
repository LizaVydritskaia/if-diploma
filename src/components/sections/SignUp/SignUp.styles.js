import { createUseStyles } from 'react-jss';

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
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    height: 60,
    border: 'none',
    borderBottom: '2px solid #d8d8d8',
    marginBottom: 50,

    '&:last-child': {
      marginBottom: 60,
    },
    '&::placeholder': {
      fontSize: 24,
      fontWeight: 400,
      color: '#8c8c8c',
    },
  },
  checkboxLabel: {
    fontSize: 24,
    fontWeight: 400,
    color: '#000f08',
    marginBottom: 40,
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
  },
  signInLink: {
    fontSize: 24,
    fontWeight: 400,
    color: '#000f08',
    textDecoration: 'underline',
  },
};

export const useSignUpStyles = createUseStyles(signUpStyles);
