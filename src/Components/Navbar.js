import React, {useState, useEffect} from 'react';
import './navbar.css';
import logo from './assets/Logo_House.png'
import {HashLink as Link} from "react-router-hash-link";


const Navbar = () => {

    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        })
    }, []);

    const [mobileMenu, setMobileMenu] = useState(false);

    function toggleMenu(){
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    }

    return (
        <nav className={`container ${sticky ? 'dark_nav' : ''}`}>
            <img className="logo" src={logo} alt=""/>
            <ul className={mobileMenu ? '': 'hide-mobile-menu'}>
                <li className="hover_line"><Link to='#Hero' smooth={true} offset={0} duration={500}>Home</Link></li>
                <li className="hover_line"><Link to='#AboutUs' smooth={true} offset={0} duration={500}>About us</Link></li>
                <li className="hover_line"><Link to='#Gallery' smooth={true} offset={0} duration={500}>Gallery</Link></li>
                <li className="hover_line"><Link to='#Prices' smooth={true} offset={0} duration={500}>Prices</Link></li>
                <li>
                    <Link to='#Reservation' smooth={true} offset={0} duration={500}>
                        <button className="btn">Reservation</button>
                    </Link>
                </li>
            </ul>
            <svg onClick={toggleMenu} className="menu" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24">
                <path fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M5 17h8m-8-5h14m-8-5h8"/>
            </svg>
        </nav>
    )
}

export default Navbar;