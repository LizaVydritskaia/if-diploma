import { createUseStyles } from 'react-jss';

const loaderStyles = {
  loader: {
    textAlign: 'center',

    '& img': {
      width: 100,
      padding: '80px 0',
    },
  },
  '@media (max-width: 1600px)': {
    loader: {
      '& img': {
        width: 60,
        padding: '100px 0',
      },
    },
  },
};

export const useLoaderStyles = createUseStyles(loaderStyles, {
  name: 'Loader',
});
