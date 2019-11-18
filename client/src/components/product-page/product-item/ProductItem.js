import React, { useState } from 'react';
import { Gallery, GalleryImage } from 'react-gesture-gallery';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IoIosRemove, IoIosAdd } from "react-icons/io";

import Button from '../../../components-ui/button/Button';

import style from './product-item.module.scss';

// *************************** PRODUCT ITEM COMPONENT *************************** //
const ProductItem = ({ exclusive }) => {
  // 'exclusive' passed as prop from ProductPage to render specific product details
  const { id, item_name, item_color, item_price, item_description, item_info, item_images, item_url } = exclusive;

  const [ index, setIndex ] = useState(0);

  const onAddition = () => { console.log('Added 1') };
  const onSubtraction = () => { console.log('Subtract 1') };

  return (
    <div className={style.productItem}>

      {/* IMAGE CONTAINER */}
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

      {/* DESCRIPTION CONTAINER */}
      <div className={style.descriptionContainer}>
        <div className={style.productMain}>
          <p className={style.productName}>{item_name}</p>
          <p className={style.productPrice}>${item_price}.00</p>
        </div>

        <div className={style.productSecondary}>
          <p className={style.productColor}>{item_color}</p>
          <p className={style.productDescription}>{item_description}</p>
        </div>

        <div className={style.productButtons}>
          <div className={style.productQuantity}>
            <IoIosRemove onClick={onSubtraction} className={style.quantityIcon} />
            {1}
            <IoIosAdd onClick={onAddition} className={style.quantityIcon} />
          </div>
          <Button product>Add to Cart</Button>
        </div>
        
        <div className={style.productTertiary}>
          <p className={style.productInfo}>Product Info</p>
          <p className={style.fabric}>Fabric: {item_info[0]}</p>
          <p className={style.fit}>Fit: {item_info[1]}</p>
        </div>
      </div>

    </div>
  )
};

export default ProductItem