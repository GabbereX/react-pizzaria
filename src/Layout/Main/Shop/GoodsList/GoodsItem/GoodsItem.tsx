import React, { FC } from 'react';
import styles from './GoodsItem.module.scss';
import pizza01 from '../../../../../assets/images/pizza/01.webp';

const GoodsItem: FC = () => {
  return (
    <li className={styles.goodsItem}>
      <img src={pizza01} alt='Пицца 01' className={styles.goodsItemImage} />
      <div className={styles.goodsItemInfo}>
        <h3 className={styles.goodsItemTitle}>С креветками и трюфелями</h3>
        <p className={styles.goodsItemDescription}>
          Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное
          масло, черный перец, пармезан.350 г
        </p>
        <div className={styles.goodsItemPrice}>
          <div className={styles.goodsItemCost}>от 600 ₽</div>
          <button className={`${styles.goodsItemOrder} orange-button`}>
            Заказать
          </button>
        </div>
      </div>
    </li>
  );
};

export default GoodsItem;
