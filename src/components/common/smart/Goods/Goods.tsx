import React, { FC, memo, RefObject } from 'react';
import GoodsList from '../../ordinary/GoodsList/GoodsList';
import ErrorResponse from '../../simple/ErrorResponse/ErrorResponse';
import useRequestAPI from '../../../../core/hooks/useRequestAPI';

interface IProps {
  shopSelectionRef: RefObject<HTMLAnchorElement>;
}

const Goods: FC<IProps> = ({ shopSelectionRef }) => {
  const { data, isFetching, error } = useRequestAPI(shopSelectionRef);


  return (
    <>
      {!error ? (
        <GoodsList data={data} isFetching={isFetching} />
      ) : (
        <ErrorResponse />
      )}
    </>
  );
};

export default memo(Goods);
