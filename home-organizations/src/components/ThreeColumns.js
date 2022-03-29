import React from 'react';
import threeColumns from '../assets/3-columns-background.png'
function ThreeColumns(props) {
    return (
        <div className='threeColumns'>
            <img src={threeColumns} alt='' />
            <div className='columns'>
                <div className='column'>
                    <h2>10</h2>
                    <h3>Oddanych workow</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                </div>
                <div className='column'>
                    <h2>5</h2>
                    <h3>wspartych organizacji</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                </div>
                <div className='column'>
                    <h2>7</h2>
                    <h3>Zorganizowanych zbiorek</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                </div>
            </div>
            
        </div>
    );
}

export default ThreeColumns;