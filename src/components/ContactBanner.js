import React from 'react';
import styled from 'styled-components';
import PText from './PText';
import Button from './Button';

const ContactBannerStyles = styled.div`
  padding: 10rem 0;
  .contactBanner__wrapper {
    background-color: var(--deep-dark);
    border-radius: 12px;
    padding: 5rem 0rem;
    text-align: center;
  }
  .contactBanner__heading {
    font-size: 4rem;
    margin-bottom: 2rem;
  }
  @media only screen and (max-width: 768px) {
    .contactBanner__heading {
      font-size: 2.8rem;
    }
  }
`;

export default function ContactBanner() {
  return (
    <ContactBannerStyles>
      <div className="container">
        <div className="contactBanner__wrapper">
          <PText>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium aperiam aspernatur atque consequatur cum exercitationem
            illo illum iste maxime nobis nostrum, nulla quaerat, quibusdam quos
            saepe sapiente, vel veniam voluptatibus!
          </PText>
          <h3 className="contactBanner__heading">Laissez moi vous aider</h3>
          <Button btnText="Contactez moi" btnLink="/contact" />
        </div>
      </div>
    </ContactBannerStyles>
  );
}
