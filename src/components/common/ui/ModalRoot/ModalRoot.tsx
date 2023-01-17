import React, { FC, ReactNode, useEffect, useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group'

import CloseIcon from '../icons/CloseIcon/CloseIcon'

import styles from './Modal.module.scss'
import { getScrollWidth } from '../../../../core/utils/scrollWidth'

interface IModalRootProps {
  id: string
  button: ReactNode
  children: ReactNode
  maxWidth?: number
  onOpen?: () => void
  onClose?: () => void
  isModalClose?: boolean
}

let scrollWidth: string = getScrollWidth()

const ModalRoot: FC<IModalRootProps> = ({
  id,
  button,
  children,
  maxWidth = 500,
  onOpen,
  onClose,
  isModalClose = false
}) => {
  const modalWrapperRef = useRef<HTMLDivElement>(null)
  const closeModalButtonRef = useRef<HTMLButtonElement>(null)

  const [ isModalOpen, setIsModalOpen ] = useState<boolean>(false)

  const handleOpen = (): void => {
    setIsModalOpen(true)

    document.body.style.paddingRight = scrollWidth
    document.body.style.overflowY = 'hidden'

    onOpen?.()
  }

  const handleClose = (): void => {
    setIsModalOpen(false)

    document.body.style.paddingRight = ''
    document.body.style.overflowY = ''

    modalWrapperRef.current &&
    (modalWrapperRef.current.style.paddingLeft = scrollWidth)

    onClose?.()
  }

  useEffect(() => {
    const handleClick = (e: MouseEvent) =>
      e.target === modalWrapperRef.current ? handleClose() : false

    document.addEventListener('mousedown', handleClick)

    return () => {
      document.removeEventListener('mousedown', handleClick)
    }
  }, [])

  useEffect(() => {
    isModalClose && handleClose()
  }, [ isModalClose ])

  useEffect(() => {
    scrollWidth = getScrollWidth()
  }, [])

  return (
    <div id={ id }>
      <div onClick={ handleOpen }>{ button }</div>

      <CSSTransition
        nodeRef={ modalWrapperRef }
        in={ isModalOpen }
        timeout={ 300 }
        classNames={ {
          enter: styles.modal_enter,
          enterActive: styles.modal_enter_active,
          exit: styles.modal_exit,
          exitActive: styles.modal_exit_active
        } }
        unmountOnExit
      >
        <div
          ref={ modalWrapperRef }
          className={ styles.modal_wrapper }
        >
          <div
            className={ styles.modal_content }
            style={ { maxWidth } }
          >
            { children }
            <button
              ref={ closeModalButtonRef }
              className={ styles.modal_close }
              onClick={ handleClose }
            >
              <CloseIcon />
            </button>
          </div>
        </div>
      </CSSTransition>
    </div>
  )
}

export default ModalRoot
