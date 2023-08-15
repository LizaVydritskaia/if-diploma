import { createUseStyles } from 'react-jss';

const productSaleBlockStyles = {
  productSaleBlock: {
    width: 600,
  },
  imageBlock: {
    height: 800,
    position: 'relative',
    marginBottom: 32,

    '&:hover $hoverBlock': {
      display: 'block',
      cursor: 'pointer',
    },
    '&:hover $hoverButton': {
      display: 'block',
      cursor: 'pointer',
    },
  },
  productSaleImage: {
    width: 600,
    height: 800,
  },
  hoverBlock: {
    display: 'none',
    width: '100%',
    height: 800,
    backgroundColor: 'rgba(0, 15, 8, 0.60);',
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
    position: 'absolute',
    inset: 0,
  },
  hoverButton: {
    display: 'none',
    width: 342,
    height: 80,
    backgroundColor: 'var(--general-white)',
    border: `none`,
    borderRadius: 48,
    fontSize: 36,
    fontWeight: 400,
    color: 'var(--general-black)',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',

    '&:hover': {
      backgroundColor: 'var(--secondary-light-grey)',
    },
  },
  likeIcon: {
    width: 62,
    height: 56,
    position: 'absolute',
    top: 24,
    right: 24,
    zIndex: 1,

    '&:hover': {
      cursor: 'pointer',
    },
  },
  likeIconFilled: {
    width: 80,
    height: 72,
    position: 'absolute',
    top: 14,
    right: 16,
    zIndex: 1,
    fill: 'var(--general-white)',
  },
  discount: {
    width: 88,
    height: 48,
    backgroundColor: 'var(--red)',
    position: 'absolute',
    bottom: 0,
    left: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  discountText: {
    fontSize: 28,
    fontWeight: 400,
    color: 'var(--general-white)',
  },
  prices: {
    display: 'flex',
    alignItems: 'center',
    gap: 24,
    marginBottom: 264,
  },
  oldPrice: {
    fontSize: 36,
    fontWeight: 400,
    color: 'var(--general-black)',
    textDecoration: 'line-through',
  },
  newPrice: {
    fontSize: 40,
    fontWeight: 700,
    color: 'var(--red)',
  },
  '@media (max-width: 1600px)': {
    productSaleBlock: {
      width: 320,
    },
    imageBlock: {
      height: 400,
      marginBottom: 24,
    },
    productSaleImage: {
      width: 320,
      height: 400,
    },
    hoverBlock: {
      height: 400,
    },
    hoverButton: {
      width: 180,
      height: 40,
      borderRadius: 36,
      fontSize: 18,
    },
    likeIcon: {
      width: 32,
      height: 56,
      top: 0,
      right: 16,
    },
    likeIconFilled: {
      width: 40,
      top: '-8px',
      right: 12,
    },
    discount: {
      width: 64,
      height: 36,
    },
    discountText: {
      fontSize: 18,
    },
    prices: {
      gap: 18,
      marginBottom: 180,
    },
    oldPrice: {
      fontSize: 24,
    },
    newPrice: {
      fontSize: 24,
    },
  },
  '@media (max-width: 864px)': {
    productSaleBlock: {
      width: 356,

      '&:nth-child(n + 3)': {
        display: 'none',
      },
    },
    imageBlock: {
      height: 480,
      marginBottom: 24,
    },
    productSaleImage: {
      width: 356,
      height: 480,
    },
    hoverBlock: {
      height: 480,
    },
    hoverButton: {
      width: 160,
    },
  },
};

export const useProductSaleBlockStyles = createUseStyles(
  productSaleBlockStyles,
  { name: 'Product Sale Block' },
);
