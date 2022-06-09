import React, { FC } from 'react';

const ErrorResponse: FC = () => {
  return (
    <div className='error'>
      Произошла ошибка! Сервер не отвечает.
      <br />
      Обновите страницу или зайдите позже...
    </div>
  );
};

export default ErrorResponse;
