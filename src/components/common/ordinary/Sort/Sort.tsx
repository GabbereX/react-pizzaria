import React, { FC, useState } from 'react';
import styles from './Sort.module.scss';
import ArrowIcon from '../../icons/ArrowIcon/ArrowIcon';
import SortDropDown from '../SortDropDown/SortDropDown';
import DropDown from '../../ui/DropDown/DropDown';
import { sortButtons } from '../../../../core/constants/sortList';

const Sort: FC = () => {
  const [sortChechedId, setSortCheckedId] = useState<number>(0);

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
          handlerClick={(id: number) => setSortCheckedId(id)}
          sortChechedId={sortChechedId}
        />
      </DropDown>
    </div>
  );
};

export default Sort;
