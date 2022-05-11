import React from 'react';
import styled from 'styled-components';
import { MdEmail, MdLocalPhone } from 'react-icons/all';
import SectionTitle from './SectionTitle';
import ContactInfoItem from './ContactInfoItem';

const ContactSectionStyles = styled.div`
  padding: 10rem 0;
`;

export default function ContactSection() {
  return (
    <ContactSectionStyles>
      <div className="container">
        <SectionTitle heading="CONTACTEZ MOI" subheading="Restez connecté" />
        <div className="contactSection__wrapper">
          <div className="left">
            <ContactInfoItem icon={<MdLocalPhone />} text="+336 461 536 45" />
            <ContactInfoItem icon={<MdEmail />} text="johnkochdev@gmail.com" />
            <ContactInfoItem text="Thionville, FRANCE" />
          </div>
          <div className="right">contact form</div>
        </div>
      </div>
    </ContactSectionStyles>
  );
}
