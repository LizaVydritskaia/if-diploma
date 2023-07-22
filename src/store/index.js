import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';

import { rootReducer } from './slices';

import { products } from '../services/products';

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }).concat(products.middleware),
});

export const persistor = persistStore(store);
