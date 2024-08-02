import React from 'react';
import './course.css'

import samsung from '../../assets/samsung.webp';
import iphone from '../../assets/iphone.webp';
import ipad from '../../assets/ipad.jpeg';
import bank from '../../assets/bank.jpeg';
import macbook from '../../assets/macbook.jpeg'

function Course () {
    return (
        <div name='courses' className='courses'>
            <div className='container'>
                <h1>Our Products</h1>
                <p>Explore In The Universe Of Gadgets</p>
                <div className='img-container'>
                    <img className='span-3 image-grid-row-2' src={samsung} alt='/'/>
                    <img src={iphone} alt='/'/>
                    <img src={ipad} alt='/'/>
                    <img src={bank} alt='/'/>
                    <img src={macbook} alt='/'/>
                </div>
            </div>
        </div>
    );
}

export default Course;
