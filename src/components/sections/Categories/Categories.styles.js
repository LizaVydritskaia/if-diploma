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
    backgroundColor: 'var(--pink)',
    padding: '48px 40px',

    '&:hover': {
      cursor: 'pointer',
    },
  },
  text: {
    fontSize: 48,
    fontWeight: 400,
    color: 'var(--general-black)',
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
  '@media (max-width: 864px)': {
    root: {
      flexWrap: 'wrap',
      columnGap: 24,
      rowGap: 32,
    },
    categoryBlock: {
      width: 352,
      height: 164,
      padding: '36px 48px',
    },
    text: {
      fontSize: 36,
    },
    iconDress: {
      width: 50,
      height: 80,
    },
    iconTees: {
      width: 88,
      height: 80,
    },
    iconSwimwear: {
      width: 46,
      height: 80,
    },
    iconDenim: {
      width: 36,
      height: 80,
    },
    iconTop: {
      width: 56,
      height: 80,
    },
    iconBeauty: {
      width: 56,
      height: 80,
    },
  },
};

export const useCategoriesStyles = createUseStyles(categoriesStyles, {
  name: 'Categories',
});
