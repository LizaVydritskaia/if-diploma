import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../../services/constants/initialState';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState.filter,
  reducers: {
    saveAllProducts: (state, action) => {
      state.allProducts = action.payload;
    },
    filterProducts: (state, action) => {
      state.filteredProducts = state.allProducts.filter(
        (product) => product.type === action.payload,
      );
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setShowCategory: (state, action) => {
      state.showCategory = action.payload;
    },
  },
});

export const { saveAllProducts, filterProducts, setCategory, setShowCategory } =
  filterSlice.actions;

export const filterReducer = filterSlice.reducer;
