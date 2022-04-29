import React from 'react';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

export default function ServiceSection() {
  return (
    <div>
      <SectionTitle
        heading="Services"
        subheading="Ce que je peux faire pour vous"
      />
      <div className="services__allItems">
        <ServicesSectionItem />
      </div>
    </div>
  );
}
