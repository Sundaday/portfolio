import React from 'react';
import PText from '../components/PText';

export default function About() {
  return (
    <div>
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
          </div>
        </div>
      </div>
    </div>
  );
}
