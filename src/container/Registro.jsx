import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/simple-logo.png';
import { createUserRegister } from '../services/firebase/auth.js';

const Registro = (props) => {
    const [form, setValues] = useState({
      email: '',
      password: '',
    });
  
    const handleInput = (event) => {
      setValues({
        ...form,
        [event.target.name]: event.target.value,
      });
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      createUserRegister(form.email, form.password);
      props.history.push('/landingPage');
    };
    return (
        <section className='login'>
            <section className='login__container'>
                <img src={logo} alt='logo' />
                <h2>Registro</h2>
                <form onSubmit={handleSubmit} className='login__container--form'>
                <input 
                        name='email'
                        className='input'
                        type='email'
                        placeholder='Correo'
                        onChange={handleInput}
                        required
                                         
                    />
                    <input 
                        name='password'
                        className='input'
                        type='password'
                        placeholder='Contraseña'
                        onChange={handleInput}
                        required
                        minLength='6'
                    />
                    <label htmlFor='acepto'>
                        <input type='checkbox' placeholder='Acepto' id='acepto' name='acepto' required />
                        Terminos y condiciones
                    </label>
                <button type='submit' className='button'>Registrarme</button>
                </form>
                <p className='login__container--register'>Ya tienes cuenta <Link to='/'>Inicia sesión</Link></p>
            </section>
        </section>
    );
  };

export default Registro;
