import React from 'react'
import logo from '../../assets/logo.png'
import './Nav.css'

const Nav = () => {
  return (
    <div className='Nav'>
        <div>
            <img src={logo} className='navLogo'/>
        </div>
        <div className='navItems'>
            <div>Industries</div>
            <div>Enterprise</div>
            <div>About Us</div>
            <div className='navItemBold'>+ Add Recruiting Company</div>
        </div>
        <div className='navBtns'>
            <button className='navLoginBtn'>Log In</button>
            <button className='navSignupBtn'>Sign Up</button>
        </div>
    </div>
  )
}

export default Nav