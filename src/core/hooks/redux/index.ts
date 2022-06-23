import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { actionsRoot, AppDispatch, RootState } from '../../store';
import { bindActionCreators } from '@reduxjs/toolkit';
import { fieldsValuesAction } from '../../store/reducers/fieldsValuesSlice';

export const useAppDispatch = () => {
  const dispatch = useDispatch<AppDispatch>();
  return bindActionCreators(actionsRoot, dispatch);
};

// TODO Find a way to merge useAppDispatch + useFieldsDispatch

export const useFieldsDispatch = () => {
  const dispatch = useDispatch<AppDispatch>();
  return bindActionCreators(fieldsValuesAction, dispatch);
};

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
