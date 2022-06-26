import { useAppSelector } from './redux';
import { entryState } from '../store/reducers/entrySlice';
import { requestAPI } from '../store/reducers/requestAPI';
import { RefObject, useEffect, useState } from 'react';
import useURLParams from './useURLParams';
import { IPizza } from '../models/IPizza';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';

interface IRequest {
  data?: IPizza[] | undefined;
  isFetching: boolean;
  error?: FetchBaseQueryError | SerializedError | undefined;
}

const useRequestAPI = (shopSelectionRef: RefObject<HTMLAnchorElement>) => {
  const [answer, setAnswer] = useState<IRequest>({
    isFetching: false,
  });
  const entry = useAppSelector(entryState);
  const [params] = useURLParams(shopSelectionRef);
  const api = requestAPI.useGetPizzasQuery(params, { skip: !entry });

  useEffect(() => {

     if (api.currentData) {
       console.log(params)
      setAnswer(api);
    }
  }, [api.currentData]);

  return answer;
};

export default useRequestAPI;
