import { createUseStyles } from 'react-jss';

const footerStyles = {
  footerList: {
    display: 'flex',
    gap: 310,
    marginBottom: 180,

    '& ul': {
      paddingLeft: 0,
    },
  },
  headLink: {
    fontSize: 32,
    fontWeight: 400,
    color: 'var(--general-black)',
    marginBottom: 60,
    listStyle: 'none',
  },
  link: {
    fontSize: 24,
    fontWeight: 400,
    lineHeight: '36px',
    marginBottom: 40,
    listStyle: 'none',
    maxWidth: 265,

    '&:hover': {
      textDecoration: 'underline',
    },
    '& a': {
      textDecoration: 'none',
      color: 'var(--general-black)',
    },
    '&:last-child': {
      marginBottom: 0,
    },
  },
  socialMediaBlock: {
    display: 'flex',
    alignItems: 'center',
    gap: 20,
    marginBottom: 40,
  },
  icon: {
    width: 24,
    height: 24,
  },
  '@media (max-width: 1600px)': {
    footerList: {
      gap: 220,
      marginBottom: 100,
    },
    headLink: {
      fontSize: 16,
      marginBottom: 36,
    },
    link: {
      fontSize: 12,
      lineHeight: '14px',
      marginBottom: 24,
      maxWidth: 170,
    },
    socialMediaBlock: {
      gap: 10,
      marginBottom: 20,
    },
    icon: {
      width: 16,
      height: 16,
    },
  },
};

export const useFooterStyles = createUseStyles(footerStyles, {
  name: 'Footer',
});
