import React, { FC } from 'react';
import styles from './CallRequest.module.scss';

const CallRequest: FC = () => {
  return (
    <button className={`${styles.callRequest} light-gray-button`}>
      Заказать Звонок
    </button>
  );
};

export default CallRequest;
