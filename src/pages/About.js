import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/about-page-img.png';
import AboutInfoItem from '../components/AboutInfoItem';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
      border-radius: 1.6rem;
    }
  }
`;

export default function About() {
  return (
    <AboutPageStyles>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              Salut, <span>Je suis Jonathan !</span>
            </p>
            <h2 className="about__heading">PROGRAMMEUR</h2>
            <div className="about__info">
              <PText>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquam corporis doloremque modi, perferendis provident quas
                quibusdam quis ratione, sint temporibus vel veniam veritatis
                voluptates? Adipisci ducimus nisi odit sunt unde.
              </PText>
            </div>
            <Button btnLink="#" btnText="Téléchargez mon Cv" />
          </div>
          <div className="right">
            <img src={AboutImg} alt="John koch img" />
          </div>
        </div>
        <div className="about__info__items">
          <div className="about__info__item">
            <h1 className="about__info___heading">Education</h1>
            <AboutInfoItem title="Education" />
          </div>
        </div>
      </div>
    </AboutPageStyles>
  );
}
