import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { actionsRoot, AppDispatch, RootState } from '../../store';
import { bindActionCreators } from '@reduxjs/toolkit';
import { useMemo } from 'react';

export const useAppDispatch = () => {
  const dispatch = useDispatch<AppDispatch>();
  return useMemo(() => bindActionCreators(actionsRoot, dispatch), [dispatch]);
};

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
