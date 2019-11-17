import React, { } from 'react';

import style from './product-item.module.scss';

// *************************** PRODUCT ITEM COMPONENT *************************** //
const ProductItem = ({ exclusive }) => {
  // 'exclusive' passed as prop from ProductPage to render specific product details

  const { id, item_name, item_color, item_price, item_images, item_url } = exclusive;

  return (
    <div key={id}>
      <p>{item_url}</p>
      <p>{id}</p>
      <p>{item_name}</p>
      <p>{item_color}</p>
    </div>
  )
};

export default ProductItem;