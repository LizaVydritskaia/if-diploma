import { persistReducer } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';

//services
import { order } from '../../services/api/order';
import { products } from '../../services/api/products';
import { updates } from '../../services/api/updates';

//slices
import { authReducer } from './auth.slice';
import { bagReducer } from './bag.slice';
import { filterReducer } from './filter.slice';
import { searchReducer } from './search.slice';
import { updatesReducer } from './updates.slice';
import { wishListReducer } from './wishList.slice';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [products.reducerPath, order.reducerPath, updates.reducerPath],
};

export const rootReducer = persistReducer(
  persistConfig,
  combineReducers({
    [products.reducerPath]: products.reducer,
    [order.reducerPath]: order.reducer,
    [updates.reducerPath]: updates.reducer,
    auth: authReducer,
    bag: bagReducer,
    filter: filterReducer,
    search: searchReducer,
    updates: updatesReducer,
    wishList: wishListReducer,
  }),
);
