import React, { FC } from 'react';
import styles from './Filter.module.scss';
import { filterList } from '../../../../core/constants/filterList';

interface IFilter {
  handlerFilter: (id: number) => void;
  filterId: number;
}

const Filter: FC<IFilter> = ({ handlerFilter, filterId }) => {
  return (
    <div className={styles.filter}>
      {filterList.map((buttonText, id) => {
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
