import React from 'react';
import PText from './PText';

export default function Map() {
  return (
    <div>
      <div className="container">
        <div className="map__car">
          <h3 className="map__car__heading">Je suis ici !</h3>
          <PText>Thionville, France</PText>
          <a
            href="https://www.google.com/maps/@49.3529436,6.1781913,15z"
            target="_blank"
            rel="noreferrer"
          >
            Regardez sur GoogleMap
          </a>
        </div>
      </div>
    </div>
  );
}
