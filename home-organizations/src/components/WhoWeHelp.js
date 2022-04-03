import React from 'react';
import decoration from '../assets/Decoration.svg';

function WhoWeHelp(props) {
    return (
        <>
        <div className='helpInfo'>
            <div className='helpInfo1'>
                <h2>Komu pomagamy?</h2>
                <img src={decoration} alt="decoration" />
            </div>
            <div className='helpInfo2'>
                <button>Fundacjom</button>
                <button>Organizacja <br /> pozarzadowym</button>
                <button>Lokalnym <br />zbiorkom</button>
            </div>
            <h3>
            W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
            </h3>
            
        </div>
        <div className='helpInfoBotoom'>
            <div className='helpInfo-detales'>
                <h3>Fundacja: "Dbam o zdrowie"</h3>
                <p>ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
            </div>
            <h4>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</h4>
            <hr></hr>
            <div className='helpInfo-detales'>
                <h3>Fundacja “Dla dzieci”</h3>
                <p>ubrania, meble, zabawki</p>
            </div>
            <h4>Cel i misja: Pomoc dzieciom z ubogich rodzin.</h4>
            <hr></hr>
            <div className='helpInfo-detales'>
                <h3>Fundacja “Bez domu”</h3>
                <p>ubrania, jedzenie, ciepłe koce</p>
            </div>
            <h4>Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</h4>
        </div>
        <div className='btn-numbers'>
            <button className='btns'>1</button>
            <button className='btns'>2</button>
            <button className='btns'>3</button>
        </div>
        </>
    );
}

export default WhoWeHelp;