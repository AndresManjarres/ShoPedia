import React, { useContext } from 'react'
import { PRODUCTS } from '../../products'
import { ShopContext } from '../../context/shop-context';
import { CartItem } from './cart-item';
import './cart.css'
import { useNavigate } from 'react-router-dom'

export const Cart = () => {

  const { cartItems, getTotalAmount } = useContext(ShopContext);

  const totalAmount = getTotalAmount();

  const navigate = useNavigate();

  return (
    <div className='cart'>
      <div>
        <h1>Your products</h1>
      </div>
      <div className='cartItems'>
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />
          }
        })}
      </div>
      {totalAmount > 0 ? (<div className='checkout'>
        <p className='price'>Subtotal: $ {totalAmount}</p>
        <button onClick={() => navigate("/")}>Continue Shopping</button>
        <button>Checkout</button>
      </div>) : (<h1>Your cart is emty, <br />buy something you like! </h1>)}

    </div>
  )
}
