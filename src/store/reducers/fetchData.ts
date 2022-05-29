import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { IPizza } from '../../interfaces/IPizza';

export const fetchData = createApi({
  reducerPath: 'fetchData',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://628ed24a0e69410599d0fe4d.mockapi.io',
  }),
  tagTypes: ['Post'],

  // загрузка данных

  endpoints: build => ({
    fetchAllData: build.query<IPizza[], number>({
      query: (limit = 5) => ({
        url: '/items',
        params: {
          _limit: limit, // количество объектов
        },
      }),
      providesTags: result => ['Post'], // куда поставить данные
    }),

    // добавить данные

    createItem: build.mutation<IPizza, IPizza>({
      query: post => ({
        url: '/items',
        method: 'POST',
        body: post,
      }),
      invalidatesTags: ['Post'], // откуда поставить данные
    }),

    // обновление данных

    updateItem: build.mutation<IPizza, IPizza>({
      query: post => ({
        url: `/items/${post.id}`,
        method: 'PUT',
        body: post,
      }),
      invalidatesTags: ['Post'], // откуда поставить данные
    }),

    // удалить данные

    deleteItem: build.mutation<IPizza, IPizza>({
      query: post => ({
        url: `/items/${post.id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Post'], // откуда поставить данные
    }),
  }),
});
