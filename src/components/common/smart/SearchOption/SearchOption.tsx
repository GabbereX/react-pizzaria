import React, { FC } from 'react';
import styles from './SearchOption.module.scss';
import DropDown from '../../ui/DropDown/DropDown';
import { searchOptionList } from '../../../../core/constants/searchOptionList';
import { useAppDispatch, useAppSelector } from '../../../../core/hooks/redux';
import { fieldsValuesState } from '../../../../core/store/reducers/fieldsValuesSlice';

const SearchOption: FC = () => {
  const { searchOption } = useAppSelector(fieldsValuesState);
  const { setSearchOption } = useAppDispatch();

  const onClick = (index: number) => {
    setTimeout(() => {
      setSearchOption(String(index));
    }, 100);
  };

  return (
    <DropDown
      keyValue={'searchOptionDropDown'}
      zIndex={10}
      button={
        <button className={`${styles.button} light-gray-button`}>
          {searchOptionList[+searchOption]}
        </button>
      }
    >
      <div className={styles.options}>
        <ul className={styles.optionsList}>
          {searchOptionList.map((item, index) => (
            <li
              key={item}
              className={styles.optionsItem}
              style={{ display: +searchOption === index ? 'none' : '' }}
              onClick={() => onClick(index)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </DropDown>
  );
};

export default SearchOption;
