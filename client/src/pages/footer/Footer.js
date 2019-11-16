import React, { } from 'react';

import FooterNewsletter from '../../components/footer/footer-newsletter/FooterNewsletter';

import style from './footer.module.scss';

// *************************** FOOTER COMPONENT *************************** //
const Footer = () => {
  return (
    <footer className={style.footer}>
      
      <FooterNewsletter />

      FOOTER

    </footer>
  )
};

export default Footer;