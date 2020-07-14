/* eslint-disable import/no-named-as-default */
import Routes from './routes'
import PropTypes from "prop-types";
import React from "react";
import { hot } from "react-hot-loader";
import CoreLayout from './containers/layouts/coreLayout/CoreLayout'
// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {

    return (
      <CoreLayout>
        <Routes />
      </CoreLayout>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default hot(module)(App);
