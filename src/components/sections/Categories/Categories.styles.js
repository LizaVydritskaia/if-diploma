import { createUseStyles } from 'react-jss';

const categoriesStyles = {
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 24,
  },
  categoryBlock: {
    display: 'flex',
    alignItems: 'center',
    gap: 36,
    width: 390,
    height: 180,
    backgroundColor: '#ede7f0',
    padding: '48px 40px',

    '&:hover': {
      cursor: 'pointer',
    },
  },
  text: {
    fontSize: 48,
    fontWeight: 400,
    color: '#000f08',
  },
  iconDress: {
    width: 64,
    height: 100,
  },
  iconTees: {
    width: 100,
    height: 90,
  },
  iconSwimwear: {
    width: 56,
    height: 100,
  },
  iconDenim: {
    width: 45,
    height: 100,
  },
  iconTop: {
    width: 70,
    height: 100,
  },
  iconBeauty: {
    width: 70,
    height: 100,
  },
  '@media (max-width: 1600px)': {
    root: {
      gap: 24,
    },
    categoryBlock: {
      display: 'flex',
      alignItems: 'center',
      gap: 20,
      width: 200,
      height: 100,
      padding: '24px 22px',
    },
    text: {
      fontSize: 24,
    },
    iconDress: {
      width: 32,
    },
    iconTees: {
      width: 44,
    },
    iconSwimwear: {
      width: 32,
    },
    iconDenim: {
      width: 28,
    },
    iconTop: {
      width: 40,
    },
    iconBeauty: {
      width: 35,
    },
  },
};

export const useCategoriesStyles = createUseStyles(categoriesStyles, {
  name: 'Categories',
});
