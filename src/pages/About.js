import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/about-page-img.png';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';
import myCV from '../assets/images/CVJohnKoch.pdf';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
    button {
      font-size: 2.2rem;
      background-color: ${(props) =>
      props.outline ? `transparent` : `var(--gray-1)`};
      padding: 0.7em 2em;
      border-radius: 8px;
      display: inline-block;
      border: 2px solid var(--gray-1);
      color: ${(props) => (props.outline ? `var(--gray-1)` : `black`)};
    }
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
      border-radius: 1.6rem;
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
    .left{
      button{
      font-size: 1.8rem;
      }
    }
  }
`;

export default function About() {
  return (
    
    <AboutPageStyles>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              Salut, Je suis <span>Jonathan</span>!
            </p>
            <h2 className="about__heading">DEV</h2>
            <div className="about__info">
              <PText>
                Suite à dix années dans le commerce, 
                ma passion pour l'informatique
                et les nouvelles technologies m'ont convaincu 
                d'entreprendre une reconvertion dans l'IT.
              </PText>
            </div>
            <a href={myCV} download="myCV">
              <button type="submit">
                <b>Téléchargez mon CV</b>
              </button>
            </a> 
          </div>
          <div className="right">
            <img src={AboutImg} alt="John koch img" />
          </div>
        </div>
        <div className="about__info__items">
          <div className="about__info__item">
            <h1 className="about__info__heading">Expérience</h1>
            <AboutInfoItem
              title="07/21 - 09/21"
              items={['Stage - RedSpher Contern - Assurance Quality']}
            />
          </div>
          <div className="about__info__item">
            <h1 className="about__info__heading">Skills</h1>
            <AboutInfoItem
              title="Front End"
              items={['HTML5', 'CSS3', 'ES7+', 'Angular', 'React']}
            />
            <AboutInfoItem
              title="Back End"
              items={['Java', 'C#', 'ASP.NET', 'PostgreSQL', 'MongoDB']}
            />
            <AboutInfoItem
              title="DataBase"
              items={['PostgreSQL', 'MongoDB', 'Azure']}
            />
            <AboutInfoItem
              title="Dev Ops"
              items={['Git', 'Netlify', 'Docker', 'Travis']}
            />
          </div>
          <div className="about__info__item">
            <h1 className="about__info__heading">Education</h1>
            <AboutInfoItem
              title="Formation"
              items={['OpenClassRoom', 'AFPA']}
            />
            <AboutInfoItem
              title="Université"
              items={['Aix-Marseille Université']}
            />
          </div>
        </div>
      </div>
      <ContactBanner />
    </AboutPageStyles>
  );
}
