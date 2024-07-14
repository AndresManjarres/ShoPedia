import React from 'react'
import { PRODUCTS } from '../../products.js'
import { Product } from './product'
import './shop.css'

export const Shop = () => {
  return (
    <div className='shop'>
      <div className='shopTile'>
        <h1>Shopedia</h1>
      </div>
      <div className='products'>
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  )
}
