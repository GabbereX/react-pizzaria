import { RefObject, useEffect } from 'react';
import { TParamsState } from '../models/IParams';
import { paramsState } from '../store/reducers/paramsSlice';
import { entryState } from '../store/reducers/entrySlice';
import { useAppDispatch, useAppSelector } from './redux';
import { useLocation, useSearchParams } from 'react-router-dom';
import convertParams from '../utils/convertParams';
import scrollIntoViewRef from '../utils/scrollIntoViewRef';

const useURLParams = (shopSelectionRef: RefObject<HTMLAnchorElement>) => {
  const entry = useAppSelector(entryState);
  const params = useAppSelector(paramsState);
  const { setParams, setEntry } = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    if (!entry && location.search) {
      const StateParams = convertParams(searchParams) as TParamsState;
      setParams(StateParams);
      scrollIntoViewRef(shopSelectionRef);
    }
    setEntry();
  }, []);

  useEffect(() => {
    if (entry) {
      const URLParams = convertParams(params) as URLSearchParams;
      setSearchParams({ ...URLParams });
      location.hash === '#check-pizza' && scrollIntoViewRef(shopSelectionRef);
    }
  }, [params, location.hash, location.search]);

  return [params];
};

export default useURLParams;
