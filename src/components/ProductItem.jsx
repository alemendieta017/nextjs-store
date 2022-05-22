import React, { useContext } from 'react'
import Image from 'next/image'
import addToCartImage from '@icons/bt_add_to_cart.svg'
import addedToCartImage from '@icons/bt_added_to_cart.svg'
import AppContext from 'context/appContext'
import styles from 'styles/ProductItem.module.scss'

const ProductItem = ({ product }) => {
  const { state, addToCart } = useContext(AppContext)

  const handleClick = (item) => {
    console.log('in cart: ', state.cart.includes(item))
    addToCart(item)
  }

  return (
    <div className={styles.ProductItem}>
      <Image src={product.images[0]} alt={product.title} width={240} height={240} />
      <div className={styles['product-info']}>
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure className={styles['more-clickable-area']}>
          {state.cart.includes(product) ? (
            <Image className={(styles.disabled, styles['add-to-cart-btn'])} src={addedToCartImage} alt="added to cart" onClick={() => handleClick(product)} onKeyDown={() => {}} />
          ) : (
            <Image className={(styles['add-to-cart-btn'], styles.pointer)} src={addToCartImage} alt="add to cart" onClick={() => handleClick(product)} onKeyDown={() => {}} />
          )}
        </figure>
      </div>
    </div>
  )
}

export default ProductItem
