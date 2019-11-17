import React, { } from 'react';

import Button from '../../../components-ui/button/Button';

import style from './exclusives-item.module.scss';

// *************************** EXCLUSIVES ITEM COMPONENT *************************** //
const ExclusivesItem = ({ exclusive }) => {
  // 'exclusive' passed down as prop from ExclusivesItems.js
  const { item_name, item_color, item_price, item_image, onSale } = exclusive;

  return (
    <div className={style.exclusivesItem}>
      
      {/* ITEM CONTAINER */}
      <div className={style.itemContainer}>
        <div className={style.imageContainer}>
          <img src={item_image} alt={`${item_name}_${item_color}`} className={style.itemImage} />
        </div>
        <div className={style.buttonContainer}>
          <Button item>Add to Cart - ${item_price}.00</Button>
        </div>
      </div>  

      {/* PRICE CONTAINER */}
      <div className={style.priceContainer}>
        <p className={style.itemName}>
          {item_name} - {item_color}
        </p>
        <p className={style.itemPrice}>
          ${item_price}.00
        </p>
      </div>

    </div>
  )
};

export default ExclusivesItem;