import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, reducers, RootState } from '../../store';
import { bindActionCreators } from '@reduxjs/toolkit';

export const useAppDispatch = () => {
  const dispatch = useDispatch<AppDispatch>();
  return bindActionCreators(reducers, dispatch);
};

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
