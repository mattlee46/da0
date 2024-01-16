import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyle from '../GlobalStyles';
// components

import PreProjects from '../components/PreProjects';

const Container = styled.div`
  max-width: 100%;
  margin:0px;
  background-color:#FFFFFF;
  height : 100vh;

`;



function PreviousProjects() {
  return (

    <Container>

    	<PreProjects />
  
 
    </Container>

  );
}



export default PreviousProjects;