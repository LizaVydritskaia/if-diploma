import { createUseStyles } from 'react-jss';

const catalogStyles = {
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

export const useCatalogStyles = createUseStyles(catalogStyles, {
  name: 'Catalog',
});
