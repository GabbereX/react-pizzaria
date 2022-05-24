import React, { FC } from 'react';
import styles from './Sort.module.scss';
import ArrowIcon from '../../../../icons/ArrowIcon/ArrowIcon';

const Sort: FC = () => {
  return (
    <div className={styles.sort}>
      <ArrowIcon />
      Сортировать по:
      <button className={styles.sortChecked}>популярности</button>
    </div>
  );
};

export default Sort;
