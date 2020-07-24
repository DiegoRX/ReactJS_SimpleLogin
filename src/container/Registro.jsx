import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/simple-logo.png';

class Registro extends Component {
  render() {
    return (
        <section className='login'>
            <section className='login__container'>
                <img src={logo} alt='logo' />
                <h2>Registro</h2>
                <form className='login__container--form'>
                <input 
                        // name='email'
                        className='input'
                        // type='email'
                        placeholder='Correo'
                        // onChange={handleInput}
                        // required                    
                    />
                    <input 
                        // name='name'
                        className='input'
                        // type='name'
                        placeholder='Nombre'
                        // onChange={handleInput}
                        // required                    
                    />
                    <input 
                        // name='password'
                        className='input'
                        // type='password'
                        placeholder='Contraseña'
                        // onChange={handleInput}
                        // required
                    />
                    <label htmlFor='acepto'>
                        <input type='checkbox' placeholder='Acepto' id='acepto' name='acepto' required />
                        Terminos y condiciones
                    </label>
                <button className='button'>Registrarme</button>
                </form>
                <p className='login__container--register'>Ya tienes cuenta <Link to='/'>Inicia sesión</Link></p>
            </section>
        </section>
    );
  }
}

export default Registro;
