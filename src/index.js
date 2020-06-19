/* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { AppContainer } from 'react-hot-loader';
import App from './components/App';
import './styles/styles.scss';
require('./favicon.ico');

render(
    <Router>
        <AppContainer>
            <App />
        </AppContainer>
    </Router>,
    document.getElementById('appRoot')
);

if (module.hot) {
    module.hot.accept('./components/App', () => {
        const NewApp = require('./components/App').default;
        render(
            <Router>
                <AppContainer>
                    <NewApp />
                </AppContainer>
            </Router>,
            document.getElementById('appRoot')
        );
    });
}