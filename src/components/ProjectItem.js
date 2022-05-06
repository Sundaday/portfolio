import React from 'react';
import { Link } from 'react-router-dom';
import projectImg from '../assets/images/projectImg.png';

export default function ProjectItem() {
  return (
    <div>
      <Link to="/projects" className="projectItem__img">
        <img src={projectImg} alt="project img" />
      </Link>
      <div className="projectItem__info">
        <Link to="#">
          <h3 className="projectItem__title">Projet 1</h3>
        </Link>
        <p className="projectItem__desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
          aliquam amet animi asperiores aspernatur aut autem cupiditate deleniti
          et facilis incidunt officia officiis optio quod rem tempore tenetur,
          totam. Doloremque.
        </p>
      </div>
    </div>
  );
}
