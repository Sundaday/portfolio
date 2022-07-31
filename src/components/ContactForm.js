import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';

const ContactFormStyles = styled.form`
  width: 100%;
  .form-group {
    width: 100%;
    margin-bottom: 2rem;
  }
  label {
    font-size: 1.8rem;
  }
  input,
  textarea {
    width: 100%;
    font-size: 2.5rem;
    padding: 1.2rem;
    color: var(--gray-1);
    background-color: var(--deep-dark);
    outline: none;
    border: none;
    border-radius: 8px;
    margin-top: 1rem;
  }
  textarea {
    min-height: 250px;
    resize: vertical;
  }
  button[type='submit'] {
    background-color: var(--gray-1);
    color: var(--black);
    font-size: 2rem;
    display: inline-block;
    outline: none;
    border: none;
    padding: 1rem 4rem;
    border-radius: 8px;
    cursor: pointer;
  }
`;

export default function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kfxd0xw', 'template_94n1eha', form.current, 'cBN85iwwL2gaZsF2b')
      .then((result) => {
          console.log(result.text);
          console.log("Message envoyé");
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <ContactFormStyles ref={form} onSubmit={sendEmail}>
        <div className="form-group">
          <label htmlFor="name">
            Votre Nom
            <input
              type="text"
              id="name"
              name="user_name"
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="email">
            Votre e-mail
            <input
              type="text"
              id="email"
              name="user_email"
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="message">
            Votre message
            <textarea
              type="text"
              id="message"
              name="message"
            />
          </label>
        </div>
        <button type="submit" value="Send">Envoyer</button>
    </ContactFormStyles>
  );
}
