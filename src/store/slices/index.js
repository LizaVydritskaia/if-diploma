import { persistReducer } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';

import { products } from '../../services/api/products';
import { order } from '../../services/api/order';

import { authReducer } from './auth.slice';
import { bagReducer } from './bag.slice';
import { filterReducer } from './filter.slice';
import { wishListReducer } from './wishList.slice';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [products.reducerPath, order.reducerPath],
};

export const rootReducer = persistReducer(
  persistConfig,
  combineReducers({
    [products.reducerPath]: products.reducer,
    [order.reducerPath]: order.reducer,
    auth: authReducer,
    bag: bagReducer,
    filter: filterReducer,
    wishList: wishListReducer,
  }),
);
