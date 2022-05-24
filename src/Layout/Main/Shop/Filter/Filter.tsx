import React, {FC} from 'react';
import styles from './Filter.module.scss';

const Filter: FC = () => {
  return (
    <div className={styles.filter}>
      <button className={`${styles.filterButton} light-gray-button`}>
        Все
      </button>
      <button className={`${styles.filterButton} light-gray-button`}>
        Мясные
      </button>
      <button className={`${styles.filterButton} light-gray-button`}>
        Вегетарианские
      </button>
      <button className={`${styles.filterButton} light-gray-button`}>
        Гриль
      </button>
      <button className={`${styles.filterButton} light-gray-button`}>
        Острые
      </button>
      <button className={`${styles.filterButton} light-gray-button`}>
        Закрытые
      </button>
    </div>
  );
}

export default Filter;