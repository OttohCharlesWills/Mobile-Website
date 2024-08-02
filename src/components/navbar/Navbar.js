import React, {useState} from 'react';
import { BiSearch } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import {FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube} from 'react-icons/fa'

import { Link } from "react-scroll";
import './navbar.css'

function Navbar () {
    const [nav, setNav] = useState(false);
    const handleNav = () => setNav(!nav)
    return (
        <div name='home' className={nav ? 'navbar navbar-color' : 'navbar'} >
            <div className='logo'>
                <h2>GadNoc</h2>
            </div>
            <ul className='nav-menu'>
                <Link to='home' smooth={true} duration={500}><li>Home</li></Link>
                <Link to='courses' smooth={true} duration={500}><li>Buy & Order</li></Link>
                <Link to='views' smooth={true} duration={500}><li>Devices</li></Link>
                <Link to='body' smooth={true} duration={500}><li>community</li></Link>
                <Link to='slideshow' smooth={true} duration={500}><li>FAQ'S</li></Link>
            </ul>
            <div className='nav-icons'>
                <BiSearch className = 'icon'/>
                <BsPerson className = 'icon'/>
            </div>
            <div className='attempt' onClick={handleNav}>
                {!nav ? (<button className='icon'>&#9776;</button>) : (<button className='icon'>&times;</button>)}
                
            </div>
            <div className= {nav ? 'mobile-menu active' : 'mobile-menu'}>
                <ul className='mobile-nav'>
                <Link to='home' smooth={true} duration={500}><li>Home</li></Link>
                <Link to='courses' smooth={true} duration={500}><li>Buy & Order</li></Link>
                <Link to='views' smooth={true} duration={500}><li>Devices</li></Link>
                <Link to='book' smooth={true} duration={500}><li>community</li></Link>
                <Link to='slideshow' smooth={true} duration={500}><li>FAQ'S</li></Link>
                
                </ul>
                <div className='mobile-menu-button'>
                    <div className='menu-icons'>
                        <button>Search</button>
                        <button>Account</button>
                    </div>
                    <div className="social-icons">
                        <FaFacebook className ='icon'/>
                        <FaTwitter className ='icon'/>
                        <FaInstagram className ='icon'/>
                        <FaPinterest className ='icon'/>
                        <FaYoutube className ='icon'/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar


