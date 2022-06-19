import { RefObject, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from './redux';
import { paramsState } from '../store/reducers/paramsSlice';
import { useLocation, useSearchParams } from 'react-router-dom';
import getAllParams from './getAllParams';
import optimizationParams from '../utils/optimizationParams';
import scrollIntoViewRef from '../utils/scrollIntoViewRef';

const useURLParams = (shopSelectionRef: RefObject<HTMLAnchorElement>) => {
  const [firstEntry, setFirstEntry] = useState<boolean>(true);
  const params = useAppSelector(paramsState);
  const { setParams } = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const setURLParams = () => {
    const optimizedParams = optimizationParams(params);

    const optimizedSearchParams = {
      ...optimizedParams,
      category: optimizedParams.category
        ? String(optimizedParams.category)
        : '0',
    };

    setSearchParams(optimizedSearchParams);
  };

  useEffect(() => {
    if (location.search && firstEntry) {
      const URLParams = getAllParams(searchParams);
      setParams(URLParams);
      scrollIntoViewRef(shopSelectionRef);
    }
    setFirstEntry(false);
  }, []);

  useEffect(() => {
    if (!firstEntry) {
      setURLParams();
    }
  }, [params]);

  useEffect(() => {
    if (location.hash) {
      scrollIntoViewRef(shopSelectionRef);
      setURLParams();
    }
  }, [location]);

  return [params];
};

export default useURLParams;
