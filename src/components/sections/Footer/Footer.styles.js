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
  headLinkBlock: {
    display: 'flex',
    alignItems: 'center',
    gap: 20,
    marginBottom: 60,
  },
  expandCollapseIcon: {
    width: 16,
    height: 16,
    display: 'none',
  },
  headLink: {
    fontSize: 32,
    fontWeight: 400,
    color: 'var(--general-black)',
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
  hideLinkInfo: {
    display: 'block',
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
  footerLine: {
    display: 'none',
  },
  '@media (max-width: 1600px)': {
    footerList: {
      gap: 220,
      marginBottom: 100,
    },
    headLinkBlock: {
      marginBottom: 36,
    },
    headLink: {
      fontSize: 16,
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
  '@media (max-width: 864px)': {
    footerList: {
      flexDirection: 'column',
      gap: 0,
      marginBottom: 90,
    },
    headLinkBlock: {
      marginBottom: 30,
    },
    expandCollapseIcon: {
      display: 'block',
    },
    headLink: {
      fontSize: 24,
    },
    link: {
      fontSize: 18,
      lineHeight: '24px',
      marginBottom: 30,
      maxWidth: 500,

      '&:last-child': {
        marginBottom: 0,
      },
    },
    hideLinkInfo: {
      display: 'none',
      marginBottom: 30,
    },
    socialMediaBlock: {
      gap: 10,
      marginBottom: 30,
    },
    icon: {
      width: 20,
      height: 20,
    },
    footerLine: {
      display: 'block',
      maxWidth: 834,
      width: '100%',
      margin: '20px auto 50px',
      borderBottom: '2px dashed var(--light-grey)',
    },
  },
};

export const useFooterStyles = createUseStyles(footerStyles, {
  name: 'Footer',
});
