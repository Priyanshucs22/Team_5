import React, { useContext } from 'react'
import './Cart.css'
const cart = () => {
  const { cartItems,food_list,removefromcart,getTotalCartAmount}=useContext(StoreContext);
  return (
    <div className='cart'>
      <div className='cart-items'>
        <div className='cart-items-title'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
      </div>
      
    </div>
  )
}

export default cart
