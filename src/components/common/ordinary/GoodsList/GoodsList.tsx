import React, { FC } from 'react';
import styles from './GoodsList.module.scss';
import Skeleton from '../../ui/Skeleton/Skeleton';
import GoodsItem from '../GoodsItem/GoodsItem';
import { IPizza } from '../../../../core/models/IPizza';

interface IData {
  data: IPizza[] | undefined;
  isFetching: boolean;
}

const GoodsList: FC<IData> = ({ data, isFetching }) => {
  return (
    <ul className={styles.goodsList}>
      {isFetching
        ? [...new Array(12)].map((_, index) => <Skeleton key={index} />)
        : data && data.map(item => <GoodsItem key={item.id} data={item} />)}
    </ul>
  );
};

export default GoodsList;
