import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

import { API, API_cart } from '../constants/APIs';

export const order = createApi({
  reducerPath: 'orderApi',
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  endpoints: (builder) => ({
    orderProducts: builder.mutation({
      query: (data) => ({
        url: API_cart,
        method: 'POST',
        body: {
          products: data,
        },
      }),
    }),
  }),
});

export const { useOrderProductsMutation } = order;
