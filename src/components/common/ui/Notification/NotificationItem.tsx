import { FC, useEffect, useState } from 'react'
import styles from './Notification.module.scss'
import { NotificationType } from '../../../../core/constants/notificationConsts'
import { INotification } from '../../../../core/models/INotification'
import { useAppDispatch } from '../../../../core/hooks/redux'

const NotificationItem: FC<INotification> = ({ id, type }) => {
  const { deleteNotification } = useAppDispatch()

  const [ width, setWidth ] = useState<number>(0)
  const [ intervalId, setIntervalId ] = useState<NodeJS.Timer | null>(null)

  const handleStartTimer = (): void => {
    const intervalIndex = setInterval(() => {
      setWidth(prev => prev < 100 ? prev + 0.5 : prev)
    }, 20)

    console.log(intervalIndex)

    setIntervalId(intervalIndex)
  }

  const handlePauseTimer = (): void => {
    intervalId && clearTimeout(intervalId)
  }

  useEffect(() => {
    handleStartTimer()
  }, [])

  useEffect(() => {
    width === 100 && deleteNotification(id)
  }, [ width ])

  return (
    <div
      className={ styles.item }
      onMouseEnter={ handlePauseTimer }
      onMouseLeave={ handleStartTimer }
    >
      <p>
        {
          type === NotificationType.SEND_PRODUCTS
            ? `Отправлено на обработку`
            : 'Продукт добавлен в корзину'
        }
      </p>
      <div
        className={ styles.bar }
        style={ { width: `${ width }%` } }
      />
    </div>
  )
}

export default NotificationItem