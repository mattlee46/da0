// src/components/Banner.js
import React from 'react';
import styled from 'styled-components';

const DesktopBanner = styled.div`
  padding: 4% 0px 0px 0px;
  background-color: #FFFFFF;
  text-align: center;
  display: flex;
  max-width: 50vw;
  margin: 0 auto;
  margin-bottom: 2.5%;
  

  img {
    max-width: 100%; /* 調整圖片最大寬度 */
    height: auto; /* 確保高度按比例縮放 */
    margin: 0 auto;

  }

  @media (max-width: 500px) {
    
  }
`;


const Banner = () => (
  <>
    <DesktopBanner>
      <img src="images/da0_banner.png" alt="Menu" />
    </DesktopBanner>
   
  </>
);

export default Banner;
