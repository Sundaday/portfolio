import React from 'react';
import HeroImg from '../assets/images/hero.png';
import Button from './Button.js';
import PText from './PText';
import SocialMediaArrow from '../assets/images/social-media-arrow.svg';

export default function HeroSection() {
  return (
    <div>
      <div className="container">
        <h1 className="hero__heading">
          <span>Bonjour, Vous êtes </span>
          <span>sur la page de John</span>
        </h1>
        <div className="hero__img">
          <img src={HeroImg} alt="" />
        </div>
        <div className="hero__info">
          <PText>
            Programmeur en herbe orienté backend, j'aspire à acquérir la
            philosophie devOps.
          </PText>
          <Button btnLink="/projects" btnText="Voir mes projets" />
        </div>
        <div className="hero__social">
          <div className="hero__social___indicator">
            <p>Follow me</p>
            <img src={SocialMediaArrow} alt="social media arrow" />
          </div>
          <div className="hero_social_text">
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/in/jonathankochdev"
                  target="_blank"
                  rel="noreferrer"
                >
                  IN
                </a>
                <li>
                  <a
                    href="https://discord.gg/435P33bb3d"
                    target="_blank"
                    rel="noreferrer"
                  >
                    DI
                  </a>
                </li>
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
      </div>
    </div>
  );
}
