import React from 'react';
import './slideshow.css'

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import wet from '../../assets/wet.jpeg';
import speak from '../../assets/speak.jpeg';
import pod from '../../assets/pod.jpeg';

function Slideshow (){
    return (
        <div name='slideshow' className='container'>
            <Carousel className='slideshow' showArrow = {true} autoPlay={true} infiniteLoop={true}>
                <div>
                    <img src={wet} alt='/'/>
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src={speak} alt='/'/>
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img src={pod} alt='/'/>
                    {/* <p className="legend">Legend 3</p> */}
                </div>
            </Carousel>
        </div>
    );
}

export default Slideshow;
