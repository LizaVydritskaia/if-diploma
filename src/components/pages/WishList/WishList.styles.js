import { createUseStyles } from 'react-jss';

const wishListStyles = {
  emptyWishList: {
    fontSize: 40,
    fontWeight: 400,
    color: '#8c8c8c',
    margin: '200px auto 200px',
    textAlign: 'center',
  },
  titleBlock: {
    maxWidth: 1056,
    width: '100%',
    margin: '60px auto 20px',
    display: 'flex',
    alignItems: 'center',
    gap: 40,
  },
  title: {
    fontSize: 40,
    fontWeight: 400,
    color: '#000f08',
  },
  count: {
    fontSize: 24,
    fontWeight: 400,
    color: '#8c8c8c',
  },
  '@media (max-width: 1600px)': {
    emptyWishList: {
      fontSize: 24,
      margin: '100px auto 120px',
    },
    titleBlock: {
      maxWidth: 600,
      gap: 20,
    },
    title: {
      fontSize: 28,
    },
    count: {
      fontSize: 18,
    },
  },
};

export const useWishListStyles = createUseStyles(wishListStyles, {
  name: 'Wish list',
});
