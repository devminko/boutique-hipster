import React, { } from 'react';
import { IoIosRemove, IoIosAdd, IoMdBackspace } from "react-icons/io";

import style from './cart-item.module.scss';

// *************************** CART ITEM COMPONENT *************************** //
const CartItem = ({ cartItem }) => {
  // 'cartItem' passed down as prop from CartPage.js
  const { id, item_name, item_color, item_price, item_description, item_info, item_images, item_url, item_quantity, onSale, } = cartItem;

  const onAddition = () => { console.log('Added 1') };
  const onSubtraction = () => { console.log('Subtract 1') };
  const onRemove = () => { console.log('Removed') };

  return (
    <div className={style.cartItem}>

      <div className={style.imageContainer}>
        <img src={item_images[0]} alt={`${item_name}_${item_color}_${id}`} className={style.itemImage} />
      </div>

      <div className={style.descriptionContainer}>
        <div className={style.descriptionHeader}>
          <h4 className={style.itemName}>{item_name}</h4>
          <p className={style.itemPrice}>${item_price}.00</p>
        </div>

        <p className={style.itemColor}>{item_color}</p>

        <div className={style.quantityContainer}>
          <div className={style.quantity}>
            <IoIosRemove onClick={onSubtraction} className={style.quantityIcon} />
            <span className={style.quantityNumber}>{1}</span>
            <IoIosAdd onClick={onAddition} className={style.quantityIcon} />
          </div>
          <div className={style.delete}>
            <IoMdBackspace onClick={onRemove} className={style.deleteIcon} />
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default CartItem;