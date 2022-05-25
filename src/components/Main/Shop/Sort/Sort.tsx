import React, { FC, useState } from 'react';
import styles from './Sort.module.scss';
import ArrowIcon from '../../../../icons/ArrowIcon/ArrowIcon';
import SortDropDown from './SortDropDown/SortDropDown';
import DropDown from '../../../../ui/DropDown/DropDown';

const Sort: FC = () => {
  const [sortChechedId, setSortCheckedId] = useState<number>(0);

  const sortButtons = ['популярности', 'цене', 'алфавиту'];

  const handlerClick = (id: number) => {
    setSortCheckedId(id);
  };

  return (
    <div className={styles.sort}>
      <ArrowIcon />
      Сортировать по:
      <DropDown
        keyValue={'sortDropDown'}
        button={
          <button className={styles.sortChecked}>
            {sortButtons[sortChechedId]}
          </button>
        }
      >
        <SortDropDown
          sortButtons={sortButtons}
          handlerClick={handlerClick}
          sortChechedId={sortChechedId}
        />
      </DropDown>
    </div>
  );
};

export default Sort;
