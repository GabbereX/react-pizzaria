import React, { FC } from 'react';
import styles from './Search.module.scss';
import Input from '../../ui/Input/Input';
import { searchField } from '../../../../core/constants/fields';
import SearchOption from "../SearchOption/SearchOption";

const Search: FC = () => {
  return (
    <form className={styles.form} onSubmit={e => e.preventDefault()} noValidate>
      <Input options={searchField} />
      <SearchOption />
    </form>
  );
};

export default Search;
