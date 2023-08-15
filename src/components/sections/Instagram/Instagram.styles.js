import { createUseStyles } from 'react-jss';

const instagramStyles = {
  root: {
    marginBottom: 180,
  },
  shopTextBlock: {
    display: 'flex',
    gap: 120,
    marginBottom: 60,
  },
  text: {
    fontSize: 32,
    fontWeight: 400,
    color: 'var(--general-black)',

    '&:hover': {
      cursor: 'pointer',
    },
  },
  shop: {
    display: 'flex',
    alignItems: 'center',
    gap: 20,
  },
  nextArrowIcon: {
    width: 24,
    height: 24,
    fill: 'var(--general-black)',
  },
  images: {
    display: 'flex',
    marginBottom: 60,
  },
  imageList: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  bigImage: {
    width: 1252,
    height: 1252,
  },
  image: {
    width: 604,
    height: 626,
  },
  '@media (max-width: 1600px)': {
    root: {
      marginBottom: 120,
    },
    shopTextBlock: {
      gap: 60,
      marginBottom: 40,
    },
    text: {
      fontSize: 20,
    },
    shop: {
      gap: 10,
    },
    nextArrowIcon: {
      width: 14,
      height: 14,
    },
    images: {
      marginBottom: 40,
    },
    bigImage: {
      width: 680,
      height: 682,
    },
    image: {
      width: 332,
      height: 342,
    },
  },
  '@media (max-width: 864px)': {
    root: {
      marginBottom: 100,
    },
    shopTextBlock: {
      gap: 40,
      marginBottom: 32,
    },
    text: {
      fontSize: 18,
    },
    shop: {
      gap: 8,
    },
    nextArrowIcon: {
      width: 12,
      height: 12,
    },
    images: {
      flexDirection: 'column',
      marginBottom: 70,
    },
    imageList: {
      flexDirection: 'column',
      flexWrap: 'no-wrap',
    },
    bigImage: {
      width: 834,
      height: 834,
    },
    image: {
      width: 834,
      height: 834,
    },
  },
};

export const useInstagramStyles = createUseStyles(instagramStyles, {
  name: 'Instagram',
});
