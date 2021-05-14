import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --background: #F5F8FA;
    --blue: #115D8C;
    --orange: #F25D27;
    --title: #123952;
    --text: #617480;
    --light-text: #A0ACB3;
    --low-blue: #DDE9F0;

    --exclude: #DE3838;
    --green: #51B853;
  }

  @media(max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media(max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
    color: var(--text);
  }

  body, input, textarea, button {
    font: 400 1rem 'Heebo', sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;