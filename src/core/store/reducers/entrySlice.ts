import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

interface IInitialState {
  entry: boolean
}

const initialState: IInitialState = {
  entry: false
}

const entrySlice = createSlice({
  name: 'entrySlice',
  initialState,
  reducers: {
    setEntry(state) {
      state.entry = true
    }
  }
})

export const entryAction = entrySlice.actions
export const entryState = (state: RootState) => state.entrySlice.entry
export default entrySlice.reducer
