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
    color: '#8c8c8c',
    textAlign: 'center',
  },
};

export const useSearchResultsStyles = createUseStyles(searchResultsStyles, {
  name: 'Search Results',
});
