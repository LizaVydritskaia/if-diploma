import { authStatuses } from './authStatuses';

export const initialState = {
  auth: {
    status: authStatuses.loggedOut,
  },
  bag: {
    productsInBag: [],
  },
  filter: {
    allProducts: null,
    filteredProducts: null,
    category: null,
    showCategory: false,
  },
  wishList: {
    productsInWishList: [],
  },
};
