import React from 'react';
import decoration from '../assets/Decoration.svg';
import tshirtImg from '../assets/IconTshirt.png';
import bagImg from '../assets/IconBag.png';
import magnifireImg from '../assets/IconMagnifier.png';
import arraysImg from '../assets/IconArrays.png';

function SimpleSteps(props) {
    return (
        <div className='simpleSteps'>
            <div className='simpleStep-top'>
                <h2>Wystarczaja 4 proste kroki</h2>
                <img src={decoration} alt='decoration' />
            </div>
            <div className='simpleStep-parts'>
                <div className='simplestep-icons'>
                    <img src={tshirtImg} alt='icon' />
                    <h2>Wybierz rzeczy</h2>
                    <hr></hr>
                    <p>Ubrania, zabawki, <br/> sprzet i inne</p>
                </div>
                <div className='simplestep-icons'>
                    <img src={bagImg} alt='icon' />
                    <h2>Spakuj je</h2>
                    <hr></hr>
                    <p>Skorzystaj z <br/> workow na smieci</p>
                </div>
                <div className='simplestep-icons'>
                    <img src={magnifireImg} alt='icon' />
                    <h2>Zdecyduj komu <br /> chcesz pomoc</h2>
                    <hr></hr>
                    <p>Wybierz zaufane <br/> miejsce</p>
                </div>
                <div className='simplestep-icons'>
                    <img src={arraysImg} alt='icon' />
                    <h2>Zamow kuriera</h2>
                    <hr></hr>
                    <p>Kurier przyjedzie <br/> w dogodnym terminie</p>
                </div>
            </div>
            <button>Oddaj <br /> rzeczy</button>
            
        </div>
    );
}

export default SimpleSteps;