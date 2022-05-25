import React, { FC } from 'react';
import styles from './SortDropDown.module.scss';

interface IProps {
  sortButtons: Array<string>;
  handlerClick: (id: number) => void;
  sortChechedId: number;
}

const SortDropDown: FC<IProps> = ({
  sortButtons,
  handlerClick,
  sortChechedId,
}) => {
  return (
    <div className={styles.sortDropDown}>
      <ul className={styles.sortDropDownList}>
        {sortButtons.map((sortButtonId, id) => {
          return (
            <li
              key={sortButtonId}
              onClick={() => {
                handlerClick(id);
              }}
              className={styles.sortDropDownItem}
              style={{ background: sortChechedId === id ? '#ffe368' : '' }}
            >
              {sortButtonId}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SortDropDown;
