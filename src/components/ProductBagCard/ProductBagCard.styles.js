import { createUseStyles } from 'react-jss';

const productBagCardStyles = {
  productBlock: {
    maxWidth: 1056,
    width: '100%',
    display: 'flex',
    gap: 40,
    marginTop: 60,
    position: 'relative',
  },
  image: {
    maxWidth: 320,
    height: 460,
    marginBottom: 174,
  },
  productInfo: {
    display: 'flex',
    flexDirection: 'column',
  },
  name: {
    fontSize: 32,
    fontWeight: 400,
    color: '#000f08',
    marginBottom: 32,
  },
  price: {
    fontSize: 24,
    fontWeight: 400,
    color: '#000f08',
    marginBottom: 60,
  },
  selectBlock: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    marginBottom: 32,
  },
  selectText: {
    fontSize: 24,
    fontWeight: 400,
    color: '#000f08',
    textTransform: 'uppercase',
  },
  select: {
    border: 'none',
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
    marginBottom: 60,
    position: 'absolute',
    bottom: 0,
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
