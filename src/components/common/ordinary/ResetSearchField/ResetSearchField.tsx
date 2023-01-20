import React, { FC } from 'react';
import styles from './ResetSearchField.module.scss';
import CrossIcon from '../../ui/icons/CrossIcon/CrossIcon';
import { useAppDispatch } from '../../../../core/hooks/redux';

const ResetSearchField: FC = () => {
  const { setSearchField } = useAppDispatch();

  return (
    <button className={styles.button} onClick={() => setSearchField('')}>
      <CrossIcon />
    </button>
  );
};

export default ResetSearchField;
