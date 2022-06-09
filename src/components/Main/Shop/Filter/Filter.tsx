import React, { FC } from 'react';
import styles from './Filter.module.scss';

interface IFilter {
  handlerFilter: (id: number) => void;
  filterId: number;
}

const Filter: FC<IFilter> = ({ handlerFilter, filterId }) => {
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
            onClick={() => handlerFilter(id)}
            className={`${styles.filterButton} ${
              filterId === id ? `${styles.active}` : ''
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
