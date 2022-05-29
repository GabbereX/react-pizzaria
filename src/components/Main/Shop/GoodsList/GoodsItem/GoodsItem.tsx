import React, { FC } from 'react';
import styles from './GoodsItem.module.scss';
import { IPizza } from '../../../../../interfaces/IPizza';

interface IData {
  data: IPizza;
}

const GoodsItem: FC<IData> = ({ data }) => {
  const { imageUrl, title, description, price } = data;

  return (
    <li className={styles.goodsItem}>
      <img src={imageUrl} alt={title} className={styles.goodsItemImage} />
      <div className={styles.goodsItemInfo}>
        <h3 className={styles.goodsItemTitle}>{title}</h3>
        <p className={styles.goodsItemDescription}>{description}</p>
        <div className={styles.goodsItemPrice}>
          <div className={styles.goodsItemCost}>от {price} ₽</div>
          <button className={`${styles.goodsItemOrder} orange-button`}>
            Заказать
          </button>
        </div>
      </div>
    </li>
  );
};

export default GoodsItem;
