// src/components/Inspiration.js
import React from 'react';
import styled from 'styled-components';


const InspirationContainer = styled.div`
  text-align: center;
  margin-bottom: 10%;
`;

const Line = styled.div`
  color: ${(props) => props.color};
  margin-bottom: 2.5%;
  font-weight:bold;
  font-size:2em;
`;

const LinkContainer = styled.div`
  display: flex;
  gap: 2%;
  justify-content: center;
  margin-bottom: 2.5%;
`;

const Link = styled.a`
  color: #1E1E1E;
  text-decoration: none;
  font-weight:900;
  font-size:1.5em;

`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0%;

  img {
    max-width: 50%; /* 調整圖片最大寬度 */
    height: auto; /* 確保高度按比例縮放 */
  }
`;



const Inspiration = () => (
  <InspirationContainer>
    <Line color="#757575" >inspiration</Line>
    
    <LinkContainer color="#1E1E1E">
      <Link href="https://twitter.com/hashtag/Democracy?src=hashtag_click" target="_blank">#democracy</Link>{' '}
      <Link href="https://twitter.com/hashtag/Plurality?src=hashtag_click" target="_blank">#plurality</Link>{' '}
      <Link href="https://twitter.com/hashtag/dacc?src=hashtag_click" target="_blank">#d/acc</Link>
    </LinkContainer>
    
    <IconContainer>
      <a href="https://twitter.com/da0_g0v_tw" target="_blank"><img src="images/icon_twitter.png" alt="Menu" /></a>
      <a href="https://t.co/soRNZJ8x8q" target="_blank"><img src="images/icon_hashtag.png" alt="Menu" /></a>
    </IconContainer>
  </InspirationContainer>
);

export default Inspiration;
