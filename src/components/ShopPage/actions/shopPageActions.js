import {createActions} from "redux-actions";


export const {
  getShopItems,
  addToCart,
  deleteFromCart,
  handleItemCount,
  cleanCart,
  makeOrder,
  setCart,
  getCart,
} = createActions(
  "GET_SHOP_ITEMS",
  "ADD_TO_CART",
  "DELETE_FROM_CART",
  "HANDLE_ITEM_COUNT",
  "CLEAN_CART",
  "MAKE_ORDER",
  "GET_SHOP_ITEMS",
  "SET_CART",
  "GET_CART"
)