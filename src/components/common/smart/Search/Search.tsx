import React, { FC } from 'react';
import styles from './Search.module.scss';
import Input from '../../ui/Input/Input';
import { searchField } from '../../../../core/constants/fields';
import SearchOption from '../SearchOption/SearchOption';
import ResetSearchField from '../../ordinary/ResetSearchField/ResetSearchField';
import { useAppSelector } from '../../../../core/hooks/redux';
import { fieldsValuesState } from '../../../../core/store/reducers/fieldsValuesSlice';

const Search: FC = () => {
  const { search } = useAppSelector(fieldsValuesState);

  return (
    <form className={styles.form} onSubmit={e => e.preventDefault()} noValidate>
      <Input options={searchField} />
      {search && <ResetSearchField />}
      <SearchOption />
    </form>
  );
};

export default Search;
