import swimwear from '../../../assets/images/swimwear.jpg';
import top from '../../../assets/images/top.jpg';
import tee from '../../../assets/images/tee.jpg';
import denim from '../../../assets/images/denim.jpg';

export const configSale = [
  {
    id: 'swimwear',
    name: 'TEXTURED SWIMSUIT',
    price: {
      currency: 'USD',
      oldPrice: '$13.00',
      value: '5.90',
    },
    color: {
      name: 'Dark blue',
    },
    availableSizes: ['XS, S, M, L, XL, XXL'],
    images: [swimwear],
    discount: '-55%',
  },
  {
    id: 'top',
    name: 'LONG SLEEVE TOP',
    price: {
      currency: 'USD',
      oldPrice: '$8.00',
      value: '4.90',
    },
    color: {
      name: 'Light blue',
    },
    availableSizes: ['XS, S, M, L, XL, XXL'],
    images: [top],
    discount: '-39%',
  },
  {
    id: 'tee',
    name: 'COTTON T-SHIRT',
    price: {
      currency: 'USD',
      oldPrice: '$14.00',
      value: '5.90',
    },
    color: {
      name: 'Dark grey',
    },
    availableSizes: ['XS, S, M, L, XL, XXL'],
    images: [tee],
    discount: '-58%',
  },
  {
    id: 'denim',
    name: 'THE TREVOR FULL LENGTH JEANS',
    price: {
      currency: 'USD',
      oldPrice: '$9.00',
      value: '5.90',
    },
    color: {
      name: 'Blue',
    },
    availableSizes: ['XS, S, M, L, XL, XXL'],
    images: [denim],
    discount: '-34%',
  },
];
