import React, { } from 'react';

import FooterItem from '../footer-item/FooterItem';

import style from './footer-links.module.scss';

// *************************** FOOTER LINKS COMPONENT *************************** //
const FooterLinks = () => {
  return (
    <div className={style.footerLinks}>
      
      <FooterItem 
        title='FAQ' 
        linkTitleOne='Returns & Exchanges' 
        linkOne='/' 
        linkTitleTwo='Terms & Conditions'
        linkTwo='/'
      />
      <FooterItem 
        title='Who We Are'
        linkTitleOne='About Us'
        linkOne='/'
      />
      <FooterItem 
        title='Company'
        linkTitleOne='Contact Us'
        linkOne='/'
      />
      <FooterItem 
        title='Our Brand'
        linkTitleOne='Instagram'
        linkOne='/'
        linkTitleTwo='Twitter'
        linkTwo='/'
      />

    </div>
  )
};

export default FooterLinks;