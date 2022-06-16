import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  filter: 0,
};

const paramsSlice = createSlice({
  name: 'paramsSlice',
  initialState,
  reducers: {
    setFilter(state, action: PayloadAction<number>) {
      state.filter = action.payload;
    },
  },
});

export const { setFilter } = paramsSlice.actions;
export default paramsSlice.reducer;
