import React, { useState } from 'react';

import FormInput from '../../components-ui/form-input/FormInput';
import Button from '../../components-ui/button/Button';

import style from './dashboard-products.module.scss';

// *************************** DASHBOARD PRODUCTS COMPONENT *************************** // (THIS MAY BE DELETED LATER NOT CURRENTLY IN USE)
const DashboardProducts = () => {

  const onChange = (e) => {
    console.log('Changed');
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted');
  };

  return (
    <div className={style.dashboardProducts}>

      <form onSubmit={onSubmit} className={style.productForm}>
        <h3 className={style.inputTitle}>Product Category</h3>
        <FormInput 
          placeholder='Product Category'
          onChange={onChange}
        />

        <h3 className={style.inputTitle}>Product Name</h3>
        <FormInput 
          placeholder='Product Name'
        />

        <h3 className={style.inputTitle}>Product Price</h3>
        <FormInput 
          placeholder='Product Price'
        />

        <h3 className={style.inputTitle}>Product Description</h3>
        <FormInput 
          placeholder='Product Description'
        />

        <h3 className={style.inputTitle}>Product Info</h3>
        <FormInput 
          placeholder='Product Info'
        />

        <h3 className={style.inputTitle}>Product Images</h3>
        <FormInput 
          placeholder='Product Images'
        />

        <h3 className={style.inputTitle}>Product URL</h3>
        <FormInput 
          placeholder='Product URL'
        />

        <h3 className={style.inputTitle}>Product Quantity</h3>
        <FormInput 
          placeholder='Product Quantity'
        />

        <h3 className={style.inputTitle}>On Sale?</h3>
        <FormInput 
          placeholder='On Sale'
        />

        <h3 className={style.inputTitle}>Sale Discounts</h3>
        <FormInput 
          placeholder='Sale Discount'
        />
      </form>

    </div>
  )
};

export default DashboardProducts;