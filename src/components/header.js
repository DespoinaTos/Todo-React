import React from 'react';
import logo from './img/monkey.svg';

const Header = function(props) {

    return(
        <header className='logo'>
                <img src={logo} alt="logo"/>
        </header>
    );

}

export default Header;