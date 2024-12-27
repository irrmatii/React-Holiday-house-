import React from 'react';
import './Hero.css'
import {HashLink as Link} from "react-router-hash-link";

const Hero = () => {
    return (
        <div className="hero container" id="Hero">
            <div className="hero-text">
                <h1><span>Escape to the forest.</span> Where peace meets adventure, and your perfect getaway awaits among the trees.
                </h1>
                <button className="btn">
                    <Link to='#Prices' smooth={true} offset={0} duration={500}>Explore more</Link>
                </button>
            </div>
        </div>
    )
}

export default Hero;



