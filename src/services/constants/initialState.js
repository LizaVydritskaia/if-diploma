import { authStatuses } from './authStatuses';

export const initialState = {
  auth: {
    status: authStatuses.loggedOut,
  },
  bag: {
    productsInBag: [],
    productsIdList: [],
    successMessage: null,
    showMessage: false,
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
  updates: {
    successUpdatesMessage: null,
    showUpdatesMessage: false,
  },
};
