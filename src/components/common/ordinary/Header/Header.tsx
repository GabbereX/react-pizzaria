import React, { FC } from 'react'

import NavigationContainer from '../../../containers/NavigationContainer/NavigationContainer'
import Authorization from '../../simple/Authorization/Authorization'
import Basket from '../../simple/Basket/Basket'
import CallRequest from '../../simple/CallRequest/CallRequest'
import Info from '../../simple/Info/Info'
import Logo from '../../simple/Logo/Logo'
import Telephone from '../../simple/Telephone/Telephone'

import styles from './Header.module.scss'

const Header: FC = () => {
  return (
    <header className={ styles.header }>
      <div className={ `${ styles.headerContainer } container` }>
        <div className={ styles.headerTop }>
          <Logo />
          <Info />
          <CallRequest />
          <Telephone />
        </div>
        <div className={ styles.headerBottom }>
          <NavigationContainer />
          <Authorization />
          <Basket />
        </div>
      </div>
    </header>
  )
}

export default Header
