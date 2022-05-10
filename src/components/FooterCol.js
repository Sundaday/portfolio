import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ColStyles = styled.div`
  .heading {
    font-size: 2.4rem;
    margin-bottom: 2rem;
  }
  li {
    margin-bottom: 1rem;
  }
  a {
    font-size: 1.8rem;
  }
`;

export default function FooterCol({
  heading = 'Ceci est un titre',
  links = [
    {
      type: 'Link',
      title: 'Home',
      path: '/',
    },
    {
      type: 'Link',
      title: 'About',
      path: '/About',
    },
  ],
}) {
  return (
    <ColStyles>
      <h1 className="heading">{heading}</h1>
      <ul>
        {links.map((item, index) => (
          <li keys={index}>
            {item.type === 'Link' ? (
              <Link to={item.path}>{item.title}</Link>
            ) : (
              <a href={item.path} target="_blanl" rel="noreferrer">
                {item.title}
              </a>
            )}
          </li>
        ))}
      </ul>
    </ColStyles>
  );
}
