import React, { FC } from 'react';
import styles from './Navigation.module.scss';

const Navigation: FC = () => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.navigationList}>
        <li className={styles.navigationItem}>
          <a href='#' className={styles.navigationLink}>
            Главная
          </a>
        </li>
        <li className={styles.navigationItem}>
          <a href='#' className={styles.navigationLink}>
            О нас
          </a>
        </li>
        <li className={styles.navigationItem}>
          <a href='#' className={styles.navigationLink}>
            Выбрать пиццу
          </a>
        </li>
        <li className={styles.navigationItem}>
          <a href='#' className={styles.navigationLink}>
            Оплата
          </a>
        </li>
        <li className={styles.navigationItem}>
          <a href='#' className={styles.navigationLink}>
            Доставка
          </a>
        </li>
        <li className={styles.navigationItem}>
          <a href='#' className={styles.navigationLink}>
            Контакты
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
