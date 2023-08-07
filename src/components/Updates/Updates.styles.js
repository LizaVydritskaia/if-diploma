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
    display: 'block',
    width: 800,
    height: 60,
    borderBottom: '2px solid #8c8c8c',
    margin: '0 auto',
  },
  form: {
    maxWidth: 800,
    width: '100%',
    height: 50,
  },
  input: {
    width: '90%',
    height: 50,
    border: 'none',
    fontSize: 32,
    fontWeight: 400,
    color: '#000f08',

    '&::placeholder': {
      fontSize: 32,
      fontWeight: 400,
      color: '#8c8c8c',
    },
    '&:focus': {
      outline: 'none',
    },
    '&:focus::placeholder': {
      opacity: 0,
      transition: 'opacity 0.3s ease',
    },
  },
  button: {
    width: '10%',
    height: 50,
    border: 'none',
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 400,
    color: '#000f08',

    '&:hover': {
      cursor: 'pointer',
    },
  },
  successMessage: {
    fontSize: 32,
    fontWeight: 400,
    color: '#000f08',
    textAlign: 'center',
    margin: '200px auto 200px',
  },
  '@media (max-width: 1600px)': {
    root: {
      marginBottom: 120,
    },
    rootMargin: {
      marginTop: 240,
    },
    title: {
      fontSize: 18,
      marginBottom: 18,
    },
    text: {
      fontSize: 14,
      marginBottom: 50,
    },
    formWrapper: {
      width: 500,
      height: 35,
    },
    form: {
      maxWidth: 500,
      width: '100%',
      height: 30,
    },
    input: {
      height: 25,
      fontSize: 16,

      '&::placeholder': {
        fontSize: 16,
      },
    },
    button: {
      height: 25,
      fontSize: 16,
    },
    successMessage: {
      fontSize: 16,
      margin: '80px auto 180px',
    },
  },
};

export const useUpdatesStyles = createUseStyles(updatesStyles);
