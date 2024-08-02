import React from 'react';
import './select.css'

import jbl from '../../assets/jbl.jpeg'
import wet from '../../assets/wet.jpeg'
import ear from '../../assets/ear.jpeg'
import phone from '../../assets/phone.jpeg'
import lapbank from '../../assets/lapbank.jpeg'
import set from '../../assets/set.jpeg'

import Selectimg from '../selectimg/selectimg';

function Select (){
    return (
        <div name='views' className='select'>
            <div className='container'>
            <Selectimg bgImg={jbl} text="Bluetoth Speaker"/>
            <Selectimg bgImg={wet} text="Headset"/>
            <Selectimg bgImg={ear} text="Earpod"/>
            <Selectimg bgImg={phone} text="Android Device"/>
            <Selectimg bgImg={lapbank} text="Laptop Power-Bank"/>
            <Selectimg bgImg={set} text="Headset"/>
            </div>
        </div>
    );
}

export default Select;
