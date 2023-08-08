import { createUseStyles } from 'react-jss';

import topSectionBackground from '../../../assets/images/top-section-background.jpg';

const topSectionStyles = {
  root: {
    background: {
      image: `url(${topSectionBackground})`,
      repeat: 'no-repeat',
      size: '100%',
    },
  },
  collectionBlock: {
    display: 'flex',
    flexDirection: 'column',
    padding: {
      top: 1010,
      left: 300,
      bottom: 200,
    },
  },
  collectionTitle: {
    fontSize: 76,
    fontWeight: 700,
    color: 'var(--general-white)',
    paddingBottom: 40,
  },
  collectionText: {
    maxWidth: 1080,
    fontSize: 32,
    fontWeight: 400,
    lineHeight: '48px',
    color: 'var(--general-white)',
    paddingBottom: 60,
  },
  button: {
    width: 480,
    height: 100,
    border: '2px solid var(--general-white)',
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 400,
    color: 'var(--general-white)',

    '&:hover': {
      cursor: 'pointer',
      backgroundColor: 'rgba(255, 255, 255, .5)',
    },
  },
  '@media (max-width: 1600px)': {
    collectionBlock: {
      padding: {
        top: 500,
        left: 165,
        bottom: 100,
      },
    },
    collectionTitle: {
      fontSize: 40,
      paddingBottom: 16,
    },
    collectionText: {
      maxWidth: 600,
      fontSize: 18,
      lineHeight: '32px',
      paddingBottom: 32,
    },
    button: {
      width: 240,
      height: 50,
      fontSize: 16,
    },
  },
};

export const useTopSectionStyles = createUseStyles(topSectionStyles, {
  name: 'Top section',
});
