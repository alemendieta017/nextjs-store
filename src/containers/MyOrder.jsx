import React, { useContext } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import OrderItem from '../components/OrderItem'
import styles from 'styles/MyOrder.module.scss'
import arrow from '@icons/flechita.svg'
import AppContext from '../context/appContext'

const MyOrder = () => {
  const { state } = useContext(AppContext)

  const sumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price
    const sum = state.cart.reduce(reducer, 0)
    return sum
  }

  return (
    <aside className={styles.MyOrder}>
      <div className="title-container">
        <Image src={arrow} alt="arrow" />
        <p className="title">My order</p>
      </div>
      <div className="my-order-content">
        {state.cart.map((product) => (
          <OrderItem product={product} key={`orderItem-${product.id}`} />
        ))}
        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>${sumTotal()}</p>
        </div>
        <Link href="/checkout" className="primary-button">
          Checkout
        </Link>
      </div>
    </aside>
  )
}

export default MyOrder
