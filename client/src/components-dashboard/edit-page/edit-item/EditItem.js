import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { updateProduct } from '../../../redux/admin/admin.actions';

import FormInput from '../../../components-ui/form-input/FormInput';
import Button from '../../../components-ui/button/Button';

import style from './edit-item.module.scss';

// *************************** EDIT ITEM COMPONENT *************************** //
const EditItem = ({ product, updateProduct }) => {
  // 'product' passed down as prop from EditPage.js
  const { id, product_category, product_name, product_color, product_price, product_description, product_info, product_images, product_url, edit_url, product_quantity, on_sale, sale_discount } = product;

  const [ formData, setFormData ] = useState({
    product_category: product_category,
    product_name: product_name,
    product_color: product_color,
    product_price: product_price,
    product_description: product_description,
    product_info: product_info,
    product_images: product_images,
    product_url: product_url,
    edit_url: edit_url,
    product_quantity: product_quantity,
    on_sale: on_sale,
    sale_discount: sale_discount,
  });

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await updateProduct(id, formData);
  };

  return (
    <div className={style.editItem}>

      <form onSubmit={onSubmit} className={style.form}>
        <h2 className={style.title}>Product Category</h2>
        <FormInput
          name='product_category' 
          value={formData.product_category}
          onChange={onChange}
        />

        <h2 className={style.title}>Product Name</h2>
        <FormInput
          name='product_name' 
          value={formData.product_name}
          onChange={onChange}
        />

        <h2 className={style.title}>Product Color</h2>
        <FormInput
          name='product_color' 
          value={formData.product_color}
          onChange={onChange}
        />

        <h2 className={style.title}>Product Price</h2>
        <FormInput 
          name='product_price'
          value={formData.product_price}
          onChange={onChange}
        />
        
        <h2 className={style.title}>Product Description</h2>
        <textarea
          className={style.textArea} 
          name='product_description'
          value={formData.product_description}
          onChange={onChange}
        />

        <h2 className={style.title}>Product Info (Fabric, Fit, etc | Separate by Comma)</h2>
        <textarea
          className={style.textArea} 
          name='product_info' 
          value={formData.product_info}
          onChange={onChange}
        />

        <h2 className={style.title}>Product Images (Separate by Comma)</h2>
        <textarea
          className={style.textArea} 
          name='product_images'
          value={formData.product_images}
          onChange={onChange}
        />

        <h2 className={style.title}>Product URL</h2>
        <FormInput
          name='product_url' 
          value={formData.product_url}
          onChange={onChange}
        />

        <h2 className={style.title}>Edit URL</h2>
        <FormInput 
          name='edit_url'
          value={formData.edit_url}
          onChange={onChange}
        />

        <h2 className={style.title}>Product Quantity</h2>
        <FormInput 
          name='product_quantity'
          value={formData.product_quantity}
          onChange={onChange}
        />

        <h2 className={style.title}>On Sale</h2>
        <FormInput 
          name='on_sale'
          value={formData.on_sale}
          onChange={onChange}
        />

        <h2 className={style.title}>Sale Discounts (Separate by Comma)</h2>
        <FormInput 
          name='sale_discount'
          value={formData.sale_discount}
          onChange={onChange}
        />
        <Button createProduct>Edit Product</Button>
      </form>

      <div className={style.linkContainer}>
        <Link to='/admin/dashboard/products' className={style.link}>Back to Products</Link>
      </div>

    </div>
  )
};

// REDUX
const mapDispatchToProps = (dispatch) => ({
  updateProduct: (id, formData) => dispatch(updateProduct(id, formData)),
});

export default connect(null, mapDispatchToProps)(EditItem);