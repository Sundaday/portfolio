import React from 'react';
import HeroImg from '../assets/images/hero.png';
import PText from './PText';

export default function HeroSection() {
  return (
    <div>
      <div className="container">
        <h1 className="hero__heading">
          <span>Bonjour, Vous êtes</span>
          <span>sur la page de John</span>
        </h1>
        <div className="hero__img">
          <img src={HeroImg} alt="" />
        </div>
        <div className="hero__info">
          <PText />
        </div>
      </div>
    </div>
  );
}
