export interface INotificationState {
  notifications: Array<INotification>
}

export interface INotification {
  id: number
  type: string
  message?: string
}