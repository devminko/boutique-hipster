import React, { } from 'react';
import { Link } from 'react-router-dom';

import style from './footer-item.module.scss';

// *************************** FOOTER ITEM COMPONENT *************************** //
const FooterItem = ({ title, linkTitleOne, linkOne, linkTitleTwo, linkTwo, linkTitleThree, linkThree }) => {
  return (
    <div className={style.footerItem}>
      <h3 className={style.title}>{title}</h3>
      <ul className={style.links}>
        <li>
          <Link to={linkOne} className={style.link}>{linkTitleOne}</Link>
        </li>
        {
          (linkTitleTwo && linkTwo) &&
            <li>
              <Link to={linkTwo} className={style.link}>{linkTitleTwo}</Link>
            </li>
        }
        {
          (linkTitleThree && linkThree) &&
            <li>
              <Link to={linkThree} className={style.link}>{linkTitleThree}</Link>
            </li>
        }
      </ul>
    </div>
  )
};

export default FooterItem;