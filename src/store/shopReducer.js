import {data} from './data'

const ADD_TO_CART = 'ADD_TO_CART',
  DELETE_FROM_CART = 'DELETE_FROM_CART',
  HANDLER_ITEM_COUNT = 'HANDLER_ITEM_COUNT',
  CLEAN_CART = 'CLEAN_CART',
  MAKE_ORDER = 'MAKE_ORDER'


const shopReducer = (state = {
  list: [...data.shopList],
  cart: []
}, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      //Сразу делаем глубокую копию стейта с нужным нам массивом данных. И формируем объект товара в корзине.
      let stateCopy = {...state, cart: [...state.cart]},
        cartItem = {
          id: action.item.id,
          title: action.item.title,
          image: action.item.image,
          count: 1,
          price: action.item.price
        },
        // Флаг индикатор. Нужен чтобы знать есть ли приходящий товар в корзине или нет
        flag = false;

      //Проверяем корзину на наличие такого же товара, чтобы
      stateCopy.cart.forEach((e) => {
        if (e.id === cartItem.id) {
          e.count++
          flag = true;
        }
      })
      if (!flag) {
        stateCopy.cart.push(cartItem);
      }

      return stateCopy
    }
    case DELETE_FROM_CART: {
      //Простая манипуляция с массивом через splice
      let stateCopy = {...state, cart: [...state.cart]}

      stateCopy.cart.splice(action.index, 1)

      return stateCopy
    }
    case HANDLER_ITEM_COUNT: {
      let stateCopy = {...state, cart: [...state.cart]}
      if (stateCopy.cart[action.index].count >= 2 || action.count > 0) {
        stateCopy.cart[action.index].count += action.count;
      } else {
        alert('Количество пиццы в заказе должно быть минимум 1 шт. Для удаления позиции из корзины воспользуйтесь кнопкой "Удалить позицию"')
      }

      return stateCopy
    }
    case CLEAN_CART: {
      if (state.cart.length !== 0) {
        return ({...state, cart: []})
      } else {
        alert('Корзина уже пуста')
        return state
      }
    }

    case MAKE_ORDER: {
      if (state.cart.length !== 0) {

        alert(`Вы сделали заказ из ${state.cart.length} пицц. Вот вот ваш заказ:
                ${state.cart.map((e) => {
          return (
            `- Пицца ${e.title} количестве ${e.count} шт.`
          )
        })} 
                    На сервер улетит массив корзины со всеми товарами. Там будут содержаться id, количество, цена.`)
      } else {
        alert('Ваша корзина пуста!')
      }
      return state
    }

    default: {
      return state
    }

  }
}


export default shopReducer