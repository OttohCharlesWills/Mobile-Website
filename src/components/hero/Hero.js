import React from 'react';
import './Hero.css'

import Video from '../../assets/entranse.mp4'
import { GrSearch } from "react-icons/gr";

function Hero() {
    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src = {Video} type='video/mp4'/>
            </video>
            <div className='overlay'>
                <div className='content'>
                    <h1>Buy Gadgets Online</h1>
                    <h2>Buy And Order At Your Comfort Zone</h2>

                    <form className='form'>
                        <div><input type ='text' placeholder='Search Devices'/></div>
                        <div className='search'><GrSearch /></div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Hero;
