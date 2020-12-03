import React, {useEffect} from 'react';
import './ShopPage.css'
import {useDispatch, useSelector} from 'react-redux';
import ShopList from "../ShopList/ShopList";
import ShopCart from "../ShopCart/ShopCart";
import {
  addToCart,
  cleanCart,
  deleteFromCart,
  getCart,
  getShopItems,
  handleItemCount,
  makeOrder
} from "./actions/shopPageActions";

function ShopPage() {
  const shopList = useSelector(state => state.shop.list)
  const cart = useSelector(state => state.shop.cart)
  const dispatch = useDispatch()

  const addItemToCart = (item) => {
    dispatch(addToCart(item))
  }
  const deleteItemFromCart = (index) => {
    dispatch(deleteFromCart(index))
  }

  const handleCartItemCount = (count, id) => {
    dispatch(handleItemCount({count, id}))
  }

  const cleanFullCart = () => {
    dispatch(cleanCart())
  }

  const handleMakeOrder = () => {
    dispatch(makeOrder())
  }

  useEffect(() => {
    dispatch(getShopItems())
    dispatch(getCart())
  }, [])

  return (
    <div className='shop-page'>
      <div className='wrapper'>
        <div className="row">
          <ShopList
            shopList={shopList}
            addToCart={addItemToCart}
          />
          <ShopCart
            cart={cart}
            deleteFromCart={deleteItemFromCart}
            handleItemCount={handleCartItemCount}
            cleanCart={cleanFullCart}
            makeOrder={handleMakeOrder}
          />
        </div>
      </div>
    </div>
  )
}

export default ShopPage