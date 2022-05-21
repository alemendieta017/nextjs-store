import React, { useContext } from 'react'
import AppContext from '../context/appContext'
import styles from 'styles/OrderItem.module.scss'
import cart from '@icons/icon_close.png'

const OrderItem = ({ product }) => {
  const { removeFromCart } = useContext(AppContext)

  const handleRemove = (product) => {
    removeFromCart(product)
  }

  return (
    <div className={styles.OrderItem}>
      <figure>
        <img src={product.images[0]} alt={product.title} />
      </figure>
      <p>{product.title}</p>
      <p>{product.price}</p>
      <img
        src={cart}
        alt="close"
        onClick={() => {
          handleRemove(product)
        }}
      />
    </div>
  )
}

export default OrderItem
