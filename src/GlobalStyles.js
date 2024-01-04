import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  /* Reset some default styles */
  body, h1, h2, h3, p, div {
    
    margin: 0;
    padding: 0;

  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',monospace;
  }


  /* Import fonts from Google Fonts */
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Noto+Sans+TC:wght@400;700&display=swap');

  /* Apply the fonts globally */
  body {
    font-family: 'Roboto', sans-serif; /* 英數字體 Roboto */

  }

  /* Apply the fonts for Chinese characters */
  h1, h2, h3, p, div {
    font-family: '思源黑體', 'Microsoft JhengHei', sans-serif; /* 中文字體 思源黑體 */
  }




`;


export default GlobalStyle;
