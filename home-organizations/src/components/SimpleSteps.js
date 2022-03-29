import React from 'react';
import decoration from '../assets/Decoration.svg';

function SimpleSteps(props) {
    return (
        <div className='simpleSteps'>
            <div className='simpleStep-top'>
                <h2>Wystarczaja 4 proste kroki</h2>
                <img src={decoration} alt='decoration' />
            </div>
            <div className='simpleStep-steps'>

            </div>
            <button>Oddaj rzeczy</button>
            
        </div>
    );
}

export default SimpleSteps;