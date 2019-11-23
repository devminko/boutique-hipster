import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { getProducts } from '../../../redux/admin/admin.actions';

import { shuffleArray } from '../../../utils/shuffleFunction';

import style from './product-footer.module.scss';

// *************************** PRODUCT FOOTER COMPONENT *************************** //
const ProductFooter = ({ products, getProducts, match }) => {
  useEffect(() => {
    getProducts();
  }, [getProducts]);

  const { product_id } = match.params;
  
  // 'product_id' = string so translate into Number for logic below
  const newProductId = Number(product_id);

  // SHUFFLE ARRAY FUNCTION -> randomizes the 'products' shown on each viewing
  let shuffledArray = products;
  shuffledArray = shuffleArray(shuffledArray);
  
  return (
    <div className={style.productFooter}>

      {
        shuffledArray
          .filter((item, idx) => idx < 4 && item.id !== newProductId)
          .map(product => (
            <div key={product.id}>
              <img src={product.product_images[0]} alt={`${product.product_name}_${product.product_color}_${product.id}`} />
              <p>{product.id}</p>
              <p>{product.product_name}</p>
              <p>${product.product_price}.00</p>
            </div>
          ))
      }

    </div>
  )
};

// REDUX
const mapStateToProps = (state) => ({
  products: state.admin.products,
});

const mapDispatchToProps = (dispatch) => ({
  getProducts: () => dispatch(getProducts()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductFooter));