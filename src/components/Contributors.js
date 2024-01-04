// src/components/Contributors.js
import React from 'react';
import styled from 'styled-components';
//import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';

const ContributorsContainer = styled.div`
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


const Contributors = () => (
  <ContributorsContainer>
    <Line color="#757575">prominent contributors</Line>
    
    <TextContainer color="#1E1E1E">
      <p>Vivian Chen</p>
      
      
    </TextContainer>
    

  </ContributorsContainer>
);

export default Contributors;
