import { createUseStyles } from 'react-jss';

const categoriesStyles = {
  root: {
    display: 'flex',
    justifyContent: '',
    alignItems: 'center',
    gap: 24,
    paddingBottom: 180,
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
};

export const useCategoriesStyles = createUseStyles(categoriesStyles, {
  name: 'Categories',
});
