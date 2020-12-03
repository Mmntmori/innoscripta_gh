import {put, takeEvery} from 'redux-saga/effects';
import {
  addToCart,
  cleanCart,
  deleteFromCart,
  getCart,
  handleItemCount,
  makeOrder,
  setCart
} from "../actions/shopPageActions";
import LocalStorageService from "../../../services/LocalStorageService"; // , takeEvery

const StorageService = LocalStorageService()

function* addToCartSaga(action) {
  const {payload} = action;
  const cart = StorageService.getItem('cart')
  let cartItem = {
    id: payload.id,
    title: payload.title,
    image: payload.image,
    count: 1,
    price: payload.price
  }


  if (cart && cart.length > 0) {
    const item = cart.find(item => item.id === cartItem.id)
    if (!item) {
      cart.push(cartItem)
    } else {
      cart.forEach((e) => {
        if (e.id === cartItem.id) {
          e.count++
        }
      })
    }
  }

  if (!cart || cart.length < 1) {
    StorageService.setItem('cart', [cartItem])
    yield put(setCart([cartItem]))
  } else {
    StorageService.setItem('cart', [...cart])
    yield put(setCart([...cart]))
  }
}

function* getCartSaga() {
  const cart = StorageService.getItem('cart')
  yield put(setCart(cart))
}

function* deleteFromCartSaga(action) {
  const id = action.payload;
  const cart = StorageService.getItem('cart')
  //Простая манипуляция с массивом через splice
  cart.splice(id, 1)
  StorageService.setItem('cart', [...cart])
  yield put(setCart([...cart]))
}

function* cleanCartSaga() {
  StorageService.removeItem('cart')
  yield put(setCart([]))
}

function* handleItemCountSaga(action) {
  const {count, id} = action.payload;
  const cart = StorageService.getItem('cart')
  const currentItem = cart.find(item => item.id === id)

  if (currentItem) {
    if (currentItem.count >= 2 || count > 0) {
      currentItem.count += count
      console.log(cart)
      StorageService.setItem('cart', [...cart])
      yield put(setCart([...cart]))
    } else {
      alert('Количество пиццы в заказе должно быть минимум 1 шт. Для удаления позиции из корзины воспользуйтесь кнопкой "Удалить позицию"')
    }
  } else {
    alert('Такой позиции нет в корзине')
  }
}

function* makeOrderSaga() {
  const cart = StorageService.getItem('cart')
  if (cart && cart.length > 0) {
    alert(`Вы сделали заказ из ${cart.length} пицц. Вот вот ваш заказ: 
      ${cart.map((e) => (
        `- Пицца ${e.title} количестве ${e.count} шт.`
      ))} 
    На сервер улетит массив корзины со всеми товарами. Там будут содержаться id, количество, цена.`)
  } else {
    alert('Ваша корзина пуста!')
  }
}


export function* shopPageWatcher() {
  yield takeEvery(getCart.toString(), getCartSaga)
  yield takeEvery(addToCart.toString(), addToCartSaga);
  yield takeEvery(deleteFromCart.toString(), deleteFromCartSaga);
  yield takeEvery(cleanCart.toString(), cleanCartSaga);
  yield takeEvery(makeOrder.toString(), makeOrderSaga);
  yield takeEvery(handleItemCount.toString(), handleItemCountSaga);
}
