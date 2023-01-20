import { FC } from 'react'
import ReactDOM from 'react-dom'

import styles from './Notification.module.scss'
import { useAppSelector } from '../../../../core/hooks/redux'
import { notificationState } from '../../../../core/store/reducers/notificationSlice'
import NotificationItem from './NotificationItem'

const Notification: FC = () => {
  const { notifications } = useAppSelector(notificationState)

  const node = document.getElementById('notification')

  if (!node) return null

  return ReactDOM.createPortal(
    <div
      id='notification-container'
      className={ styles.container }
    >
      {
        notifications.map(notification =>
          <NotificationItem
            key={ notification.id }
            { ...notification }
          />)
      }
    </div>,
    node
  )
}

export default Notification