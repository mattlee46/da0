// src/components/Projects.js
import React from 'react';
import styled from 'styled-components';
//import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';

const ProjectsContainer = styled.div`
  text-align: center;
  margin-bottom: 5%;

  @media (max-width: 500px) {
    margin-bottom: 10%;
  }
`;

const Line = styled.div`
  color: ${(props) => props.color};
  margin-bottom: 2%;
  font-weight:400;
  font-size:1.5em;

  @media (max-width: 500px) {
    font-size:1.5em;
  }
`;

const Line2 = styled.div`
  color: ${(props) => props.color};
  margin-top:0%;
  margin-bottom: 2.5%;
  font-weight:600;
  font-size:1em;

  @media (max-width: 500px) {
    font-size:1em;
  }
`;


const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 1.5%;
  

  p{
    color: #1E1E1E;
    font-weight:600;
    font-size:1em;
    margin-bottom: 0;
  }

  @media (max-width: 500px) {
    p{
     
      font-size:1em;


    }
    
    margin-bottom: 7%;
  }
`;




const Projects = () => (
  <ProjectsContainer>
    <Line color="#757575">ongoing projects</Line>
    
    <TextContainer color="#1E1E1E">
      <a href="/" target="_blank" style={{ textDecoration: 'none' }}><p>da0 Shoutout by 昶惟</p></a>
      <a href="https://open.spotify.com/episode/00CUOj1PcvOHKZfh7jW3a3" target="_blank" style={{ textDecoration: 'none' }}><p>零到烏托邦 by Noah Yeh</p></a>
      <a href="https://open.spotify.com/episode/640RPy0EYEKtukgoiE4af2" target="_blank" style={{ textDecoration: 'none' }}><p>聽不DAO podcast by Jacky</p></a>
      <a href="/" target="_blank" style={{ textDecoration: 'none' }}><p>da0 learning by Billy3321</p></a>
      <a href="/" target="_blank" style={{ textDecoration: 'none' }}><p>DID initiatives by Noah Yeh</p></a>
      <a href="/" target="_blank" style={{ textDecoration: 'none' }}><p>ZuTaiwan by Vivian Chen</p></a>
      <a href="/" target="_blank" style={{ textDecoration: 'none' }}><p>鏈AI by Jacky</p></a>
      <a href="https://t.co/soRNZJ8x8q" target="_blank" style={{ textDecoration: 'none' }}><p>da0 Infrastructure by Frank Hu</p></a>
      <a href="/" target="_blank" style={{ textDecoration: 'none' }}><p>da0 c0w0rk by Yian 逸晟</p></a>
     
      
    </TextContainer>
    <a href="/previousprojects" target="" style={{ textDecoration: 'none' }}><Line2 color="#757575" >previous projects</Line2></a>

  </ProjectsContainer>
);

export default Projects;
