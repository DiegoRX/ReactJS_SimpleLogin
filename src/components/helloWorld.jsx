import React, { Component } from 'react';
import '../assets/styles/app.scss';
import logo from '../images/simple-logo.png';

class HelloWorld extends Component {
    render() {
    return (
        <div className='simple-title'>
            <h1>El primero de muchos logros. Así de</h1>
            <div className='simple-img'>
                <img src={logo} alt='logo' />
            </div>
        </div>
    );
  }
}

export default HelloWorld;
