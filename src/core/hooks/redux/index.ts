import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { actionsRoot, AppDispatch, RootState } from '../../store';
import { bindActionCreators } from '@reduxjs/toolkit';

export const useAppDispatch = () => {
  const dispatch = useDispatch<AppDispatch>();
  return bindActionCreators(actionsRoot, dispatch);
};

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
