/* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { AppContainer } from 'react-hot-loader';
import App from './App';
import './styles/styles.scss';
import ScrollToTop from './containers/providers/scrollToTop/ScrollToTop'
require('./favicon.ico');

render(
  <Router>
    <ScrollToTop />
    <AppContainer>
      <App />
    </AppContainer>
  </Router>,
  document.getElementById('appRoot')
);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NewApp = require('./App').default;
    render(
      <Router>
        <ScrollToTop />
        <AppContainer>
          <NewApp />
        </AppContainer>
      </Router>,
      document.getElementById('appRoot')
    );
  });
}
