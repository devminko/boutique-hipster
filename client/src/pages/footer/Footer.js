import React, { } from 'react';

import FooterNewsletter from '../../components/footer/footer-newsletter/FooterNewsletter';
import FooterLinks from '../../components/footer/footer-links/FooterLinks';

import style from './footer.module.scss';

// *************************** FOOTER COMPONENT *************************** //
const Footer = () => {
  return (
    <footer className={style.footer}>
      
      <FooterNewsletter />
      <FooterLinks />

    </footer>
  )
};

export default Footer;