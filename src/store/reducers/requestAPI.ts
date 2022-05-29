import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { IPizza } from '../../interfaces/IPizza';

export const requestAPI = createApi({
  reducerPath: 'requestAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://628ed24a0e69410599d0fe4d.mockapi.io',
  }),
  endpoints: build => ({
    fetchData: build.query<IPizza[], number>({
      query: (limit) => ({
        url: '/items',
        params: {
          _limit: limit,
        },
      }),
    }),
  }),
});
