import React, { FC, useEffect, useState } from 'react';
import styles from './GoodsList.module.scss';
import { IPizza } from '../../../../core/models/IPizza';
import { useAppSelector } from '../../../../core/hooks/redux';
import { fieldsValuesState } from '../../../../core/store/reducers/fieldsValuesSlice';
import Skeleton from '../../ui/Skeleton/Skeleton';
import GoodsItem from '../../ordinary/GoodsItem/GoodsItem';
import EmptyGoodsList from '../../simple/EmptyGoodsList/EmptyGoodsList';

interface IData {
  data: IPizza[] | undefined;
  isFetching: boolean;
}

const GoodsList: FC<IData> = ({ data, isFetching }) => {
  const [filteredData, setFilteredData] = useState<IPizza[] | null>(null);
  const { search: searchValue, searchOption } =
    useAppSelector(fieldsValuesState);

  useEffect(() => {
    if (data) {
      const filterData = data.filter(item => {
        const value = `${searchOption !== '2' && item.title} ${
          searchOption !== '1' && item.description
        }`;
        return value.toLowerCase().includes(searchValue.toLowerCase());
      });
      setFilteredData(filterData);
    }
  }, [data, searchValue, searchOption]);

  return (
    <>
      {filteredData?.length ? (
        <ul className={styles.goodsList}>
          {isFetching ? (
            <Skeleton />
          ) : (
            filteredData.map(item => <GoodsItem key={item.id} data={item} />)
          )}
        </ul>
      ) : isFetching && !filteredData ? (
        <ul className={styles.goodsList}>
          <Skeleton />
        </ul>
      ) : (
        filteredData?.length === 0 && <EmptyGoodsList />
      )}
    </>
  );
};

export default GoodsList;
