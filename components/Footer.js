import React from 'react';
import { styles } from '../constants/styles';

import { getCurrentYear } from '../lib/helpers';

const Footer = () => (
  <footer class="pa4 pa5-l bg-black-70 white bt b--black-10">
    <section class="cf mb5">
      <div class="mb4 mb0-ns fl w-100 w-50-l">
        <h1 class="f3 f-subheadline-l f-subheadline-ns  measure lh-title fw9">
          Freshly Breemed
        </h1>
        <div class="f5 f3-ns  measure fw5">+1.240.205.3485</div>
        <div class="f5 f3-ns  measure fw5">
          <a href="mailto:freshlybreemed@gmail.com" class="no-underline white">
            freshlybreemed@gmail.com
          </a>
        </div>
        <div class="f5 f3-ns  measure fw5">Los Angeles, CA</div>
        <div class="f6 f4-ns mt4 measure fw5">
          © 2020 Freshly Breemed. All rights reserved.
        </div>
      </div>
    </section>
    <div class="dt dt--fixed w-100">
      <div class="dn dtc-ns v-mid"></div>
    </div>
  </footer>
);

export default Footer;
