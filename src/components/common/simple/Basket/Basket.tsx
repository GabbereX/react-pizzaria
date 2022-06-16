import React, { FC } from 'react';
import styles from './Basket.module.scss';

const Basket: FC = () => {
  return <button className={`${styles.basket} orange-button`}>Корзина</button>;
};

export default Basket;
