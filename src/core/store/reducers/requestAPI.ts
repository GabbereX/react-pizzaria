import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { IPizza } from '../../models/IPizza';
import { baseURL } from '../../config/api.config';

export interface IParams {
  limit?: number;
  category?: number;
}

export const requestAPI = createApi({
  reducerPath: 'requestAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: baseURL,
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
