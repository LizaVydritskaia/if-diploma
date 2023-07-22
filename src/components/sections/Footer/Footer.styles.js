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
    color: '#000f08',
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

    '& a': {
      textDecoration: 'none',
      color: '#000f08',
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
};

export const useFooterStyles = createUseStyles(footerStyles, {
  name: 'Footer',
});
