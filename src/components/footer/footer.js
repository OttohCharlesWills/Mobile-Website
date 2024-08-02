import React from 'react';
import './footer.css'

import {FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube} from 'react-icons/fa'


function Footer (){
    return (
        <div className='footer'>
            <div className="container">
                <div className="top">
                    <h3>GadNoc</h3>
                    <div className="social">
                        <FaFacebook className ='icon'/>
                        <FaTwitter className ='icon'/>
                        <FaInstagram className ='icon'/>
                        <FaPinterest className ='icon'/>
                        <FaYoutube className ='icon'/>
                    </div>
                </div>
                <div className="bottom">
                    <div className="left">
                        <ul>
                            <li>About Us</li>
                            <li>Partnership</li>
                            <li>Jobs</li>
                            <li>View Products</li>
                            <li>Advertising</li>
                        </ul>
                    </div>
                    <div className="right">
                        <ul>
                            <li>Contact</li>
                            <li>Pricing</li>
                            <li>Privacy</li>
                            <li>Terms And Conditions</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
