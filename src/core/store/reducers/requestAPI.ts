import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { baseURL } from '../../config/api.config'
import { IPizza } from '../../models/IPizza'
import { TParamsState } from '../../models/IParams'
import convertParams from '../../utils/convertParams'

export const requestAPI = createApi({
  reducerPath: 'requestAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: baseURL
  }),
  endpoints: build => ({
    getPizzas: build.query<IPizza[], TParamsState>({
      query: params => ({
        url: '/items',
        params: convertParams(params, false)
      })
    })
  })
})
