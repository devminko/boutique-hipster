import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { getProducts } from '../../../redux/admin/admin.actions';

import { shuffleArray } from '../../../utils/shuffleFunction';

import ShuffledItems from '../shuffled-items/ShuffledItems';

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

      <h3 className={style.footerTitle}>Compliment the Look</h3>
      
      {/* SHUFFLED PRODUCTS CONTAINER */}
      <div className={style.shuffledContainer}>
        {
          shuffledArray
            .filter((item, idx) => idx < 4 && item.id !== newProductId)
            .map(product => (
              <ShuffledItems key={product.id} product={product} />
            ))
        }
      </div>

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