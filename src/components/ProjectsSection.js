import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import projects from '../assets/data/projects';
import ProjectItem from './ProjectItem';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation]);

const ProjectSectionStyles = styled.div`
  padding: 10rem 0;
  .projects__allItem {
    display: flex;
    gap: 3rem;
    margin-top: 5rem;
  }
  .swiper-container {
    padding: 8rem;
    max-width: 100%;
  }
`;

export default function ProjectsSection() {
  return (
    <ProjectSectionStyles>
      <div className="container">
        <SectionTitle heading="Projets" subheading="quelques projets recent" />
        <div className="projects__allItems">
          <Swiper spaceBetween={30} slidesPerView={2} navigation>
            {projects.map((project, index) => {
              if (index >= 5) return;
              return (
                <SwiperSlide key={project.id}>
                  <ProjectItem />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </ProjectSectionStyles>
  );
}
