import React from 'react';
import PropTypes from "prop-types";
import Header from '../../../components/header/Header'
import './CoreLayout.scss';
export default function CoreLayout(props) {
  return (
    <>
      <Header />
      <main className="container">
        {props.children}
      </main>
      <div className='footer'>Footer</div>
    </>
  );
}

CoreLayout.propTypes = {
  children: PropTypes.element
};
