import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import logo from '../images/logo.png';

class Registro extends Component {
  render() {
    return (
        <section className='login'>
            <section className='login__container'>
                <h2>Inicia sesión</h2>
                <form className='login__container--form'>
                    <input className='input' type='text' placeholder='Correo' />
                    <input className='input' type='password' placeholder='Contraseña' />
                <button className='button'>Iniciar sesión</button>
                <div className='login__container--remember-me'>
                    <label>
                        <input type='checkbox' name='' id='cbox1' value='checkbos' />Recuérdame
                    </label>
                    <a href='/'>Olvidé mi contraseña</a>
                </div>
                </form>
                <section className='login__container--social-media'>
                    <div><img src='./assets/google-icon.png' alt='Google' />Inicia sesión con Google</div>
                    <div><img src='./assets/twitter-icon.png' alt='Twitter' />Inicia sesión con Twitter</div>
                </section>
                <p className='login__container--register'>No tienes ninguna cuenta <Link to='/'>Regístrate</Link></p>
            </section>
        </section>
    );
  }
}

export default Registro;
