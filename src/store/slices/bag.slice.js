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
  },
});

export const { addProductToBag, deleteProductFromBag } = bagSlice.actions;

export const bagReducer = bagSlice.reducer;
