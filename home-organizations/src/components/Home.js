import React from 'react';
import { Link } from 'react-scroll';
import ThreeColumns from './ThreeColumns';
import SimpleSteps from './SimpleSteps';
import AboutUs from './AboutUs';
import WhoWeHelp from './WhoWeHelp';
import Contact from './Contact';
import decoration from '../assets/Decoration.svg';
import homeImg from '../assets/Home-Hero-Image.jpg';




function Home(props) {
    return (
        <>
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
        <section>
            <SimpleSteps />
        </section>
        <section>
            <AboutUs />
        </section>
        <section>
            <WhoWeHelp />
        </section>
        <section>
            <Contact />
        </section>

        </>
        
        
        
    );
}

export default Home;