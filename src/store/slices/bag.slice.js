import { createSlice } from '@reduxjs/toolkit';

import { initialState } from '../../services/constants/initialState';

export const bagSlice = createSlice({
  name: 'bag',
  initialState: initialState.bag,
  reducers: {
    addProductToBag: (state, action) => {
      state.productsInBag.push(action.payload);
    },
    deleteProductFromBag: (state, action) => {
      state.productsInBag = state.productsInBag.filter(
        (product) => product.id !== action.payload,
      );
    },
    clearBag: (state) => {
      state.productsInBag.splice(0, state.productsInBag.length);
    },
    addIdToList: (state, action) => {
      state.productsIdList.push(action.payload);
    },
    deleteIdFromList: (state, action) => {
      state.productsIdList = state.productsIdList.filter(
        (item) => item !== action.payload,
      );
    },
    setSuccessMessage: (state, action) => {
      state.successMessage = action.payload;
    },
    setShowMessage: (state, action) => {
      state.showMessage = action.payload;
    },
  },
});

export const {
  addProductToBag,
  deleteProductFromBag,
  clearBag,
  addIdToList,
  deleteIdFromList,
  setSuccessMessage,
  setShowMessage,
} = bagSlice.actions;

export const bagReducer = bagSlice.reducer;
