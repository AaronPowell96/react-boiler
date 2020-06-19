import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss'

// Since this component is simple and static, there's no parent container for it.
const Header = () => {
    const activeStyle = { color: 'blue' };
    return (
        <header>
            <div className='header__content'>
                <nav>
                    <NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink>
                    {' | '}
                    <NavLink to="/fuel-savings" activeStyle={activeStyle}>Demo App</NavLink>
                    {' | '}
                    <NavLink to="/about" activeStyle={activeStyle}>About</NavLink>
                </nav>
            </div>
        </header>
    );
};

export default Header;