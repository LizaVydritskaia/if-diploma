import { createSlice } from '@reduxjs/toolkit';

import { initialState } from '../../services/constants/initialState';

export const searchSlice = createSlice({
  name: 'search',
  initialState: initialState.search,
  reducers: {
    setSearchResultList: (state, action) => {
      state.searchResultList = action.payload;
    },
    setInputValue: (state, action) => {
      state.inputValue = action.payload;
    },
    setShowSearchModal: (state, action) => {
      state.showSearchModal = action.payload;
    },
    setShowSearchResults: (state, action) => {
      state.showSearchResults = action.payload;
    },
  },
});

export const {
  setSearchResultList,
  setInputValue,
  setShowSearchModal,
  setShowSearchResults,
} = searchSlice.actions;

export const searchReducer = searchSlice.reducer;
