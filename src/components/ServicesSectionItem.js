import React from 'react';
import { MdDesktopMac } from 'react-icons/all';
import PText from './PText';

export default function ServicesSectionItem() {
  return (
    <div>
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
    </div>
  );
}
