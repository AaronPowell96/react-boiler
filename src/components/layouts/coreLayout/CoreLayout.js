import React from 'react';
import PropTypes from "prop-types";
import Header from '../../header/Header'
import './CoreLayout.scss';

export default function CoreLayout(props) {
    return (
        <div className="coreLayout">
            <Header />
            <main>
                <div className="container">
                    {props.children}
                </div>
            </main>
            <div>Footer</div>
        </div>
    );
}

CoreLayout.propTypes = {
    children: PropTypes.element
};
