import { createUseStyles } from 'react-jss';

const searchResultsStyles = {
  productsList: {
    display: 'flex',
    flexWrap: 'wrap',
    columnGap: 24,
    rowGap: 90,

    '& a': {
      textDecoration: 'none',
    },
  },
  messageBlock: {
    fontSize: 40,
    fontWeight: 400,
    color: 'var(--text-general-grey)',
    textAlign: 'center',
  },
  '@media (max-width: 1600px)': {
    productsList: {
      columnGap: 17,
      rowGap: 60,
    },
    messageBlock: {
      fontSize: 24,
    },
  },
};

export const useSearchResultsStyles = createUseStyles(searchResultsStyles, {
  name: 'Search Results',
});
