import React, { FC, useEffect, useRef, useState } from 'react';
import styles from './Shop.module.scss';
import Filter from '../../ordinary/Filter/Filter';
import Sort from '../../ordinary/Sort/Sort';
import GoodsList from '../../ordinary/GoodsList/GoodsList';
import ErrorResponse from '../../simple/ErrorResponse/ErrorResponse';
import { requestAPI } from '../../../../core/store/reducers/requestAPI';
import { useLocation } from 'react-router-dom';

const Shop: FC = () => {
  const [filterId, setFilterId] = useState<number>(0);
  const { data, isFetching, error } = requestAPI.useGetPizzasQuery({
    category: filterId,
  });
  const shopSelectionRef = useRef<HTMLAnchorElement>(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        shopSelectionRef.current?.scrollIntoView({
          behavior: 'smooth',
        });
      }, 250);
    }
  }, [location]);

  const handlerFilter = (id: number) => {
    setFilterId(id);
  };

  return (
    <section ref={shopSelectionRef} className={`${styles.section} container`}>
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
