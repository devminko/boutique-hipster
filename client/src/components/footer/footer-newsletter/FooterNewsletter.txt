import React, { } from 'react';

import FormInput from '../../../components-ui/form-input/FormInput';
import Button from '../../../components-ui/button/Button';

import style from './footer-newsletter.module.scss';

// *************************** FOOTER NEWSLETTER COMPONENT *************************** //
const FooterNewsletter = () => {
  return (
    <div className={style.footerNewsletter}>

      <div className={style.signupContainer}>
        <h2 className={style.title}>Sign up for our newsletter</h2>
        <div className={style.input}>
          <FormInput
            newsletter
            placeholder='Your email here'
          />
          <Button newsletter>Sign Up</Button>
        </div>
      </div>

      <div className={style.textContainer}>
        <h2 className={style.text}>Boutique Hipster</h2>
        <p className={style.subtext}>All organic all vegan all boutique and all hipster</p>
      </div>

    </div>
  )
};

export default FooterNewsletter;