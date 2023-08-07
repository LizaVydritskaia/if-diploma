import { createSlice } from '@reduxjs/toolkit';

import { initialState } from '../../services/constants/initialState';

export const wishListSlice = createSlice({
  name: 'wish-list',
  initialState: initialState.wishList,
  reducers: {
    addProductToWishList: (state, action) => {
      state.productsInWishList.push(action.payload);
    },
    removeProductFromWishList: (state, action) => {
      state.productsInWishList = state.productsInWishList.filter(
        (product) => product.id !== action.payload,
      );
    },
  },
});

export const { addProductToWishList, removeProductFromWishList } =
  wishListSlice.actions;

export const wishListReducer = wishListSlice.reducer;
