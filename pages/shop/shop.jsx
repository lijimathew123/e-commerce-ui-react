import React from 'react'
import { PRODUCTS } from '../../products';
import {Product } from './product';
import './shop.css';
export const Shop = () => {
  return (
    <div className='shop'>
        <div className='shopTitle'>
            <h3>LJ Shops</h3>
        </div>
        <div className='products'>
            { PRODUCTS.map((product) => (
              <Product data={product}></Product>
            )) }
        </div>
      
    </div>
  )
}

