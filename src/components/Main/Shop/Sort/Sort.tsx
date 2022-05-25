import React, { FC, useState } from 'react';
import styles from './Sort.module.scss';
import ArrowIcon from '../../../../icons/ArrowIcon/ArrowIcon';
import SortDropDown from './SortDropDown/SortDropDown';

const Sort: FC = () => {
  const [dropDownOpen, setDropDownOpen] = useState<boolean>(false);
  const [sortChechedId, setSortCheckedId] = useState<number>(0);

  const sortButtons = ['популярности', 'цене', 'алфавиту'];

  const handlerClick = (id: number) => {
    setSortCheckedId(id);
  };

  const dropDownActive = () => {
    setDropDownOpen(!dropDownOpen);
  };

  return (
    <div className={styles.sort}>
      <ArrowIcon />
      Сортировать по:
      <button className={styles.sortChecked} onClick={dropDownActive}>
        {sortButtons[sortChechedId]}
      </button>
      {dropDownOpen && (
        <SortDropDown
          sortButtons={sortButtons}
          handlerClick={handlerClick}
          dropDownActive={dropDownActive}
          sortChechedId={sortChechedId}
        />
      )}
    </div>
  );
};

export default Sort;
