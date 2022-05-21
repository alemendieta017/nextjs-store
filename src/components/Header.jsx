import React, { useState, useContext } from 'react'
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
      <img src={menuIcon} alt="menu" className="menu" />
      <div className="navbar-left">
        <img src={logo} alt="logo" className="nav-logo" />
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={handleToggle}>
            mail@example.com
          </li>
          <li
            className="navbar-shopping-cart"
            onClick={() => {
              setToggleOrder(!toggleOrders)
            }}
          >
            <img src={shoppingCartIcon} alt="shopping cart" />
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
