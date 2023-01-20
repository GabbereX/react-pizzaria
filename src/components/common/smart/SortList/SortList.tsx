import React, { FC } from 'react';
import styles from './SortList.module.scss';
import { sortList } from '../../../../core/constants/sortList';

interface IProps {
  sortParams: {
    sortCkechedId: number;
    onClick: (index: number, param: string) => void;
  };
}

const SortList: FC<IProps> = ({ sortParams }) => {
  const { sortCkechedId, onClick } = sortParams;

  return (
    <div className={styles.sort}>
      <ul className={styles.sortList}>
        {sortList.map(({ text, param }, index) => (
          <li
            key={param}
            className={styles.sortItem}
            style={{ background: sortCkechedId === index ? '#ffe368' : '' }}
            onClick={() => onClick(index, param)}
          >
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SortList;
