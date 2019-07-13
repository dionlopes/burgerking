import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';
import Routes from './routes';
import { Content } from './styles/content';
import Header from './components/Header';
import Menu from './components/Menu';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Content>
        <Routes />
        <Menu />
      </Content>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
