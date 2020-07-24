import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/simple-logo.png';

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <div className='header-container'>
          {/* <figure className='header-img'>
            <Link to='/'><img src={logo} alt='logo' /></Link>
          </figure> */}
          {/* <nav className='header-menu' id='menu'>
            <ul>
              <li><a href='/'>Registrate</a></li>
            </ul>
          </nav> */}
        </div>
      </div>
    );
  }
}

export default Header;
