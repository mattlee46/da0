// src/App.js
import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyle from './GlobalStyles';

import Home from './pages/Home';
import Previousprojects from './pages/Previousprojects'

const Container = styled.div`
  max-width: 100%;
  margin: 0px;
  padding: 0px;
  background-color:#000000;
`;


function App() {
  return (
  

    <Container>
      
    

      <Router>
        <Routes>
                  
            
            <Route path="/" element={<Home />} />
            <Route path="/previousprojects" element={<Previousprojects />} />
         


        </Routes>
      </Router>
    </Container>
    
  );
}

export default App;


