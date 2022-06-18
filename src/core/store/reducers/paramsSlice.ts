import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { IParams } from '../../models/IParams';

const initialState: IParams = {
  category: 0,
  sortBy: 'rating',
  order: true,
};

const paramsSlice = createSlice({
  name: 'paramsSlice',
  initialState,
  reducers: {
    setFilter(state, action: PayloadAction<number>) {
      state.category = action.payload;
    },
    setSort(state, action: PayloadAction<string>) {
      state.sortBy = action.payload;
    },
    setOrder(state, action: PayloadAction<boolean | null>) {
      state.order = action.payload ? action.payload : !state.order;
    },
  },
});

export const paramsActions = paramsSlice.actions;
export const paramsState = (state: RootState) => state.paramsSlice;
export default paramsSlice.reducer;
