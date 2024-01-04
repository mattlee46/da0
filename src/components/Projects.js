// src/components/Projects.js
import React from 'react';
import styled from 'styled-components';
//import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';

const ProjectsContainer = styled.div`
  text-align: center;
  margin-bottom: 10%;
`;

const Line = styled.div`
  color: ${(props) => props.color};
  margin-bottom: 2.5%;
  font-weight:700;
  font-size:2em;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 2.5%;
  

  p{
    color: #1E1E1E;
    font-weight:700;
    font-size:1.5em;
    margin-bottom: 0;
  }
`;




const Projects = () => (
  <ProjectsContainer>
    <Line color="#757575">ongoing projects</Line>
    
    <TextContainer color="#1E1E1E">
      <p>da0 Shoutout By 昶惟</p>
      <p>da0 Shoutout By 昶惟</p>
      
    </TextContainer>
    

  </ProjectsContainer>
);

export default Projects;
