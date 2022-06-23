import { RefObject, useEffect } from 'react';
import { paramsState } from '../store/reducers/paramsSlice';
import { entryState } from '../store/reducers/entrySlice';
import { useAppDispatch, useAppSelector } from './redux';
import { useLocation, useSearchParams } from 'react-router-dom';
import getAllParams from '../utils/getAllParams';
import optimizationParams from '../utils/optimizationParams';
import scrollIntoViewRef from '../utils/scrollIntoViewRef';

const useURLParams = (shopSelectionRef: RefObject<HTMLAnchorElement>) => {
  const entry = useAppSelector(entryState);
  const params = useAppSelector(paramsState);
  const { setParams, setEntry } = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  console.log(params)

  const editURLParams = () => {
    const optimizedParams = optimizationParams(params);
    setSearchParams({ ...optimizedParams });
  };

  useEffect(() => {
    if (!entry && location.search) {
      const URLParams = getAllParams(searchParams);
      setParams(URLParams);
      scrollIntoViewRef(shopSelectionRef);
    }
    setEntry();
  }, []);

  useEffect(() => {
    if (entry) {
      editURLParams();
      location.hash === '#check-pizza' && scrollIntoViewRef(shopSelectionRef);
    }
  }, [params, location.hash, location.search]);

  return [params];
};

export default useURLParams;
