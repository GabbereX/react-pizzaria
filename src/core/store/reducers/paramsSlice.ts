import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { ISearchParams, TParamsState } from '../../models/IParams';

const initialState: TParamsState = {
  category: 0,
  sortBy: 'rating',
  order: true,
  title: '',
  description: '',
};

const paramsSlice = createSlice({
  name: 'paramsSlice',
  initialState,
  reducers: {
    setParams(state, action: PayloadAction<TParamsState>) {
      state.category = action.payload.category;
      state.sortBy = action.payload.sortBy;
      state.order = action.payload.order;
      state.title = action.payload.title;
      state.description = action.payload.description;
    },
    setFilter(state, action: PayloadAction<number>) {
      state.category = action.payload;
    },
    setSort(state, action: PayloadAction<string>) {
      state.sortBy = action.payload;
    },
    setOrder(state, action: PayloadAction<boolean | null>) {
      state.order = action.payload ? action.payload : !state.order;
    },
    setSearch(state, action: PayloadAction<ISearchParams>) {
      state.title = action.payload.title;
      state.description = action.payload.description;
    },
  },
});

export const paramsActions = paramsSlice.actions;
export const paramsState = (state: RootState) => state.paramsSlice;
export default paramsSlice.reducer;
