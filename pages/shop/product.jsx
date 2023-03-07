import React, { useContext } from 'react';
import {ShopContext } from "../../context/shop-context"
import './shop.css';
export const Product = (props) => {
    const {id, productName,price,productImage} = props.data;
    const { addToCart, cartItems} = useContext(ShopContext);

    const cartitemAmount = cartItems[id];
  return (
    <div className='product'>
      <img src={productImage} alt=''></img>
      <div className='description'>
        <p>
            <b>{productName}</b>
        </p>
        <p>${price}</p>
      </div>
      <div className='addToCartBttn' onClick={()=> addToCart(id)}>Add To Cart {cartitemAmount > 0 && <> ({cartitemAmount})</>} </div>
    </div>
  )
}


