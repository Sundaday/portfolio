import React from 'react';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import PText from './PText';
import Button from './Button';
import AboutImg from '../assets/images/code terminal php databases 2848x2136 wallpaper_www.miscellaneoushi.com_68.jpg';

const AboutSectionStyles = styled.div`
  padding: 10rem 0;

  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }
  .aboutSection__left{
    flex: 1;
  }
  .aboutSection__right {
    flex: 1;
    border: 2px solid var(--gray-1);
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
  @media only screen and (max-width: 950px) {
    .aboutSection__left {
      flex: 4;
    }
    .aboutSection__right {
      flex: 3;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
    }
    .aboutSection__left,
    .aboutSection__right {
      width: 100%;
    }
    .aboutSection__right {
      margin-top: 3rem;
    }
    .section-title {
      text-align: center;
    }
    .para {
      margin: 2rem auto 0;
    }
    .aboutSection__buttons {
      flex-direction: column;
      gap: 0;
      .button-wrapper,
      a {
        width: 100%;
        text-align: center;
      }
    }
  }
`;

export default function AboutSection() {
  return (
    <AboutSectionStyles>
      <div className="container">
        <div className="aboutSection__left">
          <SectionTitle
            subheading="Laissez moi me présenter"
            heading="A propos"
          />
          <PText>
            Je suis un web developpeur. J'aime le design et je crée des sites
            internet ! J'essai toujours d'apporter une vision unique au projet
            que j'entreprend.
          </PText>
          <div className="aboutSection__buttons">
            <Button btnLink="/projects" btnText="Projets" />
            <Button btnLink="/about" btnText="Lisez moi !" outline />
          </div>
        </div>
        <div className="aboutSection__right">
          <img src={AboutImg} alt="Img" />
        </div>
      </div>
    </AboutSectionStyles>
  );
}
