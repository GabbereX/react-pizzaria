import React, { FC, useRef } from 'react'
import styles from './Shop.module.scss'
import Filter from '../Filter/Filter'
import Sort from '../Sort/Sort'
import Search from '../Search/Search'
import Goods from '../../ordinary/Goods/Goods'
import Pagination from '../Pagination/Pagination'

const Shop: FC = () => {
  const shopSelectionRef = useRef<HTMLAnchorElement>(null)

  return (
    <section
      ref={shopSelectionRef}
      className={`${styles.section} container`}>
      <div className={`${styles.container}`}>
        <h2 className='title'>Выбрать пиццу</h2>
        <div className={styles.shopSortAndFilter}>
          <Filter />
          <Sort />
        </div>
        <Search />
        <Goods shopSelectionRef={shopSelectionRef} />
        <Pagination />
      </div>
    </section>
  )
}

export default Shop
