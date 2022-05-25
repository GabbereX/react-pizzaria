import React, { FC, useState } from 'react';
import styles from './Filter.module.scss';

const Filter: FC = () => {
  const [filterButtonId, setFilterButtonId] = useState<number>(0);

  const filterButtons = [
    'Все',
    'Мясные',
    'Вегетарианские',
    'C Морепродуктами',
    'Острые',
    'Сладкие',
  ];

  return (
    <div className={styles.filter}>
      {filterButtons.map((buttonText, id) => {
        return (
          <button
            key={id}
            onClick={() => setFilterButtonId(id)}
            className={`${styles.filterButton} ${
              filterButtonId === id ? `${styles.active}` : ''
            } light-gray-button`}
          >
            {buttonText}
          </button>
        );
      })}
    </div>
  );
};

export default Filter;
