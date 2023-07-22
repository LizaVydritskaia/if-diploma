import { createUseStyles } from 'react-jss';

const instagramStyles = {
  root: {
    marginBottom: 180,
  },
  shopTextBlock: {
    display: 'flex',
    gap: 120,
    marginBottom: 60,
  },
  text: {
    fontSize: 32,
    fontWeight: 400,
    color: '#000f08',
  },
  shop: {
    display: 'flex',
    alignItems: 'center',
    gap: 20,
  },
  nextArrowIcon: {
    width: 24,
    height: 24,
  },
  images: {
    display: 'flex',
    marginBottom: 60,
  },
  imageList: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  bigImage: {
    width: 1252,
    height: 1252,
  },
  image: {
    width: 604,
    height: 626,
  },
};

export const useInstagramStyles = createUseStyles(instagramStyles, {
  name: 'Instagram',
});
