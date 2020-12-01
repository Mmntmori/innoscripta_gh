import photo from "../../assets/images/pizza-svgrepo-com.svg";
import React from "react";
import './ShopCart.css'

const ShopCart = ({
                    cart,
                    deleteFromCart,
                    handleItemCount,
                    cleanCart,
                    makeOrder
                  }) => {
  let cartSum = 0;
  const cartElements = cart.map((e, i) => {
    cartSum += e.price * e.count;
    return (
      <div className='cart-item' id={e.id} key={e.id}>
        <div className='cart-item__image'>
          <img src={e.image ? e.image : photo} alt='pizza'/>
        </div>
        <div className='cart-item__block'>
          <div className='cart-item__info'>
            <h3 className='cart-item__title'>
              {e.title}
            </h3>
          </div>
          <div className='cart-item__controls'>
            <div className='cart-item__count'>
              <span>
                  Количество:
              </span>
              <input disabled value={e.count} className='cart-item__count-input' id='itemCount' type='text'/>
              <span>шт.</span>
            </div>
            <div className='cart-item__price'>
              <p>
                Стоимостью: &nbsp;
                {e.price * e.count} рублей
              </p>
            </div>
            <button type='button' onClick={() => {
              handleItemCount(-1, i)
            }}>-
            </button>
            <button type='button' onClick={() => {
              handleItemCount(1, i)
            }}>+
            </button>
            <button type='button' onClick={() => {
              deleteFromCart(i)
            }}>Удалить позицию
            </button>
          </div>
        </div>
      </div>
    )
  })

  return (
    <div className='shop-page__cart cart'>
      <div className='cart__list'>
        {cartElements}
      </div>
      <div>
        <p>
          Общая сумма заказа: &nbsp;
          <b>{cartSum}</b>
        </p>

      </div>
      <div className='cart__controls'>
        <button type='button' onClick={() => {
          makeOrder()
        }}>
          Оформить заказ
        </button>
        <button type='button' onClick={() => {
          cleanCart()
        }}>
          Очистить корзину
        </button>
      </div>
    </div>
  )
}

export default ShopCart