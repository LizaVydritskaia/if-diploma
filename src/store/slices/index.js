import { persistReducer } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';

import { products } from '../../services/products';

import { authReducer } from './auth.slice';
import { bagReducer } from './bag.slice';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [products.reducerPath],
};

export const rootReducer = persistReducer(
  persistConfig,
  combineReducers({
    [products.reducerPath]: products.reducer,
    auth: authReducer,
    bag: bagReducer,
  }),
);
