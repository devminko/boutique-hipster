import React, { } from 'react';
import { connect } from 'react-redux';

import { updateProduct } from '../../../redux/admin/admin.actions';

import FormInput from '../../../components-ui/form-input/FormInput';
import Button from '../../../components-ui/button/Button';

import style from './edit-item.module.scss';

// *************************** EDIT ITEM COMPONENT *************************** //
const EditItem = ({ product, updateProduct }) => {
  // 'product' passed down as prop from EditPage.js
  const { id, product_category, product_name, product_color, product_price, product_description, product_info, product_images, product_url, edit_url, product_quantity, on_sale, sale_discount } = product;

  const onChange = (e) => {
    console.log('Changed');
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(id);
  };

  return (
    <div className={style.editItem}>

      <form onSubmit={onSubmit} className={style.form}>
        <h2 className={style.title}>Product Category</h2>
        <FormInput 
          value={product_category}
          onChange={onChange}
        />

        <h2 className={style.title}>Product Name</h2>
        <FormInput 
          value={product_name}
          onChange={onChange}
        />

        <h2 className={style.title}>Product Color</h2>
        <FormInput 
          value={product_color}
          onChange={onChange}
        />

        <h2 className={style.title}>Product Price</h2>
        <FormInput 
          value={product_price}
          onChange={onChange}
        />
        
        <h2 className={style.title}>Product Description</h2>
        <textarea 
          value={product_description}
          onChange={onChange}
        />

        <h2 className={style.title}>Product Info</h2>
        <textarea 
          value={product_info}
          onChange={onChange}
        />

        <h2 className={style.title}>Product Images</h2>
        <textarea
          value={product_images}
          onChange={onChange}
        />

        <h2 className={style.title}>Product URL</h2>
        <FormInput 
          value={product_url}
          onChange={onChange}
        />

        <h2 className={style.title}>Edit URL</h2>
        <FormInput 
          value={edit_url}
          onChange={onChange}
        />

        <h2 className={style.title}>Product Quantity</h2>
        <FormInput 
          value={product_quantity}
          onChange={onChange}
        />

        <h2 className={style.title}>On Sale</h2>
        <FormInput 
          value={on_sale}
          onChange={onChange}
        />

        <h2 className={style.title}>Sale Discounts</h2>
        <FormInput 
          value={sale_discount}
          onChange={onChange}
        />
        <Button>Edit Product</Button>
      </form>

    </div>
  )
};

// REDUX
const mapDispatchToProps = (dispatch) => ({
  updateProduct: (id, data) => dispatch(updateProduct(id, data)),
})

export default connect(null, mapDispatchToProps)(EditItem);