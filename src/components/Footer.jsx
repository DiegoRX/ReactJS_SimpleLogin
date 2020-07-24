import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
     <footer className='footer'>
        <a href='/'>Términos de uso</a>
        <a href='/'>Declaración de privacidad</a>
        <a href='/'>Centro de ayuda</a>
      </footer>
    );
  }
}

export default Footer;