// src/components/Inspiration.js
import React from 'react';
import styled from 'styled-components';
//import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';

const InspirationContainer = styled.div`
  text-align: center;
  margin-bottom: 10%;
`;

const Line = styled.div`
  color: ${(props) => props.color};
  margin-bottom: 2.5%;
  font-weight:700;
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
  font-weight:400;
  font-size:1.5em;

`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2%;

  img {
    max-width: 100%; /* 調整圖片最大寬度 */
    height: auto; /* 確保高度按比例縮放 */
  }
`;

// const Icon = styled.div`
//   margin: 0 10px;
// `;

const Inspiration = () => (
  <InspirationContainer>
    <Line color="#757575">inspiration</Line>
    
    <LinkContainer color="#1E1E1E">
      <Link href="https://twitter.com/hashtag/Democracy?src=hashtag_click" target="_blank">#democracy</Link>{' '}
      <Link href="https://twitter.com/hashtag/Plurality?src=hashtag_click" target="_blank">#plurality</Link>{' '}
      <Link href="https://twitter.com/hashtag/dacc?src=hashtag_click" target="_blank">#d/acc</Link>
    </LinkContainer>
    
    <IconContainer>
      <img src="/images/icon_twitter.png" alt="Menu" />
      <img src="/images/icon_hashtag.png" alt="Menu" />
    </IconContainer>
  </InspirationContainer>
);

export default Inspiration;
