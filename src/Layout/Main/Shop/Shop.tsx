import React, { FC } from 'react';
import styles from './Shop.module.scss';
import Filter from "./Filter/Filter";
import Sort from "./Sort/Sort";
import GoodsList from "./GoodsList/GoodsList";

const Shop: FC = () => {
  return (
    <section className={styles.shop}>
      <div className={`${styles.shopContainer} container`}>
        <h2 className={styles.shopTitle}>Выбрать пиццу</h2>
        <div className={styles.shopSortAndFilter}>
          <Filter />
          <Sort />
        </div>
        <div className={styles.shopGoods}>
          <GoodsList />
        </div>
      </div>
    </section>
  );
};

export default Shop;
