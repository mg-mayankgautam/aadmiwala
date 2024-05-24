import React from 'react'
import logo from '../../assets/logo.png'
import './Nav.css'

const Nav = () => {
  return (
    <div className='Nav'>
        <div>
            <a href="/"><img src={logo} className='navLogo'/></a>
        </div>
        <div className='navItems'>
            <div>Enterprise</div>
            <div> <a href="about">About Us</a></div>
            <div>Share Requirements</div>
            <div className='navItemBold'>+ Add Recruiting Company</div>
        </div>
        <div className='navBtns'>
            <button className='navSignupBtn'>Call Us</button>
            <button className='navLoginBtn'>Log In</button>
        </div>
    </div>
  )
}

export default Nav