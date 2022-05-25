import React, { FC } from 'react';
import styles from './SortDropDown.module.scss';

interface IProps {
  sortButtons: Array<string>;
  handlerClick: (id: number) => void;
  dropDownActive: () => void;
  sortChechedId: number;
}

const SortDropDown: FC<IProps> = ({
  sortButtons,
  handlerClick,
  dropDownActive,
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
                dropDownActive();
              }}
              className={styles.sortDropDownItem}
              style={{ display: sortChechedId === id ? 'none' : '' }}
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
