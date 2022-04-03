import React from 'react';
import decoration from '../assets/Decoration.svg';
import peopleImg from '../assets/People.png';
import signature from '../assets/Signature.png';

function AboutUs(props) {
    return (
        <div className='aboutUs'>
            <div className='aboutUs-info'>
                <h3>O nas</h3>
                <img src={decoration} alt='decoration' />
                <p>
                Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.
                </p>
                <img className='signatureImg' src={signature} alt='signature' />
            </div>
            <div className='peopleImage'>
                <img src={peopleImg} alt='people' />
            </div>
        </div>
    );
}

export default AboutUs;