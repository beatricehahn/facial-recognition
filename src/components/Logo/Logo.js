import React from 'react';
import Tilt from 'react-parallax-tilt';
import face from './icons8-concerned-face-96.png';
import './Logo.css';

const Logo = () => {
    return (
        <div className='outerDiv ma4 mt0'>
            <Tilt className="br2 shadow-2">
                <div className=" innerDiv">
                    <img className="faceLogo" src={face}/>
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;