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
  '@media (max-width: 864px)': {
    productsList: {
      columnGap: 18,
      rowGap: 48,
    },
  },
};

export const useCatalogStyles = createUseStyles(catalogStyles, {
  name: 'Catalog',
});
