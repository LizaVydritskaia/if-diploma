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
};

export const useCatalogStyles = createUseStyles(catalogStyles, {
  name: 'Catalog',
});
