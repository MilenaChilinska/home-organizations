import React from 'react';
import { Link } from 'react-scroll';
import { Link as RouterLink } from "react-router-dom";
import decoration from '../assets/Decoration.svg';

function Rejestracja(props) {
    return (
        <div>
            <nav>
            <div className='header-menu'>
            <ul>
                <li><Link activeClass="home" to="home">Start</Link> </li>
                <li><Link to="simpleSteps">O co chodzi?</Link> </li>
                <li><Link to="aboutUs">O nas</Link> </li>
                <li><Link to="helpInfo">Fundacja i organizacje</Link> </li>
                <li><Link to="contact">Kontakt</Link> </li>
            </ul>
            </div>
        </nav>
        <div className='registration-container'>
        <div className='regestration-title'>
            <h2>Załóż konto</h2>
            <img src={decoration} alt='decoration' />
        </div>
        <div className='regestration-form'>
            <h3>Email</h3>
            <input type='email'/>
            <h3>Hasło</h3>
            <input type='password'/>
            <h3>Powtorz hasło</h3>
            <input type='password'/>
        </div>
        <div className='regestration-btns'>
            <button><RouterLink to="/logowanie">Zaloguj się</RouterLink></button>
            <button>Załóż konto</button>
        </div>
        </div>
        </div>
    );
}

export default Rejestracja;