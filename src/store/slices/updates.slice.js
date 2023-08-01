import { createSlice } from '@reduxjs/toolkit';

import { initialState } from '../../services/constants/initialState';

export const updatesSlice = createSlice({
  name: 'updates',
  initialState: initialState.updates,
  reducers: {
    setSuccessUpdatesMessage: (state, action) => {
      state.successUpdatesMessage = action.payload;
    },
    setShowUpdatesMessage: (state, action) => {
      state.showUpdatesMessage = action.payload;
    },
  },
});

export const { setSuccessUpdatesMessage, setShowUpdatesMessage } =
  updatesSlice.actions;

export const updatesReducer = updatesSlice.reducer;
