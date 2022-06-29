import { useAppSelector } from './redux';
import { entryState } from '../store/reducers/entrySlice';
import { requestAPI } from '../store/reducers/requestAPI';
import { RefObject } from 'react';
import useURLParams from './useURLParams';

const useRequestAPI = (shopSelectionRef: RefObject<HTMLAnchorElement>) => {
  const entry = useAppSelector(entryState);
  const [params] = useURLParams(shopSelectionRef);

  return requestAPI.useGetPizzasQuery(params, { skip: !entry });
};

export default useRequestAPI;
