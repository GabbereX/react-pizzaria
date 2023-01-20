import React, { FC, useEffect, useRef, useState } from 'react'
import styles from './Notification.module.scss'
import { NotificationType } from '../../../../core/constants/notificationConsts'
import { INotification } from '../../../../core/models/INotification'
import { useAppDispatch } from '../../../../core/hooks/redux'
import CloseIcon from '../icons/CloseIcon/CloseIcon'
import Basket from '../../smart/Basket/Basket'

const NotificationItem: FC<INotification> = ({ id, type, message }) => {
  const { deleteNotification } = useAppDispatch()

  const [ isClose, setIsClose ] = useState<boolean>(false)
  const [ scaleX, setScaleX ] = useState<number>(0)

  const intervalRef = useRef<NodeJS.Timer | null>(null)

  const isTypeSendProduct =
    type === NotificationType.SEND_PRODUCTS

  const handleStartInterval = (): void => {
    intervalRef.current = setInterval(() => {
      setScaleX(prev => (prev < 100 ? prev + 0.5 : prev))
    }, 2000)
  }

  const handlePauseInterval = (): void => {
    intervalRef.current && clearInterval(intervalRef.current)
  }

  const handleCloseNotification = () => {
    setIsClose(true)
    setTimeout(() => deleteNotification(id), 200)
  }

  useEffect(() => {
    handleStartInterval()

    return () => {
      handlePauseInterval()
    }
  }, [])

  useEffect(() => {
    scaleX === 100 && handleCloseNotification()
  }, [ scaleX ])

  return (
    <div
      className={ `${ styles.item } ${ isClose ? styles.close : '' }` }
      onMouseEnter={ handlePauseInterval }
      onMouseLeave={ handleStartInterval }
    >
      <p>
        { isTypeSendProduct
          ? 'Ваш заказ успешно отправлен на обработку'
          : `Пицца "${ message }" добавлена в корзину` }
      </p>
      {
        !isTypeSendProduct &&
        <Basket
          button={
            <button className={ styles.cartButton }>
              Перейти в корзину
            </button>
          }
        />
      }
      <div
        className={ styles.bar }
        style={ { transform: `scaleX(${ scaleX }%)` } }
      />
      <button
        className={ styles.closeButton }
        onClick={ handleCloseNotification }
      >
        <CloseIcon />
      </button>
    </div>
  )
}

export default NotificationItem
