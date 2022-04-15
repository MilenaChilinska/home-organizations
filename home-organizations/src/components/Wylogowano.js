import React from 'react';
import { Link } from 'react-scroll';


function Wylogowano(props) {
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
            
        </div>
    );
}

export default Wylogowano;