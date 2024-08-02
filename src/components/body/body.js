import React from 'react';
import'./body.css'

function Body () {
    return (
        <div name='book' className='body'>
            <div className='container'>
                <div className='left'>
                    <h2>Buy Your Devices Here</h2>
                    <p>Buy and Order Quality and Affordable Gadgets for home and work use. We offer Gadegts to our customers at a affordable price which aids development to all and saves You the problem of stress and time.Work in your comfort zone without going through the problems. We all thank You all for visiting our company and we wish to collabrate with our customers for more effectiveness.
                        Don't Wait, Come Now to Get Devices at Cheap And Affordable Price, Also 2% PROMO Is Available
                    </p>
                    <div className='body-2'>
                        <div className='box'>
                            <div>
                                {/* <img src=''/> */}
                            </div>
                            <div>
                                <h2>Nigeria's Leading</h2>
                                <p>All Exclusive Company For Over 2 Days</p>
                            </div>
                        </div>
                        <div className='box'>
                            <div>
                                <h3>I Don't Know</h3>
                                <p>Tell Me Wat To Do</p>
                                <button>Veiw Packages</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='right'>
                    <div className='promo'>
                        <h4 className='save'>GET AN ADDICTIONAL 2% PROMO</h4>
                        <p className='timer'>24 HOURS LEFT</p>
                        <p className='offers'>VEIW ALL CONTENT OFFERS</p>
                    </div>
                    <form>
                       <div className='input-wrap'>
                       <label>.......................</label>
                        <select>
                            <option value='1'>Wakaish</option>
                            <option value='1'>Wakaish</option>
                            <option value='1'>Wakaish</option>
                            <option value='1'>Wakaish</option>
                            <option value='1'>Wakaish</option>
                            <option value='1'>Wakaish</option>
                            <option value='1'>Wakaish</option>
                        </select>
                       </div>
                       <div className='date'>
                            <div className='input-wrap'>
                                <label>..................</label>
                                <input type='date'/>
                            </div>
                            <div className='input-wrap'>
                                <label>..................</label>
                                <input type='date'/>
                            </div>
                       </div>
                       <button>Rates & Availibilty</button>
                    </form>
                </div>
            </div>
            
        </div>
    );
}

export default Body;
