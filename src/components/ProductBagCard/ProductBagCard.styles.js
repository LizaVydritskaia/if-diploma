import { createUseStyles } from 'react-jss';

const productBagCardStyles = {
  cardBlock: {
    maxWidth: 1056,
    width: '100%',
    margin: '0 auto',
    position: 'relative',
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    fontSize: 24,
    fontWeight: 400,
    color: '#000f08',
    backgroundColor: 'transparent',
    border: 'none',
    position: 'absolute',
    bottom: 60,
    right: 10,
  },
  removeIcon: {
    width: 24,
    height: 24,
  },
};

export const useProductBagCardStyles = createUseStyles(productBagCardStyles, {
  name: 'Product Bag Card',
});
