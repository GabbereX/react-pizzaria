import React, { FC, useState } from 'react';
import styles from './Shop.module.scss';
import Filter from './Filter/Filter';
import Sort from './Sort/Sort';
import GoodsList from './GoodsList/GoodsList';
import ErrorResponse from './GoodsList/ErrorResponse/ErrorResponse';
import { requestAPI } from '../../../store/reducers/requestAPI';

const Shop: FC = () => {
  const [filterId, setFilterId] = useState<number>(0);
  const { data, isFetching, error } = requestAPI.useGetPizzasQuery({
    category: filterId,
  });

  const handlerFilter = (id: number) => {
    setFilterId(id);
  };

  return (
    <section id='check-pizza' className={`container ${styles.section}`}>
      <div className={`${styles.container}`}>
        <h2 className='title'>Выбрать пиццу</h2>
        <div className={styles.shopSortAndFilter}>
          <Filter handlerFilter={handlerFilter} filterId={filterId} />
          <Sort />
        </div>
        {!error ? (
          <GoodsList data={data} isFetching={isFetching} />
        ) : (
          <ErrorResponse />
        )}
      </div>
    </section>
  );
};

export default Shop;
