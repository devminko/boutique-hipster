import React, { } from 'react';
import { withRouter } from 'react-router-dom';

import style from './shuffled-items.module.scss';

// *************************** SHUFFLED ITEMS COMPONENT *************************** //
const ShuffledItems = ({ product, history }) => {
  // 'product' passed down as prop from ProductFooter.js
  const { id, product_category, product_name, product_color, product_price, product_description, product_info, product_images, product_url, product_quantity, on_sale, sale_discount } = product;

  const onClick = () => {
    history.push(product_url);
  };

  return (
    <div onClick={onClick} className={style.shuffledItems}>
      <img src={product_images[0]} alt={`${product_name}_${product_color}_${id}`} className={style.image} />
      <p className={style.productName}>{product_name}</p>
      <p className={style.productPrice}>${product_price}.00</p>
    </div>
  )
};

export default withRouter(ShuffledItems);