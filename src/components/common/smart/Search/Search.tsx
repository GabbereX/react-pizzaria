import React, { FC } from 'react';
import styles from './Search.module.scss';
import Input from '../../ui/Input/Input';
import { searchField } from '../../../../core/constants/fields';
import { useAppSelector } from '../../../../core/hooks/redux';
import { fieldsValuesState } from '../../../../core/store/reducers/fieldsValuesSlice';

const Search: FC = () => {
  const { search } = useAppSelector(fieldsValuesState);

  console.log(search);

  return (
    <form className={styles.form} onSubmit={e => e.preventDefault()} noValidate>
      <Input options={searchField} />
      <button className={`${styles.button} light-gray-button`}>Найти</button>
    </form>
  );
};

export default Search;
