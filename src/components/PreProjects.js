// src/components/PreProjects.js
import React from 'react';
import styled from 'styled-components';
//import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';

const ProjectsContainer = styled.div`
  text-align: center;
  margin-bottom: 5%;
  margin-top: 20vh;

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
  }
`;




const Preprojects = () => (
  <ProjectsContainer>
    <a href="/" target="" style={{ textDecoration: 'none' }}><Line2 color="#757575" >&lt; back</Line2></a>

    
    <TextContainer color="#1E1E1E">
     

      <a href="/" target="_blank" style={{ textDecoration: 'none' }}><p>da0 website by Matt</p></a>
      <a href="https://www.plurality.moda.gov.tw/retropgf" target="_blank" style={{ textDecoration: 'none' }}><p>RPGF by Zoey Tseng, anomalous, Paige L</p></a>
      <a href="https://www.plurality.moda.gov.tw/dao" target="_blank" style={{ textDecoration: 'none' }}><p>DAO research by Frank Hu</p></a>
      <a href="https://www.plurality.moda.gov.tw/did" target="_blank" style={{ textDecoration: 'none' }}><p>DID research by Noah Yeh</p></a>
      <a href="https://fundingthecommons.io/taipei-2023" target="_blank" style={{ textDecoration: 'none' }}><p>Funding the Commons Taipei by Vivian Chen</p></a>
      <a href="https://da0.kktix.cc/events/pluralitytaipei" target="_blank" style={{ textDecoration: 'none' }}><p>Plurality Taipei by Vivian Chen</p></a>
      <a href="/" target="_blank" style={{ textDecoration: 'none' }}><p>da0 DeSci by Weiting Lin</p></a>
      <a href="/" target="_blank" style={{ textDecoration: 'none' }}><p>Ars Electronica hackathon by Lucky</p></a>
      <a href="/" target="_blank" style={{ textDecoration: 'none' }}><p>The G00D Class by Isabel Hou</p></a>
      <a href="https://lu.ma/ovba1vcy" target="_blank" style={{ textDecoration: 'none' }}><p>說參DAO肆 by Yvonne</p></a>
      <a href="/" target="_blank" style={{ textDecoration: 'none' }}><p>DAO博士廣場說書 by Frank Hu</p></a>
      <a href="https://www.plurality.moda.gov.tw/" target="_blank" style={{ textDecoration: 'none' }}><p>開拓合作政府標案 by Noah Yeh</p></a>
      <a href="/" target="_blank" style={{ textDecoration: 'none' }}><p>Pluralizing Plurality by jiahe</p></a>
     
      
    </TextContainer>
    

  </ProjectsContainer>
);

export default Preprojects;
