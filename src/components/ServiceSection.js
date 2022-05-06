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
      <div className="container">
        <SectionTitle
          heading="TechnoStack"
          subheading="Ce que je peux faire pour vous"
        />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<MdCode />}
            title="Dev Front"
            desc="html5 css3 Javascript ES7+"
          />
          <ServicesSectionItem
            icon={<MdBuild />}
            title="Dev Back"
            desc="TS C# ASP.NET Node.js PostgreSQL MongoDB"
          />
          <ServicesSectionItem
            icon={<SiIcloud />}
            title="Dev Ops"
            desc="Unix Bash Git Docker Travis"
          />
        </div>
      </div>
    </ServicesItemStyles>
  );
}
