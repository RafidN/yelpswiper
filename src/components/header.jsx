import React from 'react'
import yelplogo from '../assets/yelplogo.png';

function Header() {
    return (
        <nav className='nav__links'>
            <div className="nav__links--left">
            <img src={yelplogo} alt="yelp-logo" className='nav__img'/>
            <a href="#" className='nav__links--home nav__link'>Home</a>
            </div>
            <div className="nav__links--right">
                <a href="#" className='nav__link'>Foodlist</a>
                <a href="#" className='nav__link'>Sign-in</a>
            </div>
        </nav>
    )
}

export default Header
