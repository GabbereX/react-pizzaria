import React, { FC, useEffect } from 'react';
import styles from './Search.module.scss';
import Input from '../../ui/Input/Input';
import { searchField } from '../../../../core/constants/fields';
import {
  useAppDispatch,
  useAppSelector,
  useFieldsDispatch,
} from '../../../../core/hooks/redux';
import { fieldsValuesState } from '../../../../core/store/reducers/fieldsValuesSlice';
import { paramsState } from '../../../../core/store/reducers/paramsSlice';
import { entryState } from '../../../../core/store/reducers/entrySlice';

const Search: FC = () => {
  const entry = useAppSelector(entryState);
  const { search } = useAppSelector(fieldsValuesState);
  const { title, description } = useAppSelector(paramsState);
  const { setSearch } = useAppDispatch();
  const { setSearchField } = useFieldsDispatch();

  useEffect(() => {
    setSearch({
      title: search,
      description: '',
    });
  }, [search]);

  useEffect(() => {
    if (title || description) {
      setSearchField(title || description || '');
    }
  }, [entry]);

  return (
    <form className={styles.form} onSubmit={e => e.preventDefault()} noValidate>
      <Input options={searchField} />
      <button className={`${styles.button} light-gray-button`}>Найти</button>
    </form>
  );
};

export default Search;
