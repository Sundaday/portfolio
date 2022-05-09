import React from 'react';
import PText from './PText';
import FooterCol from './FooterCol';

export default function Footer() {
  return (
    <div>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">John Koch</h1>
          <PText>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
            dicta ducimus, earum inventore, ipsam laudantium neque officiis quia
            reiciendis rem sequi voluptate. Assumenda dolores eaque in placeat
            possimus, qui quidem?
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol />
        </div>
        <div className="footer__col3">
          <FooterCol />
        </div>
        <div className="footer__col4">
          <FooterCol />
        </div>
      </div>
    </div>
  );
}
