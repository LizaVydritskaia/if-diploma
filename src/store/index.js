import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';

import { rootReducer } from './slices';

import { order } from '../services/api/order';
import { products } from '../services/api/products';
import { updates } from '../services/api/updates';

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }).concat([products.middleware, order.middleware, updates.middleware]),
});

export const persistor = persistStore(store);
