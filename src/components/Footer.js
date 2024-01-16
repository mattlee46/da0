// src/components/Projects.js
import React from 'react';
import styled from 'styled-components';
//import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';

const ProjectsContainer = styled.div`
  text-align: center;
  margin-bottom: 10%;
  padding:0% 0% 2.5% 0%;
`;

const Line = styled.div`
  color: ${(props) => props.color};
  margin-bottom: 2.5%;

  font-weight:400;
  font-size:0.5em;

  @media (max-width: 500px) {
    font-size:0.5em;
  }
`;





const Projects = () => (
  <ProjectsContainer>
    <Line color="#757575">LAST UPDATED 01/16/2024</Line>
    
    

  </ProjectsContainer>
);

export default Projects;
