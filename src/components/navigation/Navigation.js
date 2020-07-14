import React from 'react';
import PropTypes from "prop-types";
import { NavLink } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import './Navigation.scss';
// Since this component is simple and static, there's no parent container for it.
const Navigation = ({ menuOpen, linkCallback }) => {
  const activeStyle = { opacity: 1 };
  const navLinks = [
    { to: '/', name: 'Home' },
    { to: '/fuel-savings', name: 'Fuel Savings' },
    { to: '/about', name: 'About' },
  ]
  return (
    <CSSTransition in={menuOpen} timeout={200} classNames="navigation__menu">
      <nav id='navigation__menu' role='navigation' aria-label='Collapsable navigation menu'>
        <ul>
          {navLinks.map(({ to, name }) => (
            <li key={`${name}${to}`}>
              <NavLink className='navLink' exact to={to} activeStyle={activeStyle} onClick={linkCallback}>{name}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </CSSTransition>
  );
};

Navigation.propTypes = {
  menuOpen: PropTypes.bool,
  linkCallback: PropTypes.func
};

export default Navigation;
