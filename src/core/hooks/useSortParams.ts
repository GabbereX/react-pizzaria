import { useState } from 'react';
import { useAppDispatch, useAppSelector } from './redux';
import { paramsState } from '../store/reducers/paramsSlice';

const useSortParams = () => {
  const { sortBy } = useAppSelector(paramsState);
  const [sortCkechedId, setSortCheckedId] = useState<number>(0);
  const { setSort, setOrder } = useAppDispatch();

  const onClick = (index: number, param: string) => {
    setTimeout(() => {
      setSortCheckedId(index);
    }, 100);
    sortBy === param ? setOrder(null) : setOrder(true);
    setSort(param);
  };

  return { sortCkechedId, onClick };
};

export default useSortParams;
