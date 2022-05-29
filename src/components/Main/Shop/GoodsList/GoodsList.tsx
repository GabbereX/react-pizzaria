import React, { FC } from 'react';
import styles from './GoodsList.module.scss';
import GoodsItem from './GoodsItem/GoodsItem';
import { requestAPI } from '../../../../store/reducers/requestAPI';

const GoodsList: FC = () => {
  const { data } = requestAPI.useFetchDataQuery(12);

  return (
    <ul className={styles.goodsList}>
      {data &&
        data.map(item => {
          return <GoodsItem key={item.id} data={item} />;
        })}
    </ul>
  );
};

export default GoodsList;
