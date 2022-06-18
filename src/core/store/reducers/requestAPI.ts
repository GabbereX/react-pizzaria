import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { IPizza } from '../../models/IPizza';
import { baseURL } from '../../config/api.config';
import { IParams } from '../../models/IParams';
import optimizationParams from '../../utils/optimizationParams';

export const requestAPI = createApi({
  reducerPath: 'requestAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: baseURL,
  }),
  endpoints: build => ({
    getPizzas: build.query<IPizza[], IParams>({
      query: params => ({
        url: '/items',
        params: optimizationParams(params),
      }),
    }),
  }),
});
