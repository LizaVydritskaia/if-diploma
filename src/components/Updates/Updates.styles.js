import { createUseStyles } from 'react-jss';

export const updatesStyles = {
  root: {
    textAlign: 'center',
    marginBottom: 120,
  },
  rootMargin: {
    marginTop: 240,
  },
  title: {
    fontSize: 32,
    fontWeight: 400,
    color: '#000f08',
    marginBottom: 32,
  },
  text: {
    fontSize: 24,
    fontWeight: 400,
    color: '#000',
    marginBottom: 80,
  },
  formWrapper: {
    display: 'inline-block',
    height: 60,
    borderBottom: '2px solid #8c8c8c',
  },
  form: {
    maxWidth: 800,
    height: 50,
    margin: '0 auto',
  },
  input: {
    width: 715,
    height: 50,
    border: 'none',

    '&::placeholder': {
      fontSize: 32,
      fontWeight: 400,
      color: '#8c8c8c',
    },
  },
  button: {
    width: 85,
    height: 50,
    border: 'none',
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 400,
    color: '#000f08',
  },
};

export const useUpdatesStyles = createUseStyles(updatesStyles);
