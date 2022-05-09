import React from 'react';
import styled from 'styled-components';
import PText from './PText';
import FooterCol from './FooterCol';

const FooterStyles = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
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
    </FooterStyles>
  );
}
