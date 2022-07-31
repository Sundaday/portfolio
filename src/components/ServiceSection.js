import React from 'react';
import styled from 'styled-components';
import { MdBuild, MdCode, SiIcloud } from 'react-icons/all';
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
    .services__allItems {
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
      <div className="container">
        <SectionTitle
          heading="Services"
          subheading="Ce que je peux faire pour vous"
        />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<MdCode />}
            title="Web Dev"
            desc="Je fais des sites fonctionnel utile aux demandes de chacun(e)."
          />
          <ServicesSectionItem
            icon={<MdBuild />}
            title="Mobile Dev"
            desc="J'ai également la possibilité de faire la portabilité de votre projet"
          />
          <ServicesSectionItem
            icon={<SiIcloud />}
            title="Software Dev"
            desc="Je peux aussi développer toute sorte de logiciel executable sur Windows"
          />
        </div>
      </div>
    </ServicesItemStyles>
  );
}
