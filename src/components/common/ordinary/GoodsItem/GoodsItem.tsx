import React, { FC, ReactNode } from 'react'
import styles from './GoodsItem.module.scss'
import { IPizza } from '../../../../core/models/IPizza'
import Modal from '../../ui/Modal/Modal'

interface IData {
  data: IPizza
}

const GoodsItem: FC<IData> = ({ data }) => {
  const { imageUrl, title, description, price, id } = data

  const renderButton = (): ReactNode => (
    <button className={`${styles.goodsItemOrder} orange-button`}>
      Заказать
    </button>
  )

  return (
    <li className={styles.goodsItem}>
      <img
        src={imageUrl}
        alt={title}
        className={styles.goodsItemImage}
      />
      <div className={styles.goodsItemInfo}>
        <h3 className={styles.goodsItemTitle}>{title}</h3>
        <p className={styles.goodsItemDescription}>{description}</p>
        <div className={styles.goodsItemPrice}>
          <div className={styles.goodsItemCost}>от {price} ₽</div>
          <Modal
            id={`goods-item-${id}`}
            button={renderButton()}>
            modal
          </Modal>
        </div>
      </div>
    </li>
  )
}

export default GoodsItem
