import React, { FC, useEffect, useRef } from 'react';
import styles from './Shop.module.scss';
import Filter from '../Filter/Filter';
import Sort from '../Sort/Sort';
import GoodsList from '../../ordinary/GoodsList/GoodsList';
import ErrorResponse from '../../simple/ErrorResponse/ErrorResponse';
import { useLocation } from 'react-router-dom';
import { paramsState } from '../../../../core/store/reducers/paramsSlice';
import { requestAPI } from '../../../../core/store/reducers/requestAPI';
import { useAppSelector } from '../../../../core/hooks/redux';

const Shop: FC = () => {
  const params = useAppSelector(paramsState);
  const { data, isFetching, error } = requestAPI.useGetPizzasQuery(params);
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

  return (
    <section ref={shopSelectionRef} className={`${styles.section} container`}>
      <div className={`${styles.container}`}>
        <h2 className='title'>Выбрать пиццу</h2>
        <div className={styles.shopSortAndFilter}>
          <Filter />
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
