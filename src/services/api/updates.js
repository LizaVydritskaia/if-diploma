import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

import { API, API_subscription } from '../constants/APIs';

export const updates = createApi({
  reducerPath: 'updatesApi',
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  endpoints: (builder) => ({
    signUpForUpdates: builder.mutation({
      query: (email) => ({
        url: API_subscription,
        method: 'POST',
        body: {
          email: email,
        },
      }),
    }),
  }),
});

export const { useSignUpForUpdatesMutation } = updates;
