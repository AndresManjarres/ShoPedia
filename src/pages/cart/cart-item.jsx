import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context';

export const CartItem = (props) => {

  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);


  return (
    <div className='cartItem'>
      <img src={productImage} alt="Imagen de referencia" />

      <div className='description'>
        <p>
          <b>{productName}</b>
        </p>
        <p>
          <b>Price:</b> ${price}
        </p>
        <div className='countHandler'>
          <button className='rest' onClick={() => removeFromCart(id)} >-</button>
          <input type="text" value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)} />
          <button className="sum" onClick={() => addToCart(id)}>+</button>
        </div>
      </div>

    </div>
  )
}
