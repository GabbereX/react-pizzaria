import React, { FC } from 'react'
import ModalRoot, { IModalProps } from '../ModalRoot/ModalRoot'

const Modal: FC<IModalProps> = ({ id, button, maxWidth = 500 }) => {
  const scrollWidth = window.innerWidth - document.body.offsetWidth + 'px'
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

  return (
    <ModalRoot
      id={id}
      button={button}
      maxWidth={maxWidth}
      onOpen={handleOpen}
      onClose={handleClose}
      scrollWidth={scrollWidth}>
      modal
    </ModalRoot>
  )
}

export default Modal
