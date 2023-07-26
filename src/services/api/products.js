import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

import { API, API_catalog } from '../constants/APIs';

export const products = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => API_catalog,
    }),
  }),
});

export const { useGetProductsQuery } = products;
