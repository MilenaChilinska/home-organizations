import React from 'react';
import { Link } from 'react-scroll';
import { Link as RouterLink } from "react-router-dom";
import decoration from '../assets/Decoration.svg';


function Logowanie(props) {
    return (
        <div>
            <nav>
            <div className='header-menu'>
            <ul>
                <li><RouterLink className='text-link ' to="/">Start</RouterLink > </li>
                <li><Link to="simpleSteps">O co chodzi?</Link> </li>
                <li><Link to="aboutUs">O nas</Link> </li>
                <li><Link to="helpInfo">Fundacja i organizacje</Link> </li>
                <li><Link to="contact">Kontakt</Link> </li>
            </ul>
            </div>
        </nav>
        <div className='login-container'>
        <div className='login-title'>
            <h2>Zaloguj się</h2>
            <img src={decoration} alt='decoration' />
        </div>
        <div className='login-form'>
            <h3>Email</h3>
            <input type='email'/>
            <h3>Hasło</h3>
            <input type='password'/>
        </div>
        <div className='login-btns'>
            <button>
                <RouterLink className='text-link'  to="/rejestracja">Załóż konto</RouterLink>
            </button>
            <button>Zaloguj się</button>
        </div>
        </div>
        </div>
    );
}

export default Logowanie;