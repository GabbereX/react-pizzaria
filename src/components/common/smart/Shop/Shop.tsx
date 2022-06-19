import React, {FC, useRef} from 'react';
import styles from './Shop.module.scss';
import Filter from '../Filter/Filter';
import Sort from '../Sort/Sort';
import GoodsList from '../../ordinary/GoodsList/GoodsList';
import ErrorResponse from '../../simple/ErrorResponse/ErrorResponse';
import { requestAPI } from '../../../../core/store/reducers/requestAPI';
import useURLParams from "../../../../core/hooks/useURLParams";

const Shop: FC = () => {
  const shopSelectionRef = useRef<HTMLAnchorElement>(null);
  const [params] = useURLParams(shopSelectionRef)
  const { data, isFetching, error } = requestAPI.useGetPizzasQuery(params);

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
