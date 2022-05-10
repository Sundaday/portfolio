import React from 'react';
import styled from 'styled-components';
import PText from './PText';
import FooterCol from './FooterCol';

const FooterStyles = styled.div`
  background-color: var(--deep-dark);
  padding-top: 5rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1,
    .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">John Koch</h1>
          <PText>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
            dicta ducimus, earum inventore, ipsam laudantium neque officiis quia
            reiciendis rem sequi voluptate. Assumenda dolores eaque in placeat
            possimus, qui quidem?
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Liens Important"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                title: 'A propos',
                path: '/about',
                type: 'Link',
              },
              {
                title: 'Projets',
                path: '/projects',
                type: 'Link',
              },
              {
                title: 'Contact',
                path: '/contact',
                type: 'Link',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Info Contact"
            links={[
              {
                title: '+336 461 536 45',
                path: 'tel:+336 461 536 45',
              },
              {
                title: 'johnkochdev@gmail.com',
                path: 'mailto:johnkochdev@gmail.com',
              },
              {
                title: 'Thionville, France',
                path: 'https://www.google.com/maps/@49.3529436,6.1781913,15z',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Social links"
            links={[
              {
                title: 'LinkedIn',
                path: 'https://www.linkedin.com/in/jonathankochdev',
              },
              {
                title: 'Github',
                path: 'https://github.com/Sundaday',
              },
              {
                title: 'Discord',
                path: 'https://discord.gg/435P33bb3d',
              },
              {
                title: 'Twitter',
                path: 'https://twitter.com/John_Koch_',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>
            © 2022 - Designed by{' '}
            <a
              target="_blank"
              rel="noreferrer"
              href="http://www.linkedin.com/in/jonathankochdev"
            >
              John Koch
            </a>{' '}
          </PText>
        </div>
      </div>
    </FooterStyles>
  );
}
