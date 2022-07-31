import React from 'react';
import { MdDesktopMac } from 'react-icons/all';
import styled from 'styled-components';
import PText from './PText';

const ItemStyles = styled.div`
  text-align: center;
  .servicesItem__icon {
    svg {
      width: 3rem;
    }
  }
  .servicesItem__title {
    font-size: 2.5rem;
    font-family: 'Montserrat SemiBold';
  }
  .para {
    margin-top: 2rem;
  }
`;

export default function ServicesSectionItem({
  icon = <MdDesktopMac />,
  title = 'web design',
  desc = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores\n' +
    'atque consectetur culpa dolorem dolores excepturi fuga magni mollitia\n' +
    'obcaecati officiis pariatur porro possimus quam reiciendis sapiente,\n' +
    'suscipit temporibus vero voluptas?',
}) {
  return (
    <ItemStyles>
      <div className="servicesItem__icon">{icon}</div>
      <div className="servicesItem__title">{title}</div>
      <PText>{desc}</PText>
    </ItemStyles>
  );
}
