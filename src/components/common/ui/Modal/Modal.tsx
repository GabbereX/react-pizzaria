import React, { FC, ReactNode, useEffect, useState } from 'react'
import ModalRoot from '../ModalRoot/ModalRoot'
import styles from './Modal.module.scss'

interface IModalProps {
  id: string
  button: ReactNode
  children: ReactNode
  maxWidth?: number
  title?: string
  footerChildren?: ReactNode
  isModalClose?: boolean
  setIsModalClose?: (isModalClose: boolean) => void
}

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
  const [ scrollWidth ] = useState(window.innerWidth - document.body.offsetWidth + 'px')

  const footer = document.getElementById('footer')

  const handleOpen = (): void => {
    if (footer) {
      footer.style.marginRight = '-' + scrollWidth
      footer.style.paddingRight = scrollWidth
    }
  }

  const handleClose = (): void => {
    if (footer) {
      footer.style.marginRight = ''
      footer.style.paddingRight = ''
    }
  }

  useEffect(() => {
    return () => setIsModalClose?.(false)
  }, [ isModalClose ])

  return (
    <ModalRoot
      id={ id }
      button={ button }
      maxWidth={ maxWidth }
      onOpen={ handleOpen }
      onClose={ handleClose }
      scrollWidth={ scrollWidth }
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
        style={ { padding: `${ title ? '15px' : '0' } 15px ${ footer ? '15px' : '0' }` } }
      >{ children }</div>

      { footer &&
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
