import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* Reset some default styles */
  body, h1, h2, h3, p, div {
    margin: 0;
    padding: 0;
    font-family: 'Satoshi Variable', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Apply the fonts globally */
  body {
    font-family: 'Satoshi Variable', sans-serif;
    
  }

  /* Apply the fonts for Chinese characters */
  h1, h2, h3, p, div {
    font-family: 'Satoshi Variable', sans-serif;
  }

  /* Add @font-face for Satoshi Variable */
  @font-face {
  font-family: 'Satoshi Variable';
  src: url('Satoshi-Variable.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
`;

export default GlobalStyle;
