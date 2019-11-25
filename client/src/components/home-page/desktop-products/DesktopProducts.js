import React, { } from 'react';
import { Link } from 'react-router-dom';

import style from './desktop-products.module.scss';

// *************************** DESKTOP PRODUCTS COMPONENT (HOME PAGE) *************************** //
const DesktopProducts = () => {
  return (
    <div className={style.desktopProducts}>
      
      <div className={style.productItem}>
        <Link to='/beanies'>
          <img src='../../../assets/images/BEANIE_SAND_1.png' alt='Beanie Link' className={style.image} />
          <h3 className={style.productLink}>Beanies</h3>
        </Link>
      </div>
      <div className={style.productItem}>
        <Link to='/gloves'>
          <img src='../../../assets/images/GLOVES_SMOKE_1.png' alt='Gloves Link' className={style.image} />
          <h3 className={style.productLink}>Gloves</h3>
        </Link>
      </div>
      <div className={style.productItem}>
        <Link to='/exclusives'>
          <img src='../../../assets/images/TRAVEL_BLANKET_MIDNIGHT_CRIMSON.png' alt='Exclusives Link' className={style.image} />
          <h3 className={style.productLink}>Exclusives</h3>
        </Link>
      </div>

    </div>
  )
};

export default DesktopProducts;