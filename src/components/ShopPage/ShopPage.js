import React from 'react';
import './ShopPage.css'
import {useDispatch, useSelector} from 'react-redux';
// import {addToCart, deleteFromCart, hanbldeItemCount, cleanCart, makeOrder} from '../../store/shopReducer'
import ShopList from "../ShopList/ShopList";
import ShopCart from "../ShopCart/ShopCart";

function ShopPage() {
  const shopList = useSelector(state => state.shop.list)
  const cart = useSelector(state => state.shop.cart)
  const dispatch = useDispatch()
  const addToCart = (item) => {
    // dispatch(addToCart(item))
  }
  const deleteFromCart = (index) => {
    // dispatch(deleteFromCart(index))
  }

  const handleItemCount = (count, index) => {
    // dispatch(handleItemCount(count, index))
  }

  const cleanCart = () => {
    // dispatch(cleanCart())
  }

  const makeOrder = () => {
    // dispatch(makeOrder())
  }

  return (
    <div className='shop-page'>
      <div className='wrapper'>
        <div className="row">
          <ShopList
            shopList={shopList}
            addToCart={addToCart}
          />
          <ShopCart
            cart={cart}
            deleteFromCart={deleteFromCart}
            handleItemCount={handleItemCount}
            cleanCart={cleanCart}
            makeOrder={makeOrder}
          />
        </div>
      </div>
    </div>
  )
}

export default ShopPage