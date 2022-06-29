import React, { FC } from 'react';
import { GOODS_LIST_EMPTY } from '../../../../core/constants/errorMessages';

const EmptyGoodsList: FC = () => {
  return <div className='error'>{GOODS_LIST_EMPTY}</div>;
};

export default EmptyGoodsList;
