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

export default function ServicesSectionItem() {
  return (
    <ItemStyles>
      <div className="servicesItem__icon">
        <MdDesktopMac />
        <div className="servicesItem__title">Web Design</div>
        <PText>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
          atque consectetur culpa dolorem dolores excepturi fuga magni mollitia
          obcaecati officiis pariatur porro possimus quam reiciendis sapiente,
          suscipit temporibus vero voluptas?
        </PText>
      </div>
    </ItemStyles>
  );
}
