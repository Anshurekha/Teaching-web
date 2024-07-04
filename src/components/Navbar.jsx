import React, { useState } from 'react';
import { FaFacebookSquare, FaInstagram, FaYoutube,FaBars } from 'react-icons/fa';
import './style.css';
import { Link } from 'react-router-dom';
import About from './About';
import photo from './images/photo.png';

const Navbar = () => {
    const[showMenu,SetShowMenu]=useState(false);
    const handlleToggleMenu=()=>{
        SetShowMenu(!showMenu);
    }
    return (
        <nav className='navbar'>
            <div className='logo'>
                <img src={photo} alt="" />
                <span>B</span>rainiacs
                <span>I</span>ns
            </div>
            <ul className={`nav-links ${showMenu ? 'show' : ''}`}>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/About'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
                <li><Link to='/login'>Login</Link></li>
            </ul>
            <div className={`social-icons ${showMenu ? 'show' : ''}`}>
                <a href='https://www.facebook.com/'><FaFacebookSquare style={{ color: '#3b5998' }} /></a>
                <a href='https://www.instagram.com/'><FaInstagram style={{ color: '#c32aa3' }} /></a>
                <a href='https://www.youtube.com/'><FaYoutube style={{ color: '#ff0000' }} /></a>
            </div>
            <div className='hamburger-menu' onClick={handlleToggleMenu}><FaBars/></div>
        </nav>
    );
};

export default Navbar;
