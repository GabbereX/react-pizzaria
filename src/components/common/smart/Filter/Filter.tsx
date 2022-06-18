import React, { FC } from 'react';
import styles from './Filter.module.scss';
import { filterList } from '../../../../core/constants/filterList';
import { useAppDispatch, useAppSelector } from '../../../../core/hooks/redux';
import { paramsState } from '../../../../core/store/reducers/paramsSlice';

const Filter: FC = () => {
  const { category } = useAppSelector(paramsState);
  const { setFilter } = useAppDispatch();

  return (
    <div className={styles.filter}>
      {filterList.map((buttonText, index) => {
        return (
          <button
            key={index}
            onClick={() => setFilter(index)}
            className={`${styles.filterButton} ${
              category === index ? `${styles.active}` : ''
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
