import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { INotification, INotificationState } from '../../models/INotification'

export const initialState: INotificationState = {
  notifications: []
}

const notificationSlice = createSlice({
  name: 'notificationSlice',
  initialState,
  reducers: {
    pushNotification(state, action: PayloadAction<INotification>) {
      state.notifications.push(action.payload)
    },

    deleteNotification(state, action: PayloadAction<number>) {
      state.notifications =
        state.notifications.filter(notification =>
          notification.id !== action.payload)
    },

    deleteAllNotifications(state) {
      state.notifications = []
    }
  }
})

export const notificationActions = notificationSlice.actions
export const notificationState = (state: RootState) => state.notificationSlice
export default notificationSlice.reducer