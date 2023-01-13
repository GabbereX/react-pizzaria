import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { TParamsState } from '../../models/IParams'

const initialState: TParamsState = {
  category: 0,
  sortBy: 'rating',
  order: true,
  page: 1
}

const paramsSlice = createSlice({
  name: 'paramsSlice',
  initialState,
  reducers: {
    setParams(state, action: PayloadAction<TParamsState>) {
      state.category = action.payload.category
      state.sortBy = action.payload.sortBy
      state.order = action.payload.order
      state.page = action.payload.page
    },
    setFilter(state, action: PayloadAction<number>) {
      state.category = action.payload
    },
    setSort(state, action: PayloadAction<string>) {
      state.sortBy = action.payload
    },
    setOrder(state, action: PayloadAction<boolean | null>) {
      state.order = action.payload ? action.payload : !state.order
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload
    }
  }
})

export const paramsActions = paramsSlice.actions
export const paramsState = (state: RootState) => state.paramsSlice
export default paramsSlice.reducer
