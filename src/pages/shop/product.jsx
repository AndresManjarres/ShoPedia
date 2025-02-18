import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context';

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;

  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemsAmount = cartItems[id];

  return (

    <div className='product'>
      <img src={productImage} alt="Imagen de referencia" />
      <div className='description'>
        <p>
          <b>{productName}</b>
        </p>
        <p>
          <b>Price:</b> <span>${price}</span>
        </p>
      </div>
      <button className='addToCart' onClick={() => addToCart(id)}>Add to Cart {cartItemsAmount > 0 && <> ({cartItemsAmount})</>}</button>
    </div >
  )
};
