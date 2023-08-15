import { createSlice } from '@reduxjs/toolkit';

import { initialState } from '../../services/constants/initialState';

export const bagSlice = createSlice({
  name: 'bag',
  initialState: initialState.bag,
  reducers: {
    addProductToBag: (state, action) => {
      const productInBag = state.productsInBag.find(
        (product) => product.id === action.payload.id,
      );

      if (productInBag) {
        productInBag.quantity++;
      } else {
        state.productsInBag.push({ ...action.payload, quantity: 1 });
      }
    },
    removeProductFromBag: (state, action) => {
      state.productsInBag = state.productsInBag.filter(
        (product) => product.id !== action.payload,
      );
    },
    quantityDecrement: (state, action) => {
      const productInBag = state.productsInBag.find(
        (product) => product.id === action.payload,
      );

      if (productInBag) {
        productInBag.quantity--;
      }
    },
    clearBag: (state) => {
      state.productsInBag.splice(0, state.productsInBag.length);
    },
    addIdToList: (state, action) => {
      state.productsIdList.push(action.payload);
    },
    removeIdFromList: (state, action) => {
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
  removeProductFromBag,
  quantityDecrement,
  clearBag,
  addIdToList,
  removeIdFromList,
  setSuccessMessage,
  setShowMessage,
} = bagSlice.actions;

export const bagReducer = bagSlice.reducer;
