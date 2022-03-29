import React from 'react';
import { Link } from 'react-scroll';
import ThreeColumns from './ThreeColumns';
import decoration from '../assets/Decoration.svg';
import homeImg from '../assets/Home-Hero-Image.jpg';




function Home(props) {
    return (
        <>
        <nav>
            <div className='header-menu'>
            <ul>
                <li><Link activeClass="active" to="home">Start</Link> </li>
                <li><Link to="service">O co chodzi?</Link> </li>
                <li><Link to="about">O nas</Link> </li>
                <li><Link to="organizations">Fundacja i organizacje</Link> </li>
                <li><Link to="contact">Kontakt</Link> </li>
            </ul>
            </div>
        </nav>
        <div className='container-home'>
            <div className='img-hero-home img'>
                <img src={homeImg} alt="" />
            </div>
            <div className='text-home'>
                <h2>Zacznij pomagać! </h2>
                <h2>Oddaj niechciane rzeczy w zaufane ręce</h2>
                <div>
                    <img src={decoration} alt='Decoration'/>
                </div>
                <div className='btn-home'>
                    <button>Oddaj <br/> rzeczy</button>
                    <button>Zorganizuj <br/> zborke</button>
                </div>
                
            </div>
        </div>
        <section>
            <ThreeColumns />
        </section>
        </>
        
        
        
    );
}

export default Home;