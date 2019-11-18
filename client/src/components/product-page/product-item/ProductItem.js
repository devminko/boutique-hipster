import React, { } from 'react';

import Button from '../../../components-ui/button/Button';

import style from './product-item.module.scss';

// *************************** PRODUCT ITEM COMPONENT *************************** //
const ProductItem = ({ exclusive }) => {
  // 'exclusive' passed as prop from ProductPage to render specific product details
  const { id, item_name, item_color, item_price, item_images, item_url } = exclusive;

  return (
    <div className={style.productItem}>
      <img src={item_images[0]} alt={`${item_name}_${item_color}_${id}`} className={style.image} />
      <img src={item_images[1]} alt={`${item_name}_${item_color}_${id}`} className={style.image} />
      {
        item_images[2] && <img src={item_images[2]} alt={`${item_name}_${item_color}_${id}`} className={style.image} />
      }
      <p>{item_url}</p>
      <p>{id}</p>
      <p>{item_name}</p>
      <p>{item_color}</p>
      <p>${item_price}.00</p>
    </div>
  )
};

export default ProductItem