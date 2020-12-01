import photo from "../../assets/images/pizza-svgrepo-com.svg";
import React from "react";

function ShopList({shopList, addToCart}) {
  let listElements = shopList.map((e) => {
    return (
      <div className='shop-page__item shop-item' key={e.id} id={e.id}>
        <div className='shop-item__photo'>
          <img src={e.image ? e.image : photo} alt={e.title}/>
        </div>
        <div className='shop-item__info'>
          <h3>
            {e.title}
          </h3>
          <p>
            {e.description}
          </p>
          <p>
            Цена: <b>{e.price}</b>
          </p>
        </div>
        <div className='shop-item__controls'>
          <div className='cart-item__controls'>
            {/* <div className='cart-item__amount'>
                            <button type='button'>-</button>
                            <input placeholder='Количество' type='text' />
                            <button type='button'>+</button>
                        </div> */}
            <button type='button' onClick={() => {
              addToCart(e)
            }}>Добавить в корзину
            </button>
          </div>
        </div>
      </div>
    )
  });
  return (
    <div className='shop-page__list'>
      {listElements}
    </div>
  )
}

export default ShopList
