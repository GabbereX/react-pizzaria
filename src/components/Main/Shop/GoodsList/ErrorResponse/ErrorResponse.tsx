import React, { FC } from 'react';
import styles from './ErrorResponse.module.scss';

const ErrorResponse: FC = () => {
  return (
    <div className={styles.error}>
      Произошла ошибка! Сервер не отвечает.
      <br />
      Обновите страницу или зайдите позже...
    </div>
  );
};

export default ErrorResponse;
