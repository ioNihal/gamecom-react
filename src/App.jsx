import React from 'react';
import MainBody from './components/MainBody.jsx';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  
  body {
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100%;
    color: rgb(78, 78, 78);
    background-color: rgb(8, 8, 8);
  }
`;


function App() {
  return (
    <>
      <GlobalStyle />
      <MainBody />
    </>
  );
}

export default App;
