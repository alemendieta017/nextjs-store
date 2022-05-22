import React, { useState, useContext } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import menuIcon from '@icons/icon_menu.svg'
import Menu from 'components/Menu'
import shoppingCartIcon from '@icons/icon_shopping_cart.svg'
import logo from '@logos/logo_yard_sale.svg'
import MyOrder from 'containers/MyOrder'
import AppContext from 'context/appContext'
import styles from 'styles/Header.module.scss'

const Header = () => {
  const [toggle, setToggle] = useState(false)
  const [toggleOrders, setToggleOrder] = useState(false)
  const { state } = useContext(AppContext)

  const handleToggle = () => {
    setToggle(!toggle)
  }
  return (
    <nav className={styles.Nav}>
      <Image src={menuIcon} alt="menu" className={styles['menu-burguer']} />
      <div className={styles['navbar-left']}>
        <Link href="/">
          <Image src={logo} alt="logo" className={styles['nav-logo']} />
        </Link>
        <ul>
          <li>
            <Link href="/">Linkll</Link>
          </li>
          <li>
            <Link href="/">Clothes</Link>
          </li>
          <li>
            <Link href="/">Electronics</Link>
          </li>
          <li>
            <Link href="/">Furnitures</Link>
          </li>
          <li>
            <Link href="/">Toys</Link>
          </li>
          <li>
            <Link href="/">Others</Link>
          </li>
        </ul>
      </div>
      <div className={styles['navbar-right']}>
        <ul>
          <li className={styles['navbar-email']}>
            <span role="menu" onClick={handleToggle} onKeyDown={() => {}} tabIndex="0">
              mail@example.com
            </span>
          </li>
          <li className={styles['navbar-shopping-cart']}>
            <Image
              src={shoppingCartIcon}
              alt="shopping cart"
              onClick={() => {
                setToggleOrder(!toggleOrders)
              }}
              onKeyDown={() => {}}
            />
            {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
          </li>
        </ul>
      </div>
      {toggle && <Menu />}
      {toggleOrders && <MyOrder />}
    </nav>
  )
}

export default Header
