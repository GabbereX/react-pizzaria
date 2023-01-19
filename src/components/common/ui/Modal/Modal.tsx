import React, { FC, ReactNode, useEffect } from 'react'
import ModalRoot from '../ModalRoot/ModalRoot'
import styles from './Modal.module.scss'
import { getScrollWidth } from '../../../../core/utils/scrollWidth'

interface IModalProps {
  id: string
  button: ReactNode
  children: ReactNode
  maxWidth?: number
  title?: string
  footerChildren?: ReactNode
  isModalClose?: boolean
  setIsModalClose?: (isModalClose: boolean) => void,
}

let scrollWidth: string = getScrollWidth()

const Modal: FC<IModalProps> = ({
  id,
  children,
  button,
  maxWidth = 500,
  title,
  footerChildren,
  isModalClose = false,
  setIsModalClose
}) => {
  const footer = document.getElementById('footer')
  const notification = document.getElementById('notification-container')

  const footerPadding =
    `${ title ? '15px' : '0' } 15px ${ footerChildren ? '15px' : '0' }`

  const handleOpen = (): void => {
    if (footer) {
      footer.style.marginRight = '-' + scrollWidth
      footer.style.paddingRight = scrollWidth
    }

    if (notification) {
      notification.style.marginRight = scrollWidth
    }
  }

  const handleClose = (): void => {
    if (footer) {
      footer.style.marginRight = ''
      footer.style.paddingRight = ''
    }

    if (notification) {
      notification.style.marginRight = ''
    }
  }

  useEffect(() => {
    return () => setIsModalClose?.(false)
  }, [ isModalClose ])

  useEffect(() => {
    scrollWidth = getScrollWidth()
  }, [])

  return (
    <ModalRoot
      id={ id }
      button={ button }
      maxWidth={ maxWidth }
      onOpen={ handleOpen }
      onClose={ handleClose }
      isModalClose={ isModalClose }
    >
      {
        title &&
        <div className={ styles.title_wrapper }>
          <h1 className={ styles.title }>{ title }</h1>
        </div>
      }

      <div
        className={ styles.content_wrapper }
        style={ { padding: footerPadding } }
      >
        { children }
      </div>

      { footerChildren &&
        <div className={ styles.footer_wrapper }>
          <div className={ styles.footer_container }>
            { footerChildren }
          </div>
        </div>
      }
    </ModalRoot>
  )
}

export default Modal
