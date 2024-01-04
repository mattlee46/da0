import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyle from '../GlobalStyles';
// components
import Banner from '../components/Banner';
import Inspiration from '../components/Inspiration';
import Projects from '../components/Projects';
import Contributors from '../components/Contributors';
import Footer from '../components/Footer';

const Container = styled.div`
  max-width: 100%;
  margin:0px;
  background-color:#FFFFFF;
  height : 100vh;

`;



function Home() {
  return (

    <Container>
    	<Banner />
    	<Inspiration />
    	<Projects />
    	<Contributors /> 
    	<Footer /> 
   
        
  
 
    </Container>

  );
}



export default Home;