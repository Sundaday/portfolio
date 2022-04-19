import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({ btnLink }) {
  return (
    <div>
      <Link className="button" to={btnLink}>
        Ceci est un bouton
      </Link>
    </div>
  );
}
