import React from 'react';
// import { BrowserRouter } from 'react-router-dom';

import Header from './Components/Header';
import GlobalStyle from './styles/GlobalStyles';

import Rotas from './routes';

function App() {
  // Login é um componente React criado em Pages/Login
  return (
    <>
      <Header />
      <Rotas />
      <GlobalStyle />
    </>
  );
}

export default App;
