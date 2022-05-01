import React from 'react';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .service__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServiceSection() {
  return (
    <ServicesItemStyles>
      <SectionTitle
        heading="Services"
        subheading="Ce que je peux faire pour vous"
      />
      <div className="services__allItems">
        <ServicesSectionItem />
        <ServicesSectionItem />
        <ServicesSectionItem />
      </div>
    </ServicesItemStyles>
  );
}
