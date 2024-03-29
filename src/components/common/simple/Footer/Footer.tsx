import { FC } from 'react'
import styles from './Footer.module.scss'

const Footer: FC = () => {
  return (
    <footer
      className={ styles.footer }
      id="footer">
      <div className={ `${ styles.footerContainer } container` }>
        © Pizzaria | { new Date().getFullYear() } Все права защищены
      </div>
    </footer>
  )
}

export default Footer
