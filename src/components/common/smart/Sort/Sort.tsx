import React, { FC } from 'react';
import styles from './Sort.module.scss';
import ArrowIcon from '../../ui/icons/ArrowIcon/ArrowIcon';
import SortList from '../SortList/SortList';
import DropDown from '../../ui/DropDown/DropDown';
import useSortParams from '../../../../core/hooks/useSortParams';
import { sortList } from '../../../../core/constants/sortList';

const Sort: FC = () => {
  const sortParams = useSortParams();

  return (
    <div className={styles.sort}>
      <ArrowIcon />
      Сортировать по:
      <DropDown
        keyValue={'sortDropDown'}
        zIndex={11}
        button={
          <button className={styles.sortChecked}>
            {sortList[sortParams.sortCkechedId].text}
          </button>
        }
      >
        <SortList sortParams={sortParams} />
      </DropDown>
    </div>
  );
};

export default Sort;
