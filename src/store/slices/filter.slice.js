import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../../services/constants/initialState';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState.filter,
  reducers: {
    saveProducts: (state, action) => {
      state.filteredProducts = action.payload;
    },
    filterProducts: (state, action) => {
      state.filteredProducts = state.filteredProducts.filter(
        (product) => product.type === action.payload,
      );
    },
  },
});

export const { saveProducts, filterProducts } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
