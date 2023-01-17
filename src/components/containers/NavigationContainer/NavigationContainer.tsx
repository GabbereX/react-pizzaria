import React, { FC } from 'react'
import styles from './NavigationContainer.module.scss'
import Navigation from '../../common/simple/Navigation/Navigation'
import { Link } from 'react-router-dom'
import { linksList } from '../../../core/constants/navigationList'
import { usePathIndex } from '../../../core/hooks/usePathIndex'

const NavigationContainer: FC = () => {
  const [ pathIndex ] = usePathIndex()

  const renderLinks = () => {
    return linksList.map(({ path, text }, index) => (
      <li key={ index } className={ styles.item }>
        <Link
          to={ path }
          className={ styles.link }
          style={ { color: pathIndex === index ? '#fe841a' : '' } }
        >
          { text }
        </Link>
      </li>
    ))
  }

  return <Navigation renderLinks={ renderLinks }/>
}

export default NavigationContainer
