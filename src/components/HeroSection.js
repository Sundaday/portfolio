import React from 'react';
import HeroImg from '../assets/images/hero.png';
import Button from './Button.js';
import PText from './PText';

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
          <Button btnLink="/projects" />
        </div>
      </div>
    </div>
  );
}
