import ReactDOM from 'react-dom'
import React, { FC, ReactNode, useEffect, useRef } from 'react'
import { CSSTransition } from 'react-transition-group'

import CloseIcon from '../icons/CloseIcon/CloseIcon'

import styles from './Modal.module.scss'
import { getScrollWidth } from '../../../../core/utils/scrollWidth'
import { useAppDispatch } from '../../../../core/hooks/redux'

interface IModalRootProps {
  id: string
  children: ReactNode
  isModalOpen: boolean
  setIsModalOpen: (isModalOpen: boolean) => void
  maxWidth?: number
  onOpen?: () => void
  onClose?: () => void
}

let scrollWidth: string = getScrollWidth()

const ModalRoot: FC<IModalRootProps> = ({
  id,
  isModalOpen,
  setIsModalOpen,
  children,
  maxWidth = 500,
  onOpen,
  onClose
}) => {
  const modalWrapperRef = useRef<HTMLDivElement>(null)
  const closeModalButtonRef = useRef<HTMLButtonElement>(null)

  const { deleteSurplusNotifications } = useAppDispatch()

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

  const handleClick = (e: MouseEvent) =>
    e.target === modalWrapperRef.current ? handleClose() : false

  useEffect(() => {
    scrollWidth = getScrollWidth()

    document.addEventListener('mousedown', handleClick)
  }, [])

  useEffect(() => {
    isModalOpen ? handleOpen() : handleClose()
  }, [ isModalOpen ])

  const node = document.getElementById('modal')

  if (!node) return null

  return ReactDOM.createPortal(
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
      onExited={ () => {
        document.removeEventListener('mousedown', handleClick)
        deleteSurplusNotifications()
      } }
      unmountOnExit
    >
      <div
        id={ id }
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
    </CSSTransition>,
    node
  )
}

export default ModalRoot
