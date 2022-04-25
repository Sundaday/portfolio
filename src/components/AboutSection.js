import React from 'react';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import PText from './PText';
import Button from './Button';
import AboutImg from '../assets/images/about-sec-img.png';

const AboutSectionStyles = styled.div`
  padding: 10rem 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }
  .aboutSection__left,
  .aboutSection__right {
    flex: 1;
  }
  .section-title {
    text-align: left;
  }
  .para {
    margin-top: 2rem;
    margin-left: 0;
  }
  .aboutSection__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2px;
  }
`;

export default function AboutSection() {
  return (
    <AboutSectionStyles>
      <div className="container">
        <div className="aboutSection__left">
          <SectionTitle
            className="section-title"
            subheading="Laissez moi me présenter"
            heading="A propos"
          />
          <PText>
            Je suis un web developpeur. J'aime le design et je crée des sites
            internet ! J'essai toujours d'apporter une vision unique au projet
            que j'entreprend.
          </PText>
          <div className="aboutSection__button">
            <Button btnLink="/projects" btnText="Projets" />
            <Button btnLink="/about" btnText="Lisez moi !" outline />
          </div>
          <div className="aboutSection__right">
            <img src={AboutImg} alt="" />
          </div>
        </div>
      </div>
    </AboutSectionStyles>
  );
}
