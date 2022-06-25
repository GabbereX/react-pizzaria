import { useAppSelector } from './redux';
import { entryState } from '../store/reducers/entrySlice';
import { requestAPI } from '../store/reducers/requestAPI';
import { useEffect, useState } from 'react';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';
import { IPizza } from '../models/IPizza';
import {IParams, TParamsState} from '../models/IParams';

interface IRequest {
  data?: IPizza[] | undefined;
  isFetching: boolean;
  error?: FetchBaseQueryError | SerializedError | undefined;
}

const useRequestAPI = (params: TParamsState) => {
  // const [response, setResponse] = useState<IRequest>({
  //   isFetching: false,
  // });
  // const entry = useAppSelector(entryState);
  // const request = requestAPI.useGetPizzasQuery(params);

  // useEffect(() => {
  //   if (entry) {
  //     // const request = requestAPI.useGetPizzasQuery(params);
  //     setResponse({ ...request });
  //   }
  // }, [entry, params, request]);

  return requestAPI.useGetPizzasQuery(params);
};

export default useRequestAPI;
