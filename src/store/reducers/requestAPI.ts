import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { IPizza } from '../../interfaces/IPizza';

export interface IParams {
  limit?: number;
  category?: number;
}

export const requestAPI = createApi({
  reducerPath: 'requestAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://628ed24a0e69410599d0fe4d.mockapi.io',
  }),
  endpoints: build => ({
    getPizzas: build.query<IPizza[], IParams>({
      query: ({ category }) => {
        const params: IParams = {};

        category !== 0 && (params.category = category);

        return {
          url: '/items',
          params,
        };
      },
    }),
  }),
});
