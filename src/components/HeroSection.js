import React from 'react';
import styled from 'styled-components';
import HeroImg from '../assets/images/hero.png';
import Button from './Button.js';
import SocialMediaArrow from '../assets/images/social-media-arrow.svg';
import ScrollDown from '../assets/images/scroll-down-arrow.svg';
import PText from './PText';

const HeroStyles = styled.div`
  .hero {
    height: 100vh;
    min-height: 1000px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .hero__heading {
    font-size: 2rem;
    margin-bottom: -4rem;
    position: relative;
    span {
      display: inline-block;
      width: 100%;
    }
    .hero__name {
      font-family: 'Montserrat SemiBold';
      font-size: 7rem;
      color: var(--white);
    }
  }
  .hero__img {
    max-width: 900px;
    width: 100%;
    height: 600px;
    margin: 0 auto;
    border: 2px solid var(--gray-1);
  }
  .hero__info {
    margin-top: -18rem;
  }
  .hero__social,
  .hero__scrollDown {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    bottom: 20px;
    width: 50px;
  }
  .hero__social {
    left: 50px;
  }
  .hero__scrollDown {
    right: 50px;
  }
  .hero__social__indicator,
  .hero__scrollDown {
    width: 50px;
    p {
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.7rem;
      text-transform: uppercase;
    }
    img {
      max-height: 45px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
    }
  }
  .hero__scrollDown {
    img {
      min-height: 70px;
    }
  }
  .hero__social__text {
    ul {
      li {
        margin-bottom: 1rem;
        a {
          display: inline-block;
          font-size: 1.3rem;
        }
      }
    }
  }
`;

export default function HeroSection() {
  return (
    <HeroStyles>
      <div className="hero">
        <div className="container">
          <h1 className="hero__heading">
            <span>Bonjour, ici c'est</span>
            <span className="hero__name">John Koch</span>
          </h1>
          <div className="hero__img">
            <img src={HeroImg} alt="" />
          </div>
          <div className="hero__info">
            <PText>
              Programmeur FullStack, j'aspire à acquérir la philosophie devOps.
            </PText>
            <Button btnLink="/projects" btnText="Voir mes projets" />
          </div>
          <div className="hero__social">
            <div className="hero__social___indicator">
              <p>Follow</p>
              <img src={SocialMediaArrow} alt="social media arrow" />
            </div>
            <div className="hero__social__text">
              <ul>
                <li>
                  <a
                    href="https://www.linkedin.com/in/jonathankochdev"
                    target="_blank"
                    rel="noreferrer"
                  >
                    IN
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.gg/435P33bb3d"
                    target="_blank"
                    rel="noreferrer"
                  >
                    DI
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/John_Koch_"
                    target="_blank"
                    rel="noreferrer"
                  >
                    TWI
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Sundaday"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GIT
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="hero__scrollDown">
            <p>Scroll</p>
            <img src={ScrollDown} alt="" />
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}
