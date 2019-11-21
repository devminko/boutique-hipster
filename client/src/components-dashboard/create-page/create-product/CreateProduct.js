import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { createProduct } from '../../../redux/admin/admin.actions';

import FormInput from '../../../components-ui/form-input/FormInput';
import Button from '../../../components-ui/button/Button';

import style from './create-product.module.scss';

// *************************** DASHBOARD PRODUCTS COMPONENT *************************** //
const CreateProduct = ({ createProduct }) => {
  const [ formData, setFormData ] = useState({
    product_category: '',
    product_name: '',
    product_color: '',
    product_price: '',
    product_description: '',
    product_info: [],
    product_images: [],
    product_url: '',
    edit_url: '',
    product_quantity: '',
    on_sale: '',
    sale_discount: [],
  });

  const { product_category, product_name, product_color, product_price, product_description, product_info, product_images, product_url, edit_url, product_quantity, on_sale, sale_discount  } = formData;

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await createProduct(formData);
    setFormData({
      product_category: '',
      product_name: '',
      product_color: '',
      product_price: '',
      product_description: '',
      product_info: [],
      product_images: [],
      product_url: '',
      edit_url: '',
      product_quantity: '',
      on_sale: '',
      sale_discount: [],
    });
  };

  return (
    <div className={style.createProduct}>

      <form onSubmit={onSubmit} className={style.productForm}>
        <h3 className={style.inputTitle}>Product Category</h3>
        <FormInput
          name='product_category' 
          placeholder='Product Category'
          value={product_category}
          onChange={onChange}
        />

        <h3 className={style.inputTitle}>Product Name</h3>
        <FormInput
          name='product_name' 
          placeholder='Product Name'
          value={product_name}
          onChange={onChange}
        />

        <h3 className={style.inputTitle}>Product Color</h3>
        <FormInput
          name='product_color' 
          placeholder='Product Color'
          value={product_color}
          onChange={onChange}
        />

        <h3 className={style.inputTitle}>Product Price</h3>
        <FormInput
          name='product_price' 
          placeholder='Product Price'
          value={product_price}
          onChange={onChange}
        />

        <h3 className={style.inputTitle}>Product Description (Separate by Comma)</h3>
        <textarea
          className={style.textArea} 
          name='product_description'
          placeholder='Product Description'
          value={product_description}
          onChange={onChange}
        />

        <h3 className={style.inputTitle}>Product Info (Separate by Comma)</h3>
        <textarea
          className={style.textArea} 
          name='product_info'
          placeholder='Product Info'
          value={product_info}
          onChange={onChange}
        />

        <h3 className={style.inputTitle}>Product Images (Separate by Comma)</h3>
        <textarea
          className={style.textArea} 
          name='product_images'
          placeholder='Product Images'
          value={product_images}
          onChange={onChange}
        />

        <h3 className={style.inputTitle}>Product URL</h3>
        <FormInput
          name='product_url' 
          placeholder='Product URL'
          value={product_url}
          onChange={onChange}
        />

        <h3 className={style.inputTitle}>Edit URL</h3>
        <FormInput
          name='edit_url' 
          placeholder='Edit URL'
          value={edit_url}
          onChange={onChange}
        />

        <h3 className={style.inputTitle}>Product Quantity</h3>
        <FormInput
          name='product_quantity' 
          placeholder='Product Quantity'
          value={product_quantity}
          onChange={onChange}
        />

        <h3 className={style.inputTitle}>On Sale?</h3>
        <FormInput
          name='on_sale' 
          placeholder='On Sale'
          value={on_sale}
          onChange={onChange}
        />

        <h3 className={style.inputTitle}>Sale Discounts</h3>
        <FormInput
          name='sale_discount' 
          placeholder='Sale Discount'
          value={sale_discount}
          onChange={onChange}
        />
        <Button editProduct>Create Product</Button>
      </form>

      <div className={style.linkContainer}>
        <Link to='/admin/dashboard' className={style.link}>Back to Products Page</Link>
      </div>

    </div>
  )
};

// REDUX
const mapDispatchToProps = (dispatch) => ({
  createProduct: (formData) => dispatch(createProduct(formData)),
});

export default connect(null, mapDispatchToProps)(CreateProduct);