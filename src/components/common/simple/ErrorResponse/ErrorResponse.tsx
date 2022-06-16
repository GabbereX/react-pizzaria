import React, { FC } from 'react';
import {
  REFRESH_PAGE,
  SERVER_NOT_RESPONSING,
} from '../../../../core/constants/errorMessages';

const ErrorResponse: FC = () => {
  return (
    <div className='error'>
      {SERVER_NOT_RESPONSING}
      <br />
      {REFRESH_PAGE}
    </div>
  );
};

export default ErrorResponse;
