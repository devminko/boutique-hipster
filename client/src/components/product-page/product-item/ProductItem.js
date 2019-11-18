import React, { useState } from 'react';
import { Gallery, GalleryImage } from 'react-gesture-gallery';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import Button from '../../../components-ui/button/Button';

import style from './product-item.module.scss';

// *************************** PRODUCT ITEM COMPONENT *************************** //
const ProductItem = ({ exclusive }) => {
  // 'exclusive' passed as prop from ProductPage to render specific product details
  const { id, item_name, item_color, item_price, item_description, item_info, item_images, item_url } = exclusive;

  const [ index, setIndex ] = useState(0)

  return (
    <div className={style.productItem}>
      <div className={style.imageContainer}>
        <Gallery
          className={style.galleryContainer}
          style={{}}
          index={index}
          onRequestChange={i => {
            setIndex(i);
          }}
          enableIndicators={false}
          enableControls={false}
        >
          {item_images.map(image => (
            <GalleryImage
              key={`${item_name}_${item_color}_${id}`}
              objectFit='cover' 
              src={image}
            />
          ))}
        </Gallery>
        <span className={style.imageIndex}>
          <FaArrowLeft className={style.icon} />
          {index + 1} of {item_images.length}
          <FaArrowRight className={style.icon} />
        </span>
      </div>

      <div className={style.productMain}>
        <p className={style.productName}>{item_name}</p>
        <p className={style.productPrice}>${item_price}.00</p>
      </div>

        <p>{item_color}</p>
        <p>{item_url}</p>
        <p>{id}</p>
        <p>{item_description}</p>
      
      <div className={style.productTertiary}>
        <p className={style.productInfo}>Product Info</p>
        <p>Fabric: {item_info[0]}</p>
        <p>Fit: {item_info[1]}</p>
      </div>

    </div>
  )
};

export default ProductItem