import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Gallery, GalleryImage } from 'react-gesture-gallery';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IoIosRemove, IoIosAdd } from "react-icons/io";

import { addItem, removeItem } from '../../../redux/auth/auth.actions';

import Button from '../../../components-ui/button/Button';

import style from './product-item.module.scss';

// *************************** PRODUCT ITEM COMPONENT *************************** //
const ProductItem = ({ product, addItem }) => {
  // 'product' passed as prop from ProductPage to render specific product details
  const { id, product_category, product_name, product_color, product_price, product_description, product_info, product_images, product_url, on_sale, sale_discount } = product;

  // Index state used for Gallery
  const [ index, setIndex ] = useState(0);

  const onAddition = () => { console.log('Added 1') };
  const onSubtraction = () => { console.log('Subtract 1') };
  const onAddToCart = () => {
    addItem(product);
  };

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
          {product_images.map(image => (
            <GalleryImage
              key={`${product_name}_${product_color}_${id}`}
              objectFit='cover' 
              src={image}
            />
          ))}
        </Gallery>
        <span className={style.imageIndex}>
          <FaArrowLeft className={style.icon} />
          {index + 1} of {product_images.length}
          <FaArrowRight className={style.icon} />
        </span>
      </div>

      {/* DESCRIPTION CONTAINER */}
      <div className={style.descriptionContainer}>
        <div className={style.productMain}>
          <p className={style.productName}>{product_name}</p>
          <p className={style.productPrice}>${product_price}.00</p>
        </div>

        <div className={style.productSecondary}>
          <p className={style.productColor}>{product_color}</p>
          <p className={style.productDescription}>{product_description}</p>
        </div>

        <div className={style.productButtons}>
          <div className={style.productQuantity}>
            <IoIosRemove onClick={onSubtraction} className={style.quantityIcon} />
            {1}
            <IoIosAdd onClick={onAddition} className={style.quantityIcon} />
          </div>
          <Button onClick={onAddToCart} product>Add to Cart</Button>
        </div>
        
        <div className={style.productTertiary}>
          <p className={style.productInfo}>Product Info</p>
          <p className={style.fabric}>Fabric: {product_info[0]}</p>
          <p className={style.fit}>Fit: {product_info[1]}</p>
        </div>
      </div>

    </div>
  )
};

// REDUX
const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(ProductItem);