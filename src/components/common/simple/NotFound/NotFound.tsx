import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from '../Navigation/Navigation.module.scss';
import {
  GO_TO_MAIN,
  PAGE_NOT_FOUND,
} from '../../../../core/constants/errorMessages';

const NotFound: FC = () => {
  return (
    <div className='error'>
      {PAGE_NOT_FOUND}
      <br />
      <Link to='/' className={styles.navigationLink}>
        {GO_TO_MAIN}
      </Link>
    </div>
  );
};

export default NotFound;
