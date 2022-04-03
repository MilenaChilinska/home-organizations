import React from 'react';
import contactImg from '../assets/Background-Contact-Form.jpg';
import decoration from '../assets/Decoration.svg';
import facebook from '../assets/Facebook.png';
import instagram from '../assets/Instagram.png';

function Contact(props) {
    return (
        <>
        <div className='contact'>
            <div className='contact-img'>
                <img src={contactImg} alt="contactImg" />
            </div>
            <div className='contact-top'>
                <h3>Skontaktuj sie z nami</h3>
                <img src={decoration} alt="decoration" />
            
                <form className='contact-form'>
                <input type='text' className='nameInput' placeholder='Wpisz swoje imie'/>
                <input type='email' placeholder='Wpisz swoj email'/>
                <textarea placeholder='Wpisz swoja wiadomosc' />
                </form>
                <button>Wyslij</button>
            </div>
        </div>
        <footer>
            <div className='footer'>
                <div>
                    <p>
                Copyright by Coders Lab
                    </p>
                </div>
                <div className='footer-imgs'>
                    <img src={facebook} alt='facebook' />
                    <img src={instagram} alt='instagram' />
                </div>
            </div>
        </footer>
        
        </>
    );
}

export default Contact;